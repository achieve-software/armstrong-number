// N haneli bir sayının basamaklarının n'inci üstlerinin toplamı, sayının kendisine eşitse, böyle sayılara Armstrong sayı denir.
//Örneğin 407 sayısını ele alalım. (4^3)+ (0^3)+(7^3) = 64+0+343 = 407 sonucunu verir.

let sayi = prompt("sayi gir");
let toplam = 0;
for (let i = 0; i < sayi.length; i++) {
  let rakam = sayi.charAt(i);
  toplam += rakam * rakam * rakam;
}
if (Number(sayi) == toplam) {
  console.log("Armstong");
} else {
  console.log("Not Armstrong");
}
