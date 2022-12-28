// splash screen Function
const logo = document.querySelectorAll( '#logo path');

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
    
}

window.addEventListener("DOMContentLoaded",()=>{
    const splach = document.getElementById('splach');

    setTimeout(()=>{
         splach.classList.add('splashDisapire')
         console.log('hii')
    },8000)
})

// made codes

const url=`https://api.github.com/users/jubayerrahman`
const data = fetch(url)
        .then ((response)=> response.json())
        .then ((data)=> {
            console.log(data)
            document.getElementById('userName').innerHTML= data.name;
            document.getElementById('login').innerHTML = "@"+data.login;
            document.getElementById('bio').innerHTML = data.bio;
            document.getElementById('publicRepo').innerHTML = data.public_repos
            document.getElementById('followersnum').innerHTML = data.followers
            document.getElementById('followingNum').innerHTML = data.following
            document.getElementById('location').innerHTML = data.location;
            document.getElementById('bioLink').href = data.blog;
            document.getElementById('bioLink').innerText = data.blog;
            // twitter
            if(data.twitter_username === null){
                document.getElementById('twitterIcon').style.fill = "gray"
                document.getElementById('twitterLink').style.color = "gray"
                document.getElementById('twitterLink').href = "#"
                document.getElementById('twitterLink').innerText = "Not available"
            }
            else{
                document.getElementById('twitterIcon').style.fill = "white"
                document.getElementById('twitterLink').style.color = "white"
                document.getElementById('twitterLink').href = data.twitter_username
                document.getElementById('twitterLink').innerText = data.twitter_username
            }
            //company
            if(data.company === null){
                document.getElementById('companyLink').innerHTML ="None"
            }
            else{
                document.getElementById('companyLink').innerHTML = data.company
            }
            // githubLink
            document.getElementById('githubLink').href = data.html_url
            document.getElementById('githubLink').innerHTML = data.html_url
            //joined
            const joinDate = data.created_at.split('T')[0]
            const joinDate2 = joinDate.split('-')
            const joinday = joinDate2[2]
            const months =['Jan','Feb','Mar','Apr','May','June',"Jul",'Aug','sep','Oct','Nov','Dec']
            const joinmonth = parseFloat(joinDate2[1])
            const joinYear = joinDate2[0]
            const joinFinal =joinYear+" "+ months[joinmonth]+" "+ joinday
            document.getElementById('join1').innerHTML= joinFinal
            document.getElementById('join2').innerHTML= joinFinal
        })


const modebutton = document.getElementById('modebutton').addEventListener('click',()=>{
    document.getElementById('modebutton').style.display="none"
    document.getElementById('modebutton1').style.display="flex"
    document.getElementById('modebutton1').style.backgroundColor="rgb(246,248,255)"
    document.getElementById('body').style.backgroundColor="rgb(246,248,255)"
    document.getElementById('title').style.color="rgb(20,29,47)"
    document.getElementById('searchSection').style.backgroundColor="rgb(254,254,254)"
    document.getElementById('searchSection').style.boxShadow="5px 5px 20px  rgb(30,42,71)"
    document.getElementById('search').style.backgroundColor="transparent"
    document.getElementById('search').style.color="rgb(30,42,71)"
    document.getElementById('resultSection').style.backgroundColor="rgb(254,254,254)"
    document.getElementById('resultSection').style.boxShadow="5px 5px 20px  rgb(30,42,71)"
    document.getElementById('works').style.backgroundColor="rgb(246,248,255)"
    document.getElementById('userName').style.color="rgb(20,29,47)"
    document.getElementById('joined').style.color="rgb(105,124,154)"
    document.getElementById('joined1').style.color="rgb(105,124,154)"
    document.getElementById('bio').style.color="rgb(105,124,154)"
    document.getElementById('repos').style.color="rgb(105,124,154)"
    document.getElementById('followers').style.color="rgb(105,124,154)"
    document.getElementById('following').style.color="rgb(105,124,154)"
    document.getElementById('locIcon').style.fill="rgb(105,124,154)"
    document.getElementById('blogIcon').style.fill="rgb(105,124,154)"
    document.getElementById('twitterIcon').style.fill="rgb(105,124,154)"
    document.getElementById('companyIcon').style.fill="rgb(105,124,154)"
    document.getElementById('location').style.color="rgb(105,124,154)"
    document.getElementById('bioLink').style.color="rgb(105,124,154)"
    document.getElementById('twitterLink').style.color="rgb(105,124,154)"
    document.getElementById('companyLink').style.color="rgb(105,124,154)"
    document.getElementById('githubIcon').style.fill="rgb(105,124,154)"
    document.getElementById('githubLink').style.color="rgb(105,124,154)"

})
const modebutton1 = document.getElementById('modebutton1').addEventListener('click',()=>{
    document.getElementById('modebutton').style.display="flex"
    document.getElementById('modebutton1').style.display="none"
    document.getElementById('modebutton').style.backgroundColor="rgb(20,29,47)"
    document.getElementById('body').style.backgroundColor="rgb(20,29,47)"
    document.getElementById('title').style.color="rgb(246,248,255)"
    document.getElementById('searchSection').style.backgroundColor="rgb(30,42,71)"
    document.getElementById('searchSection').style.boxShadow="none"
    document.getElementById('search').style.color="white"
    document.getElementById('resultSection').style.backgroundColor="rgb(30,42,71)"
    document.getElementById('resultSection').style.boxShadow="none"
    document.getElementById('works').style.backgroundColor="rgb(20,29,47)"
    document.getElementById('userName').style.color="white"
    document.getElementById('joined').style.color="white"
    document.getElementById('joined1').style.color="white"
    document.getElementById('bio').style.color="white"
    document.getElementById('repos').style.color="white"
    document.getElementById('followers').style.color="white"
    document.getElementById('following').style.color="white"
    document.getElementById('locIcon').style.fill="white"
    document.getElementById('blogIcon').style.fill="white"
    document.getElementById('twitterIcon').style.fill="white"
    document.getElementById('companyIcon').style.fill="white"
    document.getElementById('location').style.color="white"
    document.getElementById('bioLink').style.color="white"
    document.getElementById('twitterLink').style.color="white"
    document.getElementById('companyLink').style.color="white"
    document.getElementById('githubIcon').style.fill="white"
    document.getElementById('githubLink').style.color="white"
})


//search function

const searchButton = document.getElementById('searchButton').addEventListener('click',()=>{
    console.log('Hii Search clicked')
    const search = document.getElementById('search').value
    console.log(search)
    
        const url=`https://api.github.com/users/${search}`
        console.log(url)
        
        const data = fetch(url)
        .then ((response)=> response.json())
        .then ((data)=> {console.log(data)
            if(data.message ==="Not Found"){
                document.getElementById('errorText').classList.add('errorText1');
            }
            else{
                document.getElementById('errorText').classList.remove('errorText1');
                // user Image
                const userImg = document.getElementById('userImg')
                const userImg1 = document.getElementById('userImg1')
                userImg.src = data.avatar_url;
                userImg1.src = data.avatar_url;
                // name Function
                if(data.name==null){
                    document.getElementById('userName').innerHTML ="No Name Available"
                }
                else{
                    document.getElementById('userName').innerHTML= data.name;
                }
                // user Name fuction
                if(data.login===null){
                    document.getElementById('login').innerHTML = "No user Name Available"
                }
                else{
                document.getElementById('login').innerHTML = "@"+data.login;
                }
                // bio
                if(data.bio===null){
                    document.getElementById('bio').innerHTML = ""
                }
                else{
                    document.getElementById('bio').innerHTML = data.bio
                }
                // work num 
                document.getElementById('publicRepo').innerHTML = data.public_repos
                document.getElementById('followersnum').innerHTML = data.followers
                document.getElementById('followingNum').innerHTML = data.following
                //location
                if(data.location===null){
                    document.getElementById('locIcon').style.fill = "gray"
                    document.getElementById('location').style.color = "gray"
                    document.getElementById('location').innerHTML = "No location Available"
                }
                else{
                    document.getElementById('locIcon').style.fill = "white"
                    document.getElementById('location').style.color = "white"
                    document.getElementById('location').innerHTML = data.location;
                }
                // blog
                if(data.blog===""){
                    document.getElementById('blogIcon').style.fill = "gray"
                    document.getElementById('bioLink').style.color = "gray"
                    document.getElementById('bioLink').href = "#"
                    document.getElementById('bioLink').innerText = "Not available"
                }
                else{
                    document.getElementById('blogIcon').style.fill = "white"
                    document.getElementById('bioLink').style.color = "white"
                    document.getElementById('bioLink').href = data.blog
                    document.getElementById('bioLink').innerText = data.blog
                }
                // twitter
                if(data.twitter_username === null){
                    document.getElementById('twitterIcon').style.fill = "gray"
                    document.getElementById('twitterLink').style.color = "gray"
                    document.getElementById('twitterLink').href = "#"
                    document.getElementById('twitterLink').innerText = "Not available"
                }
                else{
                    document.getElementById('twitterIcon').style.fill = "white"
                    document.getElementById('twitterLink').style.color = "white"
                    document.getElementById('twitterLink').href = data.twitter_username
                    document.getElementById('twitterLink').innerText = data.twitter_username
                }
                //company
                if(data.company === null){
                    document.getElementById('companyLink').innerHTML ="None"
                }
                else{
                    document.getElementById('companyLink').innerHTML = data.company
                }
                // githubLink
                document.getElementById('githubLink').href = data.html_url
                document.getElementById('githubLink').innerHTML = data.html_url
                //joined
                const joinDate = data.created_at.split('T')[0]
                const joinDate2 = joinDate.split('-')
                const joinday = joinDate2[2]
                const months =['Jan','Feb','Mar','Apr','May','June',"Jul",'Aug','sep','Oct','Nov','Dec']
                const joinmonth = parseFloat(joinDate2[1])
                const joinYear = joinDate2[0]
                const joinFinal =joinYear+" "+ months[joinmonth]+" "+ joinday
                document.getElementById('join1').innerHTML= joinFinal
                document.getElementById('join2').innerHTML= joinFinal
            }
        })
        
})

document.addEventListener('keypress',(event)=>{
    
    if(event.key==='Enter'){
        const search = document.getElementById('search').value
    console.log(search)
    
        const url=`https://api.github.com/users/${search}`
        console.log(url)
        
        const data = fetch(url)
        .then ((response)=> response.json())
        .then ((data)=> {console.log(data)
            if(data.message ==="Not Found"){
                document.getElementById('errorText').classList.add('errorText1');
            }
            else{
                document.getElementById('errorText').classList.remove('errorText1');
                // user Image
                const userImg = document.getElementById('userImg')
                const userImg1 = document.getElementById('userImg1')
                userImg.src = data.avatar_url;
                userImg1.src = data.avatar_url;
                // name Function
                if(data.name==null){
                    document.getElementById('userName').innerHTML ="No Name Available"
                }
                else{
                    document.getElementById('userName').innerHTML= data.name;
                }
                // user Name fuction
                if(data.login===null){
                    document.getElementById('login').innerHTML = "No user Name Available"
                }
                else{
                document.getElementById('login').innerHTML = "@"+data.login;
                }
                // bio
                if(data.bio===null){
                    document.getElementById('bio').innerHTML = ""
                }
                else{
                    document.getElementById('bio').innerHTML = data.bio
                }
                // work num 
                document.getElementById('publicRepo').innerHTML = data.public_repos
                document.getElementById('followersnum').innerHTML = data.followers
                document.getElementById('followingNum').innerHTML = data.following
                //location
                if(data.location===null){
                    document.getElementById('locIcon').style.fill = "gray"
                    document.getElementById('location').style.color = "gray"
                    document.getElementById('location').innerHTML = "No location Available"
                }
                else{
                    document.getElementById('locIcon').style.fill = "white"
                    document.getElementById('location').style.color = "white"
                    document.getElementById('location').innerHTML = data.location;
                }
                // blog
                if(data.blog===""){
                    document.getElementById('blogIcon').style.fill = "gray"
                    document.getElementById('bioLink').style.color = "gray"
                    document.getElementById('bioLink').href = "#"
                    document.getElementById('bioLink').innerText = "Not available"
                }
                else{
                    document.getElementById('blogIcon').style.fill = "white"
                    document.getElementById('bioLink').style.color = "white"
                    document.getElementById('bioLink').href = data.blog
                    document.getElementById('bioLink').innerText = data.blog
                }
                // twitter
                if(data.twitter_username === null){
                    document.getElementById('twitterIcon').style.fill = "gray"
                    document.getElementById('twitterLink').style.color = "gray"
                    document.getElementById('twitterLink').href = "#"
                    document.getElementById('twitterLink').innerText = "Not available"
                }
                else{
                    document.getElementById('twitterIcon').style.fill = "white"
                    document.getElementById('twitterLink').style.color = "white"
                    document.getElementById('twitterLink').href = data.twitter_username
                    document.getElementById('twitterLink').innerText = data.twitter_username
                }
                //company
                if(data.company === null){
                    document.getElementById('companyLink').innerHTML ="None"
                }
                else{
                    document.getElementById('companyLink').innerHTML = data.company
                }
                // githubLink
                document.getElementById('githubLink').href = data.html_url
                document.getElementById('githubLink').innerHTML = data.html_url
                //joined
                const joinDate = data.created_at.split('T')[0]
                const joinDate2 = joinDate.split('-')
                const joinday = joinDate2[2]
                const months =['Jan','Feb','Mar','Apr','May','June',"Jul",'Aug','sep','Oct','Nov','Dec']
                const joinmonth = parseFloat(joinDate2[1])
                const joinYear = joinDate2[0]
                const joinFinal =joinYear+" "+ months[joinmonth]+" "+ joinday
                document.getElementById('join1').innerHTML= joinFinal
                document.getElementById('join2').innerHTML= joinFinal
            }
        })
    }
})