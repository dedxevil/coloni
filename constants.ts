import { ThemePack } from './types';

const CONSISTENCY_PROMPT =
  'Maintain their core facial features, ethnicity, and characteristics to ensure it is recognizably the same person. The style should be photorealistic unless specified otherwise.';

export const THEME_PACK_COST = 50;
export const DOWNLOAD_COST = 50;

export const THEME_PACKS: ThemePack[] = [
  {
    title: 'Ages',
    description: 'See yourself at different stages of life, from a child to your golden years.',
    items: [
      { label: '5 Years Old', prompt: `Transform the person in the image to look like they are 5 years old. ${CONSISTENCY_PROMPT}` },
      { label: '15 Years Old', prompt: `Transform the person in the image to look like they are 15 years old. ${CONSISTENCY_PROMPT}` },
      { label: '25 Years Old', prompt: `Transform the person in the image to look like they are 25 years old. ${CONSISTENCY_PROMPT}` },
      { label: '50 Years Old', prompt: `Transform the person in the image to look like they are 50 years old. ${CONSISTENCY_PROMPT}` },
      { label: '80 Years Old', prompt: `Transform the person in the image to look like they are 80 years old. ${CONSISTENCY_PROMPT}` },
    ],
  },
  {
  title: 'Different Centuries',
  description: 'See yourself styled from medieval times to the modern age.',
  items: [
    { label: 'Medieval Knight (14th Century)', prompt: `Dress the person in 14th-century European knight armor with a castle background. ${CONSISTENCY_PROMPT}` },
    { label: 'Mughal Royal (16th Century)', prompt: `Transform the person into a Mughal royal with luxurious embroidered robes and jewelry. ${CONSISTENCY_PROMPT}` },
    { label: 'Victorian Era (19th Century)', prompt: `Style the person in Victorian-era clothing with classic top hats or gowns. ${CONSISTENCY_PROMPT}` },
    { label: '1920s Great Gatsby', prompt: `Dress the person in 1920s flapper/gangster style fashion with vintage vibes. ${CONSISTENCY_PROMPT}` },
    { label: '1980s Disco Look', prompt: `Style the person in flashy 1980s disco clothes with neon lights. ${CONSISTENCY_PROMPT}` },
  ],
},
{
  title: 'Different Haircuts',
  description: 'Experiment with bold and stylish hairstyles.',
  items: [
    { label: 'Buzz Cut', prompt: `Give the person a short buzz cut hairstyle. ${CONSISTENCY_PROMPT}` },
    { label: 'Long Wavy Hair', prompt: `Transform the person to have long, wavy, flowing hair. ${CONSISTENCY_PROMPT}` },
    { label: 'Mohawk', prompt: `Style the person with a punk-inspired mohawk haircut. ${CONSISTENCY_PROMPT}` },
    { label: 'Curly Afro', prompt: `Give the person a voluminous curly afro hairstyle. ${CONSISTENCY_PROMPT}` },
    { label: 'Undercut Fade', prompt: `Transform the person with a trendy undercut fade hairstyle. ${CONSISTENCY_PROMPT}` },
    { label: 'Classic Bob', prompt: `Style the person with a sleek, classic bob haircut. ${CONSISTENCY_PROMPT}` },
  ],
},
  {
    title: 'IPL Team Jerseys',
    description: 'Wear the jersey of your favorite Indian Premier League cricket team.',
    items: [
      { label: 'CSK Jersey', prompt: `Place the person from the image into a Chennai Super Kings (CSK) IPL cricket jersey. The background should be a generic cricket stadium. ${CONSISTENCY_PROMPT}` },
      { label: 'RCB Jersey', prompt: `Place the person from the image into a Royal Challengers Bengaluru (RCB) IPL cricket jersey. The background should be a generic cricket stadium. ${CONSISTENCY_PROMPT}` },
      { label: 'MI Jersey', prompt: `Place the person from the image into a Mumbai Indians (MI) IPL cricket jersey. The background should be a generic cricket stadium. ${CONSISTENCY_PROMPT}` },
      { label: 'KKR Jersey', prompt: `Place the person from the image into a Kolkata Knight Riders (KKR) IPL cricket jersey. The background should be a generic cricket stadium. ${CONSISTENCY_PROMPT}` },
    ],
  },
  {
    title: 'Marvel Superheroes',
    description: 'Become an iconic hero from the Marvel Universe.',
    items: [
      { label: 'Iron Man', prompt: `Transform the person in the image into Iron Man, wearing the iconic suit. ${CONSISTENCY_PROMPT}` },
      { label: 'Captain America', prompt: `Transform the person in the image into Captain America, holding the shield. ${CONSISTENCY_PROMPT}` },
      { label: 'Thor', prompt: `Transform the person in the image into Thor, God of Thunder, holding Mjolnir. ${CONSISTENCY_PROMPT}` },
      { label: 'Black Widow', prompt: `Transform the person in the image into Black Widow, in a tactical suit. ${CONSISTENCY_PROMPT}` },
    ],
  },
    {
    title: 'DC Superheroes',
    description: 'Step into the DC Universe as a legendary hero.',
    items: [
      { label: 'Superman', prompt: `Transform the person in the image into Superman, with the iconic 'S' shield on the chest. ${CONSISTENCY_PROMPT}` },
      { label: 'Batman', prompt: `Transform the person in the image into Batman, the dark knight of Gotham. ${CONSISTENCY_PROMPT}` },
      { label: 'Wonder Woman', prompt: `Transform the person in the image into Wonder Woman, with her tiara and armor. ${CONSISTENCY_PROMPT}` },
      { label: 'The Flash', prompt: `Transform the person in the image into The Flash, surrounded by speed force lightning. ${CONSISTENCY_PROMPT}` },
    ],
  },
  {
    title: 'Bollywood Legends',
    description: 'Become your favorite iconic characters from Bollywood cinema.',
    items: [
      { label: 'DDLJ Raj', prompt: `Recreate the person in the style of Shah Rukh Khan as Raj from Dilwale Dulhania Le Jayenge, with a mandolin in a mustard field. ${CONSISTENCY_PROMPT}` },
      { label: 'Pushpa', prompt: `Transform the person into the character Pushpa Raj from the movie Pushpa, with his signature look and attitude. ${CONSISTENCY_PROMPT}` },
      { label: 'Jawan SRK', prompt: `Style the person like Shah Rukh Khan's character from the movie Jawan, with a bald look and a tattoo. ${CONSISTENCY_PROMPT}` },
      { label: 'Sholay Jai/Veeru', prompt: `Place the person in a classic scene from the movie Sholay, styled like either Jai or Veeru on a motorcycle. ${CONSISTENCY_PROMPT}` },
    ],
  },
  {
    title: '90s Nostalgia',
    description: 'Travel back in time with a retro 90s aesthetic.',
    items: [
      { label: '90s Film Look', prompt: `Apply a retro 90s film photo filter to the image, with grainy texture and faded colors. ${CONSISTENCY_PROMPT}` },
      { label: 'Bollywood Poster', prompt: `Turn the image into a 90s Bollywood movie poster, with dramatic text and vibrant colors. ${CONSISTENCY_PROMPT}` },
      { label: 'Vintage Ad', prompt: `Style the image to look like a classic print advertisement from the 1990s in India. ${CONSISTENCY_PROMPT}` },
      { label: 'Retro Fashion', prompt: `Dress the person in iconic 90s fashion, like denim jackets and colorful windbreakers. ${CONSISTENCY_PROMPT}` },
    ],
  },
    {
    title: 'Indian Wedding Looks',
    description: 'See yourself in stunning traditional wedding attire from across India.',
    items: [
      { label: 'South Indian Look', prompt: `Dress the person in traditional South Indian wedding attire, with silk and gold jewelry. ${CONSISTENCY_PROMPT}` },
      { label: 'Rajasthani Royal', prompt: `Transform the person into a Rajasthani royal bride or groom, with opulent, colorful traditional clothing. ${CONSISTENCY_PROMPT}` },
      { label: 'Punjabi Wedding', prompt: `Style the person in vibrant Punjabi wedding clothes, like a lehenga or sherwani. ${CONSISTENCY_PROMPT}` },
      { label: 'Bengali Look', prompt: `Depict the person as a traditional Bengali bride or groom, with classic makeup and attire. ${CONSISTENCY_PROMPT}` },
    ],
  },
  {
    title: 'Cyberpunk Future',
    description: 'Step into a high-tech, neon-lit future as a cyberpunk character.',
    items: [
      { label: 'Neon Samurai', prompt: `Reimagine the person as a cyberpunk samurai in a neon-lit Tokyo street. ${CONSISTENCY_PROMPT}` },
      { label: 'AI Robot', prompt: `Convert the person into an advanced AI robot with subtle human features. ${CONSISTENCY_PROMPT}` },
      { label: 'Netrunner', prompt: `Depict the person as a netrunner with cybernetic implants, surrounded by holographic data. ${CONSISTENCY_PROMPT}` },
      { label: 'Street Mercenary', prompt: `Show the person as a gritty cyberpunk mercenary in a futuristic urban environment. ${CONSISTENCY_PROMPT}` },
    ],
  },
  {
    title: 'Studio Photoshoot',
    description: 'Professional studio portraits with various classic poses and lighting.',
    items: [
      { label: 'Confident Headshot', prompt: `Create a professional studio headshot of the person with a confident expression and dramatic lighting against a dark background. ${CONSISTENCY_PROMPT}` },
      { label: 'Candid Laughter', prompt: `Create a studio portrait of the person in a moment of candid laughter, with soft, warm lighting. ${CONSISTENCY_PROMPT}` },
      { label: 'Thoughtful Pose', prompt: `Create a studio portrait of the person in a thoughtful, classic pose, looking away from the camera with cinematic lighting. ${CONSISTENCY_PROMPT}` },
      { label: 'Power Pose', prompt: `Create a full-body studio shot of the person in a powerful stance, dressed in business attire. ${CONSISTENCY_PROMPT}` },
        { label: 'Editorial Fashion', prompt: `Create a high-fashion studio portrait of the person with bold styling, striking pose, and dramatic lighting. ${CONSISTENCY_PROMPT}` },
    { label: 'Soft Glow Portrait', prompt: `Create a dreamy studio portrait of the person with soft, glowing light and a slightly blurred background. ${CONSISTENCY_PROMPT}` },
    { label: 'Seated Elegance', prompt: `Create a studio portrait of the person seated gracefully on a chair with refined posture and moody lighting. ${CONSISTENCY_PROMPT}` },
    { label: 'Casual Candid', prompt: `Create a relaxed studio portrait of the person in casual wear, leaning naturally against a wall with soft lighting. ${CONSISTENCY_PROMPT}` },
    { label: 'Creative Silhouette', prompt: `Create a dramatic studio silhouette portrait of the person with a strong backlight, highlighting their outline. ${CONSISTENCY_PROMPT}` },
    { label: 'Motion Blur Effect', prompt: `Create an artistic studio shot of the person in motion, with a controlled blur effect and creative lighting. ${CONSISTENCY_PROMPT}` },
    { label: 'Smiling Close-Up', prompt: `Create a close-up studio portrait of the person smiling warmly with flattering soft light. ${CONSISTENCY_PROMPT}` },
    ],
  },
  {
  title: 'Saree Style Photoshoot',
  description: 'Elegant portraits featuring the person in traditional saree looks with various poses and lighting.',
  items: [
    { label: 'Kanjeevaram Saree', prompt: `Create a studio portrait of the person wearing a luxurious Kanjeevaram silk saree with rich borders and temple jewelry. ${CONSISTENCY_PROMPT}` },
    { label: 'Banarasi Saree', prompt: `Create a portrait of the person in an ornate Banarasi saree with golden zari work, styled with regal jewelry. ${CONSISTENCY_PROMPT}` },
    { label: 'Kerala Kasavu Saree', prompt: `Create a portrait of the person in a traditional white and gold Kasavu saree with jasmine flowers in hair. ${CONSISTENCY_PROMPT}` },
    { label: 'Bengali Draped Saree', prompt: `Create a studio portrait of the person in a Bengali-style draped saree with bold red border and traditional accessories. ${CONSISTENCY_PROMPT}` },
    { label: 'Mysore Silk Saree', prompt: `Create a portrait of the person in an elegant Mysore silk saree with minimal jewelry and graceful styling. ${CONSISTENCY_PROMPT}` },
    { label: 'Maharashtrian Nauvari', prompt: `Create a portrait of the person in a Maharashtrian Nauvari saree draped in dhoti style with traditional nath nose ring. ${CONSISTENCY_PROMPT}` },
    { label: 'Gujarati Style Saree', prompt: `Create a studio portrait of the person in a colorful Gujarati saree draped with pallu in the front. ${CONSISTENCY_PROMPT}` },
    { label: 'Modern Designer Saree', prompt: `Create a fashion-forward portrait of the person in a contemporary designer saree with unique cuts and styling. ${CONSISTENCY_PROMPT}` },
    { label: 'Party Wear Saree', prompt: `Create a glamorous studio portrait of the person in a shimmery georgette saree with fashionable accessories. ${CONSISTENCY_PROMPT}` },
    { label: 'Lehenga Saree Fusion', prompt: `Create a studio portrait of the person in a fusion lehenga saree style with modern draping and bold jewelry. ${CONSISTENCY_PROMPT}` },
  ],
},
{
  title: 'Chudidhar Style Photoshoot',
  description: 'Studio portraits showcasing the person in traditional chudidhar outfits with various poses and moods.',
  items: [
     { label: 'Cotton Casual Chudidhar', prompt: `Create a portrait of the person in a simple cotton chudidhar with printed patterns for a casual daytime look. ${CONSISTENCY_PROMPT}` },
    { label: 'Silk Party Chudidhar', prompt: `Create a portrait of the person in a silk chudidhar with embroidery and elegant dupatta styling. ${CONSISTENCY_PROMPT}` },
    { label: 'Anarkali Style', prompt: `Create a portrait of the person in a grand Anarkali-style chudidhar with flowing fabric and detailed design. ${CONSISTENCY_PROMPT}` },
    { label: 'Pakistani Long Kurta', prompt: `Create a portrait of the person in a Pakistani-style long kurta chudidhar with subtle embroidery. ${CONSISTENCY_PROMPT}` },
    { label: 'Punjabi Patiala', prompt: `Create a portrait of the person in a Punjabi-style Patiala chudidhar with heavy pleated salwar and vibrant dupatta. ${CONSISTENCY_PROMPT}` },
    { label: 'Straight-Cut Chudidhar', prompt: `Create a portrait of the person in a straight-cut chudidhar with minimal patterns and formal styling. ${CONSISTENCY_PROMPT}` },
    { label: 'High-Slit Designer', prompt: `Create a studio portrait of the person in a trendy high-slit designer chudidhar with modern accessories. ${CONSISTENCY_PROMPT}` },
    { label: 'Floor-Length Chudidhar', prompt: `Create a portrait of the person in a floor-length gown-style chudidhar with heavy embroidery. ${CONSISTENCY_PROMPT}` },
    { label: 'Printed Cotton Daily Wear', prompt: `Create a casual studio portrait of the person in a lightweight printed cotton chudidhar with simple styling. ${CONSISTENCY_PROMPT}` },
    { label: 'Festive Embroidered Chudidhar', prompt: `Create a vibrant studio portrait of the person in an embroidered festive chudidhar with bangles and earrings. ${CONSISTENCY_PROMPT}` },
  ],
},
  {
    title: 'Anime Styles',
    description: 'Transform into iconic anime characters or art styles.',
    items: [
      { label: 'Naruto Ninja', prompt: `Style the person with a Naruto-style ninja headband and outfit. ${CONSISTENCY_PROMPT}` },
      { label: 'Dragon Ball Z Super Saiyan', prompt: `Transform the person into a Dragon Ball Z Super Saiyan with glowing golden hair. ${CONSISTENCY_PROMPT}` },
      { label: 'One Piece Pirate', prompt: `Style the person as a pirate from One Piece with a straw hat. ${CONSISTENCY_PROMPT}` },
      { label: 'Pokémon Trainer', prompt: `Depict the person as a Pokémon trainer with a cap and Pokéball. ${CONSISTENCY_PROMPT}` },
    ],
  },
    {
    title: 'Linen Shirts',
    description: 'Casual and cool in comfortable linen.',
    items: [
      { label: 'White Linen', prompt: `A relaxed portrait of this person wearing a crisp white linen shirt, on a beautiful tropical beach at sunset. ${CONSISTENCY_PROMPT}` },
      { label: 'Blue Linen', prompt: `A candid shot of this person wearing a light blue linen shirt, walking through a charming European city street. ${CONSISTENCY_PROMPT}` },
      { label: 'Beige Linen', prompt: `A stylish portrait of this person in a beige linen shirt, sitting at an outdoor cafe with a coffee. ${CONSISTENCY_PROMPT}` },
      { label: 'Yellow Linen', prompt: `A stylish portrait of this person in a yellow linen shirt, standing at a picturesque location. ${CONSISTENCY_PROMPT}` },
      { label: 'Purple Linen', prompt: `A stylish portrait of this person in a purple linen shirt, standing at a serene location with lovely weather. ${CONSISTENCY_PROMPT}` },
    ],
  },
  {
  title: 'Manchester United',
  description: 'Live the dream of being a Red Devil at Old Trafford.',
  items: [
    { label: 'Goal Celebration', prompt: 'Transform this person into a Manchester United footballer, celebrating a goal at Old Trafford with arms outstretched.' },
    { label: 'Lifting the Trophy', prompt: 'Transform this person into a Manchester United player lifting the Premier League trophy in front of cheering fans.' },
    { label: 'Iconic Red Kit', prompt: 'Transform this person into a Manchester United star wearing the classic red jersey, dribbling the ball under the stadium lights.' },
    { label: 'Legendary Pose', prompt: 'Transform this person into a Manchester United legend, standing proudly in front of the Stretford End.' },
    { label: 'Derby Match Intensity', prompt: 'Transform this person into a Manchester United footballer battling against Manchester City in a fierce derby match.' },
  ],
},
{
  title: 'Liverpool',
  description: 'Walk on with the Reds at Anfield.',
  items: [
    { label: 'Anfield Roar', prompt: 'Transform this person into a Liverpool footballer, celebrating in front of the Kop at Anfield.' },
    { label: 'Champions League Glory', prompt: 'Transform this person into a Liverpool player lifting the UEFA Champions League trophy in a red kit.' },
    { label: 'You’ll Never Walk Alone', prompt: 'Transform this person into a Liverpool footballer walking out of the tunnel with the anthem atmosphere.' },
    { label: 'Historic Red Jersey', prompt: 'Transform this person into a Liverpool star in the iconic red kit, sprinting down the wing.' },
    { label: 'Merseyside Derby', prompt: 'Transform this person into a Liverpool footballer clashing with Everton in a fierce derby.' },
  ],
},
{
  title: 'Arsenal',
  description: 'Step onto the pitch as a Gunner at the Emirates.',
  items: [
    { label: 'North London Derby', prompt: 'Transform this person into an Arsenal footballer battling Tottenham in the North London Derby at the Emirates.' },
    { label: 'Invincibles Tribute', prompt: 'Transform this person into an Arsenal star inspired by the Invincibles era, wearing the red and white kit.' },
    { label: 'Goal Celebration', prompt: 'Transform this person into a an Arsenal footballer celebrating a winning goal in front of fans at the Emirates.' },
    { label: 'Captain’s Moment', prompt: 'Transform this person into an Arsenal captain, leading the team with the armband.' },
    { label: 'Training Ground Focus', prompt: 'Transform this person into an Arsenal player training in full kit with a football at their feet.' },
  ],
},
{
  title: 'Borussia Dortmund',
  description: 'Play under the Yellow Wall with Borussia Dortmund.',
  items: [
    { label: 'Yellow Wall Celebration', prompt: 'Transform this person into a Borussia Dortmund footballer celebrating in front of the famous Yellow Wall at Signal Iduna Park.' },
    { label: 'Champions League Night', prompt: 'Transform this person into a Borussia Dortmund star under the lights in a Champions League match.' },
    { label: 'Classic Black and Yellow Kit', prompt: 'Transform this person into a Dortmund footballer wearing the iconic black and yellow kit, sprinting down the pitch.' },
    { label: 'Der Klassiker', prompt: 'Transform this person into a Dortmund player battling Bayern Munich in Der Klassiker.' },
    { label: 'Young Star Energy', prompt: 'Transform this person into a young Borussia Dortmund prodigy celebrating their first goal.' },
  ],
},
{
  title: 'Bayern Munich',
  description: 'Dominate Europe with Bayern Munich.',
  items: [
    { label: 'Bundesliga Trophy Lift', prompt: 'Transform this person into a Bayern Munich footballer lifting the Bundesliga Meisterschale trophy.' },
    { label: 'Der Klassiker Rivalry', prompt: 'Transform this person into a Bayern player facing Borussia Dortmund in a tense match.' },
    { label: 'Champions League Victory', prompt: 'Transform this person into a Bayern Munich star celebrating a Champions League win in red kit.' },
    { label: 'Training Ground Power', prompt: 'Transform this person into a Bayern Munich footballer in training gear, focused and determined.' },
    { label: 'Historic Kit Style', prompt: 'Transform this person into a Bayern Munich legend wearing a retro red and white kit.' },
  ],
},
{
  title: 'Chelsea',
  description: 'Wear the Blues and shine at Stamford Bridge.',
  items: [
    { label: 'Stamford Bridge Glory', prompt: 'Transform this person into a Chelsea footballer scoring at Stamford Bridge.' },
    { label: 'Champions League Triumph', prompt: 'Transform this person into a Chelsea player lifting the UEFA Champions League trophy in a blue kit.' },
    { label: 'London Derby', prompt: 'Transform this person into a Chelsea star battling Arsenal in a London derby.' },
    { label: 'Classic Blue Jersey', prompt: 'Transform this person into a Chelsea footballer dribbling in the iconic blue jersey.' },
    { label: 'Captain of Chelsea', prompt: 'Transform this person into a Chelsea captain, leading the team with pride.' },
  ],
},
{
  title: 'Real Madrid',
  description: 'Play like a Galáctico at the Santiago Bernabéu.',
  items: [
    { label: 'La Liga Champion', prompt: 'Transform this person into a Real Madrid footballer celebrating a La Liga title at the Bernabéu.' },
    { label: 'Galáctico Style', prompt: 'Transform this person into a Real Madrid star in the famous all-white kit, dribbling the ball.' },
    { label: 'El Clásico Clash', prompt: 'Transform this person into a Real Madrid player facing Barcelona in El Clásico.' },
    { label: 'Champions League Glory', prompt: 'Transform this person into a Real Madrid footballer lifting the Champions League trophy.' },
    { label: 'Legend Tribute', prompt: 'Transform this person into a Real Madrid legend with iconic poses inspired by Zidane, Ronaldo, or Ramos.' },
  ],
},
{
  title: 'FC Barcelona',
  description: 'Join the Blaugrana and shine at Camp Nou.',
  items: [
    { label: 'El Clásico Rivalry', prompt: 'Transform this person into a Barcelona footballer facing Real Madrid in El Clásico at Camp Nou.' },
    { label: 'Tiki-Taka Magic', prompt: 'Transform this person into a Barcelona star playing beautiful tiki-taka football in the Blaugrana kit.' },
    { label: 'Goal Celebration', prompt: 'Transform this person into a Barcelona player celebrating a goal in front of the fans at Camp Nou.' },
    { label: 'Champions League Night', prompt: 'Transform this person into a Barcelona footballer on a Champions League night under the lights.' },
    { label: 'Historic Jersey Tribute', prompt: 'Transform this person into a Barcelona legend wearing a classic retro jersey.' },
  ],
},

  {
    title: 'Football Jerseys',
    description: 'Step into your favorite football club or national team jersey.',
    items: [
      { label: 'Manchester United', prompt: `Place the person in a Manchester United football jersey. ${CONSISTENCY_PROMPT}` },
      { label: 'Real Madrid', prompt: `Place the person in a Real Madrid football jersey. ${CONSISTENCY_PROMPT}` },
      { label: 'Barcelona', prompt: `Place the person in a Barcelona football jersey. ${CONSISTENCY_PROMPT}` },
      { label: 'Brazil National Team', prompt: `Place the person in a Brazil football jersey. ${CONSISTENCY_PROMPT}` },
      { label: 'Argentina National Team', prompt: `Place the person in an Argentina football jersey, inspired by Messi. ${CONSISTENCY_PROMPT}` },
    ],
  },
];