// https://www.codewars.com/kata/521cd52e790405a74800032c/train/javascript
// We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.

function wrap(value){
    return {"value" : value}
}

let wrapper_obj = wrap("my_wrapper_string")
console.log(wrapper_obj)
console.log(wrapper_obj["value"] == "my_wrapper_string")