function checkSpeedLimit(speed, area) {
    let limit = 0;
    let status = '';
    let difference = speed - limit;
 
    switch (area) {
      case 'motorway':
        limit = 130;
        break;
      case 'interstate':
        limit = 90;
        break;
      case 'city':
        limit = 50;
        break;
      case 'residential':
        limit = 20;
        break;
      default:
        break;
    }
 
    if (speed <= limit) {
      return `Driving ${speed} km/h in a ${limit} zone`;
    } else {
      difference = speed - limit;
      if (difference <= 20) {
        status = 'speeding';
      } else if (difference <= 40) {
        status = 'excessive speeding';
      } else {
        status = 'reckless driving';
      }
      return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
    }
  }

