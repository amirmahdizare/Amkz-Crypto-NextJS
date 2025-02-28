import { FeatureType } from "@types";

import manageImg from '@images/features/mange-port.svg'
import protectedImg from '@images/features/protected.svg'
import cryptoImg from '@images/features/crypto.svg'
import learnImg from '@images/features/learn.svg'

export const features: Array<FeatureType> = [
    {
        icon: manageImg,
        title: 'Manage Portfolio',
        description: 'Buy and sell popular digital currencies, keep track of them in the one place.',
    }
    ,
    {
        icon: protectedImg,
        title: 'Protected Securely',
        description: 'All cash balances are covered by FDIC insurance, up to a maximum of $250,000.'
    }
    ,
    {
        icon:cryptoImg,
        title:'Cryptocurrency Variety',
        description:'Supports a variety of the most popular digital currencies and always uptodate.'
    }
    ,
    {
        icon:learnImg,
        title:'Learn Best Practice',
        description:'Easy to know how to cryptocurrency works and friendly to newbie.'
    }

]