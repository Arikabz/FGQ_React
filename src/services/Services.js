export async function getWeek(w) {
    try{
        const res = await fetch('http://localhost:6969/api/season/week/'+w)
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function updateSeason() {
    try{
        const res = await fetch('http://localhost:6969/api/season')
        return await res.json();
    } catch (error){
        console.log(error)
    }
}
export async function getCurrentWeek() {
    try{
        const res = await fetch('http://localhost:6969/api/currentWeek')
        return await res.json();
    } catch (error){
        console.log(error)
    }
}
