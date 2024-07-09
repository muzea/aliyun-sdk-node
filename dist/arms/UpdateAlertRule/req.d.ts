export interface UpdateAlertRuleRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 报警联系人分组ID。
     * @example `[123, 234]
    `
     */
    "ContactGroupIds"?: string;
    /**
     * 生成报警规则后是否自动启动报警规则。默认为`false`。
     * - `true`：自动启动报警规则
     * - `false`：不自动启动报警规则
     * @example `true`
     */
    "IsAutoStart"?: boolean;
    /**
     * ARMS报警规则的配置JSON串。
     * @example `[ { "contactGroupIds": "381", "alertType": 5, "alarmContext": { "subTitle": "", "content": "报警名称：$报警名称\n筛选条件：$筛选\n报警时间：$报警时间\n报警内容：$报警内容\n注意：该报警未收到恢复邮件之前，正在持续报警中，24小时后会再次提醒您！" }, "alertLevel": "WARN", "metricParam": { "appId": "70901", "pid": "atc889zkcf@d8deedfa9bf****", "type": "TXN", "dimensions": [ { "type": "STATIC", "value": "\\/hello_test_api_address\\/test1", "key": "rpc" } ] }, "alertWay": [ "SMS", "MAIL", "DING_ROBOT" ], "alertRule": { "rules": [ { "measure": "appstat.txn.rt", "alias": "入口调用响应时间_ms", "aggregates": "AVG", "nValue": 1, "value": 1, "operator": "CURRENT_GTE" } ], "operator": "|" }, "title": "报警模板报警名", "config": "{\"continuous\":false,\"dataRevision\":2,\"ownerId\":\"123412341234\"}", "notice": { "noticeStartTime": 1480521600000, "startTime": 1480521600000, "endTime": 1480607940000, "noticeEndTime": 1480607940000 }, "status": "NON"  } ]`
     */
    "TemplageAlertConfig": string;
    /**
     * 报警规则ID，可调用SearchAlertRules接口查询，对应返回参数**Id**。
     * @example `1234567`
     */
    "AlertId": number;
}
