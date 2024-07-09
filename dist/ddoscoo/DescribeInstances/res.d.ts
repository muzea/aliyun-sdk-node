export interface DescribeInstancesResponse {
    /**
     * 查询到的DDoS高防实例的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A0AF40CC-814A-5A86-AEAA-6F19E88B8A39`
     */
    RequestId: string;
    /**
     * DDoS高防实例的详情列表。
     */
    Instances: {
        /**
         * 实例的状态。取值：
         * - **1**：表示正常。
         * - **2**：表示已过期。
         * @example `1`
         */
        Status: number;
        /**
         * 实例的IP转发模式。取值：
         * - **fnat**：表示源站和客户端的IP版本一致，即IPv4地址客户端请求转发到IPv4地址源站、IPv6地址客户端请求转发到IPv6地址源站。
         * - **v6tov4**：表示IPv6地址客户端请求转发到IPv4地址源站。
         * @example `fnat`
         */
        IpMode: string;
        /**
         * 实例的欠费状态。取值固定为**0**，表示不欠费，因为DDoS高防服务目前只支持包年包月的预付费计费方式。
         * @example `0`
         */
        DebtStatus: number;
        /**
         * 实例的防护套餐版本。取值：
         * - **0**：表示DDoS高防（非中国内地）保险版。
         * - **1**：表示DDoS高防（非中国内地）无忧版。
         * - **2**： 表示DDoS高防（非中国内地）加速线路。
         * - **9**：表示DDoS高防（中国内地）专业版。
         * @example `9`
         */
        Edition: number;
        /**
         * 实例的IP协议版本。取值：
         * - **Ipv4**：表示IPv4协议。
         * - **Ipv6**：表示IPv6协议。
         * @example `Ipv4`
         */
        IpVersion: string;
        /**
         * 实例的到期时间。使用时间戳表示，单位：毫秒。
         * @example `1640361600000`
         */
        ExpireTime: number;
        /**
         * 实例的备注。
         * @example `doc-test`
         */
        Remark: string;
        /**
         * 实例的创建时间。使用时间戳表示，单位：毫秒。
         * @example `1637751953000`
         */
        CreateTime: number;
        /**
         * 实例的业务流量转发状态。取值：
         * - **0**：表示已停止转发业务流量。
         * - **1**：表示正常转发业务流量。
         * @example `1`
         */
        Enabled: number;
        /**
         * 实例的ID。
         * @example `ddoscoo-cn-7pp2g9ed****`
         */
        InstanceId: string;
        /**
         * 实例是否开启过95弹性业务带宽计费模式。取值：
         * - 0：表示未开启过。
         * - 1：表示开启过。
         * @example `0`
         */
        IsFirstOpenBw: number;
        /**
         * 实例是否开启过95弹性QPS计费模式。取值：
         * - 0：表示未开启过。
         * - 1：表示开启过。
         * @example `0`
         */
        IsFirstOpenQps: number;
        /**
         * DDoS高防实例的IP。
         * @example `203.199.XX.XX`
         */
        Ip: string;
    }[];
}
