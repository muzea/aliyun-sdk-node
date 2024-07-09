export interface CreateOrUpdateIMRobotRequest {
    /**
     * IM机器人ID。
     * - 不填代表创建新的IM机器人。
     * - 填写代表修改指定IM机器人信息。
     * @example `123`
     */
    "RobotId"?: number;
    /**
     * IM机器人名称。
     * @example `robot名称`
     */
    "RobotName": string;
    /**
     * IM机器人类型：
     * - `dingding`：钉钉机器人。
     * - `wechat`：企业微信机器人。
     * - `feishu`：飞书机器人。
     * @example `dingding`
     */
    "Type"?: string;
    /**
     * IM机器人的Webhook地址。
     * @example `https://oapi.dingtalk.com/robot/send?access_token=e1a049121******`
     */
    "RobotAddress": string;
    /**
     * 是否发送每日统计信息。
     * - `false`（默认）：不发送统计信息。
     * - `true`：发送统计信息。选择`true`后，**DailyNocTime**参数必填。
     * @example `true`
     */
    "DailyNoc"?: boolean;
    /**
     * 每日统计信息发送的时间点，使用半角逗号（,）分隔多个发送时间点，时间点格式为HH:SS。ARMS告警管理将在设置的时间点发送今日产生告警的总数、解决数和待解决数。
     * @example `09:30,17:00`
     */
    "DailyNocTime"?: string;
    /**
     * 钉钉签名密钥。如配置了密钥则会通过加签的方式进行钉钉认证。如果没有配置密钥，默认使用关键字白名单的方式进行认证，白名单关键字为**告警**。
     * <props="china">更多信息，请参见[钉钉官方文档](https://open.dingtalk.com/document/robots/customize-robot-security-settings)。</props>
     * @example `******`
     */
    "DingSignKey"?: string;
    /**
     * 开启Outgoing机制需要的Token。
     * @example `1656558719183be1245ab44********`
     */
    "Token"?: string;
    /**
     * 是否开启Outgoing机制。
     * @example `true`
     */
    "EnableOutgoing"?: boolean;
    /**
     * 告警卡片模版配置信息。模板中各参数含义请参见下方补充说明。
     * @example `{     "button": [         "claim",         "close",         "follow",         "send_itsm",         "block",         "unResolvedIncident"     ],     "field": [         {             "fieldName": "alarmName",             "visible": true         },         {             "fieldName": "notificationPolicy",             "visible": true         },         {             "fieldName": "alarmContent",             "visible": true         },         {             "fieldName": "alarmTime",             "visible": true         },         {             "fieldName": "seriesChart",             "visible": true         },         {             "fieldName": "includeEvent",             "visible": true         },         {             "fieldName": "assigned",             "visible": true         },         {             "fieldName": "similarAlarm",             "visible": true         },         {             "fieldName": "operator",             "visible": true         }     ] }`
     */
    "CardTemplate"?: string;
}
