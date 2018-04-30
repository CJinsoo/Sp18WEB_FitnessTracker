//var axios = require("axios");
//axios.get(' https://wger.de/api/v2/exerciseinfo')
//    .then( response => TipsStack = response.data.data.exerciseinfo)
var TipsStack = [
];
var iCurrentTips = 0;
function Tracker() {
  
        this.Members = [];
        this.Profile;
        this.Tips = null;
 
        //this.SetProfile

        this.SignUp = ( userId, password) => {
            this.Members.push({UserId:userId, Password: password});
            /* if(this.Members.some(x=> x.UserId == userId)){
                //console.log('user is' + this.Members.find(function (obj) {return obj.UserId === userId;}).UserId)
                return this.Members.find(function (obj) {return obj.UserId === userId;});
                
            }else{
                this.Members.push({ User:user });
                //console.log('creating new user')
            }
            return []; */
                  
        }
        this.Login = ( name, password ) => {
            if(this.Members.find( x => x.UserId == name )){
                var foundUser = this.Members.find( x => x.UserId == name );
                if(foundUser.Password == password){
                    console.log("login successful")
                    //this._Router.navigate(['/home'])
                    return foundUser;
                }else{
                    console.log("wrong password")
                    return false;
                }
            }else{
                
                console.log("could not find user")
                return false;
                
            //return false;
            //this._Router.navigate(['/home'])
            }
        }
        this.flipWelcome = () =>
        this.Tips = TipsStack[iCurrentPicture = (iCurrentPicture +1) % TipsStack.length];

        this.GetExercises = () => ExerciseStack;
        this.SaveProfile = ( id, name, age, gender, email, heightf, heighti, weight, bmi, goal) => { 
            this.Members.push({UserId: id, Age: age, Gender:gender, Email:email, Heightft: heightft, Heightin: heighti, Weight:weight, Bmi: bmi, Goal:goal})
        }
        //this.CurrentExercise = (text) => this.Members.find(function obj)
        /*
        this.FlipPicture = () => this.Picture = PicturesStack[iCurrentPicture = (iCurrentPicture+1) % PicturesStack.length ];

        this.SubmitQuote = (text, playerId) => this.PlayedQuotes.push({ Text: text, PlayerId: playerId });
        this.ChooseQuote = text => {
            this.PlayedQuotes.find(x=> x.Text == text).Chosen = true;
            this.DealerId = this.Players[this.DealerId = (this.DealerId + 1) % this.Players.length ] 
        } 
        */

}

module.exports = Tracker;