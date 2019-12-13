function SendTelemetry() {
    fetch("https://maker.ifttt.com/trigger/website_view/with/key/csDbJTVR0DIGIPBf_RPaRA", {
        mode: "no-cors"
    });
}