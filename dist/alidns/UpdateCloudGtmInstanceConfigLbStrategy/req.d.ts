export interface UpdateCloudGtmInstanceConfigLbStrategyRequest {
    /**
     * 返回值语言，取值：
     *
     * - **zh-CN**：中文。
     * - **en-US**：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 全局流量管理3.0实例id，唯一标识本次需要修改策略的目标实例。
     * @example `gtm-cn-wwo3a3hbz**`
     */
    "InstanceId"?: string;
    /**
     * 域名实例配置id，相同接入域名、相同的GTM实例可以同时配置A和AAAA记录，此情况下相同的GTM实例会出现2个域名实例配置，ConfigId可以唯一标识本次需要修改的域名实例配置。
     * @example `Config-000**11`
     */
    "ConfigId"?: string;
    /**
     * 修改后的地址池之间的负载均衡策略：
     * - round_robin：轮询，对于任何来源的解析请求，返回所有地址池。并且每次对于所有地址池进行轮转排序；
     * - sequence：顺序，对于任何来源的解析请求，返回顺序号较小的地址池（顺序号标识地址池返回的优先级，越小优先级越高）。若顺序号较小的地址池不可用时，返回下一个序号较小的地址池；
     * - weight：权重，支持对每个地址池设置不同的权重值，实现解析查询按照权重比例返回地址池；
     * - source_nearest：来源就近，即智能解析功能，GTM可以根据不同的解析请求来源返回不同的地址池，实现用户就近访问的效果；
     * @example `sequence`
     */
    "AddressPoolLbStrategy"?: string;
    /**
     * 地址池间负载均衡策略为顺序模式时，前序资源异常恢复服务模式：
     * - preemptive：抢占模式，前序资源恢复，优先使用顺序号较小的地址池；
     * - non_preemptive：非抢占模式，前序资源恢复，仍然使用当前地址池；
     * 此参数定义了修改后的模式。
     * @example `preemptive`
     */
    "SequenceLbStrategyMode"?: string;
}
