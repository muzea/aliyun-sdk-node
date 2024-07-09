export interface ListCloudSiemPredefinedRulesRequest {
    /**
     * 规则ID。
     * @example `10223`
     */
    "Id"?: string;
    /**
     * 查询开始时间, 单位毫秒。
     * @example `1577808000000`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间, 单位毫秒。
     * @example `1577808000000`
     */
    "EndTime"?: number;
    /**
     * 威胁等级，格式为json数组。取值：
     * - serious：高危
     * - suspicious：中危
     * - remind：低危
     * @example `["serious","suspicious","remind"]`
     */
    "ThreatLevel"?: string[];
    /**
     * 告警类型。
     * @example `scan`
     */
    "AlertType"?: string;
    /**
     * 规则名称, 仅支持字母、数字、下划线、点。
     * @example `waf_scan`
     */
    "RuleName"?: string;
    /**
     * 规则类型。 取值：
     * - predefine：预定义
     * - customize：自定义
     * @example `customize`
     */
    "RuleType"?: string;
    /**
     * 事件生成方式。 取值：
     * - default:默认内置方式
     * - singleToSingle：每个告警生成一个事件
     * - allToSingle：周期内告警生成一个事件
     * @example `allToSingle`
     */
    "EventTransferType"?: string;
    /**
     * att&ck。
     * @example `T1595.002 Vulnerability Scanning`
     */
    "AttCk"?: string;
    /**
     * 日志源。
     * @example `cloud_siem_alb_flow_log`
     */
    "LogSource"?: string;
    /**
     * 规则状态。 取值：
     * - 0：初始状态
     * - 10：模拟数据测试
     * - 15：业务数据测试中
     * - 20：业务数据测试结束
     * - 100：规则上线
     * @example `0`
     */
    "Status"?: number;
    /**
     * 规则列表排列字段。 取值：
     * - GmtModified：基于修改时间排序
     * - Id：基于规则id排序（默认）
     * @example `Id`
     */
    "OrderField"?: string;
    /**
     * 事件列表排列方向。 取值：
     * - desc：降序排列
     * - asc：升序排列。
     * @example `desc`
     */
    "Order"?: string;
    /**
     * 列表当前页号， 大于等于1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 列表每页条数， 最大不超过100。
     * @example `10`
     */
    "PageSize": number;
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
