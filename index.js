function theBeatlesPlay(musicians, instruments) {
  let result = [ ]
  for (let i = 0; i < 3; i++) 
    {
       console.log (musicians[i])
        result.push(musicians[i] + " plays " + instruments[i])
    }
    return result
} 