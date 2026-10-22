import river from "./images/river.png"
import river_hud from "./images/river_normal.png"
import river_scary_hud from "./images/river_scary.png"
function BelleviewBoys(){
  return(
    <div>
    <h1>what is belleview boys?</h1>
    <p>Date Written: 20/10/2026</p>
    <p>Last Updated: 21/10/2026</p>
    <h2>summary</h2>
    <p>
      Belleview Boys is an upcoming turn based role-playing game set in the western world during the early 2010's.
      It features a crew of 4 new hires working at a police department working together on cases in hopes of getting a promotion.

      <figure>
      "No amount of cheering from successful operations and elaborate celebrations will change that, except for one condition.
      They must be promoted. This coveted social indication is better than money to new blood. It is power. The love of power begets the cycle."
      <figcaption>Belleview Boys (Alex "keyiev" A., 2026)</figcaption>
      </figure>
    </p>

    <h1>characters</h1>
    <h2>River Murphy</h2>
    <p>River Murphy is a 20 year old who has a strong conviction to protect those around him. 
       He is laid-back and likes to spend his free time alone, where he sews or plays the bass guitar. 
       He does not like thinking about the future and finds planning difficult.
       River is unsure if this job is a right fit for him, even though he has a great time working on the field. His dream is to become a fashion designer.</p>
    <h3>Combat</h3>
      <p>River fights using a hand pistol. He can target land and aerial monsters.</p>
      
    <h4>Basic Attack</h4>
      <p>When his gun is used two times in a row, his third shot is a guaranteed critical hit.</p>

    <h4>Special</h4>
      <p>Bullet Fury - Shoots 5 times in a row, with each consecutive shot decreasing in power.</p>
    <figure>
      <img src={river} height={420} width={300} alt="river murphy"/>
      <img src={river_hud} height={200} width={200} alt="river hud"/>
      <img src={river_scary_hud} height={200} width={200} alt="river scary hud"/>
      <figcaption>Concept Art From Left to Right: Everyday Clothes, Battle HUD, Tainted Battle HUD</figcaption>
    </figure>
  </div>

);
}

export default BelleviewBoys