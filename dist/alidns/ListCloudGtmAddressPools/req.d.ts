export interface ListCloudGtmAddressPoolsRequest {
    /**
     * 返回值语言，取值：
     * - zh-CN：中文。
     * - en-US：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
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
     * 地址池名称。
     * @example `AddressPool-1`
     */
    "AddressPoolName"?: string;
    /**
     * 地址池类型：
     * - IPv4：表示要解析的服务地址是IPv4地址
     * - IPv6：表示要解析的服务地址是IPv6地址
     * - domain：表示要解析的服务地址是域名
     * @example `IPv4`
     */
    "AddressPoolType"?: string;
    /**
     * 地址池启用状态：
     * - enable：启用状态
     * - disable：禁用状态
     * @example `enable`
     */
    "EnableStatus"?: string;
    /**
     * 地址池备注。
     * @example `test`
     */
    "Remark"?: string;
}
