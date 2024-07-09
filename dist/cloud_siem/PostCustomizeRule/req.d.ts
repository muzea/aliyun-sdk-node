export interface PostCustomizeRuleRequest {
    /**
     * 自定义规则ID。
     * @example `123456789`
     */
    "Id"?: number;
    /**
     * 规则名称。
     * @example `waf_scan`
     */
    "RuleName"?: string;
    /**
     * 规则描述。
     * @example `this rule is for waf scan`
     */
    "RuleDesc"?: string;
    /**
     * 威胁等级。取值：
     * - serious：高危
     * - suspicious：中危
     * - remind：低危
     * @example `remind`
     */
    "ThreatLevel"?: string;
    /**
     * att&ck。
     * @example `T1595.002 Vulnerability Scanning
    `
     */
    "AttCk"?: string;
    /**
     * 威胁类型。
     * @example `WEBSHELL`
     */
    "AlertType"?: string;
    /**
     * 威胁类型美杜莎Code。
     * @example `${siem_rule_type_process_abnormal_command}`
     */
    "AlertTypeMds"?: string;
    /**
     * 规则对应的日志类型。
     * @example `ALERT_ACTIVITY`
     */
    "LogType"?: string;
    /**
     * 规则对应的日志类型美杜莎Code。
     * @example `${security_event_config.event_name.webshellName_clientav}`
     */
    "LogTypeMds"?: string;
    /**
     * 规则对应的日志源。
     * @example `cloud_siem_aegis_sas_alert`
     */
    "LogSource"?: string;
    /**
     * 规则对应的日志源美杜莎Code。
     * @example `${sas.cloudsiem.prod.cloud_siem_aegis_sas_alert}`
     */
    "LogSourceMds"?: string;
    /**
     * 规则查询条件json。
     * @example `[[{"not":false,"left":"alert_name","operator":"=","right":"WEBSHELL"}]]`
     */
    "RuleCondition"?: string;
    /**
     * 日志聚合字段，json数组格式。
     * @example `["asset_id"]`
     */
    "RuleGroup"?: string;
    /**
     * 规则阈值配置json。
     * @example `{"aggregateFunction":"count","aggregateFunctionName":"count","field":"activity_name","operator":"&lt;=","value":1}`
     */
    "RuleThreshold"?: string;
    /**
     * 规则窗口长度。
     * @example `{"time":"1","unit":"HOUR"}`
     */
    "QueryCycle"?: string;
    /**
     * 告警是否转换事件开关。取值：
     * - 0：不转换
     * - 1：转换
     * @example `1`
     */
    "EventTransferSwitch"?: number;
    /**
     * 事件生成方式。取值：
     * - default：默认内置方式
     * - singleToSingle：每个告警生成一个事件
     * - allToSingle：周期内告警生成一个事件
     * @example `allToSingle`
     */
    "EventTransferType"?: string;
    /**
     * 事件生成扩展信息，当eventTransferType值为allToSingle时，该字段有值，表示告警聚合窗口的周期长度以及周期单位。
     * @example `{"time":"1","unit":"MINUTE"}`
     */
    "EventTransferExt"?: string;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
