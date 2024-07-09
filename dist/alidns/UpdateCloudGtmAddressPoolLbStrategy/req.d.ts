export interface UpdateCloudGtmAddressPoolLbStrategyRequest {
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
     * 地址池中地址间负载均衡策略：
     * - round_robin：轮询，对于任何来源的解析请求，返回所有地址。并且每次对于所有地址进行轮转排序。
     * - sequence：顺序，对于任何来源的解析请求，返回顺序号较小的地址（顺序号标识地址返回的优先级，越小优先级越高）。若顺序号较小的地址不可用时，返回下一个序号较小的地址。
     * - weight：权重，支持对每个地址设置不同的权重值，实现解析查询按照权重比例返回地址。
     * - source_nearest：来源就近，即智能解析功能，GTM可以根据不同的解析请求来源返回不同的地址，实现用户就近访问的效果。
     * @example `sequence`
     */
    "AddressLbStrategy"?: string;
    /**
     * 地址间负载均衡策略为顺序模式时，前序资源异常恢复服务模式：
     * - preemptive：抢占模式，前序资源恢复，优先使用顺序号较小的地址；
     * - non_preemptive：非抢占模式，前序资源恢复，仍然使用当前地址；
     * @example `preemptive`
     */
    "SequenceLbStrategyMode"?: string;
}
