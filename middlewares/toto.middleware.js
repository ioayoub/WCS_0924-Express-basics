export const apiTotoMiddleware = (req, res, next) => {

  console.log("T'EN A PAS MARRE DE TOTO ?");

  next()
}


export const apiGlobalMiddleware = (req,  res, next) => {

  console.log("MiddleWare Global")

  next()
}