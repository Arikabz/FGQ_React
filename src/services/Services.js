export async function getWeek(w) {
    try{
        const res = await fetch('http://localhost:6969/api/season/week/'+w)
        return await res.json();
    } catch (error){
        console.log(error)
    }
}
