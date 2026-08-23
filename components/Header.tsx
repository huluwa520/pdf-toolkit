import Link from "next/link";


export default function Header(){

return (

<header className="bg-white shadow">


<div className="max-w-6xl mx-auto px-5 py-5 flex justify-between items-center">


<Link
href="/"
className="text-2xl font-bold"
>

PDF Toolkit

</Link>



<nav className="flex gap-5 text-sm">


<Link href="/compress-pdf">
Compress
</Link>


<Link href="/merge-pdf">
Merge
</Link>


<Link href="/split-pdf">
Split
</Link>


<Link href="/jpg-to-pdf">
JPG to PDF
</Link>


<Link href="/pdf-to-jpg">
PDF to JPG
</Link>


</nav>


</div>


</header>

);

}