export interface DescribeAlertsRequest {
    /**
     * 事件关联告警ID。
     * @example `sas_71e24437d2797ce8fc59692905a4****`
     */
    "AlertUuid"?: string;
    /**
     * 威胁等级，格式为json数组。取值：
     * - serious：高危
     * - suspicious：中危
     * - remind：低危
     * @example `["serious","suspicious","remind"]`
     */
    "Level"?: string[];
    /**
     * 事件关联告警来源产品。
     * @example `sas`
     */
    "Source"?: string;
    /**
     * 是否已防御。取值：
     * - 0：检出
     * - 1：拦截
     * @example `1`
     */
    "IsDefend"?: string;
    /**
     * 告警标题。
     * @example `Unusual Logon-login_common_account`
     */
    "AlertTitle"?: string;
    /**
     * 告警实际关联阿里账号ID。
     * @example `176555323***`
     */
    "SubUserId"?: string;
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
