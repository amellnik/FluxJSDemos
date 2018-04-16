/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// We're loading tf.js as a script in .angular-cli.json so we need to
// declare it here.  This is due to https://github.com/tensorflow/tfjs/issues/109
declare var tf: any;
