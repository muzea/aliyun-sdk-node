export interface ListCloudGtmInstanceConfigsRequest {
    /**
     * 返回值语言，取值：
     * - **zh-CN**：中文
     * - **en-US**：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22
    `
     */
    "ClientToken"?: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 全局流量管理3.0实例id。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId"?: string;
    /**
     * zone名称，即GTM接入域名的父Zone。一般为GTM实例所在账号下，在云解析DNS控制台的托管域名，支持主域和子域。
     * @example `example.com`
     */
    "ScheduleZoneName"?: string;
    /**
     * 域名实例的启用状态：
     * - enable：启用状态，GTM实例智能调度策略生效；
     * - disable：禁用状态，GTM实例智能调度策略不可用；
     * @example `enable`
     */
    "EnableStatus"?: string;
    /**
     * 备注。
     * @example `test`
     */
    "Remark"?: string;
    /**
     * GTM接入域名，ScheduleHostname+ScheduleZoneName。
     * @example `www.example.com`
     */
    "ScheduleDomainName"?: string;
}
