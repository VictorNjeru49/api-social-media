const htags = document.querySelectorAll('h1, h3, h4');
const tips = document.querySelectorAll('.persons, .tips');
const vcards = document.querySelectorAll('.facebook, .twitter, .instagram, .youtube');
const icons = document.querySelectorAll('#facebook-likes, #facebook-views, #instagram-likes, #instagram-views, #retweets, #twitter-likes, #youtube-likes, #total-views');
document.getElementById('toggleCheckbox').addEventListener('change', function() {
    // Add your logic here when the toggle button state changes
    if (this.checked) {
      // Checkbox is checked
      console.log('click checkbox');

      htags.forEach(tag=> {
        tag.style.color = '#000000';
      });
      document.body.style.background="white";

      vcards.forEach(vcard=> {
        vcard.style.background = '#ffffff';
      });

      icons.forEach(icon=> {
        icon.style.background = 'rgb(204 214 217)';
      });

      tips.forEach(tip=> {
        tip.style.color = 'black';
      });


    } else {
      // Checkbox is unchecked
      console.log('uncheck checkbox');
      
      htags.forEach(tag=> {
        tag.style.color = '#ffffff';
      });
      document.body.style.background="#1e1f29"

      vcards.forEach(vcard=> {
        vcard.style.background = '#252a41';
      });

      icons.forEach(icon=> {
        icon.style.background = '#252a41';
      });

      tips.forEach(tip=> {
        tip.style.color = 'white';
      });
    }


   
   
  });
  

  const fetchData=()=> {
    fetch('http://localhost:3000/socialMediaMetrics')
   .then(res=>res.json())
   .then(data=> {

    const fb =document.getElementById('facebook');
    const fbfollow = data.facebook.followers;
    fb.innerHTML=fbfollow;


    const tw =document.getElementById('twitter');
    const twfollow = data.twitter.followers;
    tw.innerHTML=twfollow;


    const ins =document.getElementById('instagram');
    const insfollow = data.instagram.followers;
    ins.innerHTML=insfollow;


    const ytb =document.getElementById('youtube');
    const ytbfollow = data.youtube.followers;
    ytb.innerHTML=ytbfollow;

    const fbviews =document.getElementById('fbviews');
    const fbviewfollow = data.facebook.pageViews;
    fbviews.innerHTML=fbviewfollow;

    const fblikes =document.getElementById('fblikes');
    const fblikesfollow = data.facebook.likes;
    fblikes.innerHTML=fblikesfollow;

    const instalikes =document.getElementById('instalikes');
    const instalikesfollow = data.instagram.likes;
    instalikes.innerHTML=instalikesfollow;

    const instaviews =document.getElementById('instaviews');
    const instaviewsfollow = data.instagram.pageViews;
    instaviews.innerHTML=instaviewsfollow;


    const twsviews =document.getElementById('retweetviews');
    const twsviewsfollow = data.twitter.pageViews;
    twsviews.innerHTML=twsviewsfollow;

    const twslikes =document.getElementById('retweetlikes');
    const twslikesfollow = data.twitter.likes;
    twslikes.innerHTML=twslikesfollow;


    const ytblikes =document.getElementById('youlikes');
    const ytblikesfollow = data.youtube.likes;
    ytblikes.innerHTML=ytblikesfollow;

    const ytbviews =document.getElementById('totalviews');
    const ytbviewsfollow = data.youtube.pageViews;
    ytbviews.innerHTML=ytbviewsfollow;

  })
}
fetchData();


