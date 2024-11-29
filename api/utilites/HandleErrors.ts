export const promisesWrapper = async (...promises:[unknown]) =>{
     const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => 
        input.status === 'rejected'
      
      const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => 
        input.status === 'fulfilled'
      const response = await Promise.allSettled(promises);
      
      const data = response.filter(isFulfilled)?.map(({value}) => value)
      const error = response.filter(isRejected)?.map(({reason}) => reason)
      return {data,error}

}