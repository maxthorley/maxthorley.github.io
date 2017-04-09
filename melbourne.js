var subject = ["some idiot",
            "a person who probably owns 10+ properties",
            "someone",
            "someone who MUST have been joking when they bid at the auction",
            "an individual who would be terrible at Deal or no Deal",
            "someone whose personal manifesto is based off 'The Castle'",
            "an Australian Financial Review reader",
            "someone who fucking loved 'The Big Short' but struggles with self-awareness",
            "an Instagram blogger who is making some sweet cash from their 'content' ",
            "a person whose version of savings is a 20% deposit on a million dollar loan ",
            "the future subject of a 'how I bought 20 properties before 30 with a small loan from my parents' article",
            "someone who got one of the 'good jobs' that Joe Hockey was talking about",
            "a real estate investor who thinks the housing market will never crash because 'Australia is different mate'",
            "an overseas investor who is unfairly profiled by the press",
            "an 'entrepreneur' with three failed startups and a fallback job at dad's firm",
            "a person who keeps referring to the 'property ladder' without realising that you can go down ladders too",
            "that couple who haven't shut up about property since they moved in with their parents 4 years ago",
            "a masochist who's actually really looking forward to decades of debt",
            "an Andrew Bolt apologist",
            "your unemployed cousin",
            "someone who posts a motivational quote on Facebook daily",
            "a couple who got carried away at the auction",
            "one of your mum's friend's kids",
            "someone who writes 'nice to e-meet you' in emails",
            "a guy who works so much he’s never at home anyway",
            "a couple who just want to please their parents",
            "a dude who financed a car worth more than his annual salary",
          ]

var property =[
"2 bedroom house in Carnegie for $1,424,000",
"2 bedroom house in Ashburton for $1,450,000",
"2 bedroom house in Albert Park for $1,490,000",
"2 bedroom house in Ashwood for $1,495,000",
"2 bedroom house in Blackburn for $1,631,000",
"2 bedroom house in Fitzroy North for $1,802,500",
"2 bedroom house in Balwyn North for $1,900,000",
"2 bedroom house in Albert Park for $2,810,000",
"2 bedroom townhouse in Fitzroy for $1,350,000",
"2 bedroom unit in Melbourne for $1,060,000",
"2 bedroom unit in Elwood for $1,260,000",
"2 bedroom unit in Hawthorn East for $1,462,000",
"3 bedroom house in Ashwood for $1,628,000",
"3 bedroom house in St Albans for $1,650,000",
"3 bedroom house in Box Hill North for $1,670,000",
"3 bedroom house in Moonee Ponds for $1,670,000",
"3 bedroom house in Cheltenham for $1,750,000",
"3 bedroom house in Richmond for $1,785,000",
"3 bedroom house in Glen Iris for $1,800,000",
"3 bedroom house in Box Hill North for $1,855,000",
"3 bedroom house in Balwyn North for $1,911,000",
"3 bedroom house in Balwyn North for $1,922,000",
"3 bedroom house in Carnegie for $2,000,000",
"3 bedroom house in Brighton for $2,140,000",
"3 bedroom house in Albert Park for $2,155,000",
"3 bedroom house in Port Melbourne for $2,400,000",
"3 bedroom house in Deepdene for $2,420,000",
"3 bedroom house in Brighton for $2,575,000",
"3 bedroom townhouse in Brighton for $2,100,000",
"3 bedroom unit in Carlton for $1,520,000",
"4 bedroom house in Brighton East for $1,950,000",
"4 bedroom house in Ivanhoe East for $2,026,000",
"4 bedroom house in Yarraville for $2,035,000",
"4 bedroom house in Mount Waverley for $2,055,000",
"4 bedroom house in Blackburn South for $2,100,000",
"4 bedroom house in Camberwell for $2,110,000",
"4 bedroom house in Templestowe for $2,150,000",
"4 bedroom house in Camberwell for $2,216,000",
"4 bedroom house in Oakleigh for $2,525,000",
"4 bedroom house in Ivanhoe for $3,020,000",
"4 bedroom house in Malvern East for $3,200,000",
"4 bedroom house in Brighton for $4,225,000",
"4 bedroom townhouse in Brighton for $2,900,000",
"4 bedroom unit in Melbourne for $1,850,000",
"5 bedroom house in South Melbourne for $2,635,000",
"5 bedroom house in Mount Waverley for $2,668,880",
"5 bedroom house in Canterbury for $3,115,000",

]



var impact = ["now they can’t afford to eat smashed avocado on toast for 789,374 years",
            "they CAN'T WAIT to tell you about every time they go to Ikea and Bunnings",
            "you'd better bring some Cadbury Favourites when they tell you 'not to bring a thing' to their house warming",
            "they can't afford to furnish it, but who cares right? They'll just get another loan",
            "maybe they're really happy, have saved for years, and it'll all end up a huge success",
            "they can't wait to 'finally control' what goes in their house... like all the bills coming through the mailbox",
            "they're itching to start a 10-year legal dispute with their neighbour over a tree",
            "they're now looking at what else they can negatively gear",
            "they have no plans of living there or renting it out ever, seriously",
            "they're pretty keen to tell you 'it's ACTUALLY not that hard to get into property'",
            "their bank cannot believe they were dumb enough to sign that contract",
            "finally their two jet skis, that were bought on finance, have a home too",
            "they're the reason that their 'cool and trendy' suburb is gentrifying so fast",
            "surely it's only days until they make a noise complaint at 9pm about the pub next door's live music",
            "you'll never see them again, but at least they're on the property ladder",
            "how lucky are they that they live in the only city in the world that's immune to housing bubbles",
            "their food pyramid is now solely ramen",
            "as an ANZ shareholder, thank you",
            "the only thing drier than their celebratory Facebook post is a bowl of milkless Weet-Bix",
            "unfollow them on Instagram now",
            "they're in a good catchment area, even if they can't afford kids",
            "Bernard Salt has already followed them on Twitter",
            "they're dead broke, but at least they have a status symbol",
            "The Sahara Desert is more liquid than their portfolio",
            "out of nowhere, Malcolm Turnbull just got the chills",
            "if this website gets one billion views I still couldn't afford the deposit",
            "it's 'good debt', not like their maxed out credit card",
            "worst comes to worst, they'll just 'sell it mate'. Lucky no one else thought of that",
            "what the fuck is going on?",
            "maybe I'm wrong and this is completely normal",
            "now their real estate agent can afford another huge billboard with his head on it",
            "they're getting the NBN in 47 years",
            "their builder friends are blocking their phone numbers",
            "good for them",
            "if they get a dodgy tradie, they'll have Grimshaw on the phone ASAP",
            ]

var randomSubject = Math.floor(Math.random()*subject.length);
var randomProperty = Math.floor(Math.random()*property.length);
var randomImpact = Math.floor(Math.random()*impact.length);

// function writeAnswer() {
document.write("<h2>Last weekend, " + subject[randomSubject] + " bought a " + property[randomProperty] + " and " + impact[randomImpact] + ".</h2>");
// }
