# react-devtools-disabler
---------------------------
some time you need disable the react devtools on your production

you can copy or download code from here and import in your code,
and with check a little condition disable your react devtools

```
// import or copy disableReactDevTools()

if(process.env.NODE_ENV === "production"){
        disableReactDevTools();
};

```
---------------
and then you don't see react devtools in your browser inspect
