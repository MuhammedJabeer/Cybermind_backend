const job=require('../modals/Jobs')



exports.createjob=async(req,res)=>{
    try{
          
        const jobData=req.body
              console.log(jobData);
              
        const result=await job.createjob(jobData)
       console.log(result);
       
        return res.status(201).json(result)
     
        

    }catch(error){
         console.log(error);
           
    }
}

exports.getalljob=async(req,res)=>{
    try{
        const result=await job.getalljobs()

        return res.status(200).json(result)
    }catch(error){
           console.log(error);
           
    }
}