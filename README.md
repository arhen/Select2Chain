# Select2Chain
A Javascript library to using chain select2 to another select2

## Prerequisites
- Install latest [Jquery Plugin](https://jquery.com)
- Install latest [Select2 Plugin](https://select2.org/)

## Installation
- Fork/dowwnload this repo
- Add ``select2-chain.js`` below ``select2.min.js`` and jquery.min.js on your script
- Now you can use it!

## Usage
- Create your custom coptions for select2 (optional)

``let select2Options = {``
``placeholder: "- Pilih -",``
``triggerChange: true,``
``allowClear: true``
``};``

- define url where select2-chain will getting data

``let getKab = '/get_kabupaten/' + ':parentId:';``

``parentId:`` is paramater that will be using by select-2 chain to get parent id value (selected item). DON'T CHANGE THIS NAME.

- and then let select2-chain do magic for you

``var chainingData1 = new Select2Chain({parentelement-id-here}, {childelement-id-here}, {url-here}, {select2-options-here});``

example:

``var chainingData1 = new Select2Chain($('#provinsi'), $('#kabupaten), getKab, select2Options);``


You can add promises too:

```
chainingData1.then(function(parent,child,items){

  console.log(items);
  
  //open child select2 immedietly
  child.select2('open);
});
```

## Notes:
- Select2-chain using variable ``id`` and ``name`` to add new options to select2 element. make sure to  return data with exact  json paramaters like that. You can modifying it. Just open select2-chain.js and change it on line 26:

``newOptions += '<option value="' + item.id + '">' + item.name + '</option>';``
