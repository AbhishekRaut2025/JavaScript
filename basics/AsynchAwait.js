async function abcd(){
    let raw = await fetch('https://randomuser.me/api/');
    let ans = await raw.json();
    console.log(ans);
}
abcd();