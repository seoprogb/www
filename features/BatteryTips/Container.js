import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function BatteryTips() {

  const router = useRouter();

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Extend Your iPhone's Battery Life - Top Tips by Gelatotech | On-Demand Repair in SF</title>
        <meta name="description" content="Discover the top tips to extend your iPhone's battery life from Gelatotech. Learn simple, effective ways to maintain your battery health and performance." />
        <meta name="keywords" content="iPhone Battery, Battery Saving Tips, iPhone Repair, Battery Health, iPhone Battery Replacement, On-Demand Repair, San Francisco" />
        <meta itemProp="name" content="Extend Your iPhone's Battery Life - Expert Tips by Gelatotech" />
        <meta itemProp="description" content="Maximize your iPhone's battery performance with our expert tips. Facing battery issues? Gelatotech offers on-demand battery replacement services in SF." />
        <meta itemProp="image" content='/images/pexels-photo-607812.jpeg' />
        <meta property="og:url" content="https://www.gelatotech.com/blog/battery-tips" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Save Your iPhone Battery Life - Learn from Gelatotech" />
        <meta property="og:description" content="Get the best iPhone battery saving tips from Gelatotech. If tips aren't enough, we provide on-demand iPhone battery replacements in San Francisco." />
        <meta property="og:image" content='/images/pexels-photo-607812.jpeg' />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top iPhone Battery Saving Tips | Gelatotech" />
        <meta name="twitter:description" content="Boost your iPhone's battery life with Gelatotech's expert advice. Need a replacement? We offer quick, on-demand services in SF." />
        <meta name="twitter:image" content='/images/pexels-photo-607812.jpeg' />
        <meta name="google-site-verification" content="otWUpfaXKjZHurqJg8KCSsabxvEJ9380Jprvwzazg8g" />
        <link rel="stylesheet" href="/stylesheets/battery.css" />
      </Head>

      <section id="blog">
        <div className="container blog-container">
          <h1 className="title is-1">Top 3 iPhone Battery Saving Tips 🔋</h1>
          <Image src='/images/pexels-photo-607812.jpeg' width={1000} height={600} className="blog-img" />
          <style jsx global>{`
            .blog-img {
              border-radius: 10px;
            }
          `}</style>
          <h2 className="title is-3">Intro</h2>
          <p>
            Battery issues are something everyone has experiences with. For this blog I'll show you my personal
            favorite
            battery saving tips. Regardless, of the iOS version, they all apply.
            If you believe none of these tips helped you. Your battery healthy may be in very poor condition. Our
            service provides iPhone Repair services at your door including battery replacement <a onClick={()=> router.push('/#repair')} target="_blank">starting
              at $45</a> . If
            battery is 70% or lower, it's in poor condition. To check your battery health do the following steps
          </p>
          <br />
          <p>Settings&gt;Battery&gt;Battery Health</p>
          <br />
          <h1 className="title is-3"> 1. Turn off background app refresh </h1>
          <p>
            Reason background app refresh is on by default is because the iPhone is constantly fetching data from
            all of
            the apps listed. I recommend to turn off the apps you mostly wouldn't receive notifications on. To turn
            off
            background app refresh do the following steps:
          </p>
          <br />
          <p> Settings&gt;General&gt;Background app Refresh&gt; Disable Off or select app(s)</p>
          <br />
          <h1 className="title is-3"> 2. Purchase a battery case instead of portable charger </h1>
          <p>
            If you find yourself always being at 1% during the middle of the day. Then our portable charger is the
            best
            option for those who don't enjoy caring an extra battery. Don't be fooled, your low battery performance
            can
            also be due to low battery health. To check you battery health do the following steps:
            <br />
          </p><p>Settings&gt;Battery&gt;Battery Healthy</p>
          <br />
          <p> Note: If battery health result is 70% or lower, you should consider replacement.</p>
          <p />
          <br />
          <h1 className="title is-3">3. Stop Motion &amp; Animation</h1>
          <p>
            Using animations when you open apps, unlock phone, and moving icons (parallax effect) are battery
            draining.
            This feature is the one that's the easiest to live without.</p>
          <br />
          <p>Settings&gt;General&gt; Accessibility&gt; Reduce Motion</p>
        </div>
      </section>
    </div>
  )
}