export interface DescribeLoadBalancerListenersRequest {
    /**
     * 传统型负载均衡实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * > 当您所选地域的Endpoint（服务地址）为slb.aliyuncs.com时，`RegionId`必填。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。
     * 取值范围：**1**~**100**，入参为空时，默认值：**20**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 传统型负载均衡监听协议。取值：
     * - **tcp**
     * - **udp**
     * - **http**
     * - **https**
     * @example `http`
     */
    "ListenerProtocol"?: string;
    /**
     * 传统型负载均衡实例的ID列表，最多支持10个实例ID。
     * @example `lb-123wrwer`
     */
    "LoadBalancerId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。N的取值范围：**1~20**。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：**1~20**。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * CLB实例使用的监听端口。
     * @example `443`
     */
    "ListenerPort"?: number;
    /**
     * 自定义监听名称。
     * @example `HTTPS_443`
     */
    "Description"?: string;
}
