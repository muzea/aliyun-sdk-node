interface IvrCallRequest {
    "RegionId"?: string;
    /**
    * 被叫显号，必须是已购买的号码。
    * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
    * @example `4001112222`
    */ "CalledShowNumber": string;
    /**
    * 被叫号码。仅支持中国大陆号码。
    * @example `13700000000`
    */ "CalledNumber": string;
    /**
    * 呼叫开始时播放的提示音，可以指定为：
    * - **语音文件**：语音ID。可以在[文本转语音模板页面](https://dyvms.console.aliyun.com/dyvms.htm#/file/notify)查看语音ID。
    * - **文本转语音模板**：模板ID。可以在[文本转语音模板页面](https://dyvms.console.aliyun.com/dyvms.htm#/template)查看模板ID。
    * @example `TTS_1234`
    */ "StartCode": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 文本转语音模板（TTS）变量替换关系，格式为JSON。
    * > 当**StartCode**为文本转语音模板（TTS）、且模板中带变量的情况下此参数为必选。
    * @example `{“name”:”xxx”,”code”:”123”}`
    */ "StartTtsParams"?: string;
    "MenuKeyMap"?: string[];
    /**
    * 重复播放次数，取值范围为1~3。
    * @example `3`
    */ "PlayTimes"?: number;
    /**
    * 播放结束时播放的结束提示音，支持以下两种方式：
    * - 语音文件
    * - 文本转语音（TTS）模板
    * > 参数**ByeCode**的类型需要与参数**StartCode**一致，即必须同时为语音文件或文本转语音（TTS）模板。
    * @example `TTS_1234`
    */ "ByeCode"?: string;
    /**
    * 文本转语音模板变量替换关系，格式为JSON。
    * > 当**ByeCode**为文本转语音（TTS）模板、且模板中带变量的情况下此参数为必选。
    * @example `{“name”:”xxx”,”code”:”123”}	`
    */ "ByeTtsParams"?: string;
    /**
    * 等待用户按键超时时间，单位为毫秒。
    * @example `3000`
    */ "Timeout"?: number;
    /**
    * 预留给调用方使用的ID，最终会通过在回执消息中将此ID带回给调用方。
    * @example `abcdefgh`
    */ "OutId"?: string;
}
export { IvrCallRequest };