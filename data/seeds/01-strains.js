
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Strains')
    .then(function () {
      // Inserts seed entries
      return knex('Strains').insert([
        {
          strain_id: 143,
          strain_name: 'Aurora-Borealis',
          strain_type: 'indica',
          strain_rating: '4.2',
          strain_description: 'Also known as A-B, Aurora B., or simply Aurora, Aurora Borealis is a Flying Dutchmen strain resulting from a cross between a carefully selected Northern Lights #10 and a sweet Skunk #1 father. A vigorous plant with heavy resinous buds, this strain has the best attributes from both its parents. Aurora Borealis grows into a medium size plant similar to Skunk#1, and has a sweet and fruity taste with a hashy sharpness. Very high yields and a fast maturation time make this cross an ideal cash-cropper both indoors and out. The subtle, calming effects have helped this strain gain popularity in the Netherlands and Canada with its sweet, skunky flavors and earthy undertones.',
          strain_effects: 'Happy,Euphoric,Relaxed,Sleepy,Hungry',
          strain_flavors: 'Earthy,Woody,Sweet'
        },
        {
          strain_id: 144,
          strain_name: 'Aurora-Indica',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Aurora Indica, bred by Nirvana Seeds, is a 90% indica cross between Afghan and Northern Lights. Fulfilling our expectations of an indica, this strain induces heavy full-body effects and a sedating cerebral calm. Aurora Indica is a potent strain for evening treatment of insomnia, pain, and other conditions requiring a restful night’s sleep. The short plants produce dense, bulky buds dusted in a thick layer of crystal resin. Different phenotypes emerge under different growing conditions, giving way to variable bud structures and aromas ranging from fruity to floral. Nirvana Seeds recommends a 9 to 11-week flowering time for indoor gardens, or a mid-September harvest for outdoor growers.',
          strain_effects: 'Relaxed,Sleepy,Happy,Euphoric,Uplifted',
          strain_flavors: 'Earthy,Spicy/Herbal,Tropical'
        },
        {
          strain_id: 145,
          strain_name: 'Avalon',
          strain_type: 'hybrid',
          strain_rating: '3.6',
          strain_description: 'A selectively bred cross between Afghani and Blueberry.  Avalon has strong sedating effects with a hashy taste.',
          strain_effects: 'Aroused,Tingly,Hungry,Uplifted,Giggly',
          strain_flavors: 'Sweet,Earthy,Nutty'
        },
        {
          strain_id: 146,
          strain_name: 'Avi',
          strain_type: 'hybrid',
          strain_rating: '3',
          strain_description: 'Avi is a high-CBD strain grown by Canadian LP Peace Naturals Project, Inc. It is a balanced hybrid, 50% indica and 50% sativa, with a 2:1 CBD:THC ratio. Its pungent aroma carries sweet hints of fruit and berry that create relaxing and calming effects perfect for relieving body aches and pains.',
          strain_effects: 'Relaxed,Focused,Uplifted,Creative,Happy',
          strain_flavors: 'Earthy,Pungent'
        },
        {
          strain_id: 147,
          strain_name: 'Avi-Dekel',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'Avi-Dekel is a sativa-dominant strain developed by Tikun Olam to contain high levels of CBD and almost no THC. Its CBD content, reaching as high as 15.8 percent, is intended to treat inflammation as well as sleep and digestive disorders. Avi-Dekel is ideal for patients seeking relief without the psychoactive effects of THC.',
          strain_effects: 'Relaxed,Uplifted,Happy,Focused,Energetic',
          strain_flavors: 'Earthy,Flowery,Sweet'
        },
        {
          strain_id: 148,
          strain_name: 'Ayahuasca-Purple',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Ayahuasca Purple by Barney’s Farm is a deeply relaxing indica-dominant cross of Master Kush and Red River Delta. The primary aromas are unique, expressing hints of hazelnut and papaya. This indica-dominant strain develops deep purple foliage and is sensitive to overfeeding. Enjoy Ayahuasca Purple at the end of the day to maximize its relaxing, full-body effects.  ',
          strain_effects: 'Relaxed,Euphoric,Sleepy,Happy,Tingly',
          strain_flavors: 'Spicy/Herbal,Pungent,Earthy'
        },
        {
          strain_id: 149,
          strain_name: 'Azure-Haze',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Legendary breeder DJ Short is at it again, this time adding his famous Blueberry genetics to the multiple award-winning Bay Area clone Super Silver Haze to create an easy-to-grow hybrid that produces massive yields of elongated, spear-shaped flowers. Those who pay attention to lineage may say, “Wait, isn’t this just Blue Dream?”, but the Azure Haze is fathered by a male that is one step closer to the parental genetics (in this case, an f4 Blueberry) than the Blue Dream father (an f5), thus making it a distinct hybrid.  Azure Haze presents a fruity palette of terpenes and an upbeat, long-lasting high that slowly gives way to deep, dreamy relaxation. Its THC content can generally be measured between 18-24%.',
          strain_effects: 'Relaxed,Uplifted,Focused,Euphoric,Happy',
          strain_flavors: 'Berry,Sweet,Blueberry'
        },
        {
          strain_id: 150,
          strain_name: 'B-52',
          strain_type: 'indica',
          strain_rating: '4.1',
          strain_description: 'B-52 is a 75/25 indica-dominant cross between Skunk and Big Bud. This hybrid by Nirvana Seeds is a sweet mix of skunky flavors that have remarkable cerebral effects for a strain that leans towards the indica end of the spectrum. It is a great strain for commercial production but its unique heady effects are enjoyed by connoisseurs and those with an affinity towards the Skunk family tree. A great strain for the relaxing while watching a movie, B-52 will leave you giggling and flying high.',
          strain_effects: 'Relaxed,Happy,Giggly,Focused,Uplifted',
          strain_flavors: 'Sweet,Woody,Earthy'
        },
        {
          strain_id: 151,
          strain_name: 'B-Witched',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'B-Witched by Ocean Grown Seeds is a magical cross of arcane genetics. By combining OGS Wizard’s Potion and the famous Witches Weed, a frosted herbaceous phantasm is brought to life, exhibiting notes of grape, forest floor, and grapefruit. Its terpene profile has also been described as “cupcake-ish.” The effects of B-Witched are enthralling, muting stress, anxiety, and nausea with ease. ',
          strain_effects: 'Euphoric,Relaxed,Happy,Hungry,Sleepy',
          strain_flavors: 'Earthy,Sweet,Citrus'
        },
        {
          strain_id: 152,
          strain_name: 'Bb-King',
          strain_type: 'indica',
          strain_rating: '3.8',
          strain_description: 'B.B. King, named in honor of the Blues musician and songwriter, is an indica-dominant strain bred by MTG Seeds that crosses Blackberry Kush and Space Monster. A sweet and earthy flavor ushers in B.B. King’s sedating effects, which lull both body and mind into deep relaxation. If sleep doesn’t hit you first, be prepared to address a ravenous appetite. This indica typically blooms with dark purple-tipped flowers, highlighting its contrasting blanket of white crystal resin.',
          strain_effects: 'Sleepy,Happy,Relaxed,Uplifted,Creative',
          strain_flavors: 'Lemon,Earthy,Citrus'
        },
        {
          strain_id: 153,
          strain_name: 'B4',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'B4, bred by MTG Seeds, is a hybrid cannabis strain that descends from Blue Dream and Chemdawg 4. Blissful, lightweight euphoria helps incite happiness and laughter, making this strain a perfect choice for stress and anxiety relief. Green-blue hues peek out from under a silvery coat of crystal trichomes, and its dense bud structure is telling of its OG Kush ancestry. ',
          strain_effects: 'Happy,Uplifted,Euphoric,Focused,Relaxed',
          strain_flavors: 'Spicy/Herbal,Berry,Skunk'
        },
        {
          strain_id: 154,
          strain_name: 'Bc-Big-Bud',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'A cousin to the indica-dominant Big Bud cannabis strain from Amsterdam, BC Big Bud is a mostly sativa hybrid with potent cerebral effects. This fruity, citrus-smelling strain hailing from British Columbia delivers a balanced combination of indica and sativa sensations as well as relief to pain and nausea. As its name suggests, BC Big Bud plants produce colossal harvests after its 8 to 9 week flowering period that have both growers and consumers swooning.',
          strain_effects: 'Relaxed,Euphoric,Happy,Creative,Sleepy',
          strain_flavors: 'Earthy,Pungent,Tropical'
        },
        {
          strain_id: 155,
          strain_name: 'Bc-Roadkill',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'BC Roadkill is another strain that British Columbia is proud to call their own. This top-shelf strain is rumored to be one of the stinkiest out there (though not in the same way that roadkill is). Growers love this strain for its consistent above average yields and 8 week flowering time. The flowers will be large and purple-blue with red hairs, and they typically reek of skunk and citrus. Its musky aroma is due to its BC Roadkill Skunk parent, which was bred with Deep Chunk to create this hybrid. Consumers also flock to scoop up this Roadkill for its strong buzz that is relaxing and trancey without being a complete knockout. Sleep may come easily, but so may euphoria and happy conversation, making this a daytime choice for many treating anxiety and stress.',
          strain_effects: 'Euphoric,Uplifted,Happy,Giggly,Relaxed',
          strain_flavors: 'Skunk,Earthy,Woody'
        },
        {
          strain_id: 156,
          strain_name: 'Bc-Sweet-Tooth',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'Developed in British Columbia by BC Bud Depot, BC Sweet tooth is an indica-dominant hybrid known for its quick flowering time and candy taste.  A hardy plant, this strain can be grown outdoors where it can flower in under 7 weeks, but it prefers the indoors where it may flower as soon as 6 weeks. The result of a cross with earlier generations of BC Sweet Tooth and classic Sweet Tooth, these sugary flowers are sure to satisfy your craving. The crystalline buds have a strong, sweet smell with a hint of citrus, and users report that this treat satisfies with a long-lasting, potent feeling that hits fast.',
          strain_effects: 'Uplifted,Happy,Relaxed,Sleepy,Euphoric',
          strain_flavors: 'Sweet,Honey,Tree,Fruit'
        },
        {
          strain_id: 157,
          strain_name: 'Bcn-Diesel',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'BCN Diesel by Kannabia Seed Company is a pungent hybrid cross of familiar and potent genetics. Created by crossing NYC Diesel and Black Domina, this strain produces dense, bullet-shaped buds that stink of citrus and fuel. It achieves this bud structure and density through the addition of Black Domina while the NYC Diesel contributes to the strain’s heady, energetic buzz. BCN Diesel has a snappy 8 week flower time, but has been known to benefit from an extra week for maximum yield and potency. ',
          strain_effects: 'Sleepy,Focused,Happy,Hungry',
          strain_flavors: 'None'
        },
        {
          strain_id: 158,
          strain_name: 'Bog-Bubble',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'BOG Bubble is an indica-dominant hybrid bred by B.O.G. Seeds. These frosty, sticky buds offer a sweet, bubblegum aroma and deliver long-lasting, uplifting effects. Grows are successful indoor or outdoor, flowering between 45 and 50 days.',
          strain_effects: 'Uplifted,Happy,Relaxed,Creative,Hungry',
          strain_flavors: 'Flowery,Berry,Earthy'
        },
        {
          strain_id: 159,
          strain_name: 'Bsc',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'BSC is a hybrid cannabis strain that follows in the footsteps of its Girl Scout Cookies parent, but named for the youthful scouting group\'s male equivalant. With potent effects that hug the mind and body in tranquil euphoria BSC introduces deep, heavy relaxation throughout the body, but not before making your head reel with calm and happy thoughts. The cerebral buzz tapers down into a foggy daze that helps you abandon worries and slide into a low-key afternoon or a restful night’s sleep. Putting your nose in a jar of BSC isn’t altogether unlike stealing a smell from the cookie jar in your kitchen as sweet, earthy aromas burst forth with subtle notes of woody pine.',
          strain_effects: 'Relaxed,Happy,Hungry,Euphoric,Giggly',
          strain_flavors: 'Earthy,Pungent,Sweet'
        },
        {
          strain_id: 160,
          strain_name: 'Bad-Azz-Kush',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'Bad Azz Kush by Barney’s Farm was created with the help of rapper Bad Azz of Dogg Pound Gangsta Crips. While the full story remains untold, Bad Azz contributed to this new Kush cut that brings traditional OG elements to the table while elevating yield and flavor. Bad Azz Kush is known to express hash and berry aromas with an earthy, spicy flavor on the palate. It is a cross of OG Kush, Purple Urkle, and Afghan Kush. This strain’s weighted physical effects and carefree euphoria make it a perfect end of the day smoke. ',
          strain_effects: 'None',
          strain_flavors: ''
        },
        {
          strain_id: 161,
          strain_name: 'Bakerstreet',
          strain_type: 'indica',
          strain_rating: '3.7',
          strain_description: 'Bakerstreet is a variety of Hindu Kush grown by Canadian LP Tweed. It is a pure indica with origins in the Hindu Kush mountain range. The subtle sweet and earthy sandalwood aroma of Bakerstreet induces a deep sense of calm that helps bring relief to those suffering pain, nausea, and stress disorders. Its heavy body effects make it a top strain to help you relax and unwind at the end of a long day. ',
          strain_effects: 'Euphoric,Relaxed,Giggly,Happy,Sleepy',
          strain_flavors: 'Earthy,Diesel,Sweet'
        },
        {
          strain_id: 162,
          strain_name: 'Balmoral',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Balmoral is a variety of UK Cheese grown by Canadian LP Tweed, Inc. It carries the classic skunky blue cheese aroma that has given the Cheese strains their global reputation. The relaxing yet balanced effects of Balmoral help keep nausea and pain at bay while keeping stress and anxiety to minimum.',
          strain_effects: 'Relaxed,Happy,Uplifted,Focused,Talkative',
          strain_flavors: 'Earthy,Cheese,Pine'
        },
        {
          strain_id: 163,
          strain_name: 'Banana-Candy',
          strain_type: 'indica',
          strain_rating: '4.2',
          strain_description: '',
          strain_effects: 'Relaxed,Euphoric,Uplifted,Creative,Happy',
          strain_flavors: 'Tree,Fruit,Earthy,Sweet'
        },
        {
          strain_id: 164,
          strain_name: 'Banana-Cream-Og',
          strain_type: 'hybrid',
          strain_rating: '4.8',
          strain_description: 'Banana Cream OG is grown by Vagrant Hill Farms of Forest Grove, Oregon. This strain is a hybrid cross of Blue Dream, Banana OG, and Ocean Beach OG. It emits strong notes of orange and spearmint, and expresses tight lime green buds. Not much more is known about this strain other than its heavy, OG-forward effects that lay into the body and gain weight with continued consumption.',
          strain_effects: 'Relaxed,Creative,Tingly,Uplifted,Focused',
          strain_flavors: 'Minty,Mint,Pine'
        },
        {
          strain_id: 165,
          strain_name: 'Banana-Diesel',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Banana Diesel balances the polar effects of its parent strains, Banana Kush and Super Sour Diesel. A slightly energizing kick followed by intense focus makes this a perfect strain for daytime consumption with effects that steer clear of undesirable lethargy. These thick, pale green buds reek a sweet, fruity aroma and preface the tangy taste to come. Banana Diesel is a potent appetite stimulant and stress combatant, suitable for either weight or mood disorders.',
          strain_effects: 'Happy,Uplifted,Euphoric,Relaxed,Giggly',
          strain_flavors: 'Diesel,Earthy,Skunk'
        },
        {
          strain_id: 166,
          strain_name: 'Banana-Kush',
          strain_type: 'hybrid',
          strain_rating: '4.3',
          strain_description: 'This legendary West Coast strain crosses Ghost OG and Skunk Haze to create an indica-dominant hybrid that tastes and smells like a bushel of fresh bananas. Although it leans towards an indica genetically, the effects are balanced by the Haze’s mellow sativa buzz that provides a relaxed sense of euphoria. A great choice when dealing with stress or depression, Banana Kush also helps stimulate your creative juices and can help you remain talkative in social settings.',
          strain_effects: 'Happy,Relaxed,Euphoric,Uplifted,Talkative',
          strain_flavors: 'Sweet,Tropical,Tree,Fruit'
        },
        {
          strain_id: 167,
          strain_name: 'Banana-Og',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Banana OG is an indica-dominant cross between OG Kush and Banana. With a smell and flavor of overripe bananas, this hybrid definitely earns its name. Banana OG has tested at over 25% THC and has a reputation as a “creeper,” leaving those who over-imbibe in a near comatose state before intense hunger and sleepiness sets in. Patients treating muscular pain, loss of appetite, and insomnia may benefit from Banana OG.',
          strain_effects: 'Relaxed,Happy,Hungry,Euphoric,Sleepy',
          strain_flavors: 'Tropical,Earthy,Sweet'
        },
        {
          strain_id: 168,
          strain_name: 'Banana-Peel',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'Banana Peel is a hybrid cannabis strain bred by Illuminati Seeds that descends from Banana OG (Laffy Taffy cut) and Pestilence, an Abusive OG and West Coast Dawg cross. Together, these parent strains bring both flavor and potency to the mix. With sweet flavors of banana taffy, Banana Peel delivers a crushing wave of euphoria that will have you hitting the couch like bricks. ',
          strain_effects: 'Relaxed,Euphoric,Uplifted,Happy,Sleepy',
          strain_flavors: 'Spicy/Herbal,Tropical,Earthy'
        },
        {
          strain_id: 169,
          strain_name: 'Bananas',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'Bananas from Leafs by Snoop is an indica-dominant hybrid strain offered in concentrate form. This shatter intends to capture sweet tropical flavors of fruit and banana, and offers energizing cerebral effects to fuel creativity. This strain is high in THC with a potency that’s said to stretch to 22%.',
          strain_effects: 'Relaxed,Energetic,Happy,Uplifted,Focused',
          strain_flavors: 'Tropical,Grape,Vanilla'
        },
        {
          strain_id: 170,
          strain_name: 'Bandana',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Bandana is a hybrid strain that combines Banana OG and 707 Headband, inheriting from its parents a sweet banana aroma and the buzzing cerebral sensation that first lent Headband its name. On the exhale, Bandana unleashes its fruity flavor over subtle earthy and sour notes. Powerful, heady euphoria awakens blissful relaxation in the mind while leaving the body feeling light and free of couchlocked sedation. It should be noted that AlphaKronik Genes bred a 70% sativa variation of Bandana that combines 707 Headband with a backcrossed Snowdawg.',
          strain_effects: 'Euphoric,Happy,Relaxed,Talkative,Creative',
          strain_flavors: 'Earthy,Pungent,Woody'
        },
        {
          strain_id: 171,
          strain_name: 'Bangi-Haze',
          strain_type: 'sativa',
          strain_rating: '0',
          strain_description: 'Bangi Haze by Ace Seeds is an energetic sativa with old world genetics. An F8 stabilized cross of Congolese and Nepalese, these resilient landrace genetics give the strain strong resistance to both mold and cold climates, which make it a suitable choice for outdoor growers. This stimulating flower emits an intoxicating floral aroma with pronounced notes of lemon and anise. Utilize Bangi Haze to stimulate the body and promote activity. ',
          strain_effects: 'Aroused,Uplifted,Euphoric,Hungry',
          strain_flavors: 'Berry,Tree,Fruit,Cheese'
        },
        {
          strain_id: 172,
          strain_name: 'Bango',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'Bango is a hybrid strain with a rich terpene profile and tropical flavors worth sharing. This hybrid is a combination of White Fire Alien OG and Mango Kush, exhibiting subtle hints of each on the nose and palate. With sweet, fruity flavors of mango, banana, and pine, and an aroma with sweet floral notes and citrus peel, Bango offers an enchanting bouquet that will linger in the air. Bango’s effects are equal parts cerebral and stimulating, and is certain to get you talking. This strain is preferred for mood elevation, appetite stimulation, and nullifying depression. ',
          strain_effects: 'Uplifted,Creative,Energetic,Euphoric,Focused',
          strain_flavors: 'Lime,Earthy,Pungent'
        },
        {
          strain_id: 173,
          strain_name: 'Barbara-Bud',
          strain_type: 'indica',
          strain_rating: '3.6',
          strain_description: 'Barbara Bud is powerful indica cross between Shishkaberry and Afghani that eliminates symptoms without too much mental cloudiness. It has a fruity, citrus aroma with sweet undertones of bubblegum, and many patients have found Barbara Bud to help with pain, stress, and muscle spasms.',
          strain_effects: 'Relaxed,Euphoric,Happy,Hungry,Uplifted',
          strain_flavors: 'Citrus,Earthy,Mango'
        },
        {
          strain_id: 174,
          strain_name: 'Batgirl',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'Batgirl is a sativa-dominant hybrid with beautiful effects. This Jack’s Cleaner and Blueberry cross brings out a unique and pleasant aroma of sweet berry and spicy chemicals. The strain’s hybrid effects express themselves as a heady euphoria that uplifts the mind while gently coating the body in calming haze. Weight can be felt on the eyelids as Batgirl circulates a warm, calming sensation through the body, making this strain ideal for consumers looking to shrug off stress and fatigue while improving mood.',
          strain_effects: 'Euphoric,Relaxed',
          strain_flavors: 'None'
        },
        {
          strain_id: 175,
          strain_name: 'Batman-Og',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Batman OG, named for the Caped Crusader of the DC Universe, is a potent indica that hits the body like POW! This knockout strain binds the consumer to the couch and offers relaxing physical effects that are calming and sedative. Batman OG has deep earthy notes intermixed with scents of skunk and pine. It combats insomnia, stress, and chronic pain so well, it will have you saying, “Holy indica, Batman!”  ',
          strain_effects: 'Sleepy,Hungry,Happy,Relaxed,Giggly',
          strain_flavors: 'Skunk,Pungent,Sweet'
        },
        {
          strain_id: 176,
          strain_name: 'Bay-11',
          strain_type: 'sativa',
          strain_rating: '4.5',
          strain_description: 'Bay 11, bred by Grand Daddy Purp, is a potent sativa strain with unspecified genetics. Its dense, pale buds are coated in amber resin with a sweet, fruity aroma that initiates immediate relaxation. A favorite strain for patients needing daytime relief, Bay 11 eases pain while boosting appetite. Bay 11 has a 67 day flowering period indoors, and outdoor gardens will be ready for harvest near the end of October.',
          strain_effects: 'Happy,Relaxed,Uplifted,Energetic,Creative',
          strain_flavors: 'Sweet,Earthy,Citrus'
        },
        {
          strain_id: 177,
          strain_name: 'Bay-Dream',
          strain_type: 'sativa',
          strain_rating: '4.3',
          strain_description: 'Granddaddy Purp’s Bay Dream is a dreamy sativa cross between the esteemed Blue Dream and Bay 11. Blue Dream passes on a subtle pine aroma coupled with sweet lemon. Patients needing an appetite boost tend to find relief in Bay Dream, and its cerebrally-focused euphoria provides a steady buzz that begins to feel intoxicating with increased doses. The effects are fast-paced and active, so Bay Dream may not be the best choice for anxiety-prone consumers. Bay Dream’s heavy yields make this sativa a favorite among growers, who wait 9 to 10 weeks for it to flower indoors. Outdoor plants sown at the beginning of June will finish flowering near the end of October with heights that stretch as tall as 10 feet.',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Focused',
          strain_flavors: 'Citrus,Earthy,Sweet'
        },
        {
          strain_id: 178,
          strain_name: 'Bear-Dance',
          strain_type: 'hybrid',
          strain_rating: '4.8',
          strain_description: 'Bear Dance is a sativa-dominant hybrid created by 303 Seeds. A cross between a Humboldt Snowcap mother (Humboldt Snow x Haze) and a Pure Kush x Uzbeki Hashplant father, this strain delivers a truly funky aroma and flavor that is dominated by lemon zest and herbal undertones. Bear Dance has a tendency to significantly stretch over its 9-11 week flowering period, so make sure you’ve got the canopy space. ',
          strain_effects: 'Uplifted,Euphoric,Giggly,Happy,Energetic',
          strain_flavors: 'Earthy,Minty,Sweet'
        },
        {
          strain_id: 179,
          strain_name: 'Beast-Mode-20',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: 'Beast Mode 2.0, also known as BlueFire OG, is an indica-dominant hybrid of Master Kush and White Fire OG. It is a proprietary strain distributed by Green Umbrella in Seattle, and bred by Grass Roots Pharm. The strain was developed on the heels of Green Umbrella\'s other successful proprietary strain, Beast Mode OG. After another successful season for both Beast Mode OG and Seattle’s infamous running back, Grass Roots Pharm and Green Umbrella collaborated to bring Beast Mode 2.0 to the medical market, with plans to make it available for recreational consumption later this summer. Beast Mode 2.0 has a sweet mix of earthy berry and piney Kush flavors and has tested as high as 23% total cannabinoids by Steep Hill Lab. The effects of this hybrid are steered by the heavy indica properties that medical patients seek when fighting chronic pain, sleeplessness, or a lack of appetite. ',
          strain_effects: 'Relaxed,Sleepy,Tingly,Happy,Euphoric',
          strain_flavors: 'Earthy,Woody,Berry'
        },
        {
          strain_id: 180,
          strain_name: 'Beast-Mode-Og',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Beast Mode OG is a proprietary strain of cannabis distributed by Green Umbrella, a Seattle-based delivery service. When the grower, Zion Gardens, first received the strain they believed it was a Girl Scout Cookies cut, but after growing it out it became apparent that this strain was either an exceptional phenotype of OG Kush or it was an OG-dominant hybrid of some kind. The strain was dubbed Beast Mode OG after tasting and testing showed that the potent effects induced a powerful punch similar to the running style of NFL Running Back Marshawn Lynch, nicknamed Beast Mode. The popularity of the strain was amplified to celebrity status as Seattle’s football team claimed its first championship following the 2013 season. The strain itself stays true to OG genetics with a pungent, piney Kush aroma that provides a balance between indica and sativa effects. Beast Mode OG is a great mood elevator and serves as a great answer to stress and body pain.',
          strain_effects: 'Relaxed,Euphoric,Uplifted,Talkative,Happy',
          strain_flavors: 'Pine,Apricot,Earthy'
        },
        {
          strain_id: 181,
          strain_name: 'Bedford-Glue',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'Bedford Glue is a Midwest twist on one of the cannabis industry’s rising stars. This strain was created by combining Gorilla Glue #1 with Highwayman, lending a stimulating alertness to Gorilla Glue #1’s robust potency. It has a forest-like aroma with notes of pine, pepper, and herbs. Bedford Glue is generally a heady strain with mild body effects, making it an suitable hybrid for consumers seeking a THC content above 20% without overly debilitating effects.  ',
          strain_effects: 'Happy,Uplifted,Euphoric,Giggly,Relaxed',
          strain_flavors: 'Pepper,Pine,Sage'
        },
        {
          strain_id: 182,
          strain_name: 'Bedica',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'Bedica is a strain produced by Canadian LP Bedrocan. It is a heavy indica with an average THC content of around 14%. The high levels of the terpene myrcene found in Bedica are known to produce a sedating, calming effect perfect for those looking for stress relief or a good night’s sleep.',
          strain_effects: 'Relaxed,Sleepy,Hungry,Focused,Euphoric',
          strain_flavors: 'Pungent,Cheese,Woody'
        },
        {
          strain_id: 183,
          strain_name: 'Bediol',
          strain_type: 'sativa',
          strain_rating: '4.7',
          strain_description: 'Bediol by Canadian LP Bedrocan is a sativa-dominant strain with a balanced cannabinoid profile of 6.5% THC and 8% CBD. This almost even split caters to a variety of patient needs, including relief of pain, inflammation, anxiety, and nausea. Due to its heightened levels of CBD, Bediol provides a subdued high that is less euphoric and more relaxing. Still, those sensitive to THC should mind their dose. ',
          strain_effects: 'Relaxed,Talkative,Happy,Focused,Uplifted',
          strain_flavors: 'Mango,Citrus,Lemon'
        },
        {
          strain_id: 184,
          strain_name: 'Bell-Ringer',
          strain_type: 'indica',
          strain_rating: '5',
          strain_description: 'Bell Ringer by Khush Kush is a heavyweight indica with a complex terpene profile. Khush Kush’s renowned one-two punch Bell Ringer is a combination of Hindu Skunk and Stardawg mixed with the original heavyweight, Pre-98 Bubba Kush. In true indica fashion, Bell Ringer will stimulate your appetite and knock you out. The effects are weighted and euphoric, relieving physical pain while saddling the consumer with the aforementioned “muchy mania.” Enjoy Bell Ringer and its acrid, astringent, petrol aroma later in the day to maximize the strain’s sedative qualities.',
          strain_effects: 'Relaxed,Sleepy,Euphoric,Hungry,Happy',
          strain_flavors: 'Sweet,Citrus,Pungent'
        },
        {
          strain_id: 185,
          strain_name: 'Belladonna',
          strain_type: 'hybrid',
          strain_rating: '4',
          strain_description: 'Belladonna is a mostly sativa strain that also carries good indica characteristics making for a very nice hybrid.  A faster flowering time than typical sativa strains makes Belladonna a favorite among growers.  With a fruity smell and a trippy high Paradise Seeds has bred a winner.',
          strain_effects: 'Happy,Sleepy,Giggly,Euphoric,Uplifted',
          strain_flavors: 'Peach,Earthy,Butter'
        },
        {
          strain_id: 186,
          strain_name: 'Berkeley',
          strain_type: 'sativa',
          strain_rating: '4.3',
          strain_description: 'Berkeley is rumored to be the super-potent botany project of a student at the prestigious California university of the same name. This strain is certainly an overachiever with its extremely high THC content and lightning fast flowering time—as short as 4 weeks! Berkeley is known to give energetic, buzzy effects that are typical of sativas. This strain will stimulate your mind, but beware, it may cause anxiety for some users.',
          strain_effects: 'Talkative,Happy,Uplifted,Energetic,Focused',
          strain_flavors: 'Citrus,Sweet,Pungent'
        },
        {
          strain_id: 187,
          strain_name: 'Bermuda-Sour',
          strain_type: 'hybrid',
          strain_rating: '0',
          strain_description: 'Bermuda Sour by Deschutes Growery is a hybrid mashup of diametrically opposite strains. It was created by crossing East Coast Sour Diesel and Triangle Kush, and emits a complex bouquet of lemons, diesel, and earth. This strain’s cannabinoid profile contains just over 21% THC as well as touches of terpenes terpinolene, limonene, and ocimene. The overall tone and effects of the strain are uplifting and smooth.    ',
          strain_effects: 'None',
          strain_flavors: 'None'
        },
        {
          strain_id: 188,
          strain_name: 'Berry-Bomb',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Berry Bomb is a hybrid cross between Blueberry and Bomb #1 that shows off its indica-leaning genetics through powerful sedation. A sweet blueberry and earthy pine flavor launches you into Berry Bomb’s potent full-body effects, which can easily help you transition into a restful night or an afternoon nap. According to its breeders at Bomb Seeds, Berry Bomb sometimes expresses itself in cool hues of blue in lower temperatures. Its flowers explode into growth early on, stretching especially tall in outdoor gardens. Berry Bomb thrives in screen of green (SCROG) setups, and indoor plants finish their flowering in a short 6 to 8 weeks.',
          strain_effects: 'Relaxed,Happy,Euphoric,Tingly,Sleepy',
          strain_flavors: 'Berry,Blueberry,Flowery'
        },
        {
          strain_id: 189,
          strain_name: 'Berry-Larry',
          strain_type: 'hybrid',
          strain_rating: '4.8',
          strain_description: 'Berry Larry by Taste Budz is an indica-leaning phenotype of Lemon Larry OG. This strain produces a laid-back body buzz while still allowing the consumer to get things done. The effects are happy, easy-going, and useful when it comes to tempering inflammation, mood, and stress. Like other members of the OG family, this strain has a sweet, piney aroma with a tart berry flavor unique to this phenotype. Berry Larry’s buds express touches of dark, colorful foliage, giving the strain an alluring appearance.  ',
          strain_effects: 'Relaxed,Uplifted,Creative,Euphoric,Talkative',
          strain_flavors: 'Berry,Citrus,Orange'
        },
        {
          strain_id: 190,
          strain_name: 'Berry-Noir',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Berry Noir is an indica strain that competed in the 2014 L.A. Cannabis Cup.',
          strain_effects: 'Relaxed,Euphoric,Sleepy,Happy,Hungry',
          strain_flavors: 'Berry,Earthy,Sweet'
        },
        {
          strain_id: 191,
          strain_name: 'Berry-Og',
          strain_type: 'hybrid',
          strain_rating: '4.3',
          strain_description: 'Berry OG is an indica-dominant hybrid cross between OG Kush and Blueberry.',
          strain_effects: 'Happy,Relaxed,Uplifted,Euphoric,Sleepy',
          strain_flavors: 'Berry,Blueberry,Earthy'
        },
        {
          strain_id: 192,
          strain_name: 'Berry-White',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Berry White is a hybrid strain that is the offspring of parents of near-celebrity status in the cannabis world: Blueberry and White Widow. Berry is famous in its own right for its even, balanced effects that offer relaxation from stress and anxiety along with a sense of euphoria. This strain is perfect for inspiring an upbeat mood and may lead to conversation and creative pursuits. This plant’s flowers have a light sour berry and pine smell and a fresh taste similar to their scent. They generally have a strong blue coloring contrasted by orange hairs.',
          strain_effects: 'Relaxed,Euphoric,Happy,Uplifted,Sleepy',
          strain_flavors: 'Berry,Sweet,Blueberry'
        },
        {
          strain_id: 193,
          strain_name: 'Berts-Cookie-Dough',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'Bert’s Cookie Dough by Los Angeles Kush is a heavy Cookies phenotype crossed with the renowned West Coast mainstay, OGKB. This hybrid was crafted by none other than Bert Baccarat for LAK and thus, the namesake. It offers a classic Cookies bouquet of pungent earth and doughy sweetness overlaid with notes of pine. The effects are heavy, weighing consumers to the couch while the warm body effects help alleviate stress, minor pain relief, and insomnia. ',
          strain_effects: 'Uplifted,Energetic,Happy,Hungry',
          strain_flavors: 'None'
        },
        {
          strain_id: 194,
          strain_name: 'Bertberry-Cheesecake',
          strain_type: 'sativa',
          strain_rating: '5',
          strain_description: 'Bertberry Cheesecake by Bert Baccarat is a bright sativa-dominant cross of Alien Moonshine and UK Cheese. This strain’s terpene profile is rich with sweet citrus, and its buds are bulbous, bright green, and tangled in orange hairs. Bertberry Cheesecake is both mentally and physically stimulating, offering creativity and strong euphoria. But mind your dosage, as  Bertberry Cheesecake has been known to overstimulate consumers prone to anxiety.  ',
          strain_effects: 'Uplifted,Creative,Euphoric,Focused,Energetic',
          strain_flavors: 'Cheese,Berry,Tree,Fruit'
        },
        {
          strain_id: 195,
          strain_name: 'Bettie-Page',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Bettie Page, grown by Liberty Reach Farms in Washington, is a perfectly balanced 50/50 hybrid cannabis strain. This high-THC strain provides mellow euphoria that focuses itself in the cerebral space, encouraging energy rather than lethargy. ',
          strain_effects: 'Creative,Uplifted,Energetic,Euphoric,Relaxed',
          strain_flavors: 'Earthy,Sweet,Blue,Cheese'
        },
        {
          strain_id: 196,
          strain_name: 'Bianca',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Bianca is a three-way indica-dominant hybrid that brings classic genetics and flavors together. This strain was created by blending a White Widow and Afghan cross with the Empress phenotype White Queen. It grows squat and sturdy plants that produce healthy yields with the proper amount of TLC. Known for its pungent hashy aroma and equal measures of euphoria and sedation, Bianca calms the consumer while enhancing mood, making it good medicine for patients seeking to curb anxiety, body aches, and nausea. ',
          strain_effects: 'Relaxed,Sleepy,Euphoric,Focused,Creative',
          strain_flavors: 'Earthy,Woody,Spicy/Herbal'
        },
        {
          strain_id: 197,
          strain_name: 'Biddy-Early',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Biddy Early is a 50/50 hybrid strain bred by Magus Genetics through crossing Early Skunk with Warlock. Drawing a connection between the War on Drugs and the era of witch hunts, its breeders named this strain after a 19th century healer accused of witchcraft. This hybrid healer works its medicinal sorcery by delievering a balanced, dreamy experience that envelopes both mind and body with unencumbered relief. With a sweet aroma similar to that of candy, Biddy Early offers satisfying yields of crystal-coated buds meant for harvest in the great outdoors.',
          strain_effects: 'Creative,Euphoric,Focused,Uplifted,Energetic',
          strain_flavors: 'Sweet,Flowery,Diesel'
        },
        {
          strain_id: 198,
          strain_name: 'Big-Band',
          strain_type: 'hybrid',
          strain_rating: '4.6',
          strain_description: 'Big Band was created to stabilize the delicious flavor of Bubble Gum with a strong, heavy yielding plant. Chronic, this strain’s second parent, grows massive colas with generous resin production and hybridized sativa effects, making it a natural compliment to Bubble Gum’s indica-dominant qualities. Big Band’s effects are joyful and loud, exhibiting deeply relaxing effects  with an assortment of juicy berries of the palate. ',
          strain_effects: 'Relaxed,Happy,Euphoric,Hungry,Talkative',
          strain_flavors: 'Sweet,Spicy/Herbal,Sage'
        },
        {
          strain_id: 199,
          strain_name: 'Big-Bang',
          strain_type: 'indica',
          strain_rating: '4.1',
          strain_description: 'Big Bang sprang into existence when Green House Seeds combined Skunk, Northern Lights, and El Niño into one indica that packs the power of the cosmos. Sweet apple with accents of rose and violet bring a rich aromatic experience to this 80% indica, whose sedating effects run most popularly with patients treating pain and sleeplessness. Relief expands and spreads throughout the body, calming stress both physical and mental. Big Bang bursts into flowering, finishing in 8 to 9 weeks indoors or around the end of September in outdoor grows.',
          strain_effects: 'Relaxed,Sleepy,Happy,Euphoric,Aroused',
          strain_flavors: 'Sweet,Orange,Lemon'
        },
        {
          strain_id: 200,
          strain_name: 'Big-Bud',
          strain_type: 'indica',
          strain_rating: '3.9',
          strain_description: 'Developed in the USA before being brought to the Netherlands in the 1980s to survive the War on Drugs, Big Bud is a legend among growers for its high yields in the garden. Preserved to this day by Dutch breeder Sensi Seeds, this indica produces massive buds with very few leaves, unmatched by any other cannabis variety. With an earthy and spicy aroma, Big Bud delivers deeply relaxing full-body effects true to its indica lineage.',
          strain_effects: 'Relaxed,Euphoric,Sleepy,Happy,Tingly',
          strain_flavors: 'Earthy,Skunk,Flowery'
        },
        {
          strain_id: 201,
          strain_name: 'Big-Budda-Cheese',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Cheese (also called UK Cheese or Exodus Cheese) is a famous clone-only strain that originated in England around 1989, reportedly from a pack of Sensi Seeds’ Skunk #1. An extremely potent and high-yielding plant with a pungent cheese-like odor, it was passed around the underground to various growers and breeders over the years until it became one of the most popular and ubiquitous strains in the UK. Sometime around 2004, the breeder known as “Big Buddha” took this clone and crossed it with a carefully selected Afghani indica to create a seed version of Cheese. Big Buddha Cheese won the High Times 2006 Cannabis Cup in the indica category and went on to become probably the most popular and widely available Cheese hybrid produced in seed form. It is known for its sweet, tropical fruit meets skunky-cheese smell and large yields of high potency flowers.  ',
          strain_effects: 'Happy,Relaxed,Euphoric,Uplifted,Giggly',
          strain_flavors: 'Cheese,Earthy,Flowery'
        },
        {
          strain_id: 202,
          strain_name: 'Big-Holy-Nina',
          strain_type: 'hybrid',
          strain_rating: '4',
          strain_description: 'Big Holy Nina from Colorado Seed Inc. is a sativa-dominant cross of S.A.G.E. and Nina Limone (Super Lemon Haze x Rebel God Smoke). This stout sativa blend is infused with energy and will ignite your appetite and brighten your mind. ',
          strain_effects: 'Talkative,Uplifted,Euphoric,Happy,Relaxed',
          strain_flavors: 'Lime,Lemon,Earthy'
        },
        {
          strain_id: 203,
          strain_name: 'Big-Kush',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'Big Kush by Dinafem Seeds is a love letter to growers and Kush connoisseurs alike. By combining the generous genetics of Big Skunk with the ever-popular OG Kush, Dinafem has fashioned a strain that exhibits the balanced and flavorful attributes of OG Kush with the fuel-tinged lemon aroma and yield of their Big Bud/Skunk cross. This autoflowering strain finishes in 8 weeks and requires little manicuring due to the conservative number of fan leaves.   ',
          strain_effects: 'Uplifted,Relaxed,Euphoric,Creative,Focused',
          strain_flavors: 'Citrus,Lemon,Skunk'
        },
        {
          strain_id: 204,
          strain_name: 'Big-Mac',
          strain_type: 'indica',
          strain_rating: '5',
          strain_description: 'Big Mac by Federation Seeds is an indica-dominant strain with unique sativa fan leaves and an accelerated grow cycle. This generous cut of Mikado and BC Big Bud develops quickly indoors, growing upwards of six feet tall over its speedy seven week maturation. The large plant produces a healthy yield of fruity mid-sized buds that reek of berry and citrus peel. Big Mac’s effects elevate the mind and relax the body, offering a creative bent to a satisfying sedation. Enjoy Big Mac to stimulate the mind and the appetite while infusing the limbs with a relaxing weighted warmth.   ',
          strain_effects: 'Relaxed,Aroused,Sleepy,Talkative,Tingly',
          strain_flavors: 'Sweet,Berry,Blueberry'
        },
        {
          strain_id: 205,
          strain_name: 'Big-Skunk-Korean',
          strain_type: 'hybrid',
          strain_rating: '4',
          strain_description: 'Big Skunk Korean is supposedly a mix of Big Bud, Skunk #1, and Korean genetics originating in the western U.S., possibly Oregon, though it is unclear when it was created and by whom. It was used by SOMA in many of his breeding projects and is listed as a parent strain for Somativa, Kahuna, Lavender and Somango, among others.',
          strain_effects: 'Talkative,Uplifted,Creative,Energetic,Hungry',
          strain_flavors: 'Flowery,Skunk'
        },
        {
          strain_id: 206,
          strain_name: 'Big-Sky-Og',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'Big Sky OG from Elemental Seeds is an indica strain that competed in the 2014 L.A. Cannabis Cup.',
          strain_effects: 'Relaxed,Tingly,Uplifted,Hungry,Sleepy',
          strain_flavors: 'Pungent,Skunk,Diesel'
        },
        {
          strain_id: 207,
          strain_name: 'Big-Smooth',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'Big Smooth by Exotic Genetix is a flavorful cross of OG Blueberry and Cookies and Cream. This indica-leaning hybrid offers a delicious terpene profile that smells sweet and doughy, like blueberry pancakes. Big Smooth grows bushy, medium-tall plants and has a flowering time of 55-66 days. Enjoy Big Smooth for its delicious flavor and euphoric, middleweight sedation. This strain is a seasoned fit for improving moods and tempering minor aches and pains.      ',
          strain_effects: 'Happy,Relaxed,Giggly,Uplifted,Aroused',
          strain_flavors: 'Blueberry,Spicy/Herbal,Nutty'
        },
        {
          strain_id: 208,
          strain_name: 'Big-Sur-Holy-Bud',
          strain_type: 'sativa',
          strain_rating: '4',
          strain_description: 'Big Sur Holy Bud is a sativa bred by Bodhi Seeds. This plant has an indica structure, with purple/pink hued buds that offer a blueberry, menthol aroma and effects true to its sativa heritage. This strain can be grown indoors and outdoors.',
          strain_effects: 'Relaxed,Uplifted,Focused,Euphoric,Energetic',
          strain_flavors: 'Earthy,Menthol,Pine'
        },
        {
          strain_id: 209,
          strain_name: 'Big-White',
          strain_type: 'indica',
          strain_rating: '4.2',
          strain_description: 'Big White is an indica-dominant hybrid that combines The White with Big Bud genetics. Bred by La Plata Labs, this strain began as an F1 hybrid created by Eclectic Genetics. La Plata Labs then refined and stabilized the genetics through generations of breeding and phenotype selection. This strain is known to produce large yields of sweet, sugary buds that express themselves in a variety of colors and carry a unique maple syrup flavor.There is another known hybrid by the name of Big White. It is bred by Breeder’s Choice and its lineage is a combination of Power Plant and Chronic genetics.',
          strain_effects: 'Relaxed,Uplifted,Happy,Sleepy,Euphoric',
          strain_flavors: 'Flowery,Diesel,Sweet'
        },
        {
          strain_id: 210,
          strain_name: 'Big-Wreck',
          strain_type: 'indica',
          strain_rating: '4.1',
          strain_description: 'Big Wreck is the ndica-dominant cross of Big Bud and Trainwreck. This chunky combination offers functional relaxation with an uplifted mental buzz that some might describe as creative. This strain becomes very sedative with continuous use and may also stimulate your appetite. ',
          strain_effects: 'Relaxed,Tingly,Euphoric,Happy,Uplifted',
          strain_flavors: 'Earthy,Pungent,Nutty'
        },
        {
          strain_id: 211,
          strain_name: 'Biker-Leblanc',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'A sativa-dominant hybrid rarely found nowadays, Biker Le’Blanc is a dense and resinous strain that combines Raskal’s The White with Hell’s Angel OG (Biker Kush cut). Leading with a skunky, earthy aroma typical of OG varieties, Biker Le’Blanc offers heavily relaxing effects that weigh the body down without causing too much cloudiness in the head. Its THC content is known to stretch to 23%, so proceed with caution if you’re sensitive to cannabis’ psychoactive effects.',
          strain_effects: 'Relaxed,Focused,Energetic,Euphoric,Aroused',
          strain_flavors: 'Spicy/Herbal,Sage,Earthy'
        },
        {
          strain_id: 212,
          strain_name: 'Bio-Diesel',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Bio-Diesel is an exceptional cannabis hybrid as evidenced by the 1st place title it earned at 2009’s 2nd Annual Colorado Medical Marijuana Harvest Cup. This four-way cross between Sour Diesel, Sensi Star, Original Diesel, and NYC Diesel excels at delivering both intense and balanced effects: an acute, speedy sativa onset gravitates into numbing relaxation. The hybrid effects make this strain a reliable choice for mental and physical relief alike, so it’s no surprise that Bio-Diesel is cherished by cannabis connoisseurs.',
          strain_effects: 'Euphoric,Happy,Relaxed,Energetic,Uplifted',
          strain_flavors: 'Diesel,Earthy,Pungent'
        },
        {
          strain_id: 213,
          strain_name: 'Bio-Jesus',
          strain_type: 'hybrid',
          strain_rating: '4.6',
          strain_description: 'Bio-Jesus is an indica-dominant hybrid renowned for its numbing potency and exceptional pain relief application. The strain springs from affluent genetics: its appearance resembles the favorite Ohio-bred indica Gumbo, and its aroma is similar to the Colorado Medical Marijuana Harvest Cup award-winning Bio-Diesel. Thanks to this parentage, Bio-Jesus provides intense body effects and a cerebral haze that promotes nighttime use.',
          strain_effects: 'Happy,Relaxed,Euphoric,Sleepy,Uplifted',
          strain_flavors: 'Earthy,Chemical,Diesel'
        },
        {
          strain_id: 214,
          strain_name: 'Biochem',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Biochem is the sedating cross of Chemdawg 4 and Sensi Star. This indica-dominant strain offers patients a weighted relaxation with a gentle headiness that infuses the body with a soft and soothing haze. Enjoy Biochem in the evening, as its effects naturally sedate. The aroma and taste are rich with notes of fuel, citrus, and herbaceous greenery, while the appearance is bright green with a peppering of purple entangled in orange pistils. ',
          strain_effects: 'Relaxed,Euphoric,Tingly,Sleepy,Happy',
          strain_flavors: 'Spicy/Herbal,Earthy,Cheese'
        },
        {
          strain_id: 215,
          strain_name: 'Birds-Eye',
          strain_type: 'sativa',
          strain_rating: '5',
          strain_description: 'Birds Eye is a variety of Jack Herer grown by Canadian LP Tweed, Inc. Its flavors mirror the invigorating mix of sweet citrus and spicy pine that many associate with Jack Herer. Birds Eye produces potent yet balanced effects that ease stress and body pains while allowing consumers to maintain focus and activity. ',
          strain_effects: 'Happy,Uplifted,Energetic,Euphoric,Relaxed',
          strain_flavors: ''
        },
        {
          strain_id: 216,
          strain_name: 'Birthday-Cake-Kush',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'Birthday Cake Kush, also known as Wedding Cake or just Birthday Cake, is an indica-dominant hybrid with strong body effects and sweet cake-like flavor. As decadent as its Girl Scout Cookies and Cherry Pie parent strains, Birthday Cake Kush buds bloom with a crystalline icing of THC-rich resin. Like any dessert, Birthday Cake Kush is the perfect way to end your day, with deeply relaxing effects that soothe the body without sedating the mind. This indica is preferred by patients treating pain, anxiety, appetite loss, inflammation, and headaches.',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Sleepy',
          strain_flavors: 'Sweet,Vanilla,Lemon'
        },
        {
          strain_id: 217,
          strain_name: 'Black-84',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: 'Black ’84, also known as UW Black ’84, is one of a few elusive strains that managed to escape from the medical cannabis garden at the University of Washington in the early and mid-1980s. Believed to descend from Afghani genetics, Black ‘84’s unknown indica lineage expresses itself as a stout, dark, and bushy plant. The aroma is a complex mix of sweet tropical flavors that blend with a smooth nutty finish. Its powerful, relaxing effects on the body make Black ’84 a great nighttime strain when combatting anxiety, pain, and insomnia.',
          strain_effects: 'Relaxed,Sleepy,Happy,Hungry,Euphoric',
          strain_flavors: 'Pungent,Earthy,Grape'
        },
        {
          strain_id: 218,
          strain_name: 'Black-Afghan',
          strain_type: 'indica',
          strain_rating: '4.6',
          strain_description: 'Black Afghan is a complex indica-dominant strain with euphoric and relaxing effects. The flowers develop as jade, pine tree-shaped colas with dark green, nearly black sugar leaves. Black Afghan’s terpene profile is an aromatic mixture of pepper, earth, and sage smothered in dark berries, alluding to the strain’s cerebral and physical effects. This strain’s heady, uplifted buzz and relaxing, munchie-inducing body effects make it perfect for a lazy afternoon.',
          strain_effects: 'Relaxed,Sleepy,Hungry,Happy,Euphoric',
          strain_flavors: 'Earthy,Pine,Pepper'
        },
        {
          strain_id: 219,
          strain_name: 'Black-Betty',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'Black Betty is a long-lasting sativa-dominant hybrid that stems from East Coast Sour Diesel and AK-47 genetics. With a rich but subtle aroma, Black Betty launches you into soaring euphoria that may be considered too lofty for the novice consumer. Though certainly good for a lazy day, Black Betty is known to induce a forgetfulness so fierce that concentration and productivity can seem impossible for some. As a way of enhancing Black Betty’s flavor, others have bred in Cherry AK-47 for its sweet cherry flavor profile. Black Betty offers growers notable yields following her 64-day flowering cycle, with dense buds that are easy to manicure.',
          strain_effects: 'Euphoric,Relaxed,Happy,Uplifted,Energetic',
          strain_flavors: 'Sweet,Berry,Pungent'
        },
        {
          strain_id: 220,
          strain_name: 'Black-Bubba',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: 'Black Bubba is an indica-dominant cross of Bubba Kush and Black Russian. The resulting buds carry a sweet aroma with subtle fruit notes that produce earthy flavors of hash and pine. The relaxing indica effects calm body pains, stimulate the appetite, and are known to sedate the body into a state of couchlock.',
          strain_effects: 'Happy,Relaxed,Sleepy,Tingly,Euphoric',
          strain_flavors: 'Earthy,Flowery,Pine'
        },
        {
          strain_id: 221,
          strain_name: 'Black-Cherry-Cheesecake',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'Thought to have originated in Southern Oregon from an unknown breeder, Black Cherry Cheesecake is an indica-dominant hybrid that supposedly crosses Black Cherry Soda, Super Silver Haze, and Cheese. These large, pink-tinged purple flowers smell like cherries and sugar, and possess a flavor that is aptly described by the name. Black Cherry Cheesecake leaves users relatively clear-headed while providing strong, sedating body sensations that can make motivation difficult. ',
          strain_effects: 'Creative,Relaxed,Euphoric,Hungry,Uplifted',
          strain_flavors: 'Berry,Sweet,Cheese'
        },
        {
          strain_id: 222,
          strain_name: 'Black-Cherry-Og',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Black Cherry OG is an indica strain bred by Grand Daddy Purple that combines Ken’s OG with an unknown Granddaddy Purple hybrid. Dense buds take on an intense purple hue at the end of Black Cherry OG’s maturation and develop a sweet aroma like fruity tea. Relaxing full-body effects take over, ridding you of pain and insomnia while lifting the mood.',
          strain_effects: 'Relaxed,Uplifted,Happy,Giggly,Euphoric',
          strain_flavors: 'Berry,Sweet,Earthy'
        },
        {
          strain_id: 223,
          strain_name: 'Black-Cherry-Pie',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'Black Cherry Pie is a fruity strain with colorful foliage. Created by Green Mountain Collective, this strain is the genetic offspring of Blackberry Kush and Cherry Pie. These genetics are exhibited in the deep purple hues overlaid by jade green buds with orange hairs, as well as in the pungent woody aroma smeared with tart blackberry. Black Cherry Pie’s physical effects soothe nausea and minor aches and pains while keeping the mind aloof and creative. Its bright mind and semi-sedative effects make it a natural complement for indoor activities and relaxed evenings.',
          strain_effects: 'Relaxed,Uplifted,Creative,Euphoric,Happy',
          strain_flavors: 'Earthy,Berry,Sweet'
        },
        {
          strain_id: 224,
          strain_name: 'Black-Cherry-Soda',
          strain_type: 'hybrid',
          strain_rating: '4.3',
          strain_description: 'Black Cherry Soda is a hybrid strain named after its fruity, soda-like taste and unusually dark purple color. This strain has spawned other favorites like Black Dahlia and Ace of Spades, and despite its intensely indica appearance, its effects reach the mind and body in a balance more characteristic of sativa strains. Black Cherry Soda is a potent medicine that hits without heavy sedation, making it popular among patients treating severe symptoms throughout the day.',
          strain_effects: 'Relaxed,Happy,Euphoric,Hungry,Uplifted',
          strain_flavors: 'Sweet,Berry,Earthy'
        },
        {
          strain_id: 225,
          strain_name: 'Black-Dhalia',
          strain_type: 'hybrid',
          strain_rating: '4',
          strain_description: 'One of the lesser-known strains, this hybrid is a purported cross between Black Cherry Soda and Querkle. The flowers have purple-red coloration and are often sticky to the touch thanks to heavy trichome production. Black Dahlia leans toward its indica genetics and delivers strong body effects suitable for insomnia and pain relief. ',
          strain_effects: 'Relaxed,Happy,Sleepy,Euphoric,Tingly',
          strain_flavors: 'Sweet,Earthy,Spicy/Herbal'
        },
        {
          strain_id: 226,
          strain_name: 'Black-Diamond',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Black Diamond is a Northern California strain ideal for patients who need strong medication but still want to be active and sociable. A cross between Blackberry and Diamond OG, its flowers have a glittery trichome covering and purple coloring that make it a beautiful gem to look at. The strain’s aroma is musky and earthy, almost like a deep red wine. Black Diamond is known to cause fits of giggles and is a great strain for hanging out with friends or catching up on TV shows at home. This strain tends to make consumers extremely hungry, making it a good choice for those looking to increase their appetite (just make sure you have some snacks on hand).',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Hungry',
          strain_flavors: 'Earthy,Woody,Berry'
        },
        {
          strain_id: 227,
          strain_name: 'Black-Diesel',
          strain_type: 'sativa',
          strain_rating: '4.1',
          strain_description: 'This infamous sativa strain is the proud winner of multiple Cannabis Cups, solidifying its regal position within the cannabis world. Bred using the genetics of NYC Diesel, Black Diesel’s dense purple flowers have not only an impressive appearance, but also an intense, favorable pungence with sour and fruity undertones. Bred by Advanced Seeds, this plant struggles with mold resistance but compensates with a high yield and THC content. Although Black Diesel produces some traditionally indica effects, patients often find this strain to be well-balanced, beginning with an intense sativa onset followed by a heavy-lidded indica lull.',
          strain_effects: 'Relaxed,Happy,Hungry,Talkative,Euphoric',
          strain_flavors: 'Diesel,Pungent,Earthy'
        },
        {
          strain_id: 228,
          strain_name: 'Black-Domina',
          strain_type: 'indica',
          strain_rating: '4.2',
          strain_description: 'Working with four prime examples of Cannabis Afghanica led Sensi Seeds to blend the world\'s finest indica genetics into a rapid-flowering, crystal-coated hybrid: Black Domina. Combining desirable features from the Northern Lights, Ortega, Hash Plant, and Afghani SA has made this strain equally suited to the needs of commercial growers, connoisseurs, and first-time cultivators. Black Domina delivers a spicy pepper aroma alongside overwhelming relaxation and sleepiness, making this strain ideal for late night use.',
          strain_effects: 'Relaxed,Euphoric,Happy,Sleepy,Uplifted',
          strain_flavors: 'Pepper,Pine,Woody'
        },
        {
          strain_id: 229,
          strain_name: 'Black-Haze',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Black Haze is a sativa-dominant hybrid that blends Colombian Black, Colombian Gold, and Purple Haze. It is known for its deep purple buds that are so dark they appear almost black. Black Haze has an earthy flavor profile, highlighted by woody notes and complemented with sweet hints of berries and cherries. The effects of Black Haze are relaxing with an elevated mood perfect for unwinding and won’t stop you from staying active.',
          strain_effects: 'Relaxed,Euphoric,Happy,Uplifted,Focused',
          strain_flavors: 'Earthy,Pine,Flowery'
        },
        {
          strain_id: 230,
          strain_name: 'Black-Ice',
          strain_type: 'indica',
          strain_rating: '4.1',
          strain_description: 'A cross between hybrids Black Domina and White Widow, Black Ice is an indica-dominant hybrid that is a reliable sedative. Although this flower has a pleasant aroma, its potency sets it apart from the rest. A product of Moon Seeds, Black Ice offers a high yield with an impressive THC content of up to 24%, making this strain optimal for pain and insomnia relief.',
          strain_effects: 'Relaxed,Sleepy,Happy,Hungry,Tingly',
          strain_flavors: 'Earthy,Citrus,Sweet'
        },
        {
          strain_id: 231,
          strain_name: 'Black-Jack',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Black Jack is a marijuana strain that produces hard buds with huge, grape-like calyxes that are completely encrusted with THC. The taste is heavy and flavorful and the strain produces exceptionally long-lasting effects. Because of its high THC levels, Black Jack is popular among medical marijuana patients.',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Talkative',
          strain_flavors: 'Earthy,Sweet,Pine'
        },
        {
          strain_id: 232,
          strain_name: 'Black-Label-Kush',
          strain_type: 'indica',
          strain_rating: '4.1',
          strain_description: 'This lesser-known strain is a classic indica that provides patients with reliable and lengthy pain and stress relief. The effects transition from light and floaty to the heavy sedation typical of indica plants. Black Label Kush has a strong pungence bordering on the harsh side, but provides a rich medicating experience.',
          strain_effects: 'Euphoric,Relaxed,Sleepy,Uplifted,Focused',
          strain_flavors: 'Woody,Berry,Earthy'
        },
        {
          strain_id: 233,
          strain_name: 'Black-Larry-Bird',
          strain_type: 'indica',
          strain_rating: '4',
          strain_description: 'Black Larry Bird by Mr. Mack’s Snacks is a special cross of Mr. Mack\'s Black Domina and the powerhouse, Gelato #33. This strain hits with an intensely heady buzz on the onset that smooths out into a deep, relaxing body high. If you have plans or things to do, this strain is not for you. The comfortable couchlock is a great option for gamers, cinephiles, and patients suffering from insomnia, lack of appetite, and anxiety.  ',
          strain_effects: 'Tingly,Uplifted,Creative,Euphoric,Focused',
          strain_flavors: 'None'
        },
        {
          strain_id: 234,
          strain_name: 'Black-Lime-Special-Reserve',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: 'From Aficionado Seeds comes Black Lime Special Reserve, an indica strain that descends from Woodman Canyon Oil Can, Lime Afghani, Northern Lights, Purple Kush, and Chemdawg Special Reserve. Flavors of pine, lemon, and black pepper are ushered in alongside uplifting euphoria, leaving you feeling tingly and relaxed.',
          strain_effects: 'Relaxed,Happy,Euphoric,Tingly,Sleepy',
          strain_flavors: 'Lime,Pepper,Citrus'
        },
        {
          strain_id: 235,
          strain_name: 'Black-Magic',
          strain_type: 'hybrid',
          strain_rating: '4',
          strain_description: 'Black Magic by Andromeda Strains is a deep, dark cannabis variety with exclusive genetics. Created from Melvanetics’ own Buckeye Purple and Andromeda’s Cherry Sauce, Black Magic combines top-shelf phenotypes to create a unique strain with an equally unique look. One of the growers at Andromeda Strains noted that Black Magic was created by crossing their two darkest plants, producing the darkest strain they’ve ever seen. Expressing intoxicating pungent and sweet aromas, Black Magic is not a strain to miss.  ',
          strain_effects: 'Happy,Relaxed,Uplifted,Euphoric',
          strain_flavors: 'Earthy'
        },
        {
          strain_id: 236,
          strain_name: 'Black-Magic-Kush',
          strain_type: 'indica',
          strain_rating: '4.2',
          strain_description: 'Black Magic Kush (also known simply as Black Magic) is an indica-dominant strain with mysterious and arcane genetics. With jade green foliage and bright orange pistils, Black Magic Kush looks nearly as good as it tastes. Exhibiting a terpene profile soaked in sweetness, berry, and herbaceous overtones, Black Magic Kush delivers a pleasurable variety of flavors, aromas, and effects that help nullify stress and encourage rest. Utilize this strain at the end of the day to make the most of its sleep-inducing qualities.     ',
          strain_effects: 'Happy,Relaxed,Sleepy,Hungry,Talkative',
          strain_flavors: 'Earthy,Berry,Woody'
        },
        {
          strain_id: 237,
          strain_name: 'Black-Mamba',
          strain_type: 'indica',
          strain_rating: '4.6',
          strain_description: 'Black Mamba is named after the deadly African snake (or perhaps the vengeful bride from the movie Kill Bill), so it’s no surprise that this strain is known for being strong (it might just knock less experienced users into nap time). The genetics of this strain are unknown, but its characteristics seem to support the theory that it is a descendent of Granddaddy Purple and maybe Black Domina. These plants produce dark green to purple leaves, but it’s the flowers that appear after about 8 weeks that really give a hint to its supposed heritage. Dark green and dense, these hard nugs have a strong perfumey aroma and a distinctly sweet grape taste that is reminiscent of GDP. Many users report an upbeat feeling that mellows into a state of deep relaxation. Touted for its long-lasting effects, this Black Mamba is one to curl up with, not run away from.',
          strain_effects: 'Happy,Relaxed,Euphoric,Uplifted,Talkative',
          strain_flavors: 'Sweet,Grape,Woody'
        },
        {
          strain_id: 238,
          strain_name: 'Black-Roses',
          strain_type: 'indica',
          strain_rating: '4',
          strain_description: 'Black Roses by Red Dirt Ridge Genetics is a heavy, one-hitter-quitter indica designed for the seasoned cannabis consumer. This cross of Grand Reserve Headband and Early Girl reeks of sweet citrus and funky fuel, intoxicating the sense even before combustion. Its effects lay into the body, evaporating stress from the mind while cementing the consumer to the couch. This heavy indica is a perfect end-of-the-day strain to wash away stress and worries or to frontload sleep with sedative cannabinoids.',
          strain_effects: 'Relaxed,Sleepy,Uplifted,Euphoric,Focused',
          strain_flavors: 'None'
        },
        {
          strain_id: 239,
          strain_name: 'Black-Russian',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'Black Russian is an 80/20 indica-dominant strain bred by Delicious Seeds, who created this strain by crossing a Black Domina mother with White Russian. Notes of mango and citrus collide with lemon candy to create a medley of sweet tropical aromas that burst from Black Russian’s compact buds. This indica is known for her potency and endurance, making Black Russian the perfect choice for either patients seeking long-lasting symptom relief or anyone in need of deep relaxation of both mind and body.',
          strain_effects: 'Relaxed,Sleepy,Uplifted,Happy,Hungry',
          strain_flavors: 'Citrus,Berry,Earthy'
        },
        {
          strain_id: 240,
          strain_name: 'Black-Tuna',
          strain_type: 'hybrid',
          strain_rating: '4.5',
          strain_description: 'Black Tuna is a British Columbian strain created by 5 Star Organic to give patients a potent punch of THC that is ideal for chronic pain relief. This Herijuana and Lamb\'s Bread cross has gained quite a bit of fame in Canada for both its strong narcotic effect and its whimsical marketing—prepackaged meds were sold in sealed tuna cans. Flowers will be compact, trichome-covered and have a strong smell. Black Tuna doesn’t smell quite like fish, however; the strain’s name comes from the Black Tuna Gang that was famous for smuggling Colombian marijuana into the United States in the 1970s. Given its potency and high THC, this strain may be too much for novice or moderate consumers.',
          strain_effects: 'Relaxed,Happy,Sleepy,Euphoric,Hungry',
          strain_flavors: 'Earthy,Woody,Skunk'
        },
        {
          strain_id: 241,
          strain_name: 'Black-Velvet',
          strain_type: 'hybrid',
          strain_rating: '3.9',
          strain_description: 'This 50/50 hybrid strain is a cross of The Black and Burmese Kush that yields a potent flower with both cerebral and physical effects. The flower gets its density and purple-black hue from its Black indica parent but takes on a fruity, citrus aroma thanks to the Burmese sativa. With its high THC levels, Black Velvet is optimal for intermediate to experienced patients and is favored for its well-balanced effects.',
          strain_effects: 'Sleepy,Happy,Hungry,Relaxed,Euphoric',
          strain_flavors: 'Sweet,Flowery,Citrus'
        },
        {
          strain_id: 242,
          strain_name: 'Black-Widow',
          strain_type: 'hybrid',
          strain_rating: '4.1',
          strain_description: 'Originally created by legendary breeder Shantibaba when he was co-owner of Green House Seeds, Black Widow was then known as White Widow. When Shantibaba left GHS and found Mr. Nice Seeds, he took the original Brazilian sativa mother and South Indian indica-dominant hybrid father with him to recreate his world renowned White Widow seeds. Because GHS and others were selling seeds with the name White Widow, he changed the name to Black Widow to create a distinction between them. Black Widow is now considered by many to be the only “true” White Widow available in seed form, as Mr. Nice is the lone seed breeder to possess the original parental genetics.',
          strain_effects: 'Happy,Relaxed,Euphoric,Sleepy,Uplifted',
          strain_flavors: 'Earthy,Sweet,Pungent'
        },
        {
          strain_id: 243,
          strain_name: 'Blackberry',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Blackberry is a popular strain known for its balance of an active sativa buzz and the high yields of plants due to its indica side. It was bred in 2009 by Dutch company Nirvana Seeds as a cross between a Black Domina clone from the U.S and their own Raspberry Cough. Flowering happens between 9 and 11 weeks and plants will have a tight leaf structure and frosty buds. Indoor growing is recommended, but be warned, Blackberry plants are pungent. This strain has strong smoke that can have a fuel smell, but it is dominantly fruity.',
          strain_effects: 'Relaxed,Euphoric,Happy,Uplifted,Sleepy',
          strain_flavors: 'Berry,Sweet,Earthy'
        },
        {
          strain_id: 244,
          strain_name: 'Blackberry-Bubble',
          strain_type: 'indica',
          strain_rating: '4.7',
          strain_description: 'Blackberry Bubble is exclusively produced by Arizona Natural Selections, and is the delectable cross of Sour Bubble and Blackberry Kush. This 80/20 indica-dominant strain offers pain relief and mental ease without anchoring the consumer to the couch. Though, with continued use, this strain can be quite sedative. Expect flavors of bubble gum and blackberry, and a euphoric mental state that lingers.',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Creative',
          strain_flavors: 'Berry,Blueberry,Skunk'
        },
        {
          strain_id: 245,
          strain_name: 'Blackberry-Chem-Og',
          strain_type: 'hybrid',
          strain_rating: '4.3',
          strain_description: 'Blackberry Chem OG is a hybrid strain that combines the fruity, mid-level sedation of Blackberry with the gently stimulating but overall subdued Chemdawg. This strain’s unique aroma of tart chemicals and sweet fruit makes it a favorite for consumers with diverse palates. The effects are moderate on the physical and mental front, showing up as a warm haze in the mind and lightness in the body. Blackberry Chem OG lends itself to curbing minor physical discomfort and numbing the mind to repetitive tasks.  ',
          strain_effects: 'Talkative,Creative,Focused,Relaxed,Euphoric',
          strain_flavors: 'Berry,Chemical'
        },
        {
          strain_id: 246,
          strain_name: 'Blackberry-Cream',
          strain_type: 'indica',
          strain_rating: '4.8',
          strain_description: 'Blackberry Cream from Exotic Genetix combines the sweet berry terpenes of Blackberry Kush with the smooth creamy notes of Cookies and Cream. This 70% indica hybrid produces THC levels up to 25%, above average yields, and is an excellent choice for hash making.',
          strain_effects: 'Relaxed,Happy,Uplifted,Sleepy,Euphoric',
          strain_flavors: 'Berry,Sweet,Vanilla'
        },
        {
          strain_id: 247,
          strain_name: 'Blackberry-Diesel',
          strain_type: 'sativa',
          strain_rating: '4.1',
          strain_description: 'Blackberry Diesel is an 80/20 sativa-dominant cross between East Coast Sour Diesel and Plushberry. This sativa mainly takes after its Sour Diesel parent, inheriting that signature fuel aroma and potently blissful cerebral effects. Its tangy flavor is sweetened by the ripe berry flavors of its Plushberry parent. Tinted with lavender and purple hues, Blackberry Diesel is almost as pleasant to the eyes as it is to the nose.',
          strain_effects: 'Happy,Energetic,Relaxed,Euphoric,Talkative',
          strain_flavors: 'Diesel,Spicy/Herbal,Pungent'
        },
        {
          strain_id: 248,
          strain_name: 'Blackberry-Dream',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Blackberry Dream y Elev8 Seeds is a fruity hybrid cross that might surprise you. Not to be confused with the many Blue Dream “Dream” crosses out there, Blackberry Dream is the offspring of Kimbo Kush and Super Silver Haze. This generous plant produces a massive yield of glittering emerald-colored buds that reek of jam and spice. The strain flowers over 9-10 weeks and generally benefits from a little extra time on the stalk. Mind your dosage while enjoying this strain. The hybrid genetics begin with a heady sativa-dominant bent, but can get heavier on the body with continued consumption.  ',
          strain_effects: 'Happy,Energetic,Uplifted,Relaxed,Talkative',
          strain_flavors: 'Spicy/Herbal,Sweet,Grapefruit'
        },
        {
          strain_id: 249,
          strain_name: 'Blackberry-Fire',
          strain_type: 'hybrid',
          strain_rating: '5',
          strain_description: 'Blackberry Fire by Purple Caper Seeds is a fuel-flavored cross of Blackberry Kush and Fire Lady. This strain was awarded 2nd place at the 2016 HempCon Cup Awards. Its terpene profile is less berry and more gas, offering sour, chemically sweetness with hints of fruit throughout. This strain’s long-lasting buzz lends itself to consumers seeking resilient physical effects.  ',
          strain_effects: 'Creative,Happy',
          strain_flavors: 'Sweet,Berry,Blueberry'
        },
        {
          strain_id: 250,
          strain_name: 'Blackberry-Hashplant',
          strain_type: 'indica',
          strain_rating: '3.7',
          strain_description: 'Blackberry Hashplant is an indica strain that’s a harmony of Blackberry Kush and Hashplant Haze. It delivers well-balanced (although not long-lasting) effects whose potency varies among consumers. Blackberry Hashplant’s light green flowers are on the smaller side, with a dry, earthy aroma. This plant’s versatility makes it an excellent candidate for a variety of cerebral and physical medical purposes depending upon the patient’s ailments and response.',
          strain_effects: 'Euphoric,Sleepy,Uplifted,Energetic,Happy',
          strain_flavors: 'Berry,Sweet,Earthy'
        },
        {
          strain_id: 251,
          strain_name: 'Blackberry-Haze',
          strain_type: 'sativa',
          strain_rating: '4.5',
          strain_description: 'Blackberry Haze, developed by Nebu Hybridz, is a sativa-dominant hybrid cross between Blackberry and Lime Haze. Unlike its sibling strain Blackberry Lime Haze, this phenotype takes after its Blackberry parent with twisting purple calyxes and a sweet berry aroma. Notes of violet, spice, and cocoa can also be detected in this sativa\'s frost-covered buds. For those days when productivity is paramount, Blackberry Haze offers clear, unencumbered relief that will typically leave your motivation in tact.',
          strain_effects: 'Happy,Relaxed,Uplifted,Hungry,Focused',
          strain_flavors: 'Berry,Sweet,Spicy/Herbal'
        },
        {
          strain_id: 252,
          strain_name: 'Blackberry-Kush',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'This mostly indica strain is a mix of Afghani and Blackberry strains and has beautiful dark purple buds with orange hairs. Plants will flower at 7-8 weeks and are not particularly high yielders, but the dense, hard nugs have crystals throughout. Blackberry Kush tends to have a hashy, jet fuel smell and taste that is balanced by sweet berries. Blackberry Kush is often recommended for the treatment of pain thanks to its strong indica body effects. ',
          strain_effects: 'Relaxed,Sleepy,Happy,Euphoric,Hungry',
          strain_flavors: 'Berry,Sweet,Earthy'
        },
        {
          strain_id: 253,
          strain_name: 'Blackberry-Lime-Haze',
          strain_type: 'sativa',
          strain_rating: '4.7',
          strain_description: 'Blackberry Lime Haze is a 90% sativa cross between Blackberry and Lime Haze that induces high-energy, clear-headed effects. Sweet lime and peppery spice overlay a subtle mix of honey, berry, and floral notes in a show of Blackberry Lime Haze’s rich terpene profile. Functional creativity coupled with a happy mood make this strain conducive to productive afternoons or an active weekend with friends. Blackberry Lime Haze is a potent medicine for a variety of ailments, some of which include depression, headaches, fibromyalgia, spinal cord injury, multiple sclerosis, fatigue, pain, and spasms. Despite its sativa-leaning genetics, Blackberry Lime Haze grows into dense, chunky buds with a heavy coat of crystal trichomes. Though similar to Blackberry Haze, this phenotype leans more toward its Lime Haze parent in appearance and aroma.',
          strain_effects: 'Happy,Uplifted,Euphoric,Talkative,Focused',
          strain_flavors: 'Berry,Sweet,Lime'
        },
        {
          strain_id: 254,
          strain_name: 'Blackberry-Pie',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'Blackberry Pie is a hybrid cross of Jojorizo’s Blackberry Widow and a Crystal Locomotive created by Gage Green Genetics. This hybrid is easy to grow and all phenotypes present the potency and high resin content you would expect given its White Widow and Trainwreck heritage. A beautiful and aromatic plant featuring flowers with deep purple hues and ample trichomes, Blackberry Pie offers a nice blend of heady euphoria with a medicinal body high.',
          strain_effects: 'Euphoric,Creative,Hungry,Relaxed,Happy',
          strain_flavors: 'Sweet,Blueberry,Berry'
        },
        {
          strain_id: 255,
          strain_name: 'Blackberry-Rhino',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'Blackberry Rhino, also called Blackberry White, is a berry-flavored indica strain that combines Blackberry and White Rhino. Sometimes our indicas surprise us with uplifting, clear-headed effects, and you can count Blackberry Rhino among those subtly invigorating strains. Head-to-toe relaxation pours in over time, bringing relief to patients with pain, insomnia, appetite loss, and nausea.',
          strain_effects: 'Relaxed,Happy,Creative,Hungry,Sleepy',
          strain_flavors: 'Berry,Sweet,Spicy/Herbal'
        },
        {
          strain_id: 256,
          strain_name: 'Blackberry-Trainwreck',
          strain_type: 'hybrid',
          strain_rating: '4.3',
          strain_description: 'Blackberry Trainwreck, or Blackberry Wreck, is a hybrid strain parented by two notable varieties, Blackberry Kush and Trainwreck. Led by indica genetics, Blackberry Trainwreck typically grows into chunky, dense conic buds that offer a sweet and earthy mix of berry flavors. Tension and stress melt away from the body on the exhale while the mind elevates to lighthearted positivity.',
          strain_effects: 'Relaxed,Euphoric,Happy,Uplifted,Energetic',
          strain_flavors: 'Berry,Sweet,Pungent'
        },
        {
          strain_id: 257,
          strain_name: 'Blackberry-X-Blueberry',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'This dense crystal-covered indica strain by LivWell is a mix of Blackberry and DJ Short’s Blueberry. Blackberry x Blueberry tends to have a hashy Afghani aroma and flavor balanced by sweet berries and skunk. Thanks to its strong indica body effects, this strain is often recommended for treatment of pain.',
          strain_effects: 'Relaxed,Happy,Uplifted,Euphoric,Creative',
          strain_flavors: 'Berry,Earthy,Blueberry'
        },
        {
          strain_id: 258,
          strain_name: 'Blackwater',
          strain_type: 'indica',
          strain_rating: '4.6',
          strain_description: 'Blackwater is an indica strain typically bred from Mendo Purps and San Fernando Valley OG Kush. Its round, compact buds take on a deep purple color and a sweet grape aroma that blends with subtle undertones of lemon and pine. What begins as a mellow and euphoric cerebral experience melts down to the rest of the body in a head-to-toe euphoric calm that relieves stress and anxiety. Patients have also reported its success in treating pain, appetite loss, and multiple sclerosis. This strain is recommended for late-night consumption as it can cause mental cloudiness and detract from productivity. Blackwater has a flowering time of 8 to 10 weeks and produces moderate yields in indoor, outdoor, and greenhouse gardens. The 2014 Los Angeles Cannabis Cup awarded Blackwater 3rd place in the indica category.',
          strain_effects: 'Relaxed,Sleepy,Euphoric,Happy,Hungry',
          strain_flavors: 'Earthy,Berry,Grape'
        },
        {
          strain_id: 259,
          strain_name: 'Blaze',
          strain_type: 'sativa',
          strain_rating: '4.3',
          strain_description: 'British Columbia Seed Company crossed the indica Blueberry with Haze in order to tame this lanky, long-flowering Blaze. This large sativa-dominant plant combines the soaring cerebral high and sweet-spicy smell of Haze, while getting shorter flowering times and a distinct dried-grape aroma from Blueberry. Blaze is closely related to Blueberry Haze and Blue Dream.',
          strain_effects: 'Euphoric,Energetic,Talkative,Creative,Aroused',
          strain_flavors: 'Blueberry,Sweet,Berry'
        },
        {
          strain_id: 260,
          strain_name: 'Blissful-Wizard',
          strain_type: 'hybrid',
          strain_rating: '4.8',
          strain_description: 'Blissful Wizard by The Captain’s Connection is a potent hybrid strain that crosses Captain\'s Cookies and Girl Scout Cookies in a decadent fusion of lemon, lime, and cream flavors. With a soaring THC content that won this strain 1st place in the 2015 SoCal Cannabis Cup as a non-solvent hash, Blissful Wizard is the only healing potion you’ll need to eliminate stubborn aches, pains, nausea, and appetite loss. This flavorful hybrid helps conjure a happy headspace in which life’s stressors are obliterated by a blast of otherworldly euphoria.  ',
          strain_effects: 'Happy,Talkative,Euphoric,Relaxed,Uplifted',
          strain_flavors: 'Earthy,Vanilla,Pungent'
        },
        {
          strain_id: 261,
          strain_name: 'Blizzard-Bush',
          strain_type: 'hybrid',
          strain_rating: '0',
          strain_description: 'Blizzard Bush by Greenpoint Seeds is a resinous hybrid cross of Pura Vida and Stardawg. This beautiful strain’s copious coating of resin gives the plant’s lush foliage a diamond-like shimmer. It offers larger-than-average yields with creamy marshmallow aromas smeared with fuel and, oddly enough, cured meats. Enjoy Blizzard Bush’s mood elevation and stress relief throughout the day to combat lethargy and depression.  ',
          strain_effects: 'None',
          strain_flavors: 'None'
        },
        {
          strain_id: 262,
          strain_name: 'Blob-Og',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'Blob OG is supposedly a strain that originated in Western Washington. The heavy hitting, body-driven strain incorporates the stimulating mental elements of Diesel crossed against the potent indica-dominant genetics of Pre-99 Chemdawg. This cross offers lightness in the body and a mental edge from the Diesel. Because it can stretch toward 30% THC, sativa-dominant hybrid or not, this much potency will absolutely put the uninitiated consumer down for the count.',
          strain_effects: 'Euphoric,Talkative,Uplifted,Creative,Happy',
          strain_flavors: 'Diesel,Lemon,Chemical'
        },
        {
          strain_id: 263,
          strain_name: 'Blockhead',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'An indica-dominant hybrid, Blockhead is not for the inexperienced user. Powerful physical effects typical of indica strains are accompanied by intense psychoactive effects that deem this strain unfit for those who are looking for a lot of social activity. Alternatively, this brown earthy flower is optimal for pain relief and sedative relaxation. For the experienced connoisseur who appreciates and respects power, this robust strain could easily become a favorite.',
          strain_effects: 'Relaxed,Happy,Hungry,Uplifted,Euphoric',
          strain_flavors: 'Pungent,Woody,Flowery'
        },
        {
          strain_id: 264,
          strain_name: 'Bloos-Kloos',
          strain_type: 'indica',
          strain_rating: '4.6',
          strain_description: 'Bloo’s Kloos is a playful indica with a carefree buzz that encourages laughter. This three-way cross of Larry OG, Blueberry, and Northern Lights imbues Bloo\'s with earthy and fruity terpenes that turn sweet when consumed. Created by Mr. Mack out of Las Vegas, this strain leaves the mind clear and the body free of aches and pains. ',
          strain_effects: 'Creative,Relaxed,Happy,Euphoric,Focused',
          strain_flavors: 'Flowery,Earthy,Berry'
        },
        {
          strain_id: 265,
          strain_name: 'Blood-Orange-Kush',
          strain_type: 'indica',
          strain_rating: '5',
          strain_description: 'Blood Orange Kush is an indica-dominant cross of, as of now, the unknown or unnamed genetics Aota x Pinecracker and an unnamed OG. This plant has a bushy structure that doesn’t yield much, but the dense, trichome-covered nugs are prized for their bright terpene profile and heavy effects. Blood Orange Kush emits a bouquet of gas and tart citrus that fills the room and coats the palate. Its uplifting mental buzz and relaxing physical effects make Blood Orange Kush a solid option for consumers looking to abate minor pain and elevate mood.  ',
          strain_effects: 'Sleepy,Uplifted,Euphoric,Happy,Creative',
          strain_flavors: 'Diesel,Citrus,Orange'
        },
        {
          strain_id: 266,
          strain_name: 'Bloodhound',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Bloodhound is the obscure cross of Huckleberry Hound and Guard Dawg (by RedEyed Genetics). This genetic coupling was motivated by the desire to preserve the beautiful foliage and tartness of Huckleberry Hound while co-opting Guard Dawg’s potency. With a decent yield and THC percentage upwards of 24%, this strain smells of tart fruit intermixed with an earthy chocolate fondue flavor.',
          strain_effects: 'Happy,Relaxed,Focused,Talkative,Euphoric',
          strain_flavors: 'Earthy,Sage,Spicy/Herbal'
        },
        {
          strain_id: 267,
          strain_name: 'Blowfish',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'Blowfish is an indica-dominant hybrid bred by Dutch Flowers, who crossed a G13 and Oregon Funk hybrid with a G13 and Blue Dot hybrid to create this cannabis strain.',
          strain_effects: 'Relaxed,Uplifted,Happy,Euphoric,Tingly',
          strain_flavors: 'Spicy/Herbal,Pepper,Sage'
        },
        {
          strain_id: 268,
          strain_name: 'Blucifer',
          strain_type: 'sativa',
          strain_rating: '4.3',
          strain_description: 'Created in 2013 by Terraform Genetics who crossed Conspiracy Kush and Blue Dream, Blucifer is a blue-ish purple sativa strain that radiates with the smell of blueberries and cream with a spicy finish. These frosty buds are meant to leave you feeling productive and motivated, making it a perfect choice for inspiring that long-overdue nature walk. Blucifer works well in indoor gardens with minimal direct sunlight, and it should finish flowering in 55 to 60 days.',
          strain_effects: 'Happy,Uplifted,Relaxed,Talkative,Focused',
          strain_flavors: 'Blueberry,Spicy/Herbal,Berry'
        },
        {
          strain_id: 269,
          strain_name: 'Blue-Afghani',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Bred by Jordan of the Islands in Canada, Blue Afghani is an indica-dominant strain that combines genetics from Blueberry and Afghani. Its stout plants produce dense, resinous buds that fill your nose with a sweet and spicy berry aroma. Next come the powerful full-body effects that keep you anchored in relaxation while pain, anxiety, and stress float away. ',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Sleepy',
          strain_flavors: 'Blueberry,Woody,Pungent'
        },
        {
          strain_id: 270,
          strain_name: 'Blue-Alien',
          strain_type: 'indica',
          strain_rating: '4.5',
          strain_description: 'Blue Alien is a powerful, sweet-smelling indica strain that combines genetics from Blueberry and Alien Kush. Like most Blueberry hybrids, Blue Alien takes on a sweet berry aroma that introduces its dreamy euphoria and full-body calm. Because its effects tend toward the sleepier side of the spectrum, most consumers prefer Blue Alien in the evening and when pursuing a good night’s sleep. ',
          strain_effects: 'Relaxed,Happy,Euphoric,Uplifted,Hungry',
          strain_flavors: 'Blueberry,Berry,Citrus'
        },
        {
          strain_id: 271,
          strain_name: 'Blue-Bastard',
          strain_type: 'indica',
          strain_rating: '3.8',
          strain_description: 'The descendant of indicas DJ Short Blueberry and God Bud, in addition to White family lineage, this indica-dominant hybrid is best known for its pungent blueberry aroma. Thanks to its hybrid makeup, the indica physical effects are strong without inducing sedation, making this strain appropriate for day or nighttime use. Best described as relaxing, Blue Bastard may be just the bud to take the edge off.',
          strain_effects: 'Euphoric,Happy,Sleepy,Uplifted,Creative',
          strain_flavors: 'Berry,Pine'
        },
        {
          strain_id: 272,
          strain_name: 'Blue-Bayou',
          strain_type: 'sativa',
          strain_rating: '2.8',
          strain_description: 'Blue Bayou can only be described as a comprehensive psychoactive experience. A true sativa, this peppy flower is optimal for a variety of cerebral ailments; patients report mood elevation and increased focus in particular. This strain may be suitable for a variety of applications including creative pursuits, focused work, or introspective exploration.',
          strain_effects: 'Giggly,Uplifted,Creative,Happy,Sleepy',
          strain_flavors: 'Sweet'
        },
        {
          strain_id: 273,
          strain_name: 'Blue-Blood',
          strain_type: 'indica',
          strain_rating: '4.2',
          strain_description: 'Blue Blood from breeder Medicann is an indica-dominant cross of OG Kush and Blueberry. It carries on the potent legacy of OG Kush genetics and adds a sweet berry flavor to the pine and diesel undertones. Some Blue Blood phenotypes have proven to show a tendency towards higher CBD levels which adds to the already relaxing nature of this strain. ',
          strain_effects: 'Relaxed,Sleepy,Hungry,Talkative,Focused',
          strain_flavors: 'Sweet,Blueberry,Earthy'
        },
        {
          strain_id: 274,
          strain_name: 'Blue-Boy',
          strain_type: 'hybrid',
          strain_rating: '4.1',
          strain_description: 'Blue Boy is a cross of popular favorites Blue Dream and Northern Lights #5 that will give you anything but the blues. Originally from Washington state, this sativa-dominant hybrid provides focused, cerebral effects that make it a great choice for daytime use. Its plants are bushy and grow large, and the flowers tend to be large and on the looser, leafier side. Blue Boy is a potent strain with THC levels that often test over 20%.',
          strain_effects: 'Happy,Relaxed,Giggly,Euphoric,Aroused',
          strain_flavors: 'Earthy,Pungent,Flowery'
        },
        {
          strain_id: 275,
          strain_name: 'Blue-Buddha',
          strain_type: 'indica',
          strain_rating: '4.9',
          strain_description: 'Blue Buddha is an indica-dominant strain with heavy body effects. Created by crossing Oregon Blueberry and Buddha’s Sister, this strain’s bouquet is thick with pepper and fruity terpenes. The flavor is delicate with notes of tea and sweet berries, leaving herbaceous sweetness on the palate. Blue Buddha’s effects are initially uplifting and cerebral, but quickly creep onto the body, weighing the consumer to the couch and stoning the mind. This strain caters to consumers seeking to curb ADD, ADHD, and chronic stress, allowing the consumer to forget their problems and mellow out.      ',
          strain_effects: 'Relaxed,Euphoric,Sleepy,Uplifted,Happy',
          strain_flavors: 'Blueberry,Citrus,Cheese'
        },
        {
          strain_id: 276,
          strain_name: 'Blue-Champange',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'A descendent of the famous Blue Dream and luxurious hybrid Champagne Kush, Blue Champagne is a gem in its own right. A sativa-dominant hybrid, this active strain is optimal for daytime consumption. Blue Dream delivers dreamy cerebral effects that are mellowed out by Champagne Kush, resulting in a combination that regular consumers find suitable for their needs. The flower has a sweet, fruity aroma and a grassy flavor yielding heavy expansion. On the potent but manageable side, Blue Champagne is a definite candidate for your cannabis arsenal.',
          strain_effects: 'Uplifted,Happy,Relaxed,Creative,Euphoric',
          strain_flavors: 'Sweet,Blueberry,Berry'
        },
        {
          strain_id: 277,
          strain_name: 'Blue-Cheese',
          strain_type: 'indica',
          strain_rating: '4.3',
          strain_description: 'Blue Cheese is an indica cross created by crossing a Blueberry male with an original U.K. Cheese (a Skunk #1 phenotype) female. The sweet and savory smells of berry and blue cheese combine to create a creamy, unique flavor reminiscent of the original Cheese. The heavy indica effects will help you feel relaxed at the end of the day and can provide relief for muscle spasms, pain, and stress.',
          strain_effects: 'Relaxed,Happy,Euphoric,Sleepy,Hungry',
          strain_flavors: 'Blue,Cheese,Cheese,Blueberry'
        },
        {
          strain_id: 278,
          strain_name: 'Blue-Cinex',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'Blue Cinex is the stimulating love child of Blue Dream and Cinex. This creeper lays into the mind from the first puff and expands outward within 15 minutes after inhalation. Offering longevity and potency, Blue Cinex is a perfect partner for long days on your feet or sustained physical activity. With a haziness that fills the mind and a physical stimulation that will get you talking, this strain will work as hard as you do. ',
          strain_effects: 'Focused,Uplifted,Happy,Energetic,Sleepy',
          strain_flavors: 'Blueberry,Earthy'
        },
        {
          strain_id: 279,
          strain_name: 'Blue-Cookies',
          strain_type: 'hybrid',
          strain_rating: '4.7',
          strain_description: 'Blue Cookies is an indica-dominant hybrid cross between two celebrity strains, Girl Scout Cookies and Blueberry. As the child of these heavyweight champion strains, Blue Cookies delivers a crushing blow of euphoria straight to the head, where it swiftly sinks down to relax the entire body. Sweet berry flavors fuse with earthy cherry notes in a flavor profile as enticing as the bud’s thick coat of frosty resin that stretches over twisting hues of green and purple. Novice consumers should approach Blue Cookies with modesty, but this strain’s potency is perfect for hard-to-impress veterans. You may also come across another variation of Blue Cookies, a select Girl Scout Cookies phenotype that lacks the Blueberry genetics.',
          strain_effects: 'Relaxed,Euphoric,Happy,Uplifted,Creative',
          strain_flavors: 'Berry,Blueberry,Sweet'
        },
        {
          strain_id: 280,
          strain_name: 'Blue-Crack',
          strain_type: 'hybrid',
          strain_rating: '4.2',
          strain_description: 'This sativa-dominant hybrid takes after its iconic parents, 50/50 hybrid Blue Dream and classic sativa Green Crack. Blue Crack reflects a balanced blend of its parents, with an energetic head rush from the Green that is mellowed out and mentally expansive thanks to the Blue, proposing an apt rename of ‘Turquoise’. Although dense by appearance, this flower yields soft, airy buds and a sweet, smooth aroma with blueberry undertones. As a high-energy strain with moderate to long-lasting effects, Blue Crack is a popular choice for daytime medicating.',
          strain_effects: 'Happy,Relaxed,Uplifted,Energetic,Focused',
          strain_flavors: 'Blueberry,Sweet,Berry'
        },
        {
          strain_id: 281,
          strain_name: 'Blue-Diamond',
          strain_type: 'indica',
          strain_rating: '4.4',
          strain_description: 'Blue Diamond is a mostly indica strain bred by BioQueen genetics. Although its exact parentage is unknown, Blue Diamond descends from an indica-dominant hybrid and inherits a hashy, earthy aroma. It finishes flowering quickly, rewarding growers with yields of large, chunky buds after eight weeks.',
          strain_effects: 'Euphoric,Relaxed,Happy,Sleepy,Talkative',
          strain_flavors: 'Sweet,Tree,Fruit,Pineapple'
        },
        {
          strain_id: 282,
          strain_name: 'Blue-Diesel',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Daughter of indica-dominant Blueberry and sativa-dominant NYC Diesel, Blue Diesel (also known as Blue City Diesel) falls on the slightly indica side with a pleasant, moderate to long-lasting body buzz. Thanks to its Blueberry genetics, this flower emanates a light berry aroma that is smooth, expansive, and fast-acting. This strain is optimal for daytime and comes with little to no fatigue or increased appetite, making it a desirable option for medical marijuana patients. Originally produced by Breeder’s Choice, this plant may provide just the relaxation you need.',
          strain_effects: 'Relaxed,Euphoric,Uplifted,Happy,Creative',
          strain_flavors: 'Blueberry,Diesel,Berry'
        },
        {
          strain_id: 283,
          strain_name: 'Blue-Dot',
          strain_type: 'sativa',
          strain_rating: '4.7',
          strain_description: 'Blue Dot, also known as MGB or Medical Grade Bud, is a sativa-dominant strain originally bred in Sonoma, California by a medical patient. Blue Dot is a genetic blend of Leda Uno, Northern Lights, and Haze . Its resinous buds offer a sweet hashy flavor profile, and can be expected to finish flowering in 9 to 10 weeks.',
          strain_effects: 'Energetic,Happy,Relaxed,Focused,Uplifted',
          strain_flavors: 'Earthy,Pungent,Berry'
        },
        {
          strain_id: 284,
          strain_name: 'Blue-Dragon',
          strain_type: 'hybrid',
          strain_rating: '4.4',
          strain_description: 'Thought to have originated in California, Blue Dragon is a cross of two classic strains, the indica-dominant Blueberry and sativa-dominant Sour Diesel. The flowers of this hybrid often turn dark purple and are covered in bright orange pistils and white trichomes. Sometimes measuring over 24% THC, Blue Dragon is very potent, giving users an intensely euphoric feeling and heavy body buzz. Its aroma and flavor are what you might expect given its lineage: equal parts sour fuel and sweet berry with an expansive smoke.',
          strain_effects: 'Euphoric,Uplifted,Relaxed,Happy,Giggly',
          strain_flavors: 'Blueberry,Berry,Sweet'
        }
      ]);
    });
};
