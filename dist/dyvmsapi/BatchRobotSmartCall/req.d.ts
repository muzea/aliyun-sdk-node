interface BatchRobotSmartCallRequest {
    "RegionId"?: string;
    /**
    * 被叫显号，必须是已购买的号码。
    * 支持设置1~100个被叫显号，号码之间使用英文逗号（,）分隔。
    * 您可以在[语音服务控制台](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal)上查看已购买的号码。
    * @example `4001112222`
    */ "CalledShowNumber": string;
    /**
    * 被叫号码。仅支持中国大陆号码。
    * 支持设置1~1000个被叫号码，号码之间使用英文逗号（,）分隔。
    * @example `13700000000`
    */ "CalledNumber": string;
    /**
    * 指定机器人ID，即话术ID。表示选择哪个机器人/话术发起呼叫。
    * 请在[话术管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/robot/list)中查看**话术ID**。
    * @example `1234567`
    */ "DialogId": string;
    /**
    * 任务名称。支持中文和英文，0~30个字符。
    * @example `批量任务测试	`
    */ "TaskName": string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 公司名称，必须和[资质管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/corp/normal)中的**公司名称**完全一致。
    * > 如果开通了**自有线路**功能，即**isSelfLine**为**true**时，该参数为可选。反之则必须填写公司名称。
    * @example `阿里巴巴通信技术(北京)有限公司	`
    */ "CorpName"?: string;
    /**
    * 早媒体语音识别标识。默认为fasle，如果需要启用早媒体语音识别标识，请设置为true。
    * @example `true`
    */ "EarlyMediaAsr"?: boolean;
    /**
    * 预设的呼叫时间。Unix时间戳格式，单位为毫秒。
    * > 当参数**ScheduleCall**为true时必选。
    * @example `1554110977000`
    */ "ScheduleTime"?: number;
    /**
    * 是否定时呼叫。如果设置为true，则必须设置**ScheduleTime**。
    * @example `true`
    */ "ScheduleCall"?: boolean;
    /**
    * TTS模板的变量值，格式为JSON。
    * 必须和具体的号码对应、TtsParam和上面的TtsParamHead变量名称一一对应。
    * @example `[{“number”:”13700000000”,”params”:[“小王”,”小李”,”小周”]}]`
    */ "TtsParam"?: string;
    /**
    * 带变量的呼叫任务，格式为JSON。变量名称列表，和下面的ttsParam配合使用
    * @example `[“name1”,”name2”,”name3”]`
    */ "TtsParamHead"?: string;
    /**
    * 是否调用自有线路，默认为false。
    * @example `true`
    */ "IsSelfLine"?: boolean;
}
export { BatchRobotSmartCallRequest };