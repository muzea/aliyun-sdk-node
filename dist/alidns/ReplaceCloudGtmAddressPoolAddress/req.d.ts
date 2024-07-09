export interface ReplaceCloudGtmAddressPoolAddressRequest {
    /**
     * 返回的语言。取值：
     * - **zh-CN**：中文
     * - **en-US**：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 地址池Id，地址池的唯一标识码。此参数指需要更新的目标地址池。
     * @example `pool-89618921167339**24`
     */
    "AddressPoolId"?: string;
    /**
     * 地址列表。
     */
    "Addresses"?: {
        /**
         * 地址Id，地址的唯一标识码。表示更新后的地址ID。
         * - 传入此参数，地址池中原有的地址将会被删除，新增传入参数标识的地址。
         * - 参数为空，地址池中原有的地址被删除，地址池为空。
         * @example `addr-89636516932803**44`
         */
        AddressId: string;
        /**
         * 权重值（1-100内的整数，包括1和100），支持对每个地址设置不同的权重值，实现解析查询按照权重比例返回地址。对更新后的地址配置生效。
         * @example `1`
         */
        WeightValue: number;
        /**
         * 顺序号，标识地址返回的优先级，越小优先级越高。对更新后的地址配置生效。
         * @example `1`
         */
        SerialNumber: number;
        /**
         * 解析请求来源列表。
         */
        RequestSource: string[];
    }[];
}
