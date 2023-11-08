import {createClient} from '@supabase/supabase-js';
import { useRouter } from 'vue-router';
export default defineEventHandler(async (event)=>{
    const name = getRouterParam(event, 'name');
  const config = useRuntimeConfig();
  
  const supabase = createClient(config.supabaseUrl, config.supabaseKey)
  const {data} = await supabase.from(name).select()


  return{
    data
  }
  
})