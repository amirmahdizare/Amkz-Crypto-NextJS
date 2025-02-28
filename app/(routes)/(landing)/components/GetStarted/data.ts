import { StepType } from "@types";

import createAccountImg from '@images/steps/account.svg'
import connectBankImg from '@images/steps/bank.svg'
import portfolioImg from '@images/steps/portfolio.svg'


export const steps : Array<StepType> = [
    {
        icon:createAccountImg,
        title:'Create Your Account',
        description:'Your account and personal identity are guaranteed safe.',
    }
    ,
    {
        icon:connectBankImg,
        title:'Connect Bank Account',
        description:'Connect the bank account to start transactions.',
    }
    ,
    {
        icon:portfolioImg,
        title:'Start Build Portfolio',
        description:'Buy and sell popular currencies and keep track of them.',
    }
]