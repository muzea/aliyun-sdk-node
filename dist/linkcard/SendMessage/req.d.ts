export interface SendMessageRequest {
    /**
     * 自定义任务名称，不能包含特殊字符，最长40个字符。
     * @example `任务0912`
     */
    "TaskName": string;
    /**
     * 短信模版编号，可以在控制台查看。
     * @example `14`
     */
    "MessageTemplateId": number;
    /**
     * 动态参数短信，替换的参数，格式{1}{2}
     * @example `{参数1}{参数2}{参数3}`
     */
    "MessageVariableParam"?: string;
    /**
     * 时间戳，单位：秒 。
     * 当时间早于当前时间则立即发送，晚于当前时间为定时发送。
     * 最晚不能超过一个月。
     * @example `1694401634`
     */
    "MessageSendTime": number;
    /**
     * 发送短信的目标MSISDN列表
     */
    "Msisdns"?: string[];
    /**
     * Linkcard
     * @example `Linkcard`
     */
    "ApiProduct"?: string;
}
