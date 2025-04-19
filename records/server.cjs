let express= require("express");
let app=express();
var mongoose=require("mongoose");
const cors=require("cors");
app.use(cors());
app.use(express.json()); //for sending JSON in post
app.listen(2001,function(req,resp){
    console.log("server started");
})

var url="mongodb+srv://mishabansal26:misban26@cluster0.otyfb.mongodb.net/";
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err.message);
});

var Schema=mongoose.Schema;

const userSchema = {
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/ // Assuming 10-digit Indian phone numbers
  },
  milkType: {
    type: String,
    enum: ["Cow", "Buffalo", "Goat","Almond","Soy"], // Optional: Add more if needed
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
var ver={versionKey:false}
var SignupSchema=new Schema(userSchema,ver);
var colRef= mongoose.model("User", userSchema);

app.post("/saveUser", async (req, res) => {
    console.log(req.body);
    try {
      const newUser = new colRef(req.body);
      await newUser.save();
      res.json({ status: true, msg: "User saved successfully!" });
    } catch (err) {
      console.error(err);
      res.json({ status: false, msg: "Failed to save user." });
    }
  });
  

