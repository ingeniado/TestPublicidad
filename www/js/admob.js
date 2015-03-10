function miAdmob() {
    var admob_ios_key = 'ID DEL ANUNCIO DE IOS'; //Si tienes tu id para ios ponlo aquí
    var admob_android_key = 'ca-app-pub-1028174241429101/8325144683'; //Si tienes tu id para android ponlo aquí
    var adId = (navigator.userAgent.indexOf('Android') >=0) ? admob_android_key : admob_ios_key; //Detecta si el móvil es ios o android y pone el id que necesites
    	
    //chequeamos que el plugin está instalado
    if ( window.plugins && window.plugins.AdMob ) {
    	    
        var am = window.plugins.AdMob;
        am.createBannerView( 
     		{
              'publisherId': adId, //Añade tu clave de anunciante
              'adSize': am.AD_SIZE.BANNER, //Indicas que el anuncio es tipo banner
              'bannerAtTop': false //Indica si quieres el banner arriba del todo (true) o abajo del todo (false)
             }, function() {
                // is testing significa que estamos en desarrollo por lo que las visitas a la publicidad no se contabilizaran
             	am.requestAd( { 'isTesting':true }, function() {
                    // si todo va bien se mostrará
             		am.showAd( true );
             	}, function() {
             		alert('fallo al cargar el anuncio');	
             	})
             }, function(){
             	alert( "fallo al crear la vista del anuncio" );
             });
    } else {
    	alert('El plugin AdMob no esta listo/disponible.');
    }
}
// funcion para volver a mostrar u ocultar el anuncio
function showAd( bshow ) {
	if ( window.plugins && window.plugins.AdMob ) {
	    var am = window.plugins.AdMob;
	    am.showAd( bshow );
	} else {
		alert('El plugin AdMob no esta listo/disponible.');
	} 
}