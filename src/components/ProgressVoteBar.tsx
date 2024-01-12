import React from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

type ProgressVoteType = {
  type: string
  widthPercentage: string
  percentage: string
}
const ProgressVoteBar: React.FC<ProgressVoteType> = ({ percentage, type, widthPercentage }) => {
  console.log({widthPercentage, type})
  if (widthPercentage)
    return (
      <div className={cn(`h-8  ${widthPercentage}  rounded-full  pl-2 flex items-center`,
        type === "agree" ? "bg-green-500 dark:bg-green-300" : "bg-red-500 dark:bg-red-300",
        widthPercentage === "w-[0]" && "w-0"
      )}>
        <div className="flex items-center gap-3 text-black font-medium">
          <Icon icon="material-symbols:person" className="w-5 h-5" />
          <p className="w-32">{percentage} {type === "agree" ? "Agree" : "Disagree"}</p>
        </div>
      </div>
    )
  
}

export default ProgressVoteBar
