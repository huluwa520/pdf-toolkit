import Link from "next/link";


export default function Footer(){

return (

<footer className="bg-gray-100 mt-20">


<div className="max-w-6xl mx-auto px-5 py-10">


<div className="flex gap-5 mb-5">


<Link href="/about">
About
</Link>


<Link href="/privacy-policy">
Privacy Policy
</Link>


<Link href="/terms">
Terms
</Link>


<Link href="/contact">
Contact
</Link>


</div>



<p className="text-gray-500 text-sm">

© 2026 PDF Toolkit. All rights reserved.

</p>


</div>


</footer>

);

}