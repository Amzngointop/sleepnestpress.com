import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
  'https://www.amazon.com/Utopia-Bedding-Gusseted-Premium-Quality/dp/B08DTH86Q2?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=1aaa19d9cee660b29909dcc759a7eeee&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Pillows-for-Sleeping-2-Pack/dp/B01LYNW421?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=6f4b065fdee0e87add5cf867ad787af9&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Adjustable-Cervical-Sleeping-Ergonomic-Orthopedic/dp/B0C1GP88C4?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=96a29823643be3d7de54414221d1839b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sasttie-Pillows-Collection-Stomach-Sleepers/dp/B0DPMNWTXJ?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=e53e519578cc58624cf4ed6629ecfd3a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/QUTOOL-Cooling-Pillow-CertiPUR-US-Adjustable/dp/B07T7W7VR3?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=99b921dcf74484dda5f010bebc28dd60&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/EIUE-Collection-Size%EF%BC%8CPillows-Alternative-Microfiber/dp/B097CZCDQG?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=c691c1fe922a29cc9e61eab38cac2f48&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Coop-Home-Goods-Memory-Foam-Pillow-For-Side-Back-Stomach-Sleeper/dp/B00EINBSEW?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=1b6748e6ed9708042e61cc70ec10b1ae&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Nuzzle-Adjustable-Pillow-Sleepers-Collection/dp/B0DX793MV8?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=3902189f758aa5820accd7c25efec1ed&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Utopia-Bedding-Premium-Filled-Pillows/dp/B071DFDF9N?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=28bc6d1d4c4b3857e6e0386ac91e7f8b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Osteo-Cervical-Odorless-Adjustable-Orthopedic/dp/B09964WTF5?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=fc1ff76b9d140b6fef010c217d070cdc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bedsure-Fleece-Blanket-Lightweight-Microfiber/dp/B0157T2ENY?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=0a321292485fffc1423baa2bc82ade20&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bedsure-Cotton-Bamboo-Blanket-Lightweight/dp/B088WYYH85?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=69af40a63cc0cb3e4e3593387628c735&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Yescool-Weighted-Blanket-Sleeping-Breathable/dp/B092LZLLGF?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=6211b74a0a984b657834bd7bfed7eee4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bedsure-100-Cotton-Thermal-Blanket/dp/B07MHM248Q?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=8208b8e87ae0dac74ba7a77ff05fc94b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Cooling-Blankets-Sleepers-Ultra-Cool-Lightweight/dp/B09QL17PLS?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=7052056fa20d5ee65cec26f965c4ffc2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/YnM-Weighted-Blanket-Cotton-Material/dp/B073429DV2?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=95e75f828384399dde891cfbe1a01901&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Weighted-130-220lbs-Microfiber-Comforter-Breathable/dp/B08SVY9CKN?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=3dba3322c2bfb908110559a744254da9&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Weighted-Breathable-Microfiber-Material-All-Season/dp/B097DK6ZCR?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=f88cc16314b86d207496670f249668c6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Contoured-Sleeping-Blindfold-Concave-Meditation/dp/B07KC5DWCC?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=69bb5e328e2cc3f19d7df3907c374397&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/myhalos-migraine-mask-headache-relief/dp/B09CZ68WV3?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=b9283208c233ca7ecf1fea1dbb325926&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sleeping-LitBear-Contoured-Breathable-Adjustable/dp/B09H7FZ5JM?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=bf4811c07525db4eabb7e0bd20b4969a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Adjustable-Sleeping-Blindfold-BeeVines-Christmas/dp/B08817H6HS?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=2a902aabc8911ac9c2f7c3d4a2f4bdd3&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Fygrip-Comfort-Pressure-Free-Block-Out-Adjustable/dp/B0DJNSZ8VW?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=429b48f32dd29e9342dfa515e03d5071&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Upgraded-Contoured-Adjustable-Comfortable-Blindfold/dp/B07MR27G3D?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=d938eb4c9218f11a2eb426b0d2fbfb9d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/WAOAW-Sleep-Sleeping-Blocking-Blindfold/dp/B09712FSLY?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=80d2c134e61b7a3f594bb13258e9a7b8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Headphones-Bluetooth-LC-dolida-Ultra-Thin-Meditation/dp/B07T6FNLQV?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=b03c6cc245044c1272ba2421d58a43f7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Queen-Size-Piece-Sheet-Set/dp/B01M16WBW1?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=934ed18b0a39e04ba3afa8c642f761c8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/AmazonBasics-Microfiber-Sheet-Queen-Beige/dp/B00Q7OA2XS?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=dfed0c607ae0c21947277d270f30df70&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Utopia-Bedding-3-Piece-Twin-Sheet/dp/B00NX0XK1K?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=1dd71d1154f4722d2ab58089ed28e90d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Queen-Size-Sheet-Set-Pillowcases/dp/B00NX0WXQI?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=ce22166996d4ab22322504671ead7fea&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BEDSURE-Queen-Sheet-Set-Soft-1800-Sheets-Queen-Size-Bed-Pieces-Hotel-Luxury-Grey-Easy-Care-Polyester-Microfiber-Cooling-Bed-Sheet-Set/dp/B07P5NBRL5?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=47383dc27a7c034305f80b1f0597c2a4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Mellanni-Bed-Sheet-Set-Hypoallergenic/dp/B00NLLUMOE?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=cc178fd2decb184f9e7c6b3920b6d715&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HYMOKEGE-Comforter-Seersucker-Comforters-Pillowcases/dp/B0BNJDPSF7?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=c816ee82122534dc276516324035ce44&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/CozyLux-Pieces-Comforter-Bedding-Pillowcases/dp/B08CRJYM55?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=7bd1536f0543b00619004e5a606f6b4f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Loves-cabin-Comforter-Bedding-Pillowcase/dp/B0CFLJZ7B1?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=732857ca74e889beeb4728c26ad65863&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/CozyLux-Queen-Comforter-Set-Pillowcases/dp/B0C4GJSJ9M?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=4e7f70fc870758ffa0613f9c60005758&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HEVUMYI-Comforter-Alternative-Bedding-Pillowcases/dp/B0BLVH5YX3?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=f1bff4f8259bfe1395d60f7dafd53ba7&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/MUXHOMO-Comforter-Reversible-Bedding-Pillowcases/dp/B0DQ8CZ187?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=5b78e112bbf50b576bbb962e94e432b2&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/BEDLORE-Waterproof-Mattress-Protector-Dirt-Proof/dp/B0C1NN6Y5H?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=f84349e21e6ba5a61630372055fd5ee1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bamboo-Mattress-54x75Inches-Cooling-Breathable/dp/B07JQSWJJS?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=bec83cbac2bb1af4d192e3caea4ace16&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Utopia-Bedding-Quilted-Fitted-Mattress/dp/B00NESDSKY?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=fa74dbc1d911da02e88da1115bd9a9c3&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/PlushDeluxe-Premium-Bamboo-Mattress-Protector/dp/B07H71SBC4?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=386341c517391d9d607e333d8bfccc9c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Mattress-Viscose-Derived-Stretchable-Breathable/dp/B0D3D4WHSF?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=e1d9d9c5a51a52eb8cbe8e57b3957f84&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/EASELAND-Protector-Stretches-Hypoallergenic-Alternative/dp/B07413BLNN?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=52cab8804f1691c5163b777738ba4c2e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Springspirit-Waterproof-Mattress-Protector-Breathable/dp/B08BC4XLV2?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=c8a4b7791cb853d29be6ebd4a5d30d44&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Bedsure-Mattress-Twin-Extra-Hypoallergenic/dp/B0738B8SQS?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=796bd2268c0df5ddcf6db24f1994cae6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/MATBEBY-Mattress-Breathable-Stretches-Protector/dp/B08KNXHJSK?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=5972f6bb4edd4f432b70d4dbd3308fed&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/SameBed-Mattress-Protector-Overfilled-Alternative/dp/B0BYNPPW8V?th=1&linkCode=ll2&tag=sleepnestpres-20&linkId=2de442ed644b3e973a210fd92aa4245d&language=en_US&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'stress'

    if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName);
    if (redirectFlag?.value) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];
      const targetUrl = randomUrl 
   

      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
  }

  return NextResponse.next()
}


export const config = {
  matcher: ['/'],
}

