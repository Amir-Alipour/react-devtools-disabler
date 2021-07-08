# react-devtools-disabler
---------------------------
some time you need disable the react devtools on your production

you can copy or donwload code from here and import you code and with check a little condition you disable your react devtools

```
// import or copy disableReactDevTools()

if(process.env.NODE_ENV === "production"){
        disableReactDevTools();
};

```
---------------
and then you don't see react devtools in your browser inception bar
