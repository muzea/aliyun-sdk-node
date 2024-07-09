export interface SearchCloudGtmAddressPoolsRequest {
    /**
     * 返回值语言，取值：
     * - zh-CN：中文。
     * - en-US：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22
    `
     */
    "ClientToken"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 地址池名称，支持对输入的地址池名称进行模糊搜索。
     * @example `AddressPool-1`
     */
    "AddressPoolName"?: string;
    /**
     * 地址池类型，支持对地址池类型进行精确查询：
     * - IPv4
     * - IPv6
     * - domain
     * @example `IPv4`
     */
    "AddressPoolType"?: string;
    /**
     * 地址池启用状态，支持对地址池启用状态进行精确查询：
     * - enable：启用状态
     * - disable：禁用状态
     * @example `enable`
     */
    "EnableStatus"?: string;
    /**
     * 地址池备注，支持对输入的备注进行模糊搜索。
     * @example `test`
     */
    "Remark"?: string;
    /**
     * 地址池健康状态，支持对地址池健康状态精确查询：
     * ok：正常，地址池引用的所有地址全部可用。
     * ok_alert：警告，地址池引用的地址部分不可用，但是地址池状态判定为正常。警告状态下，可用的地址池正常解析，不可用的地址池停止解析
     * exceptional：异常，地址池引用的地址部分或全部不可用，地址池状态判定为异常。
     * @example `ok`
     */
    "HealthStatus"?: string;
    /**
     * 地址池可用状态，支持对地址池可用状态进行精确查询：
     * - available：可用
     * - unavailable：不可用
     * @example `available`
     */
    "AvailableStatus"?: string;
}
