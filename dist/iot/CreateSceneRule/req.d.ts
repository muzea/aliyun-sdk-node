export interface CreateSceneRuleRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 场景联动规则名称。支持中文、大小写英文字母、数字、下划线（_）和短划线（-），长度限制为1~30个字符。
     * @example `test`
     */
    "RuleName": string;
    /**
     * 场景联动规则内容。格式详情请参见[场景联动规则编写说明](~~171059~~)。
     * @example `{"action":[{"params":{"content":"${metadata.formattedTime}: 收到定时消息","title":"钉钉机器人通知","webHook":"https://oapi.dingtalk.com/robot/send?access_token=xxxxxxxxx"},"uri":"action/dingtalk/robot"}],"trigger":{"params":{"cron":"0 * * * * ? 2020","cronType":"quartz_cron"},"uri":"trigger/timer"},"type":"IFTTT"}`
     */
    "RuleContent"?: string;
    /**
     * 场景联动规则描述。长度不超过100个字符。
     * @example `定时发送消息到钉钉机器人`
     */
    "RuleDescription"?: string;
}
