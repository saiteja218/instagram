
rposts=Math.floor(Math.random()*15)+5
rfollow=Math.floor(Math.random()*(1000-50))+50;
rfolower=Math.floor(Math.random()*(rfollow))+200;

document.querySelector('#poosts').innerHTML=rposts;
document.getElementById('followers').innerHTML=rfollow;
document.getElementById('following').innerHTML=rfolower;


fetch('https://randomuser.me/api').then(response=>{
    response.json().then(data=>{
        console.log(data)
        user=data["results"][0];
        console.log(user)
        document.getElementById('name').innerHTML=user.name.first+" "+user.name.last
        document.getElementById('userName').innerHTML=user.name.first;
        document.getElementById('profilePic').src=user.picture.medium;

        for(i=0;i<rposts;i++){
           imgg = document.createElement('img')
           imgg.src=`https://picsum.photos/20${i}`
           document.getElementsByClassName('posts')[0].append(imgg);
        }

    })
})