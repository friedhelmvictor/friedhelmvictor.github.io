// funciton to enable analytics if cookie preferences allow it
function enableAnalyticsIfAllowed() {
    if ($.fn.ihavecookies && $.fn.ihavecookies.preference('analytics') == true) {
        

        
    }
}

// try to enable analytics after preferences changed
$.fn.ihavecookies.onPrefChange( function() {
    enableAnalyticsIfAllowed();
});

// try to enable analytics now
enableAnalyticsIfAllowed();
