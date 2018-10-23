try {
    require("source-map-support").install();
} catch(err) {
}

require("./target/cljsbuild/goog/bootstrap/nodejs.js");

// It's not clear why this is necessary
goog.global.CLOSURE_UNCOMPILED_DEFINES = {"cljs.core._STAR_target_STAR_":"nodejs"};

require("./target/cljsbuild/lambda.js");

goog.require("asgnx.lambda");

exports.asgnx_lambda_SLASH_receive_message = asgnx.lambda.receive_message;

