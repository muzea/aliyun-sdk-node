export interface BatchRobotSmartCallRequest {
    /**
     * 被叫显号，必须是已购买的号码。您可以在[语音服务控制台](https://dyvms.console.aliyun.com/number/list/normal)查看已购买的号码。
     * 支持设置1~100个被叫显号，号码之间使用英文逗号（,）分隔。
     * @example `136****0000,138****0000`
     */
    "CalledShowNumber": string;
    /**
     * 公司名称，必须和[资质管理页面](https://dyvms.console.aliyun.com/dyvms.htm#/corp/normal)中的**公司名称**完全一致。
     * > 如果开通了**自有线路**功能，即**isSelfLine**为**true**时，该参数为可选。反之则必须填写公司名称。
     * @example `阿里巴巴通信技术（北京）有限公司	`
     */
    "CorpName"?: string;
    /**
     * 被叫号码。仅支持中国大陆号码。
     * 支持设置1~1000个被叫号码，号码之间使用英文逗号（,）分隔。
     * @example `1390000****`
     */
    "CalledNumber": string;
    /**
     * 指定机器人ID，即话术ID。表示选择哪个机器人/话术发起呼叫。
     * 请在[话术管理页面](https://dyvms.console.aliyun.com/patter/list)中查看**话术ID**。
     * @example `100002970****`
     */
    "DialogId": string;
    /**
     * 早媒体语音识别标识。默认为**false**，即不启用。
     * 如果需要启用早媒体语音识别标识，请设置为**true**。
     * @example `true`
     */
    "EarlyMediaAsr"?: boolean;
    /**
     * 任务名称。
     * - 支持中文和英文。
     * - 长度限制为：0~30个字符。
     * @example `批量外呼任务	`
     */
    "TaskName": string;
    /**
     * 预设的呼叫时间。Unix时间戳格式，单位为毫秒。
     * > 当参数**ScheduleCall**为**true**时必选。
     * @example `12`
     */
    "ScheduleTime"?: number;
    /**
     * 是否定时呼叫。如果设置为**true**，则必须设置**ScheduleTime**。
     * @example `true`
     */
    "ScheduleCall"?: boolean;
    /**
     * TTS模板的变量值，格式为JSON。
     * 必须和具体的号码对应，TtsParam与TtsParamHead变量名称一一对应。
     * @example `[{"number":"1390000****","params":[“小王”,"小李","小周"]}]`
     */
    "TtsParam"?: string;
    /**
     * 带变量的呼叫任务，格式为JSON。
     * 变量名称列表，与TtsParam配合使用。
     * @example `["name1","name2","name3"]`
     */
    "TtsParamHead"?: string;
    /**
     * 是否调用自有线路，默认为**false**，即不调用。
     * @example `true`
     */
    "IsSelfLine"?: boolean;
}
