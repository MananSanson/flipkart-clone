import mongoose from "mongoose";



export const Connection= async(username, password)=>{
    const URL=`mongodb://${username}:${password}@ac-meqna97-shard-00-00.mum8tgk.mongodb.net:27017,ac-meqna97-shard-00-01.mum8tgk.mongodb.net:27017,ac-meqna97-shard-00-02.mum8tgk.mongodb.net:27017/?ssl=true&replicaSet=atlas-8iihv5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser: true})
        console.log('Database connected sucessfully');
    }catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;