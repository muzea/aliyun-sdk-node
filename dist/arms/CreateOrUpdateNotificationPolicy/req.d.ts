export interface CreateOrUpdateNotificationPolicyRequest {
    /**
     * 通知策略ID。
     * - 不填代表创建新的通知策略。
     * - 填写代表修改指定通知策略信息。
     * @example `1234`
     */
    "Id"?: number;
    /**
     * 通知策略名称。
     * @example `notificationpolicy_test`
     */
    "Name": string;
    /**
     * 匹配告警事件规则。格式如下：
     * ```
     * [
     *  {
     *  "matchingConditions": [
     *  {
     *  "value": "test",    //匹配告警事件规则Value。
     *  "key": "alertname",     //匹配告警事件规则Key。
     *  "operator": "eq"   //规则聚合方式，包括eq（等于）、neq（不等于）、in（包含）、nin（不包含）、re（匹配正则）、nre（正则不匹配）。
     *  }
     *  ]
     *  }
     *  ]
     * ```
     * @example `[ 		 { 		 "matchingConditions": [          { 		 "value": "test", 		 "key": "alertname", 		 "operator": "eq"         }       ]     }   ]`
     */
    "MatchingRules"?: string;
    /**
     * 当告警下面全部事件都恢复时，告警状态是否自动恢复为已解决。当告警恢复时，系统将会发送通知给处理人。
     * - `true`（默认）：发送通知。
     * - `false`：不发送通知。
     * @example `true`
     */
    "SendRecoverMessage"?: boolean;
    /**
     * 设置事件分组。
     *
     * - 不填（默认）：所有告警会按`alertname`分组发送给处理人。
     * - 设置分组字段：相同字段的告警内容会分别通过独立信息发送给处理人。
     * 分组格式如下：
     * ```
     * {
     * "groupWait":5,    //分组等待时间。
     * "groupInterval":30,     //分组间隔时间。
     * "groupingFields":["alertname"]       //分组字段。
     * }
     * ```
     * @example `{ 	"groupWait":5, 	"groupInterval":30, 	"groupingFields":["alertname"] }`
     */
    "GroupRule"?: string;
    /**
     * 设置通知规则。格式如下：
     * ```
     * {
     *  "notifyStartTime":"00:00",      //通知时间段开始时间。
     *  "notifyEndTime":"23:59",       //通知时间段结束时间。
     *  "notifyChannels":["dingTalk", "email", "sms", "tts", "webhook"],       //通知方式，包括dingTalk(钉钉）、email（邮件）、sms（短信）、tts（电话）和webhook。
     *  "notifyObjects":[{       //通知对象。
     *  "notifyObjectType":"CONTACT",       //通知对象类型，包括CONTACT（联系人）、CONTACT_GROUP（联系人组）、ARMS_CONTACT（ARMS联系人）、ARMS_CONTACT_GROUP（ARMS联系人组）、DING_ROBOT_GROUP（钉钉/飞书/企业微信 IM机器人）、CONTACT_SCHEDULE（排班表）。
     *  "notifyObjectId":123,       //通知对象ID。
     *  "notifyObjectName":"test"       //通知对象名称。
     *  "notifyChannels": [			//通知对象为联系人时单独指定的联系方式。包括email（邮件）、sms（短信）、tts（电话）
     *                 "email",
     *                 "sms",
     *                 "tts"
     *             ],
     *  }]
     * ```
     * @example `{
        "notifyStartTime": "00:00",
        "notifyEndTime": "23:59",
        "notifyChannels": [
            "dingTalk",
            "email",
            "sms",
            "tts",
            "webhook"
        ],
        "notifyObjects": [
            {
                "notifyObjectType": "CONTACT",
                "notifyObjectId": 123,
                "notifyObjectName": "test",
                "notifyChannels": [
                    "email",
                    "sms",
                    "tts"
                ],
                
            }
        ]
    }
    `
     */
    "NotifyRule": string;
    /**
     * 通知模板。示例模板请参见表格下方说明。
     * @example `{ "robotContent":"{{if .commonLabels.clustername }}   >  集群名称：{{ .commonLabels.clustername }}    {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}   >  应用名称：{{ .commonLabels._aliyun_arms_involvedObject_name }}    {{ end }}{{ for .alerts }} >  {{ .annotations.message }} {{if .generatorURL }} [详情链接]({{.generatorURL}}) {{end}} {{if  eq "true" .labels._aliyun_arms_is_denoise_filtered }} （疑似噪音） {{end}}  {{end}}" }`
     */
    "NotifyTemplate"?: string;
    /**
     * 升级规则ID。
     * @example `123`
     */
    "EscalationPolicyId"?: number;
    /**
     * 对于长期未解决的告警是否发送重复通知。
     * - `true`（默认）：设置为`true`后，必须设置**RepeatInterval**。
     * - `false`：设置为`false`后，必须设置**EscalationPolicyId**。
     * @example `true`
     */
    "Repeat"?: boolean;
    /**
     * 重复通知时间间隔，单位为秒。
     * @example `600`
     */
    "RepeatInterval"?: number;
    /**
     * 告警需要推送到的工单系统，填写工单系统的集成ID。
     * @example `34`
     */
    "IntegrationId"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 极简模式
     * @example `false`
     */
    "DirectedMode"?: boolean;
    /**
     * 通知策略是否启用，enable 启用，disable 停用
     * @example `enable`
     */
    "State"?: string;
}
