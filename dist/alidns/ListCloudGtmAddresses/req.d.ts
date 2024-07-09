export interface ListCloudGtmAddressesRequest {
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
     * 地址名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 地址类型：
     * - IPv4
     * - IPv6
     * - domain
     * @example `IPv4`
     */
    "Type"?: string;
    /**
     * IP地址或者域名。
     * @example `223.5.XX.XX`
     */
    "Address"?: string;
    /**
     * 表示地址当前是否可用：
     * - enable：启用状态
     * - disable：禁用状态
     * @example `enable`
     */
    "EnableStatus"?: string;
    /**
     * 地址健康检查探测状态：
     * - ok：地址引用的健康探测模板探测任务全部正常；
     *  - ok_alert：地址引用的健康探测模板探测任务部分异常，但地址判定为正常状态；
     *  - ok_no_monitor：地址没有引用任何健康探测模板；
     *  - exceptional：地址引用的健康探测模板探测任务部分或全部异常，且地址判定为异常状态；
     * @example `ok`
     */
    "HealthStatus"?: string;
    /**
     * 健康检查模板ID，健康探测模板的唯一标识码。
     * @example `mtp-89518052425100**80`
     */
    "MonitorTemplateId"?: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 地址的ID，地址唯一标识码。
     * @example `addr-89518218114368**92`
     */
    "AddressId"?: string;
}
