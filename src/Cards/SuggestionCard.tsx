
function SuggestionCard({postTitle, onClick} : {postTitle: string; onClick:()=>void}) {
  return (
    <div 
    className=' my-[5px] p-[10px] flex justify-center items-center border border-slate-300'
    onClick={onClick}>
        {postTitle}
    </div>
  )
}

export default SuggestionCard