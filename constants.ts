import { ThemePack } from './types';

const CONSISTENCY_PROMPT =
  'Maintain their core facial features, ethnicity, and characteristics to ensure it is recognizably the same person. The style should be photorealistic unless specified otherwise.';

export const THEME_PACKS: ThemePack[] = [
    {
    title: 'Romantic Couple Photoshoot',
    description: 'See yourself at different stages of life, from a child to your golden years.',
    cost: 20,
    items: [
      { label: '90s movie feel ', prompt: `He will be holding my saree pallu in his hand, dressed in a retro style with a black shirt, carrying a Dev Anand-inspired look. I will be in a perfect plain chiffon saree, red in color, giving a Pinteresty aesthetic retro vibe. Think of a 90s movie feel – dark brown wavy curly hair with a small flower tucked visibly into the curls, romanticizing in a windy environment. I’ll be standing against a solid wall with deep shadows and contrast drama, creating a mysterious and artistic atmosphere. The lighting will be warm with golden tones, evoking a sunset or golden hour glow. The background will stay minimalistic and slightly textured, while my expression will be moody, calm, yet happy and introspective. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2015%20year%20old/300' },
      { label: 'Romantic flowers', prompt: `Create a retro vintage grainy but bright image of the reference picture but draped in a perfect brown Pinterest aesthetic retro saree for girl and suite for boy. It must feel like a 90s movie black hair baddie with A small flower tuck visibly in long wavy hair and romanticising windy environment. The girl and boy standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2025%20year%20old/300' },
      { label: 'Windy atmosphere', prompt: `Create a retro, vintage-inspired image - grainy yet bright - based on the reference picture. 510 The girl should be draped in a perfect off-white cotton saree with a red blouse. Pinterest-style aesthetic saree. The vibe must capture the essence of a 90s movie dark brown-haired baddie, enhanced by a windy, romantic atmosphere and the guy should be wearing an off white kurta She stands against an old wooden door, where deep shadows and dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting cinematic effect. Make the girl pose like she’s walking and looking back while the guy is holding her saree pallu very evidently and the guy should be looking at the girl. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2040%20year%20old/300' },
      { label: 'Pinterest-style', prompt: `Create a retro, vintage-inspired image - grainy yet bright - based on the reference picture. The girl should be draped in a perfect red, Pinterest-style aesthetic retro saree, and the guy should be wearing a white kurta with a Pinterest-style Chinese collar in a retro look. The vibe must capture the essence of a 90s movie brown-haired baddie, with wavy curls and a small flower tucked visibly into her hair, and the hair should fly enhanced by a windy, romantic atmosphere. The guy should be holding her waist and looking deep into her eyes. They stand against a solid wall, where deep shadows and dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting cinematic effect. They should be looking at each other. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2060%20year%20old/300' },
      { label: 'Retro Vintage Saree & Suite', prompt: `Create a retro vintage grainy but bright image of C the reference picture but draped in a perfect brown Pinteresty aesthetic retro saree for girl and 582 suite for boy. It must feel like a 90s movie red hair baddie with a small flower tuck visibly in the curls and windy environment romanticising for girl. The girl and boy is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2060%20year%20old/300' },
      { label: 'Couple at Taj Mahal', prompt: `Photo of a couple standing in front of Taj Mahal at sunset, elegant outfits, warm lighting, cinematic atmosphere, professional photography. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2060%20year%20old/300' },
      { label: 'Bollywood Fashion Couple', prompt: `Photo of a couple in 1970s Bollywood fashion, wearing colorful vintage outfits, cinematic poses, natural skin texture, professional photography lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2060%20year%20old/300' },
      { label: 'Floral Mandap Cinematic', prompt: `Photo of a man in sherwani and an Indian woman in lehenga, standing under floral mandap decorations, warm tones, cinematic photography. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2060%20year%20old/300' },
    ],
  },
  {
    title: 'Hand-drawn Portraits',
    description: 'See yourself as a beautiful, artistic sketch.',
    cost: 15,
    items: [
      { 
        label: 'Charcoal Sketch', 
        prompt: `A beautiful, artistic charcoal sketch portrait of the person, with realistic shading and texture, on textured paper. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/charcoal%20sketch/300' 
      },
      { 
        label: 'Watercolor Portrait', 
        prompt: `A vibrant and expressive watercolor portrait of the person, with soft edges and blended colors on watercolor paper. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/watercolor%20portrait/300' 
      },
      { 
        label: 'Detailed Pencil Portrait', 
        prompt: `A highly detailed and realistic pencil portrait of the person, with fine lines and intricate shading. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/detailed%20pencil/300' 
      },
      { 
        label: 'Ink Line Art', 
        prompt: `A clean and minimalist ink line art portrait of the person, focusing on elegant contours and bold lines. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/ink%20line%20art/300' 
      },
    ],
  },
   {
    title: 'Terrible Portraits',
    description: "Get a hilariously bad portrait of yourself, drawn by a 'talented' kid.",
    cost: 5,
    items: [
      { 
        label: "Kid's Crayon Disaster", 
        prompt: `A hilariously bad, childish, hand-drawn crayon portrait of the person. It should look like a -year-old drew it, with scribbled colors way outside the lines, distorted features, and on a crumpled piece of paper. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/kids%20drawing/300' 
      },
      { 
        label: "Ugly Sketch", 
        prompt: ` A childlike doodle with thick black ink lines, exaggerated giant teeth and wide grins, uneven eyes, simple rectangular faces, minimal shading, and wobbly outlines. Make it look like it was sketched quickly on plain white paper with a felt-tip pen.`, 
        img: 'https://picsum.photos/seed/ugly%20caricature/300' 
      },
    ],
  },
  {
    title: 'DP Styles',
    description: 'Create the perfect Display Picture for your social media profiles.',
    cost: 25,
    items: [
      { 
        label: 'Yellow Cartoon DP', 
        prompt: `A stylized, illustrated digital avatar of the person in a modern, flat vector art style. The features should be simplified but recognizable. The background should be a solid, vibrant yellow circle. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/yellow%20cartoon%20dp/300' 
      },
      { 
        label: 'Grayscale on Yellow', 
        prompt: `A high-contrast, artistic portrait. The person should be in grayscale (black and white), set against a bold, solid yellow circular background. This creates a modern, pop-art effect. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/grayscale%20on%20yellow/300' 
      },
      { 
        label: 'Black on Black', 
        prompt: `A dramatic, low-key black and white portrait. The person should be wearing dark clothing, against a solid black background. The lighting should be moody and cinematic, creating a sense of mystery. Designed to look striking as a circular profile picture. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/black%20on%20black%20portrait/300' 
      },
      { 
        label: 'Professional Headshot', 
        prompt: `A professional corporate headshot of the person, suitable for a LinkedIn profile. The person should be wearing business attire, with soft, flattering studio lighting against a clean, neutral background. The composition should be centered and work well in a circular frame. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/professional%20headshot%20circle/300' 
      },
       { 
        label: 'Neon Glow', 
        prompt: `A vibrant, futuristic portrait of the person bathed in the glow of neon lights. The background should be dark to make the pink and blue neon colors pop. The style should be edgy and cool, perfect for a gaming or tech profile picture. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/neon%20glow%20dp/300' 
      },
       { 
        label: 'Minimalist Line Art', 
        prompt: `A clean and minimalist single-line art portrait of the person. The background should be a solid, muted pastel color circle, making the elegant black contours the main focus. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/minimalist%20line%20art%20dp/300' 
      },
    ],
  },
  {
    title: 'Sculpted Self',
    description: 'See yourself reimagined as a statue made of different materials.',
    cost: 20,
    items: [
      { 
        label: 'Golden Statue', 
        prompt: `Transform the person into a polished, reflective golden statue. The statue should look majestic and ancient, with detailed metallic textures and highlights, set against a dark, dramatic museum background. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/golden%20statue/300' 
      },
      { 
        label: 'Iron Sculpture', 
        prompt: `Reimagine the person as a weathered, textured iron sculpture. The style should be rustic and strong, with visible signs of aging and rust, placed in an outdoor industrial setting. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/iron%20sculpture/300' 
      },
      { 
        label: 'Ice Sculpture', 
        prompt: `Turn the person into a translucent, intricately carved ice sculpture. The ice should be clear and sparkling, with sharp details and internal refractions of light, set in a frozen, winter landscape. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/ice%20sculpture/300' 
      },
      { 
        label: 'Marble Bust', 
        prompt: `Style the person as a classical Greek marble bust. The statue should be made of white Carrara marble with smooth, detailed carving and a serene expression, placed on a pedestal in a grand gallery. ${CONSISTENCY_PROMPT}`, 
        img: 'https://picsum.photos/seed/marble%20bust/300' 
      },
    ],
  },
  {
    title: 'Decades',
    description: 'Travel through time and see yourself in different eras.',
    cost: 25,
    items: [
      { label: '1950s', prompt: `Style the person with 1950s fashion and hairstyle, with a vintage film look. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1950s%20fashion/300' },
      { label: '1960s', prompt: `Style the person with 1960s hippie or mod fashion, with a grainy, retro photo effect. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1960s%20fashion/300' },
      { label: '1970s', prompt: `Style the person with 1970s disco fashion, big hair, and a warm, faded photograph look. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1970s%20fashion/300' },
      { label: '1980s', prompt: `Style the person with 1980s new wave or rock fashion, neon colors, and a slightly blurry, VHS-style look. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1980s%20fashion/300' },
      { label: '1990s', prompt: `Style the person with 1990s grunge or pop fashion, with a classic 90s film photo look. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1990s%20fashion/300' },
    ],
  },
  {
    title: 'Ages',
    description: 'See yourself at different stages of life, from a child to your golden years.',
    cost: 20,
    items: [
      { label: '15 Years Old', prompt: `Transform the person in the image to look like they are 15 years old. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2015%20year%20old/300' },
      { label: '25 Years Old', prompt: `Transform the person in the image to look like they are 25 years old. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2025%20year%20old/300' },
      { label: '40 Years Old', prompt: `Transform the person in the image to look like they are 50 years old. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2040%20year%20old/300' },
      { label: '60 Years Old', prompt: `Transform the person in the image to look like they are 80 years old. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/portrait%20of%2060%20year%20old/300' },
    ],
  },
  {
  title: 'Different Centuries',
  description: 'See yourself styled from medieval times to the modern age.',
  cost: 30,
  items: [
    { label: 'Medieval Knight (14th Century)', prompt: `Dress the person in 14th-century European knight armor with a castle background. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Medieval%20Knight/300' },
    { label: 'Mughal Royal (16th Century)', prompt: `Transform the person into a Mughal royal with luxurious embroidered robes and jewelry. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Mughal%20Royal/300' },
    { label: 'Victorian Era (19th Century)', prompt: `Style the person in Victorian-era clothing with classic top hats or gowns. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Victorian%20Era%20fashion/300' },
    { label: '1920s Great Gatsby', prompt: `Dress the person in 1920s flapper/gangster style fashion with vintage vibes. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1920s%20Gatsby%20party/300' },
    { label: '1980s Disco Look', prompt: `Style the person in flashy 1980s disco clothes with neon lights. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1980s%20Disco%20Look/300' },
  ],
},
{
  title: 'Different Haircuts',
  description: 'Experiment with bold and stylish hairstyles.',
  cost: 35,
  items: [
    { label: 'Buzz Cut', prompt: `Give the person a short buzz cut hairstyle. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/person%20with%20buzz%20cut/300' },
    { label: 'Long Wavy Hair', prompt: `Transform the person to have long, wavy, flowing hair. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/person%20with%20long%20wavy%20hair/300' },
    { label: 'Mohawk', prompt: `Style the person with a punk-inspired mohawk haircut. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/person%20with%20mohawk/300' },
    { label: 'Curly Afro', prompt: `Give the person a voluminous curly afro hairstyle. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/person%20with%20curly%20afro/300' },
    { label: 'Undercut Fade', prompt: `Transform the person with a trendy undercut fade hairstyle. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/person%20with%20undercut%20fade/300' },
    { label: 'Classic Bob', prompt: `Style the person with a sleek, classic bob haircut. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/person%20with%20classic%20bob%20haircut/300' },
  ],
},
  {
    title: 'IPL Team Jerseys',
    description: 'Wear the jersey of your favorite Indian Premier League cricket team.',
    cost: 25,
    items: [
      { label: 'CSK Jersey', prompt: `Place the person from the image into a Chennai Super Kings (CSK) IPL cricket jersey. The background should be a generic cricket stadium. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/CSK%20cricket%20jersey/300' },
      { label: 'RCB Jersey', prompt: `Place the person from the image into a Royal Challengers Bengaluru (RCB) IPL cricket jersey. The background should be a generic cricket stadium. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/RCB%20cricket%20jersey/300' },
      { label: 'MI Jersey', prompt: `Place the person from the image into a Mumbai Indians (MI) IPL cricket jersey. The background should be a generic cricket stadium. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/MI%20cricket%20jersey/300' },
      { label: 'KKR Jersey', prompt: `Place the person from the image into a Kolkata Knight Riders (KKR) IPL cricket jersey. The background should be a generic cricket stadium. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/KKR%20cricket%20jersey/300' },
    ],
  },
  {
    title: 'Marvel Superheroes',
    description: 'Become an iconic hero from the Marvel Universe.',
    cost: 25,
    items: [
      { label: 'Iron Man', prompt: `Transform the person in the image into Iron Man, wearing the iconic suit. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Iron%20Man%20suit/300' },
      { label: 'Captain America', prompt: `Transform the person in the image into Captain America, holding the shield. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Captain%20America%20shield/300' },
      { label: 'Thor', prompt: `Transform the person in the image into Thor, God of Thunder, holding Mjolnir. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Thor%20holding%20Mjolnir/300' },
      { label: 'Black Widow', prompt: `Transform the person in the image into Black Widow, in a tactical suit. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Black%20Widow%20tactical%20suit/300' },
    ],
  },
    {
    title: 'DC Superheroes',
    description: 'Step into the DC Universe as a legendary hero.',
    cost: 25,
    items: [
      { label: 'Superman', prompt: `Transform the person in the image into Superman, with the iconic 'S' shield on the chest. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Superman%20flying/300' },
      { label: 'Batman', prompt: `Transform the person in the image into Batman, the dark knight of Gotham. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Batman%20in%20Gotham/300' },
      { label: 'Wonder Woman', prompt: `Transform the person in the image into Wonder Woman, with her tiara and armor. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Wonder%20Woman%20with%20armor/300' },
      { label: 'The Flash', prompt: `Transform the person in the image into The Flash, surrounded by speed force lightning. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/The%20Flash%20running/300' },
    ],
  },
  {
    title: 'Bollywood Legends',
    description: 'Become your favorite iconic characters from Bollywood cinema.',
    cost: 25,
    items: [
      { label: 'DDLJ Raj', prompt: `Recreate the person in the style of Shah Rukh Khan as Raj from Dilwale Dulhania Le Jayenge, with a mandolin in a mustard field. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/DDLJ%20mustard%20field/300' },
      { label: 'Pushpa', prompt: `Transform the person into the character Pushpa Raj from the movie Pushpa, with his signature look and attitude. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Pushpa%20movie%20character/300' },
      { label: 'Jawan SRK', prompt: `Style the person like Shah Rukh Khan's character from the movie Jawan, with a bald look and a tattoo. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Jawan%20movie%20SRK%20look/300' },
      { label: 'Sholay Jai/Veeru', prompt: `Place the person in a classic scene from the movie Sholay, styled like either Jai or Veeru on a motorcycle. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Sholay%20movie%20motorcycle/300' },
    ],
  },
  {
    title: '90s Nostalgia',
    description: 'Travel back in time with a retro 90s aesthetic.',
    cost: 25,
    items: [
      { label: '90s Film Look', prompt: `Apply a retro 90s film photo filter to the image, with grainy texture and faded colors. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/90s%20film%20photo/300' },
      { label: 'Bollywood Poster', prompt: `Turn the image into a 90s Bollywood movie poster, with dramatic text and vibrant colors. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/90s%20Bollywood%20poster/300' },
      { label: 'Vintage Ad', prompt: `Style the image to look like a classic print advertisement from the 1990s in India. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/vintage%2090s%20advertisement/300' },
      { label: 'Retro Fashion', prompt: `Dress the person in iconic 90s fashion, like denim jackets and colorful windbreakers. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/90s%20retro%20fashion/300' },
    ],
  },
   {
    title: 'Vintage AI Photoshoot (Men)',
    description: 'Classic vintage photography styles for men.',
    cost: 25,
    items: [
        { label: 'Film Noir Gentleman', prompt: `A 1940s trench coat, fedora, cigarette smoke, and grainy monochrome cinematic look. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Film%20Noir%20Gentleman/300' },
        { label: '1950s Studio Star', prompt: `A sharp suit, slicked-back hair, butterfly lighting, and editorial glamour vibes. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1950s%20Studio%20fashion%20Star/300' },
        { label: '1970s Polaroid Cool', prompt: `A denim jacket, aviator sunglasses, golden-hour light, and warm film grain. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1970s%20Polaroid%20style/300' },
        { label: 'Old Hollywood Icon', prompt: `Black-and-white tuxedo portrait with dramatic Rembrandt lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Old%20Hollywood%20Icon%20portrait/300' },
        { label: 'Old-Money Editorial', prompt: `Tweed blazer, sepia tones, and a blurred library backdrop. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Old-Money%20Editorial%20fashion/300' },
    ],
  },
  {
    title: 'Vintage AI Photoshoot (Women)',
    description: 'Timeless vintage photography styles for women.',
    cost: 25,
    items: [
        { label: 'Hollywood Glamour', prompt: `1950s curls, pearls, harsh lights with glossy film grain. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Hollywood%20Glamour%20style/300' },
        { label: 'Dreamy Seventies Glow', prompt: `Flowy floral dress, sunlight from golden hour, lens flare, and soft haze. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Dreamy%20Seventies%20Glow%20fashion/300' },
        { label: '1940s Monochrome Elegance', prompt: `A 1940s satin gown with sharp contrasts on a black velvet cinema backdrop. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1940s%20Monochrome%20Elegance%20gown/300' },
        { label: 'Vintage Saree Elegance', prompt: `An old silk sari, sunlight from the golden hour, and sepia tones, reminiscent of 50's Indian cinema. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Vintage%20Saree%20Elegance/300' },
        { label: 'Golden Hour Goddess', prompt: `Pastel tones of a classic dress with a backlit photography glow. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Golden%20Hour%20Goddess%20portrait/300' },
    ],
  },
  {
    title: 'Vintage AI Photoshoot (Couples)',
    description: 'Romantic vintage photography styles for couples.',
    cost: 30,
    photoType: 'couple',
    items: [
        { label: 'Hollywood Love Story', prompt: `A 1950s ballroom dance scene in timeless black and white. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Hollywood%20Love%20Story%20ballroom%20dance/300' },
        { label: '1970s Café Romance', prompt: `A candid café moment with warm tones and wooden interiors. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/1970s%20Caf%C3%A9%20Romance/300' },
        { label: 'Cinematic Sepia Elegance', prompt: `A tuxedo and satin gown with sepia-toned studio lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Cinematic%20Sepia%20Elegance%20couple/300' },
        { label: 'Pastel Road Trip Love', prompt: `A 1960s pastel portrait with a vintage car and dreamy tones. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Pastel%20Road%20Trip%20Love%20vintage%20car/300' },
        { label: 'Noir Rain Romance', prompt: `A rainy black-and-white street scene under a glowing streetlamp. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Noir%20Rain%20Romance%20couple/300' },
    ],
  },
    {
    title: 'Indian Wedding Looks',
    description: 'See yourself in stunning traditional wedding attire from across India.',
    cost: 25,
    items: [
      { label: 'South Indian Look', prompt: `Dress the person in traditional South Indian wedding attire, with silk and gold jewelry. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/South%20Indian%20Wedding%20attire/300' },
      { label: 'Rajasthani Royal', prompt: `Transform the person into a Rajasthani royal bride or groom, with opulent, colorful traditional clothing. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Rajasthani%20Royal%20Wedding/300' },
      { label: 'Punjabi Wedding', prompt: `Style the person in vibrant Punjabi wedding clothes, like a lehenga or sherwani. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Punjabi%20Wedding%20dress/300' },
      { label: 'Bengali Look', prompt: `Depict the person as a traditional Bengali bride or groom, with classic makeup and attire. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Bengali%20Wedding%20Look/300' },
    ],
  },
  {
    title: 'Cyberpunk Future',
    description: 'Step into a high-tech, neon-lit future as a cyberpunk character.',
    cost: 25,
    items: [
      { label: 'Neon Samurai', prompt: `Reimagine the person as a cyberpunk samurai in a neon-lit Tokyo street. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Neon%20Cyberpunk%20Samurai/300' },
      { label: 'AI Robot', prompt: `Convert the person into an advanced AI robot with subtle human features. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/futuristic%20AI%20Robot/300' },
      { label: 'Netrunner', prompt: `Depict the person as a netrunner with cybernetic implants, surrounded by holographic data. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/cyberpunk%20Netrunner/300' },
      { label: 'Street Mercenary', prompt: `Show the person as a gritty cyberpunk mercenary in a futuristic urban environment. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Cyberpunk%20Street%20Mercenary/300' },
    ],
  },
{
    title: 'Trending Indian Couple Photoshoot',
    description: 'Romantic and stylish poses inspired by modern Indian wedding and pre-wedding trends.',
    cost: 60,
    photoType: 'couple',
    items: [
      { label: 'Temple Grandeur (Tamil)', prompt: `Couple in traditional Tamil wedding silk (madisar & veshti) posed before a Chola-era temple with deepa lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Tamil%20couple%20at%20temple/300' },
      { label: 'Marina Sunrise (Tamil)', prompt: `Romantic dawn shoot at Marina Beach with pastel outfits and gentle sea mist. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20at%20Marina%20Beach%20sunrise/300' },
      { label: 'Backwater Elegance (Malayalam)', prompt: `Kerala couple in off-white kasavu sari and mundu aboard a houseboat with golden sunset reflections. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Kerala%20couple%20on%20houseboat/300' },
      { label: 'Onam Festive Glow (Malayalam)', prompt: `Couple surrounded by a floral pookalam in vibrant Onam attire, soft warm lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20celebrating%20Onam/300' },
      { label: 'Royal Mysore Palace (Kannada)', prompt: `Grand shoot in Mysore Palace courtyard, bride in rich maroon silk saree, groom in royal sherwani. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20at%20Mysore%20Palace/300' },
      { label: 'Coffee Estate Romance (Kannada)', prompt: `Couple in earthy tones amidst misty Coorg coffee plantations at dawn. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20in%20Coorg%20coffee%20plantation/300' },
      { label: 'Charminar Heritage (Telugu)', prompt: `Hyderabad pre-wedding shot at Charminar with pearl jewelry and pastel lehenga-sherwani. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20at%20Charminar%20Hyderabad/300' },
      { label: 'Araku Valley Hills (Telugu)', prompt: `Romantic mountain-top scene with flowing veil and gentle fog of Araku. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20in%20Araku%20Valley/300' },
      { label: 'Rann of Kutch White Sands (Gujarati)', prompt: `Couple in vibrant bandhani & kediyu against the full-moon glow of the salt desert. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20in%20Rann%20of%20Kutch/300' },
      { label: 'Navratri Garba Night (Gujarati)', prompt: `High-energy Garba dance pose with colorful chaniya choli, sparkling lights, and dhol beats. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20dancing%20Garba/300' },
      { label: 'Durga Puja Aesthetics (Bengali)', prompt: `Bride in red-white saree with alta-adorned hands, groom in dhoti-kurta amid pandal lights. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20at%20Durga%20Puja/300' },
      { label: 'Sundarbans Serenity (Bengali)', prompt: `Couple in a soft pastels on a wooden boat drifting through mangrove waterways at dusk. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20in%20Sundarbans/300' },
      { label: 'Jaipur Palace Romance (Rajasthani)', prompt: `Couple in royal Rajput attire within the intricate corridors of a Jaipur palace, with dramatic shadows and light. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20in%20Jaipur%20Palace/300' },
      { label: 'Mumbai Skyline Glam (Urban)', prompt: `Stylish couple in modern western outfits posing against the glittering Mumbai Sea Link skyline at twilight. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20at%20Mumbai%20Sea%20Link/300' },
      { label: 'Goa Bohemian Sunset (Coastal)', prompt: `Couple in relaxed, bohemian attire walking hand-in-hand on a serene Goa beach during a fiery sunset. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20on%20Goa%20beach%20sunset/300' },
      { label: 'Holi-inspired Color Blast (Creative)', prompt: `A vibrant and playful shot of a couple amidst a cloud of colored smoke bombs, wearing white outfits. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20celebrating%20Holi/300' },
      { label: 'Ancient Stepwell Grandeur (Architectural)', prompt: `Couple posing at a majestic ancient Indian stepwell, with symmetrical architecture creating a stunning backdrop. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20at%20ancient%20stepwell/300' },
      { label: 'Ladakh Mountain Vows (Adventure)', prompt: `Couple in warm, stylish clothing sharing a moment against the breathtaking, rugged landscape of Ladakh's mountains and monasteries. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/couple%20in%20Ladakh/300' },
    ],
  },
  {
    title: 'Different Makeup Styles',
    description: 'Highlighting diverse makeup looks for fashion and portrait photography.',
    cost: 35,
    items: [
      { label: 'Bridal Glam', prompt: `Create a close-up portrait of the person wearing rich Indian bridal makeup with intricate jewelry and glowing skin. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Indian%20Bridal%20Glam%20makeup/300' },
      { label: 'Soft Nude Look', prompt: `Create a portrait of the person with natural nude-toned makeup, dewy skin, and subtle highlights. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Soft%20Nude%20makeup%20Look/300' },
      { label: 'Bold Smokey Eyes', prompt: `Create a dramatic portrait featuring bold smokey eyes, matte lips, and cinematic lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Bold%20Smokey%20Eyes%20makeup/300' },
      { label: 'Traditional Haldi Glow', prompt: `Create a joyful portrait of the person with a fresh haldi ceremony look, minimal makeup, and a natural turmeric glow. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Traditional%20Haldi%20ceremony/300' },
      { label: 'Festival Sparkle', prompt: `Create a portrait with colorful festive makeup, glitter accents, and a celebratory vibe. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Festival%20Sparkle%20makeup/300' },
      { label: 'High-Fashion Editorial', prompt: `Create a creative editorial portrait with avant-garde makeup, bold colors, and artistic face paint. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/High-Fashion%20Editorial%20makeup/300' },
    ],
  },
  {
    title: 'Studio Photoshoot',
    description: 'Professional studio portraits with various classic poses and lighting.',
    cost: 55,
    items: [
      { label: 'Confident Headshot', prompt: `Create a professional studio headshot of the person with a confident expression and dramatic lighting against a dark background. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Confident%20professional%20headshot/300' },
      { label: 'Candid Laughter', prompt: `Create a studio portrait of the person in a moment of candid laughter, with soft, warm lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Candid%20Laughter%20portrait/300' },
      { label: 'Thoughtful Pose', prompt: `Create a studio portrait of the person in a thoughtful, classic pose, looking away from the camera with cinematic lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/person%20in%20thoughtful%20pose/300' },
      { label: 'Power Pose', prompt: `Create a full-body studio shot of the person in a powerful stance, dressed in business attire. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/person%20in%20power%20pose/300' },
      { label: 'Editorial Fashion', prompt: `Create a high-fashion studio portrait of the person with bold styling, striking pose, and dramatic lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Editorial%20Fashion%20studio%20portrait/300' },
      { label: 'Soft Glow Portrait', prompt: `Create a dreamy studio portrait of the person with soft, glowing light and a slightly blurred background. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Soft%20Glow%20studio%20portrait/300' },
      { label: 'Seated Elegance', prompt: `Create a studio portrait of the person seated gracefully on a chair with refined posture and moody lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Elegant%20person%20seated%20on%20chair/300' },
      { label: 'Casual Candid', prompt: `Create a relaxed studio portrait of the person in casual wear, leaning naturally against a wall with soft lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Casual%20candid%20studio%20portrait/300' },
      { label: 'Creative Silhouette', prompt: `Create a dramatic studio silhouette portrait of the person with a strong backlight, highlighting their outline. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Creative%20silhouette%20portrait/300' },
      { label: 'Motion Blur Effect', prompt: `Create an artistic studio shot of the person in motion, with a controlled blur effect and creative lighting. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Motion%20blur%20artistic%20portrait/300' },
      { label: 'Smiling Close-Up', prompt: `Create a close-up studio portrait of the person smiling warmly with flattering soft light. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Smiling%20close-up%20portrait/300' },
    ],
  },
  {
  title: 'Saree Style Photoshoot',
  description: 'Elegant portraits featuring the person in traditional saree looks with various poses and lighting.',
  cost: 50,
  items: [
    { label: 'Kanjeevaram Saree', prompt: `Create a studio portrait of the person wearing a luxurious Kanjeevaram silk saree with rich borders and temple jewelry. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Kanjeevaram%20Saree/300' },
    { label: 'Banarasi Saree', prompt: `Create a portrait of the person in an ornate Banarasi saree with golden zari work, styled with regal jewelry. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Banarasi%20Saree/300' },
    { label: 'Kerala Kasavu Saree', prompt: `Create a portrait of the person in a traditional white and gold Kasavu saree with jasmine flowers in hair. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Kerala%20Kasavu%20Saree/300' },
    { label: 'Bengali Draped Saree', prompt: `Create a studio portrait of the person in a Bengali-style draped saree with bold red border and traditional accessories. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Bengali%20Saree/300' },
    { label: 'Mysore Silk Saree', prompt: `Create a portrait of the person in an elegant Mysore silk saree with minimal jewelry and graceful styling. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Mysore%20Silk%20Saree/300' },
    { label: 'Maharashtrian Nauvari', prompt: `Create a portrait of the person in a Maharashtrian Nauvari saree draped in dhoti style with traditional nath nose ring. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Maharashtrian%20Nauvari%20Saree/300' },
    { label: 'Gujarati Style Saree', prompt: `Create a studio portrait of the person in a colorful Gujarati saree draped with pallu in the front. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Gujarati%20Style%20Saree/300' },
    { label: 'Modern Designer Saree', prompt: `Create a fashion-forward portrait of the person in a contemporary designer saree with unique cuts and styling. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Modern%20Designer%20Saree/300' },
    { label: 'Party Wear Saree', prompt: `Create a glamorous studio portrait of the person in a shimmery georgette saree with fashionable accessories. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Party%20Wear%20Saree/300' },
    { label: 'Lehenga Saree Fusion', prompt: `Create a studio portrait of the person in a fusion lehenga saree style with modern draping and bold jewelry. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Lehenga%20Saree%20Fusion/300' },
  ],
},
{
  title: 'Chudidhar Style Photoshoot',
  description: 'Studio portraits showcasing the person in traditional chudidhar outfits with various poses and moods.',
  cost: 50,
  items: [
     { label: 'Cotton Casual Chudidhar', prompt: `Create a portrait of the person in a simple cotton chudidhar with printed patterns for a casual daytime look. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Cotton%20Casual%20Chudidhar/300' },
    { label: 'Silk Party Chudidhar', prompt: `Create a portrait of the person in a silk chudidhar with embroidery and elegant dupatta styling. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Silk%20Party%20Chudidhar/300' },
    { label: 'Anarkali Style', prompt: `Create a portrait of the person in a grand Anarkali-style chudidhar with flowing fabric and detailed design. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Anarkali%20Style%20chudidhar/300' },
    { label: 'Pakistani Long Kurta', prompt: `Create a portrait of the person in a Pakistani-style long kurta chudidhar with subtle embroidery. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Pakistani%20Long%20Kurta/300' },
    { label: 'Punjabi Patiala', prompt: `Create a portrait of the person in a Punjabi-style Patiala chudidhar with heavy pleated salwar and vibrant dupatta. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Punjabi%20Patiala%20suit/300' },
    { label: 'Straight-Cut Chudidhar', prompt: `Create a portrait of the person in a straight-cut chudidhar with minimal patterns and formal styling. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Straight-Cut%20Chudidhar/300' },
    { label: 'High-Slit Designer', prompt: `Create a studio portrait of the person in a trendy high-slit designer chudidhar with modern accessories. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/High-Slit%20Designer%20chudidhar/300' },
    { label: 'Floor-Length Chudidhar', prompt: `Create a portrait of the person in a floor-length gown-style chudidhar with heavy embroidery. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Floor-Length%20Chudidhar%20gown/300' },
    { label: 'Printed Cotton Daily Wear', prompt: `Create a casual studio portrait of the person in a lightweight printed cotton chudidhar with simple styling. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Printed%20Cotton%20Chudidhar/300' },
    { label: 'Festive Embroidered Chudidhar', prompt: `Create a vibrant studio portrait of the person in an embroidered festive chudidhar with bangles and earrings. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Festive%20Embroidered%20Chudidhar/300' },
  ],
},
  {
    title: 'Anime Styles',
    description: 'Transform into iconic anime characters or art styles.',
    cost: 25,
    items: [
      { label: 'Naruto Ninja', prompt: `Style the person with a Naruto-style ninja headband and outfit. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Naruto%20ninja%20style/300' },
      { label: 'Dragon Ball Z Super Saiyan', prompt: `Transform the person into a Dragon Ball Z Super Saiyan with glowing golden hair. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Dragon%20Ball%20Z%20Super%20Saiyan/300' },
      { label: 'One Piece Pirate', prompt: `Style the person as a pirate from One Piece with a straw hat. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/One%20Piece%20Pirate%20with%20straw%20hat/300' },
      { label: 'Pokémon Trainer', prompt: `Depict the person as a Pokémon trainer with a cap and Pokéball. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Pok%C3%A9mon%20Trainer/300' },
    ],
  },
    {
    title: 'Linen Shirts',
    description: 'Casual and cool in comfortable linen.',
    cost: 30,
    items: [
      { label: 'White Linen', prompt: `A relaxed portrait of this person wearing a crisp white linen shirt, on a beautiful tropical beach at sunset. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/man%20in%20white%20linen%20shirt%20on%20beach/300' },
      { label: 'Blue Linen', prompt: `A candid shot of this person wearing a light blue linen shirt, walking through a charming European city street. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/man%20in%20blue%20linen%20shirt%20in%20city/300' },
      { label: 'Beige Linen', prompt: `A stylish portrait of this person in a beige linen shirt, sitting at an outdoor cafe with a coffee. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/man%20in%20beige%20linen%20shirt%20at%20cafe/300' },
      { label: 'Yellow Linen', prompt: `A stylish portrait of this person in a yellow linen shirt, standing at a picturesque location. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/man%20in%20yellow%20linen%20shirt%20outdoors/300' },
      { label: 'Purple Linen', prompt: `A stylish portrait of this person in a purple linen shirt, standing at a serene location with lovely weather. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/man%20in%20purple%20linen%20shirt/300' },
    ],
  },
  {
  title: 'Manchester United',
  description: 'Live the dream of being a Red Devil at Old Trafford.',
  cost: 30,
  items: [
    { label: 'Goal Celebration', prompt: 'Transform this person into a Manchester United footballer, celebrating a goal at Old Trafford with arms outstretched.', img: 'https://picsum.photos/seed/Manchester%20United%20Goal%20Celebration/300' },
    { label: 'Lifting the Trophy', prompt: 'Transform this person into a Manchester United player lifting the Premier League trophy in front of cheering fans.', img: 'https://picsum.photos/seed/Manchester%20United%20Lifting%20Trophy/300' },
    { label: 'Iconic Red Kit', prompt: 'Transform this person into a Manchester United star wearing the classic red jersey, dribbling the ball under the stadium lights.', img: 'https://picsum.photos/seed/Manchester%20United%20Red%20Kit/300' },
    { label: 'Legendary Pose', prompt: 'Transform this person into a Manchester United legend, standing proudly in front of the Stretford End.', img: 'https://picsum.photos/seed/Manchester%20United%20Legendary%20Pose/300' },
    { label: 'Derby Match Intensity', prompt: 'Transform this person into a Manchester United footballer battling against Manchester City in a fierce derby match.', img: 'https://picsum.photos/seed/Manchester%20United%20Derby%20Match/300' },
  ],
},
{
  title: 'Liverpool',
  description: 'Walk on with the Reds at Anfield.',
  cost: 30,
  items: [
    { label: 'Anfield Roar', prompt: 'Transform this person into a Liverpool footballer, celebrating in front of the Kop at Anfield.', img: 'https://picsum.photos/seed/Liverpool%20Anfield%20Roar/300' },
    { label: 'Champions League Glory', prompt: 'Transform this person into a Liverpool player lifting the UEFA Champions League trophy in a red kit.', img: 'https://picsum.photos/seed/Liverpool%20Champions%20League%20win/300' },
    { label: 'You’ll Never Walk Alone', prompt: 'Transform this person into a Liverpool footballer walking out of the tunnel with the anthem atmosphere.', img: 'https://picsum.photos/seed/Liverpool%20YNWA/300' },
    { label: 'Historic Red Jersey', prompt: 'Transform this person into a Liverpool star in the iconic red kit, sprinting down the wing.', img: 'https://picsum.photos/seed/Liverpool%20Red%20Jersey/300' },
    { label: 'Merseyside Derby', prompt: 'Transform this person into a Liverpool footballer clashing with Everton in a fierce derby.', img: 'https://picsum.photos/seed/Liverpool%20Merseyside%20Derby/300' },
  ],
},
{
  title: 'Arsenal',
  description: 'Step onto the pitch as a Gunner at the Emirates.',
  cost: 30,
  items: [
    { label: 'North London Derby', prompt: 'Transform this person into an Arsenal footballer battling Tottenham in the North London Derby at the Emirates.', img: 'https://picsum.photos/seed/Arsenal%20North%20London%20Derby/300' },
    { label: 'Invincibles Tribute', prompt: 'Transform this person into an Arsenal star inspired by the Invincibles era, wearing the red and white kit.', img: 'https://picsum.photos/seed/Arsenal%20Invincibles/300' },
    { label: 'Goal Celebration', prompt: 'Transform this person into a an Arsenal footballer celebrating a winning goal in front of fans at the Emirates.', img: 'https://picsum.photos/seed/Arsenal%20Goal%20Celebration/300' },
    { label: 'Captain’s Moment', prompt: 'Transform this person into an Arsenal captain, leading the team with the armband.', img: 'https://picsum.photos/seed/Arsenal%20Captain%20armband/300' },
    { label: 'Training Ground Focus', prompt: 'Transform this person into an Arsenal player training in full kit with a football at their feet.', img: 'https://picsum.photos/seed/Arsenal%20Training%20Ground/300' },
  ],
},
{
  title: 'Borussia Dortmund',
  description: 'Play under the Yellow Wall with Borussia Dortmund.',
  cost: 30,
  items: [
    { label: 'Yellow Wall Celebration', prompt: 'Transform this person into a Borussia Dortmund footballer celebrating in front of the famous Yellow Wall at Signal Iduna Park.', img: 'https://picsum.photos/seed/Dortmund%20Yellow%20Wall/300' },
    { label: 'Champions League Night', prompt: 'Transform this person into a Borussia Dortmund star under the lights in a Champions League match.', img: 'https://picsum.photos/seed/Dortmund%20Champions%20League/300' },
    { label: 'Classic Black and Yellow Kit', prompt: 'Transform this person into a Dortmund footballer wearing the iconic black and yellow kit, sprinting down the pitch.', img: 'https://picsum.photos/seed/Dortmund%20Black%20&%20Yellow%20kit/300' },
    { label: 'Der Klassiker', prompt: 'Transform this person into a Dortmund player battling Bayern Munich in Der Klassiker.', img: 'https://picsum.photos/seed/Dortmund%20Der%20Klassiker/300' },
    { label: 'Young Star Energy', prompt: 'Transform this person into a young Borussia Dortmund prodigy celebrating their first goal.', img: 'https://picsum.photos/seed/Dortmund%20Young%20Star/300' },
  ],
},
{
  title: 'Bayern Munich',
  description: 'Dominate Europe with Bayern Munich.',
  cost: 30,
  items: [
    { label: 'Bundesliga Trophy Lift', prompt: 'Transform this person into a Bayern Munich footballer lifting the Bundesliga Meisterschale trophy.', img: 'https://picsum.photos/seed/Bayern%20Munich%20Bundesliga%20Trophy/300' },
    { label: 'Der Klassiker Rivalry', prompt: 'Transform this person into a Bayern player facing Borussia Dortmund in a tense match.', img: 'https://picsum.photos/seed/Bayern%20Munich%20Der%20Klassiker/300' },
    { label: 'Champions League Victory', prompt: 'Transform this person into a Bayern Munich star celebrating a Champions League win in red kit.', img: 'https://picsum.photos/seed/Bayern%20Munich%20Champions%20League/300' },
    { label: 'Training Ground Power', prompt: 'Transform this person into a Bayern Munich footballer in training gear, focused and determined.', img: 'https://picsum.photos/seed/Bayern%20Munich%20Training/300' },
    { label: 'Historic Kit Style', prompt: 'Transform this person into a Bayern Munich legend wearing a retro red and white kit.', img: 'https://picsum.photos/seed/Bayern%20Munich%20Historic%20Kit/300' },
  ],
},
{
  title: 'Chelsea',
  description: 'Wear the Blues and shine at Stamford Bridge.',
  cost: 30,
  items: [
    { label: 'Stamford Bridge Glory', prompt: 'Transform this person into a Chelsea footballer scoring at Stamford Bridge.', img: 'https://picsum.photos/seed/Chelsea%20Stamford%20Bridge/300' },
    { label: 'Champions League Triumph', prompt: 'Transform this person into a Chelsea player lifting the UEFA Champions League trophy in a blue kit.', img: 'https://picsum.photos/seed/Chelsea%20Champions%20League%20win/300' },
    { label: 'London Derby', prompt: 'Transform this person into a Chelsea star battling Arsenal in a London derby.', img: 'https://picsum.photos/seed/Chelsea%20London%20Derby/300' },
    { label: 'Classic Blue Jersey', prompt: 'Transform this person into a Chelsea footballer dribbling in the iconic blue jersey.', img: 'https://picsum.photos/seed/Chelsea%20Blue%20Jersey/300' },
    { label: 'Captain of Chelsea', prompt: 'Transform this person into a Chelsea captain, leading the team with pride.', img: 'https://picsum.photos/seed/Chelsea%20Captain/300' },
  ],
},
{
  title: 'Real Madrid',
  description: 'Play like a Galáctico at the Santiago Bernabéu.',
  cost: 30,
  items: [
    { label: 'La Liga Champion', prompt: 'Transform this person into a Real Madrid footballer celebrating a La Liga title at the Bernabéu.', img: 'https://picsum.photos/seed/Real%20Madrid%20La%20Liga%20Champion/300' },
    { label: 'Galáctico Style', prompt: 'Transform this person into a Real Madrid star in the famous all-white kit, dribbling the ball.', img: 'https://picsum.photos/seed/Real%20Madrid%20Gal%C3%A1ctico/300' },
    { label: 'El Clásico Clash', prompt: 'Transform this person into a Real Madrid player facing Barcelona in El Clásico.', img: 'https://picsum.photos/seed/Real%20Madrid%20El%20Cl%C3%A1sico/300' },
    { label: 'Champions League Glory', prompt: 'Transform this person into a Real Madrid footballer lifting the Champions League trophy.', img: 'https://picsum.photos/seed/Real%20Madrid%20Champions%20League/300' },
    { label: 'Legend Tribute', prompt: 'Transform this person into a Real Madrid legend with iconic poses inspired by Zidane, Ronaldo, or Ramos.', img: 'https://picsum.photos/seed/Real%20Madrid%20Legend/300' },
  ],
},
{
  title: 'FC Barcelona',
  description: 'Join the Blaugrana and shine at Camp Nou.',
  cost: 30,
  items: [
    { label: 'El Clásico Rivalry', prompt: 'Transform this person into a Barcelona footballer facing Real Madrid in El Clásico at Camp Nou.', img: 'https://picsum.photos/seed/Barcelona%20El%20Cl%C3%A1sico/300' },
    { label: 'Tiki-Taka Magic', prompt: 'Transform this person into a Barcelona star playing beautiful tiki-taka football in the Blaugrana kit.', img: 'https://picsum.photos/seed/Barcelona%20Tiki-Taka/300' },
    { label: 'Goal Celebration', prompt: 'Transform this person into a Barcelona player celebrating a goal in front of the fans at Camp Nou.', img: 'https://picsum.photos/seed/Barcelona%20Goal%20Celebration/300' },
    { label: 'Champions League Night', prompt: 'Transform this person into a Barcelona footballer on a Champions League night under the lights.', img: 'https://picsum.photos/seed/Barcelona%20Champions%20League/300' },
    { label: 'Historic Jersey Tribute', prompt: 'Transform this person into a Barcelona legend wearing a classic retro jersey.', img: 'https://picsum.photos/seed/Barcelona%20Historic%20Jersey/300' },
  ],
},

  {
    title: 'Football Jerseys',
    description: 'Step into your favorite football club or national team jersey.',
    cost: 30,
    items: [
      { label: 'Manchester United', prompt: `Place the person in a Manchester United football jersey. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Manchester%20United%20jersey/300' },
      { label: 'Real Madrid', prompt: `Place the person in a Real Madrid football jersey. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Real%20Madrid%20jersey/300' },
      { label: 'Barcelona', prompt: `Place the person in a Barcelona football jersey. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Barcelona%20jersey/300' },
      { label: 'Brazil National Team', prompt: `Place the person in a Brazil football jersey. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Brazil%20national%20team%20jersey/300' },
      { label: 'Argentina National Team', prompt: `Place the person in an Argentina football jersey, inspired by Messi. ${CONSISTENCY_PROMPT}`, img: 'https://picsum.photos/seed/Argentina%20national%20team%20jersey/300' },
    ],
  },
];