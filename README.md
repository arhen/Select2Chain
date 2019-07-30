# Select2Chain

A Javascript library to make select2 as chain to another select2
![ci_rapi + Select2Chain](https://s3.gifyu.com/images/ci_rapi2.gif)

## Prerequisites

- Install latest [Jquery Plugin](https://jquery.com)
- Install latest [Select2 Plugin](https://select2.org/)

## Installation

- Fork/download this repo
- Add ``select2-chain.js`` below ``select2.min.js`` and jquery.min.js on your script
- Now you can use it!

## Usage

```javascript

//Create your custom options for select2 (optional)
let select2Options = {
  placeholder: "- Pilih -",
  triggerChange: true,
  allowClear: true
};

//define url where select2-chain will getting data
//parentId: is paramater that will be using by select-2 chain to get parent id value (selected item). DON'T CHANGE THIS NAME.

let getKab = '/get_kabupaten/' + ':parentId';

/**
var chainingData1 = new Select2Chain({parentelement-id-here}, {childelement-id-here}, {url-here}, {select2-options-here});

and then let select2-chain do magic for you!
example:
**/

var chainingData1 = new Select2Chain($('#provinsi'), $('#kabupaten'), getKab, select2Options);
//You can using promises too
chainingData1.then(function(parent,child,items){
  console.log(items);
  //open child select2 immedietly
  child.select2('open');
});
```

## Notes

- Select2-chain using variable ``id`` and ``name`` to add new options to select2 element. make sure to  return data with exact  json paramaters like that. You can modifying it. Just open select2-chain.js and change it on line 26:

```javascript
newOptions += '<option value="' + item.id + '">' + item.name + '</option>';
```
