
function Tracker() {

        this.Members = [];
        this.Profile;

        //this.SetProfile

        this.GetProfile = (userId) => {
            if(this.Members.some(x=> x.UserId == userId)){
                //console.log('user is' + this.Members.find(function (obj) {return obj.UserId === userId;}).UserId)
                return this.Members.find(function (obj) {return obj.UserId === userId;});
                
            }else{
                this.Members.push({ UserId:userId });
                //console.log('creating new user')
            }
                  
        }
        this.GetExercises = () => ExerciseStack;
        this.SaveProfile = ( id, name, age, gender, email, heightf, heighti, weight, bmi, goal) => { 
            this.Members.push({UserId: id, Age: age, Gender:gender, Email:email, Heightft: heightft, Heightin: heighti, Weight:weight, Bmi: bmi, Goal:goal})
        }
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