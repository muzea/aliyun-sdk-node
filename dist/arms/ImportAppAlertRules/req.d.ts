export interface ImportAppAlertRulesRequest {
    /**
     * 报警模板ID。**TemplateAlertId**和**TemplageAlertConfig**必须至少填写一个。如果两个参数都填写，则**TemplateAlertId**优先。
     * @example `324324234`
     */
    "TemplateAlertId"?: string;
    /**
     * 常见报警规则关联的ARMS应用ID（即PID），格式为JsonArrayListStr。
     * 在**ARMS控制台**的**应用监控**>**应用列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含应用的pid，格式为pid=xxx。由于浏览器进行了编码，因此需要对pid稍作修改。例如，如果URL中包含的pid为xxx%4074xxx，则需要将%40替换为@，即：xxx@74xxx。
     * @example `["atc889zkcf@d8deedfa9bfxxxx", "acd129bfcf@d5daebfa6cdxxxx"]`
     */
    "Pids": string;
    /**
     * 应用报警规则关联的应用所属地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 报警联系人分组ID，格式为JSONArray。
     * @example `[123, 234]`
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
     * ARMS报警规则的配置JSON串。**TemplateAlertId**和**TemplageAlertConfig**必须至少填写一个。如果两个参数都填写，则**TemplateAlertId**优先。关于此字段的详细说明参见下文**关于参数TemplageAlertConfig的补充说明**。
     * @example `[ { "contactGroupIds": "381", "alertType": 5, "alarmContext": { "subTitle": "", "content": "报警名称：$报警名称\n筛选条件：$筛选\n报警时间：$报警时间\n报警内容：$报警内容\n注意：该报警未收到恢复邮件之前，正在持续报警中，24小时后会再次提醒您！" }, "alertLevel": "WARN", "metricParam": { "appId": "70901", "pid": "atc889zkcf@d8deedfa9bf****", "type": "TXN", "dimensions": [ { "type": "STATIC", "value": "\\/hello_test_api_address\\/test1", "key": "rpc" } ] }, "alertWay": [ "SMS", "MAIL", "DING_ROBOT" ], "alertRule": { "rules": [ { "measure": "appstat.txn.rt", "alias": "入口调用响应时间_ms", "aggregates": "AVG", "nValue": 1, "value": 1, "operator": "CURRENT_GTE" } ], "operator": "|" }, "title": "报警模板报警名", "config": "{\"continuous\":false,\"dataRevision\":2,\"ownerId\":\"123412341234\"}", "notice": { "noticeStartTime": 1480521600000, "startTime": 1480521600000, "endTime": 1480607940000, "noticeEndTime": 1480607940000 }, "status": "NON"  } ]`
     */
    "TemplageAlertConfig"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `type`
         */
        Key: string;
        /**
         * 标签值。
         * @example `prod`
         */
        Value: string;
    }[];
}
