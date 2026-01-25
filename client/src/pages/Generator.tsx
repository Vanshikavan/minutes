import { useState } from "react"
import SectionTitle from "../components/SectionTitle"
import Upload from "../components/Upload"
import { Loader2Icon, RectangleHorizontalIcon, RectangleVerticalIcon, Wand2Icon } from "lucide-react"

const Generator = () => {

    const [name,setName]=useState('')
    const [productName,setProductName]=useState('')
    const [productDescription,setProductDescription]=useState('')
    const [aspectRatio, setAspectRatio] = useState('9:16')
    const [productImage, setProductImage]= useState<File | null>(null)
    const [modelImage,setModelImage]= useState<File | null>(null)
    const [userPrompt, setUserPrompt] =useState('')
    const [isGenerating, setIsGenerating] = useState(false)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'product' | 'model')=>{
        if(e.target.files && e.target.files[0]){
            if(type === 'product') setProductImage(e.target.files[0]);
            else setModelImage(e.target.files[0])
        }
    }

    const handleGenerate = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }

  return (
    <div className="min-h-screen text-white p-6 md:p-12 ">
        <form onSubmit={handleGenerate} className="max-w-4xl mx-auto mb-12">
            <SectionTitle 
    text1="Create" 
    text2="Instantly generate high-impact creative ADs" 
    text3="Upload your product and model images to create eye-catching ads, short videos, and social media content in just a few minutes" />
<div className="flex gap-20 max-sm:flex-col items-start justify-between">
    <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-12 mb-12">
        <Upload label="Product Photo" file={productImage} onClear={()=>setProductImage(null)}
         onChange={(e)=>handleFileChange(e,'product')}/>
        <Upload label="Model Photo" file={modelImage} onClear={()=>setModelImage(null)}
         onChange={(e)=>handleFileChange(e,'model')}/>
    </div>
    <div className="w-full mt-12">
        <div className="mb-4 text-gray-300">
            <label htmlFor= "name" className="block text-sm mb-4">Project Title</label>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}
              placeholder="Give your project a name" required
              className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
               border-pink-200/10 focus:border-pink-500/50 outline-none transition-all"/>
        </div>
        <div className="mb-4 text-gray-300">
            <label htmlFor= "productName" className="block text-sm mb-4">Product Title</label>
            <input type="text" id="productName" value={productName} onChange={(e)=>setProductName(e.target.value)}
              placeholder="Type the product name here" required
              className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
               border-pink-200/10 focus:border-pink-500/50 outline-none transition-all"/>
        </div>
        <div className="mb-4 text-gray-300">
            <label htmlFor= "productDescription" className="block text-sm mb-4">Product Details
                <span className="text-xs text-pink-400">(optional)</span>
            </label>
            <textarea id="productDescription" rows={4} value={productDescription}
             onChange={(e)=>setProductDescription(e.target.value)}
             placeholder="Briefly describe the product features"
             className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
               border-pink-200/10 focus:border-pink-500/50 outline-none transition-all resize-none"/>
        </div>

        <div className="mb-4 text-gray-300">
            <label className="block text-sm mb-4">Choose Output Format</label>
            <div className="flex gap-3">
                <RectangleVerticalIcon onClick={()=>setAspectRatio('9:16')}
                className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2
                    ring-transparent cursor-pointer ${aspectRatio === '9:16' ? 'ring-pink-500/50 bg-white/10':''}`}/>
                        <RectangleHorizontalIcon onClick={()=>setAspectRatio('16:9')}
                        className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2
                    ring-transparent cursor-pointer ${aspectRatio === '16:9' ? 'ring-pink-500/50 bg-white/10':''}`}/>
            </div>
        </div>

        <div className="mb-4 text-gray-300">
            <label htmlFor= "userPrompt" className="block text-sm mb-4">Custom Instructions
                <span className="text-xs text-pink-400">(optional)</span>
            </label>
            <textarea id="userPrompt" rows={4} value={userPrompt}
             onChange={(e)=>setUserPrompt(e.target.value)}
             placeholder="Explain how you want the narration or style to feel"
             className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm
               border-pink-200/10 focus:border-pink-500/50 outline-none transition-all resize-none"/>
        </div>
        
    </div>
</div>
<div className="flex justify-center mt-10">
    <button disabled={isGenerating} className="px-10 py-3 rounded-md disabled:opacity-70 disabled:cursor-not-allowed bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all flex ">
        {isGenerating ? (
            <>
            <Loader2Icon className="size-5 animate-spin mx-1"/> Creating your content...
            </>
        ) : (<>
        <Wand2Icon className="size-5 mx-1"/> Generate Creative
        </>)}
        
    </button>
    

</div>
        </form>
        
    </div>
  )
}

export default Generator