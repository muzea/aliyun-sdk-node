interface ClickToDialRequest {
    "RegionId"?: string;
    /**
    * 主叫显号，必须是已购买的号码。
    * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
    * @example `4001112221`
    */ "CallerShowNumber": string;
    /**
    * 主叫号码。仅支持中国大陆号码。
    * @example `13700000000`
    */ "CallerNumber": string;
    /**
    * 被叫显号，必须是已购买的号码。
    * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
    * @example `4001112222`
    */ "CalledShowNumber": string;
    /**
    * 被叫号码。仅支持中国大陆号码。
    * @example `13700000001`
    */ "CalledNumber": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 通话过程是否录音。
    * @example `true`
    */ "RecordFlag"?: boolean;
    /**
    * 是否开启实时ASR功能。
    * @example `true`
    */ "AsrFlag"?: boolean;
    /**
    * 整个通话的最长时长，单位为秒。超过该时长后系统自动挂断电话。
    * @example `100`
    */ "SessionTimeout"?: number;
    /**
    * ASR模型ID。请在[ASR模型管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/asr/1)查看ASR模型ID。
    * @example `2070aca1eff146f9a7bc826f1c3d4d33`
    */ "AsrModelId"?: string;
    /**
    * 预留给调用方使用的ID, 最终会通过在回执消息中将此ID带回给调用方。
    * 字符串类型，长度为1~15个字节。
    * @example `abcdefgh`
    */ "OutId"?: string;
}
export { ClickToDialRequest };