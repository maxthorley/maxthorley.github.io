var subject = ["a person who probably owns 10+ properties",
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
"6 bedroom house in Turramurra for $4,850,000",,
"5 bedroom house in St Ives for $2,672,000",
"5 bedroom house in Strathfield for $2,906,000",
"5 bedroom house in Croydon for $3,050,000",
"5 bedroom house in Roseville for $3,805,000",
"5 bedroom house in Kenthurst for $4,630,000",
"5 bedroom house in Mosman for $4,858,000",
"4 bedroom house in Willoughby for $2,315,000",
"4 bedroom house in Denistone for $2,320,000",
"4 bedroom house in Fairlight for $2,320,000",
"4 bedroom house in Eastwood for $2,350,000",
"4 bedroom house in Randwick for $2,350,000",
"4 bedroom house in Newtown for $2,410,000",
"4 bedroom house in Turramurra for $2,420,000",
"4 bedroom house in North Curl Curl for $2,430,000",
"4 bedroom house in Pyrmont for $2,530,000",
"4 bedroom house in Concord for $2,535,000",
"4 bedroom house in Castlecrag for $2,600,000",
"4 bedroom house in Epping for $2,650,000",
"4 bedroom house in Lilli Pilli for $2,661,000",
"4 bedroom house in Drummoyne for $2,805,000",
"4 bedroom house in Killara for $2,850,000",
"4 bedroom house in Greenwich for $2,900,000",
"4 bedroom house in Narrabeen for $2,900,000",
"4 bedroom house in Kingsford for $3,007,000",
"4 bedroom house in Naremburn for $3,030,000",
"4 bedroom house in Cronulla for $3,600,000",
"4 bedroom house in Chatswood for $3,950,000",
"4 bedroom house in Mosman for $4,400,000",
"4 bedroom house in Bronte for $5,330,000",
"3 bedroom unit in Camperdown for $2,050,000",
"3 bedroom unit in Little Bay for $2,300,000",
"3 bedroom unit in Fairlight for $2,355,000",
"3 bedroom townhouse in Collaroy for $1,937,000",
"3 bedroom townhouse in Waverton for $2,210,000",
"3 bedroom house in Balmain for $2,040,000",
"3 bedroom house in Five Dock for $2,085,000",
"3 bedroom house in Drummoyne for $2,100,000",
"3 bedroom house in Kingsgrove for $2,100,000",
"3 bedroom house in Lilyfield for $2,110,000",
"3 bedroom house in Rodd Point for $2,200,000",
"3 bedroom house in Annandale for $2,220,000",
"3 bedroom house in Mosman for $2,225,000",
"3 bedroom house in Newtown for $2,235,000",
"3 bedroom house in Turramurra for $2,286,000",
"3 bedroom house in Bondi Beach for $2,305,000",
"3 bedroom house in Riverview for $2,320,000",
"3 bedroom house in Waverley for $2,330,000",
"3 bedroom house in Russell Lea for $2,460,000",
"3 bedroom house in Rozelle for $2,470,000",
"3 bedroom house in Concord for $2,575,000",
"3 bedroom house in North Bondi for $2,650,000",
"3 bedroom house in Gladesville for $2,655,000",
"3 bedroom house in Gordon for $2,675,000",
"3 bedroom house in Drummoyne for $2,700,000",
"3 bedroom house in Crows Nest for $2,800,000",
"3 bedroom house in Hunters Hill for $2,850,000",
"3 bedroom house in Chatswood for $2,900,000",
"3 bedroom house in Eastwood for $2,900,000",
"3 bedroom house in Cronulla for $3,161,000",
"3 bedroom house in Rose Bay for $3,300,000",
"3 bedroom house in Putney for $3,480,000",
"3 bedroom house in Concord for $3,830,000",
"3 bedroom house in Rodd Point for $3,880,000",
"2 bedroom unit in Erskineville for $1,160,000",
"2 bedroom unit in Alexandria for $1,183,000",
"2 bedroom unit in Erskineville for $1,190,000",
"2 bedroom unit in Balgowlah for $1,200,000",
"2 bedroom unit in Collaroy for $1,200,000",
"2 bedroom unit in Dee Why for $1,220,000",
"2 bedroom unit in Burwood for $1,250,000",
"2 bedroom unit in Waverton for $1,260,000",
"2 bedroom unit in Bellevue Hill for $1,267,000",
"2 bedroom unit in Cremorne for $1,290,000",
"2 bedroom unit in Kurraba Point for $1,310,000",
"2 bedroom unit in Freshwater for $1,350,000",
"2 bedroom unit in Maroubra for $1,350,000",
"2 bedroom unit in Northwood for $1,350,000",
"2 bedroom unit in Bronte for $1,355,000",
"2 bedroom unit in Chatswood for $1,356,000",
"2 bedroom unit in Kensington for $1,370,000",
"2 bedroom unit in Manly for $1,380,000",
"2 bedroom unit in Lane Cove for $1,401,000",
"2 bedroom unit in North Bondi for $1,406,000",
"2 bedroom unit in Potts Point for $1,980,000",
"2 bedroom unit in Cremorne Point for $2,200,000",
"2 bedroom unit in Cremorne Point for $2,300,000",
"2 bedroom townhouse in Hornsby for $935,000",
"2 bedroom townhouse in Forestville for $1,180,000",
"2 bedroom house in Erskineville for $1,700,000",
"2 bedroom house in Maroubra for $1,760,000",
"2 bedroom house in Annandale for $1,765,000",
"2 bedroom house in Newtown for $1,790,000",
"2 bedroom house in Paddington for $1,890,000",
"2 bedroom house in Fairlight for $1,900,000",
"2 bedroom house in Rodd Point for $1,915,000",
"2 bedroom house in Clovelly for $2,200,000",
"2 bedroom house in Crows Nest for $2,300,000",
"2 bedroom house in Concord for $2,400,000",
"1 bedroom unit in Cremorne Point for $907,000",
"1 bedroom unit in Manly for $910,000",
"1 bedroom unit in Woolloomooloo for $910,000",
"1 bedroom unit in Mosman for $930,000",
"1 bedroom unit in Chippendale for $935,000",
"1 bedroom unit in Queens Park for $1,081,000",
"1 bedroom unit in Elizabeth Bay for $1,350,000",


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
