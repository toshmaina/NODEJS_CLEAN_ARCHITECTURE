export default function convertParamObjectToNativeObject(obj: any) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== 'string') return;
      if (obj[key].toLowerCase() === 'true') return obj[key] = true;
      if (obj[key].toLowerCase() === 'false') return obj[key] = false;
      try {
        obj[key] = JSON.parse(obj[key]);
      } catch (e) {}
    });
    return obj;
  }
  
 