import { BlogType } from "@types";

import img1 from '@images/blogs/1.jpg'
import img2 from '@images/blogs/2.png'
import img3 from '@images/blogs/3.png'
import img4 from '@images/blogs/4.png'
import img5 from '@images/blogs/5.png'
import img6 from '@images/blogs/6.png'
import img7 from '@images/blogs/7.png'

export const blogs : Array <BlogType> = [
    {
        id:'1',
        img:img1,
        tag:'Crypto basic',
        title:'All about Investing in NFTs and related risks'
    }
    ,
    {
        id:'2',
        img:img2,
        tag:'Crypto basic',
        title:'What is cryptocurrency? all you need to know',
        summary:'Cryptocurrencies are basically digital assets. It is secured by cryptography.'
    }
    ,

    {
        id:'3',
        img:img3,
        tag:'Crypto basic',
        title:'Can crypto really replace your bank account?',
        summary:'From direct deposit to earning yield, key ways crypto can help you take control..'
    }
    ,
    {
        id:'4',
        img:img4,
        tag:'Tips & Tricks',
        title:'How to setup crypto wallet in your account',
        summary:'A crypto wallet is a place where you can securely keep your crypto.. '
    }
    ,
    {
        id:'5',
        img:img5,
        tag:'Crypto basic',
        title:'The fact about bitcoin must you know',
        summary:"Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure.."
    }
    ,
    {
        id:'6',
        img:img6,
        tag:'TIPS & TRICKS',
        title:'When is the best time to invest in crypto?',
        summary:"When prices are fluctuating, how do you know when to buy?"
    }
    ,
    {
        id:'7',
        img:img7,
        tag:'TIPS & TRICKS',
        title:'What Is DeFi? Inside the Wild West of Cryptocurrency.',
        summary:"Welcome to decentralized finance or DeFi, the new frontier of crypto that will.."
    }
]