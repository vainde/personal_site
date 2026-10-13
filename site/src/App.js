import './App.css';
import fall from './fall.jpg'
import amphy from './amphy.gif'
import mud from './mud.gif'
import starly from './starly.gif'
import typh from './typh.gif'
import burger from './quarter_pounder.JPG'
import naoto from './naoto.png'
import rise from './rise.jpg'

function App() {
  return (
    <div className='App'>
      <header>
        <h1 className='title'>personal blog </h1>
        <img id='fall' src={fall} alt={fall} width={200} height={200}/><br/><br/>
        <p id="about">
          hi guys, my name is alex.
          i wanted a space to talk a lot, share my growth and cool things i am up to. 
        </p>
        <br/><br/><br/><br/>

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

        <h2>mind, body and soul</h2>
        <p>
        this is a journey I am going on to take care of these three factors in my life. i set 3 goals for the month and have at it basically.
        i wont say what it is now, id rather update at the end of the month.
        </p>
        </header>
    </div>
  );
}

export default App;
