export interface CreateCloudGtmAddressPoolRequest {
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
     * 地址池名称，方便用户区分地址池的用途。
     * @example `Address pool-1`
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
     * 地址池健康状态判定条件：
     * - any_ok：地址池内至少1个地址是可用地址
     * - p30_ok：地址池内至少30%地址是可用地址
     * - p50_ok：地址池内至少50%地址是可用地址
     * - p70_ok：地址池内至少70%地址是可用地址
     * - all_ok：地址池内地址全部可用
     * @example `any_ok`
     */
    "HealthJudgement"?: string;
    /**
     * 地址池的启用状态：
     * - enable：启用，当前地址池在健康检查正常的情况下可参与解析。
     * - disable： 禁用，当前地址池不管健康检查是否正常，均不可参与解析
     * @example `enable`
     */
    "EnableStatus"?: string;
    /**
     * 地址池的备注说明，方便用户区分地址池的使用场景。
     * @example `app`
     */
    "Remark"?: string;
}
