import {createClient} from '@supabase/supabase-js';
import { useRouter } from 'vue-router';
export default defineEventHandler(async (event)=>{
    const response =  getQuery(event)
  const config = useRuntimeConfig();
  
  const supabase = createClient(config.supabaseUrl, config.supabaseKey)
  const {data} = await supabase.from(response).select()


  return{
    data
  }
  
})