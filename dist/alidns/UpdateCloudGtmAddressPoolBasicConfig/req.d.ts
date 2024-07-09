export interface UpdateCloudGtmAddressPoolBasicConfigRequest {
    /**
     * 返回结果显示的语言。取值：
     * - zh-CN：中文
     * - en-US：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 地址池的ID，地址池的唯一识别码。
     * @example `pool-89528023225442**16`
     */
    "AddressPoolId"?: string;
    /**
     * 地址池名称，方便用户区分地址池的用途。
     * @example `app`
     */
    "AddressPoolName"?: string;
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
}
