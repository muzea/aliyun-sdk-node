interface SingleCallByTtsRequest {
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
    * 文本转语音（TTS）模板ID。可以在[文本转语音模板页面](https://dyvms.console.aliyun.com/dyvms.htm#/template)查看模板ID。
    * > 必须是已审核通过的文本转语音模板。
    * @example `TTS_10001`
    */ "TtsCode": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 文本转语音（TTS）模板变量转换关系，格式为JSON。
    * @example `{“AckNum”:”123456”}`
    */ "TtsParam"?: string;
    /**
    * 语音通知的播放次数，取值范围为1~3。
    * @example `3`
    */ "PlayTimes"?: number;
    /**
    * 语音通知的播放音量。取值范围为0~100，默认为100。
    * @example `100`
    */ "Volume"?: number;
    /**
    * > 该参数为废弃参数，暂不支持使用。
    * @example `5`
    */ "Speed"?: number;
    /**
    * 预留给调用方使用的ID, 最终会通过在回执消息中将此ID带回给调用方。
    * 字符串类型，长度为1~15个字节。
    * @example `abcdefgh`
    */ "OutId"?: string;
}
export { SingleCallByTtsRequest };