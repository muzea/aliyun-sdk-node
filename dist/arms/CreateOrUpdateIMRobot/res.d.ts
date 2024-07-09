export interface CreateOrUpdateIMRobotResponse {
    /**
     * 请求ID。
     * @example `16AF921B-8187-489F-9913-43C808B4****`
     */
    RequestId: string;
    /**
     * 返回AlertRobot对象。
     */
    AlertRobot: {
        /**
         * IM机器人ID。填写该参数代表修改机器人信息。
         * @example `123`
         */
        RobotId: number;
        /**
         * IM机器人名称。
         * @example `robot名称`
         */
        RobotName: string;
        /**
         * IM机器人类型：
         * - `dingding`：钉钉机器人。
         * - `wechat`：企业微信机器人。
         * @example `dingding`
         */
        Type: string;
        /**
         * IM机器人的Webhook地址。
         * @example `https://oapi.dingtalk.com/robot/send?access_token=e1a049121******`
         */
        RobotAddress: string;
        /**
         * 是否发送每日统计信息。
         * - `false`（默认）：不发送统计信息。
         * - `true`：发送统计信息。
         * @example `true`
         */
        DailyNoc: boolean;
        /**
         * 每日统计信息发送的时间点。ARMS告警管理将在设置的时间点发送今日产生告警的总数、解决数和待解决数。
         * @example `09:30,17:00`
         */
        DailyNocTime: string;
        /**
         * 开启Outgoing机制需要的Token。
         * @example `1656558719183be1245ab44********
        `
         */
        Token: string;
        /**
         * 是否开启Outgoing机制。
         * @example `true`
         */
        EnableOutgoing: boolean;
        /**
         * 告警卡片模版配置信息。
         * @example `{     "button": [         "claim",         "close",         "follow",         "send_itsm",         "block",         "unResolvedIncident"     ],     "field": [         {             "fieldName": "alarmName",             "visible": true         },         {             "fieldName": "notificationPolicy",             "visible": true         },         {             "fieldName": "alarmContent",             "visible": true         },         {             "fieldName": "alarmTime",             "visible": true         },         {             "fieldName": "seriesChart",             "visible": true         },         {             "fieldName": "includeEvent",             "visible": true         },         {             "fieldName": "assigned",             "visible": true         },         {             "fieldName": "similarAlarm",             "visible": true         },         {             "fieldName": "operator",             "visible": true         }     ] }`
         */
        CardTemplate: string;
    };
}
