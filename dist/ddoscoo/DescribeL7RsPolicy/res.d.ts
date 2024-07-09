export interface DescribeL7RsPolicyResponse {
    /**
     * 回源负载均衡算法。取值：
     * - **ip_hash**：表示IP Hash算法。根据请求来源IP进行HASH映射，将同一个IP的所有请求定向到一个源站服务器。
     * - **rr**：表示轮询算法。将所有请求轮流分配给不同源站服务器。
     * - **least_time**：表示Least Time算法。该算法通过智能DNS解析能力，保证业务流量从接入防护节点到转发回源站服务器整个链路的时延最短。
     * @example `rr`
     */
    ProxyMode: string;
    /**
     * 回源重试开关。取值：
     * - **1**：打开。
     * - **0**：关闭。
     * @example `1`
     */
    UpstreamRetry: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9E7F6B2C-03F2-462F-9076-B782CF0DD502`
     */
    RequestId: string;
    /**
     * 回源参数信息。
     */
    Attributes: {
        /**
         * 源站服务器的地址类型。取值：
         * - **0**：表示源站服务器的IP地址。
         * - **1**：表示源站服务器的域名地址。
         * @example `0`
         */
        RsType: number;
        /**
         * 源站服务器地址。
         * @example `1.***.***.1`
         */
        RealServer: string;
        /**
         * 回源参数。
         */
        Attribute: {
            /**
             * 服务器的权重。仅在使用轮询算法（**ProxyMode**为**rr**）时生效。
             * 权重取值范围：**1**~**100**，默认值为**100**。权重越高的服务器分配到的请求越多。
             * @example `100`
             */
            Weight: number;
            /**
             * 新建连接超时时间。
             * 值范围**1**~**10**秒，默认值为**5**。
             * @example `5`
             */
            ConnectTimeout: number;
            /**
             * 失效时间，单位秒，当源站失败超过**MaxFails**时，则将该源站地址设置为down，时效为**FailTimeout**时间，最终取值取**ConnectTimeout**和**FailTimeout**的最大值。
             * 值范围**1**~**3600**秒，默认值为**10**。
             * @example `10`
             */
            FailTimeout: number;
            /**
             * 最大失败次数，健康检查相关。
             * 值范围**1**~**10**秒，默认值为**3**。
             * @example `3`
             */
            MaxFails: number;
            /**
             * 主备属性标志。取值：
             * - **active**：主。
             * - **backup**：备。
             * @example `active`
             */
            Mode: string;
            /**
             * 读连接超时时间。
             * 取值范围**10**~**300**秒，默认值为**120**。
             * @example `120`
             */
            ReadTimeout: number;
            /**
             * 写连接超时时间。
             * 取值范围**10**~**300**秒，默认值为**120**。
             * @example `120`
             */
            SendTimeout: number;
        };
    }[];
}
