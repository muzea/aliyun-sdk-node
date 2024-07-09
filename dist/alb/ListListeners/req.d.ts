export interface ListListenersRequest {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I4FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量，此参数为可选参数。取值范围：**1~100**。入参为空时，默认值为**20**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 监听实例ID列表。最多支持20个监听ID。
     */
    "ListenerIds"?: string[];
    /**
     * 应用型负载均衡实例ID。最多支持20个实例ID。
     */
    "LoadBalancerIds"?: string[];
    /**
     * 需要过滤的监听协议。取值：
     * - **HTTP**：协议类型为HTTP。
     * - **HTTPS**：协议类型为HTTPS。
     * - **QUIC**：协议类型为QUIC。
     * @example `HTTP`
     */
    "ListenerProtocol"?: string;
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `product`
         */
        Value: string;
    }[];
}
