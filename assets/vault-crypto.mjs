// Formato RUTA1: cabecera (5 bytes), salt PBKDF2 (16), IV GCM (12), ciphertext + tag.
export const ITERATIONS=600000;
const MAGIC=new TextEncoder().encode('RUTA1');
async function key(password,salt){
 const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);
 return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:ITERATIONS,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
}
export async function encrypt(bytes,password){
 const salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12));
 const data=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:MAGIC},await key(password,salt),bytes));
 const out=new Uint8Array(33+data.length);out.set(MAGIC);out.set(salt,5);out.set(iv,21);out.set(data,33);return out;
}
export async function decrypt(input,password){
 const b=new Uint8Array(input);if(b.length<49||!MAGIC.every((v,i)=>b[i]===v))throw Error('Formato cifrado no reconocido');
 return new Uint8Array(await crypto.subtle.decrypt({name:'AES-GCM',iv:b.slice(21,33),additionalData:MAGIC},await key(password,b.slice(5,21)),b.slice(33)));
}
