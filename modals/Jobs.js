const supabase=require('../connect/db')



exports.createjob=async(jobData)=>{

              return await supabase.from('jobs').insert([jobData]).select();

}

exports.getalljobs=async()=>{
    
        return await supabase.from('jobs').select('*').order('created_at', { ascending: false })
    
}