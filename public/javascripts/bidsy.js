var $goog$global$$=this;function $goog$exportPath_$$($name$$57$$,$opt_object$$){var $parts$$=$name$$57$$.split("."),$cur$$=$goog$global$$;!($parts$$[0]in $cur$$)&&$cur$$.execScript&&$cur$$.execScript("var "+$parts$$[0]);for(var $part$$;$parts$$.length&&($part$$=$parts$$.shift());)!$parts$$.length&&void 0!==$opt_object$$?$cur$$[$part$$]=$opt_object$$:$cur$$=$cur$$[$part$$]?$cur$$[$part$$]:$cur$$[$part$$]={}}
function $goog$addSingletonGetter$$($ctor$$){$ctor$$.$getInstance$=function $$ctor$$$$getInstance$$(){return $ctor$$.$instance_$||($ctor$$.$instance_$=new $ctor$$)}};function $bidsy$Client$$(){}$goog$addSingletonGetter$$($bidsy$Client$$);$bidsy$Client$$.prototype.$init$=function $$bidsy$Client$$$$$init$$(){io.connect("http://localhost",{"sync disconnect on unload":!0})};function $bidsy$App$$(){}$goog$exportPath_$$("bidsy.App",$bidsy$App$$);$goog$addSingletonGetter$$($bidsy$App$$);$bidsy$App$$.prototype.$init$=function $$bidsy$App$$$$$init$$(){$bidsy$Client$$.$getInstance$().$init$()};$bidsy$App$$.prototype.init=$bidsy$App$$.prototype.$init$;$goog$exportPath_$$("bidsy.App.getInstance",$bidsy$App$$.$getInstance$);
