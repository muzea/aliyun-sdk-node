export interface ReplaceCloudGtmInstanceConfigAddressPoolRequest {
    /**
     * 返回结果显示的语言。取值：
     * - zh-CN：中文
     * - en-US：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22
    `
     */
    "ClientToken"?: string;
    /**
     * 调度实例id，确定本次操作的目标实例。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId"?: string;
    /**
     * 地址池列表。
     */
    "AddressPools"?: {
        /**
         * 地址池ID，唯一标识地址池，此参数指更新后的目标地址池。
         * - 传入此参数，目标实例引用的地址池全部删除，新增传入参数标识的地址池；
         * - 传入参数为空，目标实例引用的地址池全部删除，实例无关联的地址池。
         * @example `pool-89564542105737**12`
         */
        AddressPoolId: string;
        /**
         * 权重值（1-100之间的整数，包括1和100），支持对每个地址池设置不同的权重值，实现解析查询按照权重比例返回地址池。配置参数对更新后的地址池生效。
         * @example `1`
         */
        WeightValue: number;
        /**
         * 顺序号，对于任何来源的解析请求，返回顺序号较小的地址池（顺序号标识地址池返回的优先级，越小优先级越高）。配置参数对更新后的地址池生效。
         * @example `1`
         */
        SerialNumber: number;
        /**
         * 解析请求来源列表。
         */
        RequestSource: string[];
    }[];
    /**
     * 域名实例配置id，相同接入域名、相同的GTM实例可以同时配置A和AAAA记录，此情况下相同的GTM实例会出现2个域名实例配置，ConfigId可以唯一标识域名实例配置。
     * @example `Config-000**11`
     */
    "ConfigId"?: string;
}
