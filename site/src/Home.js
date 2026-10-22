import fall from './images/fall.jpg'
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
      <header>
        <h1 className='title'>personal blog </h1>
        <img id='fall' src={fall} alt={fall} width={200} height={200}/><br/><br/>
        <p id="about">
          hi guys, my name is alex.
          i wanted a space to talk a lot, share my growth and cool things i am up to. 
        </p>
        <br/><br/><br/><br/>

        <h2>recent posts</h2>
        <nav>
          <Link to="/belleview">Working on Belleview Boys</Link>
        </nav>

        <h2>favorite things</h2>
        <div id="favorite">
          <img src={amphy} alt={amphy} width={100} height={100}/>
          <img src={mud} alt={mud} width={100} height={100}/>
          <img src={starly} alt={starly} width={70} height={70}/>
          <img src={typh} alt={typh} width={100} height={100}/>
          <img src={burger} alt={burger} width={100} height={100}/>
          <img src={naoto} alt={naoto} width={100} height={100}/>
          <img src={rise} alt={rise} width={100} height={100}/>
          <p>from left to right: ampharos, mudkip, starly, typhlosion, quarter pounder with cheese (plain), naoto from persona 4 and rise from persona 4</p>
        </div>
        <h2>personality</h2>
        <p>
          i am introverted, but i do enjoy talking to people. i love people, everyone is fun. i am pretty reserved and opening up is not something i do often. 
          it does not come natural to me, although i would be more comfortable with the idea if i know someone well. i like to joke around a lot and i do make myself laugh. i think i can be pretty funny and have ZERO SHAME admitting that. 
          i can act overly confident sometimes, partially because i believe in myself and i think its funny. i tell people what i think, but sometimes it can come across as mean. i know when i am being intentionally being mean so if I say I am not trying to be, have some faith in me pls lol.
          here are some personality traits i find relatable: adaptable, analytical, skeptical, domineering, boastful (in a funny way), curious, decisive, efficient, generous, genuine, independent, irritable, resourceful, team player, loyal, motivated, open-minded, practical, reserved, impulsive, critical and supportive.
          i love helping others, especially if they show they want to do better. i like creating good memories and talking about the past. i dont really think about the past often, but nostalgia is a strong emotion to me so sometimes i will talk about memories from the past. i would love to talk about my memories if i tell you about them, they mean a lot to me.
          i find comfort in listening to VGM or old EDM music, eating my favorite food or watching anime or youtube.
          i am pretty good with my hands and ocassionally will fix electronics or troubleshoot them for my family. it feels cool being able to fix things now that i am older since i would always see my dad fix stuff with his toolbox.
          i enjoy planning a lot and have a bunch of notes and obsidian files related to plans, although a bit hard to execute sometimes.
          i think about the future since it grounds me in a way, i try not to be in the present so much unless I am doing something that warrants that attention. i daydream a lot about 
          positivity and warmth, a hopeful future for myself where my dreams come true.
          MBTI: INTJ
        </p>

        <h2>communication</h2>
        <p>
          i am typically straightforward and direct unless i am "monologuing" or "infodumping". 
          i take what people say literally and sometimes have a hard time understanding jokes or if someone is being serious. 
          i think my personality comes out more when I am not being serious haha.
          i enjoy talking about anything, but some of my favourite topics are: ethics, cognitive psychology, news, culture, food, stories that happened to you or someone you know, programming, pokemon and persona. i like discussing how these topics
          have an impact on other things in the world, what it means to me or society at large and its importance. i just like talking.
          i am not conflict avoidant and would like it to be resolved in a reasonable time to well and understand what actions are being taken to resolve it. save time and ensure all parties are content with the resolution.
          i believe unresolved conflicts lead to issues later, so it is best if they are fixed "now". 
          i enjoy learning about people and asking questions so I like others doing the same with me.
        </p>

        <h2>interests</h2>

        <h3>video gam</h3>
        <p>
        for video games I enjoy a lot of jrpgs with turn based combat. some of those are pokemon, persona and final fantasty. my favorite
        pokemon games are pokemon pearl, pokemon white 2 and soul silver. pokemon is my favorite game and i have a lot of good memories with it.
        growing up i played gta vice city, minecraft, pokemon, smash on the wii, common mobile games like subway surfers and temple run lol, a bunch of flash games
        on sites like y8, coolmathgames, miniclip, and that one with the weird looking green monster thing with red horns. poptropica, electric man and super crazy guitar maniac deluxe 3
        and the papas series (really liked wingeria and burgeria) were my favorite flash games. i enjoyed playing csgo in high school but stopped after 10th grade. played league for a couple years
        but stopped cause dude its so dogshit i dont know why i played for so long. an underrated game genre would be boxing. screw "Sports" just "Boxing" and only "Boxing" that shit is fun af
        </p>

        <h3>music</h3>
        <p>
          i love rock music. any kind of rock music......... shoegaze, indie, hardcore, punk, alt, math rock, emo, nu metal, jrock, crock dooont care all good to me. 
          think its just cause guitar is my favorite instrument of all time. sometimes it is so beautiful it can mimic crying similar to the violin.
          i would recommend listening to the cabs. they do not have any bad songs and you will have a good time with that even if its not your taste.
          grew up playing instruments and i have an electric guitar and alto sax. am i good? well.. good at playing by ear cause im too unmotivated
          to learn songs. 
        </p>

        <h3>programming</h3>
        <p>
          one of the best things in the world. anything you think of can be made. just like this dumbass blog you are reading...
          fav thing to do with this is make games. its how i learned it even for school stuff, none of that crap made sense early on until i related it to games for some reason.
          not a huge fan of making websites and avoided web programming for my own stuff. but i think its really good if someone is into it.
          most things are communicated over the web so it's a great skill to have if you do enjoy it.
          its kinda funny when i first started out i was like wtf is a function but now... now im here.. locked and loaded ready to go.........
          i guess i havent actually talked much about programming, but uhh its fun yeah. once you know the basics u can code in any language even assembly.
          im not sure what else to add ^_^ formally my major (comp sci) but took a little break to get a cert in order to sustain myself
        </p>

        <h3>art</h3>
        <p>
          its always something i wanted to get better at. so i kinda semi took a little seriously as of late.
          sometimes i can get a bit obsessive over my work; refining it over and over and over.... not necessarily in a perfectionist sense, but i firmly believe anything i do can be improved.
          when i was younger i liked making landscapes and drawing buildings. now i mostly just draw characters.
        </p>

        <h3>cooking</h3>
        <p>i cooka da meatball. im actually really good at whipping stuff up and in another life i would have been a chef. pretty experimental with cooking and do not measure cause i already know what it's gonna taste like and i know exactly how much stuff to add.
          think a lot of things i do are "adding this will balance out this", "this ingredient compliments this or intensifies it", "this can be reduced to x flavor so substituting it will not change much". if that makes any sense.
          its not really something to mull over though i guess. i take great pride in what i do cause i do a great job. maybe one day ill post food pics or somethin'
        </p>

        <h3>mbti and psychology</h3>
        <p>
          i am very active on mbti threads where i will often comment on something to share my opinion. thats pretty much the only reason why i like commenting lol.
          but mbti is really cool cause its a nice tool for people to think about themselves more or put things into words. since i cant really describe myself or my feelings well, i find it pretty helpful.
          but yeah pretty into it, although its not law of course. i think its interesting to know what different personalities people have and what they share in common with others.
          i enjoy psychology because i am really interested in how people think. knowing how someone thinks is important for me because it is how i can understand them better and also connect with them.
          its why i tend to ask a lot of questions, usually reduced if i know someone well to the point i already know how they would think about something lol
        </p>

        <h3>pragmatic linguistics</h3>
        <p>
          i find it really interesting because i find communication fascinating but also wholesome. idk if ill ever shut up about it if i start, but its also my blog.
          people come together with their own opinions, emotions, lexicon, current understanding of semantics behind words and their own internal context of the conversation and people involved. in a context where
          identities are anonymous, the context for who the person is and their "identity" in regards to communication is missing. we have our own biases and judgements to fill the gap of what type of person
          they are and respond accordingly. something i have seen increasingly over time online is the amount of disrespect people would say to a random person they have not seen before, brought by the algorithm. have we generally come to a conclusion that people online do not matter?
          if they do not matter, is it simply because we dont know them? or do we not bear "real-life" consequences. well, gossiping is a thing and plenty of people talk negatively about others they do not know and have not interacted with.
          if we look at "real-life consequences", most will assume it is simply because we can not see the effect of the consequence therefore it does not impact me and does not exist [in my life].
          every action has a consequence, but that judgement of an online identity not being a concern is a false belief. 
          "i think this person does not have any value". when confronted with this idea, the same people disrespecting a random are likely to push back on it.
          is it because its a harsh judgement and they view themselves as a good person? is it because they dont know the person and feel as if they can not make that claim?
          is it because its too serious? often we are distracted by the other participant(s) to really consider how we are viewing the participant(s) when we communicate in an online context.
          what emotions do you displace onto the other person? what are you not willing to admit to yourself? all very interesting things to think about.

          i think this was important to talk about, seeing as this is an online blog. i hope you see why i find this interesting.
        </p>
        </header>
    </div>
  );
}

export default Home;