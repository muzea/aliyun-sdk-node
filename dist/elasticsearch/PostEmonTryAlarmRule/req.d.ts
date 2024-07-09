export interface PostEmonTryAlarmRuleRequest {
    /**
     * 监控报警项目ID，格式为**es-<yourUID>**。
     * @example `es-133071096032****`
     */
    "ProjectId": string;
    /**
     * 从[GetEmonGrafanaAlerts](~~254890~~)接口中获取的报警列表中的ID之一。您可以按需求指定具体的ID。
     * @example `123`
     */
    "AlarmGroupId": string;
    /**
     * 指定待发送的测试报警消息。
     * @example `{     "alarmRuleName": "test_alarm_rule",      "channel": {         "sms": true,          "dingWebHook": true,          "phone": true     },      "receivers": [         {             "id": 33,              "contactGroup": true         },          {             "id": 19,              "contactGroup": false         }     ] }`
     */
    "body"?: string;
}
