import User from '../models/user.model.js'
import Questions from '../models/questions.model.js';
import Results from '../models/results.model.js'
import jwt from 'jsonwebtoken';


    /** SignUp  **/
    export async function signUp (req, res){
    const Account = await User.findOne({ email: req.body.email })
    try {
      if (Account) {
        res.json({ status: 'bad' });
      } else {
        await User.create({
          user: req.body.user,
          email: req.body.email,
          password: req.body.password,
        });
        res.json({ status: 'ok' });
      }
    } catch (error) {
      res.json({ status: 'bad', error: error });
    }
        }
    export async function deleteAcc(req,res){
    try {
        await User.deleteOne({email:req.body.email})
        res.json("Deleted")
    } catch (error) {
        res.json({error})
    }
        }

    /** Login **/
    export async function login(req,res){
    try {
        const user = await User.findOne({
          email: req.body.email,
          password: req.body.password,
        });
        if (user) {
          const token = jwt.sign(
            { email: user.email, user: user.user, premium: user.premium ,verified: user.verified},
            '9512368740'
          );
          return res.json({ status: 'ok', token: token });
        } else {
          return res.json({ status: 'bad' });
        }
      } catch (error) {
        res.json({ erroe: error });
      }
        }



    /** Questions **/
    export async function getQuestions(req,res){
        try {
            const quest = await Questions.findById(req.params.id)
            res.json(quest)
        } catch (error) {
            console.log(error);
        }
        }

    
    export async function getAllData(req,res){
      try {
        const Data = await Questions.find()
        res.json(Data)
      } catch (error) {
        console.log({error});
      }
    }
    
    export async function insertQuestion(req,res){
        
        try {
            (await Questions.insertMany({questions: x,  answers: req.body.answers, }).then(
                ()=>{res.json({questions: x,  answers: req.body.answers, })}
            ))
    
        } catch (error) {
            res.json({error})
        }
        }
    
    export async function deleteQuestions(req,res){
      const x = await Questions.findById(req.params.id)
      console.log(x);
        try {
          if(x){
            await Questions.findByIdAndDelete(req.params.id)
            res.json("Deleted")}
          else{res.json("Not Found")}
    
        } catch (error) {
            res.json({error})
        }}


    /** Results Controllers */     
    export async function getResults(req,res){
            try {
                const result = await Results.find()
                res.json(result)
        
            } catch (error) {
                console.log({ error });
            }
        }
        
    export async function setResults(req,res){
            
        }
        
    export async function deleteResult(req,res){
            try {
                await Results.deleteMany()
                res.json({msg: 'Deleted results'})
            } catch (error) {
                res.json({error})
            }
        }
