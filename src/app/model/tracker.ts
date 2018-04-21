export class Tracker{
    
    Members: User[] = [];

}

export class User {

    UserProfile: Profile;

}

export class Profile {

    UserId:string;
    Name:string;
    Age:number;
    Gender:string;
    Email:string;
    Heightft:number;
    Heightin:number;
    Weight:number;
    Bmi:number;
    Goal:string;

    constructor() {
        this.Name = "Jane Doe";
        this.Age = 20;
        this.Heightft = 5;
        this.Heightin = 1;
        this.Weight = 100;
        this.Email = "example@gmail.com";
        this.Goal = "";
    }
}

export class Activity {

    ActivityName: string;
    Duration: number;
    TotalHrWeek: number;

}