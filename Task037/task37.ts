import { makeshirt as modify_make_shirt } from "../Task036/task36.js";


   // Task 37
   function makeshirt(size = "Large" , message = "I love typescript"){
      return modify_make_shirt(size, message)
   }
   makeshirt()
   makeshirt("Medium")
   makeshirt("small", "I love Generative AI")