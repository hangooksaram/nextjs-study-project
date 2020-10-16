import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost(){
    return(
        <div>
            <Head>
                <title>first post</title>
            </Head>
        <h1>this is my first next post</h1>
        <h2><Link href = "/"><a>and i want to go to home</a></Link></h2>
        </div>
    )
} 