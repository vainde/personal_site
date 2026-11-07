import pfp from './images/pfp.jpg'
import amphy from './images/amphy.gif'
import mud from './images/mud.gif'
import starly from './images/starly.gif'
import typh from './images/typh.gif'
import burger from './images/quarter_pounder.JPG'
import naoto from './images/naoto.png'
import rise from './images/rise.jpg'
import {Link} from 'react-router-dom'

function Home(){
  return(
    <div className='App'>
        <div id='header-container'>
          <header>
            <div id='header-title'>
              <h1 className='title'>Alex's Blog</h1>
            </div>
            <div id='header-info'>
              <img id='fall' src={pfp} alt={pfp} width={200} height={200}/>
              <p>
                Alex<br/>
                <b className='stat'>LVL</b> 22<br/>
                <b className='stat'>BIRTH</b> April 1<br/>
                <b className='stat'>OCC</b> Student<br/>
                <b className='stat'>ATK</b>  650<br/>
                <b className='stat'>DEF</b> 320<br/>
                <b className='stat'>SPD</b> 400<br/>
              </p>
            </div>
          </header>
        </div>

        <div id='last-updated-container'>
          <div id='last-updated-text'>
            <h2>Last Updated</h2>
            <p>07/11/2026</p>
          </div>
          <div id='recent-posts'>
            <h2>Recent Posts</h2>
            <nav>
              <Link to="/belleview">Working on Belleview Boys</Link>
            </nav>
          </div>
        </div>

        <h2>Favorite Things</h2>
        <div id="favorite">
          <img src={amphy} alt={amphy} width={100} height={100}/>
          <img src={mud} alt={mud} width={100} height={100}/>
          <img src={starly} alt={starly} width={70} height={70}/>
          <img src={typh} alt={typh} width={100} height={100}/>
          <img src={burger} alt={burger} width={100} height={100}/>
          <img src={naoto} alt={naoto} width={100} height={100}/>
          <img src={rise} alt={rise} width={100} height={100}/>
          <p>From left to right: ampharos, mudkip, starly, typhlosion, quarter pounder with cheese (plain), naoto from persona 4 and rise from persona 4</p>
        </div>
        <h2>Personality</h2>
        <p>
          My personality type is an INTJ. I am introverted, but I do enjoy talking to people. I am pretty reserved and opening up is not something I do often. 
          it does not come natural to me, but I would be more comfortable with the idea if I know someone well. I like to joke around a lot and i do make myself laugh. I make myself laugh a lot.
          I can act overly confident sometimes, partially because I believe in myself and I think its funny.
          Here are some personality traits I find relatable: adaptable, analytical, skeptical, domineering, boastful (in a funny way), curious, decisive, efficient, generous, genuine, independent, irritable, resourceful, team player, loyal, motivated, open-minded, practical, reserved, impulsive, critical and supportive.
        </p>

        <p>
          I love helping others, especially if they show they want to do better. I like creating good memories and talking about the past. i dont really think about the past often, but nostalgia is a strong emotion to me so sometimes i will talk about memories from the past. 
          I would love to talk about my memories if i tell you about them, they mean a lot to me. 
          I think about the future since it grounds me in a way. 
        </p>

        <h2>Communication</h2>
        <p>
          I am straightforward and direct unless I am "monologuing" or "infodumping". 
          I take what people say literally and sometimes have a hard time understanding jokes, or if someone is being serious. 
          I enjoy talking about anything, but some of my favourite topics are: ethics, cognitive psychology, news, culture, food, stories that happened to you or someone you know and my interests.
          I like to talk about how things have an impact on other stuff, what it means to me or society at large and its importance. 
          I am not conflict avoidant. If there is a conflict I think it should be resolved in a reasonable amount of time. 
          I enjoy learning about people and asking questions, so I like others doing the same with me.
        </p>

        <h2>Interests</h2>

        <h3>Video Games</h3>
        <p>
        I enjoy a lot of JRPGs with turn based combat like pokemon, persona and final fantasty. Pokemon is my favorite game.
        Growing up I played pokemon, GTA with my older brother, poptropica, minecraft, mobile games, some stuff on the wii and flash games.
        During high school I have played league of legends, CSGO and overwatch.
        I stopped playing league of legends cause dude its so dogshit, I dont know why I played for so long.
        </p>

        <h3>Music</h3>
        <p>
          I love rock music. Any kind of rock music... shoegaze, indie, hardcore, punk, alt, math rock, emo, nu metal, jrock, crock dooont care all good to me. 
          think its just cause guitar is my favorite instrument of all time. Sometimes it is so beautiful it can mimic crying, similar to the violin.
          I would recommend listening to the cabs, Nuito, mass of the fermenting dregs and veltpunch for jrock. 
          I have an electric guitar and alto sax which I occasionally will play by ear.
        </p>

        <h3>Programming</h3>
        <p>
          Programming is one of the best things in the world. Anything you think of can be made... Just like this dumbass blog you are reading.
          My favorite thing to do with this is make games. Its how I learned it even for school stuff, none of that crap made sense early on until I related it to games for some reason.
          Web programming is really good if someone is into it since most things are communicated over the web.
          It's kind of funny when I first started out I was like wtf is a function but now... now im here.. locked and loaded ready to go.........
          Once you know the basics u can code in any language, even assembly. I am majoring in computer science, but took a little break.
        </p>

        <h3>Art</h3>
        <p>
          Art is always something I have always wanted to get better at, so I kind of took it a little seriously as of late.
          Sometimes I can get a bit obsessive over my work; refining it over and over and over.
          When I was younger, I liked making landscapes and drawing buildings. Now I mostly just draw characters.
        </p>

        <h3>Cooking</h3>
        <p>I cooka da meatball. I am actually really good at whipping stuff up, and in another life i would have been a chef. I am experimental with cooking and do not measure. I have full confidence that I already know what it's gonna taste like and I know exactly how much stuff to add.
          My main thought process with cooking is "adding this will balance out this", "this ingredient compliments this or intensifies it", "this can be reduced to x flavor so substituting it will not change much".
          I take great pride in what I do because I do a great job. Maybe one day ill post food pics or somethin'
        </p>

        <h3>MBTI and Psychology</h3>
        <p>
          I am very active on MBTI threads where I will often comment on something to share my opinion. 
          MBTI is really cool because it's a nice low-pressure tool for people to think about themselves more. I am someone who cant really describe my feelings, so I find it pretty helpful seeing that it has the 'right words'.
          I think it is interesting to know what different personalities people have, so I tend to ask people what theirs are.<br/><br/>
          I enjoy psychology because I am really interested in how people think. Knowing how someone thinks is important for me because it is how I can understand them better and also connect with them.
          It is why I tend to ask a lot of questions. Although it tends to be reduced if I know someone well to the point where I already know how they would think or respond.
        </p>

        <h3>Pragmatic Linguistics</h3>
        <p>
          I find pragmatic linguistics really interesting because communication is fascinating and also wholesome. I don't know if I will ever shut up about this if I start, but its also my blog.
          People come together with their own opinions, emotions, lexicon, current understanding of semantics behind words, and their own internal context of the conversation and people involved. In a context where
          identities are anonymous, the context for who the person is and their "identity" in regards to communication is missing. We have our own biases and judgements to fill the gap of what type of person
          they are and respond accordingly.
        </p>
          <p>
          Something i have seen increasingly over time online is the amount of disrespect people would have to a random person, brought to them by the algorithm. Have we generally come to a conclusion that people online do not matter?
          If they do not matter, is it simply because we dont know them? Or do we not bear "real-life" consequences. Well, plenty of people talk negatively about others they do not know and have not interacted with.
          If we look at "real-life consequences", most will assume it is simply because we can not see the effect of the consequence, therefore it does not impact me and does not exist [in my life].
          </p>

          <p>
          Every action has a consequence, but that judgement of an online identity not being a concern is a false belief. 
          "i think this person does not have any value". When confronted with this idea, the same people disrespecting a random are likely to push back on it.
          Is it because its a harsh judgement and they view themselves as a good person? is it because they dont know the person and feel as if they can not make that claim?
          Is it because its too serious? What emotions do you displace onto the other person? What are you not willing to admit to yourself? <p/>
          </p>
    </div>
  );
}

export default Home;