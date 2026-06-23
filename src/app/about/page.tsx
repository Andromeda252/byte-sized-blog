import Navbar from "@/components/Navbar"
import PageContainer from "@/components/PageContainer"

export default function AboutPage() {
    return (
        <PageContainer>
            <Navbar />
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-700">
                    About The Byte-Sized Blog
                </h1>
                <p className="text-md md:text-lg mb-6 text-zinc-600 leading-relaxed">
                    The Byte-Sized Blog is a gaming blog that aims to offer a refreshingly enthusiastic 
                    and optimistic perspective on the gaming industry, with a desire to maintain focus 
                    on what makes video games so fun and exciting. Primarily focused on Nintendo, but 
                    I am always willing to branch out and cover anything that interests me.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-700">
                    Why This Blog Exists
                </h2>
                <p className="text-md md:text-lg mb-6 text-zinc-600 leading-relaxed">
                    I've always wanted to try my hand at gaming content creation, so I created The Byte-Sized Blog
                    as an outlet to get my thoughts out there on the gaming topics that matter to me. I also wanted
                    to have a hook to help the blog stand apart, so I decided, with the landscape of gaming
                    discourse seeming to skew more and more negative by the day, that my blog would focus on what makes
                    gaming great. That may not seem all that revolutionary, but my aim is to do it in a way that injects
                    into the gaming landscape a genuine sense passion, enthusiasm, and most of all, optimism that I feel
                    it could use more of. I also aim to not waste your time with overbloated articles by aiming to keep most
                    content short-form, hence the 'Byte-Sized' in the name. If you love gaming and desire to spend more time 
                    celebrating the good and less time stewing over the bad, you've come to the right place.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-700">
                    Who Am I
                </h2>
                <p className="text-md md:text-lg mb-6 text-zinc-600 leading-relaxed">
                    I've had a passion for gaming pretty much my entire life. Whether it be my earlier years with
                    the educational LeapFrog Leapster handhelds, to my earliest memories of Nintendo on the DS and Wii,
                    all the way until now where the Switch 2 is a constant in my life, games have been a part of my life
                    in one way or another for almost as long as I can remember. As you've probably guessed, I'm primarily a Nintendo guy,
                    and have been since receiving my first DS as a youngster. I love everything Super Mario, Zelda, and Pokemon, as well
                    as greatly enjoying Splatoon, Kirby, Metroid, Animal Crossing, and more. I've dabbled in just about every Nintendo franchise
                    (with the sole exception of Fire Emblem, just haven't gotten around to trying it yet), and have thoroughly enjoyed my time
                    with each. However, contrary to what it may seem, I'm not all Nintendo all the time. I also have a PS5, and greatly enjoy many
                    non-Nintendo franchises, such as (but not limited to) Sonic the Hedgehog, Kingdom Hearts, Final Fantasy, and, interestingly enough,
                    Five Nights at Freddy's (my favorite series I've never played cause I'm a wuss lmao). If you're interested in learning more
                    about what I'm into, I'd recommend the following article on my favorite games!
                </p>
        </PageContainer>
    )
}