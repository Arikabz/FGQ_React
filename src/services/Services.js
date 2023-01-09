export async function getWeek(w, token) {
    try{
        const res = await fetch('http://localhost:6969/api/season/week/'+w,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function getUserInfo(email) {
    try{
        const res = await fetch(`http://localhost:6969/api/user/${email}`)
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function updateSeason(token) {
    try{
        const res = await fetch('http://localhost:6969/api/season',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}
export async function getCurrentWeek(token) {
    try{
        const res = await fetch('http://localhost:6969/api/currentWeek',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        )
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

export async function checkUserAndRegister (email, userName, token) {
    try{
        const res = await fetch(`http://localhost:6969/user/checkAndRegister`,
            {
                headers: {
                    'Content-Type': 'Application/Json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    userName: userName,
                })
            },
        )
        return res.json();
    } catch (error){
        console.log(error)
    }
}
