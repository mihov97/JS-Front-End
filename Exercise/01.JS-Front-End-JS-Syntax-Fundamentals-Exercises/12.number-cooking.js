function cookingByNumbers(Num, ...operations) {
    let num = Number(Num);
    let result = '';
 
    for (let i = 0; i < operations.length; i++) {
      switch (operations[i]) {
        case 'chop':
          num /= 2;
          break;
        
          case 'dice':
          num = Math.sqrt(num);
          break;
        
          case 'spice':
          num += 1;
          break;
      
          case 'bake':
          num *= 3;
          break;
      
          case 'fillet':
          num -= num * 0.2;
          break;
      
          default:
          break;
      }
      result += `${num}\n`;
  
    }
    return result;
  }