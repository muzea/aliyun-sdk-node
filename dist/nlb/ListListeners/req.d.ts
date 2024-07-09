export interface ListListenersRequest {
    /**
     * 监听实例ID。最多支持20个监听ID。
     */
    "ListenerIds"?: string[];
    /**
     * 网络型负载均衡实例ID。最多支持20个实例ID。
     */
    "LoadBalancerIds"?: string[];
    /**
     * 监听协议。取值：**TCP**、**UDP**或**TCPSSL**。
     * @example `TCPSSL`
     */
    "ListenerProtocol"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 实例的标签键。最多支持输入20个标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `env`
         */
        Key: string;
        /**
         * 实例的标签值。最多支持输入20个标签值。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `product`
         */
        Value: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 网络型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
