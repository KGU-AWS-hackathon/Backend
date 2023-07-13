const successResponse = ({isSuccess, code, message}, result) => {
    return {
         isSuccess: isSuccess,
         code: code,
         message: message,
         result: result
    }
   };
 
const errResponse = ({isSuccess, code, message}) => {
     return {
         isSuccess: isSuccess,
         code: code,
         message: message,
         result : null
       }
   };

   module.exports = {successResponse, errResponse}