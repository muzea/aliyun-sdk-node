export interface SearchCloudGtmInstancesRequest {
    /**
     * 返回值的语言，取值：
     * - **zh-CN**：中文。
     * - **en-US**：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多信息，请参见如何保证幂等性。
     * @example `
    1ae05db4-10e7-11ef-b126-00163e24**22
    `
     */
    "ClientToken"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
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
     * 调度实例名称，支持模糊搜索。
     * @example `test`
     */
    "InstanceName"?: string;
}
