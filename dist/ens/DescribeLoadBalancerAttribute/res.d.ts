export interface DescribeLoadBalancerAttributeResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-5rcvo1n1t3hykfhhjwjgqp****`
     */
    LoadBalancerId: string;
    /**
     * 负载均衡实例的名称。
     * @example `example`
     */
    LoadBalancerName: string;
    /**
     * 负载均衡实例监听状态。取值：
     * - **Active**：实例中的监听可以根据规则转发接收的流量。
     * - **InActive**：实例中的监听不会再转发接收的流量。
     * @example `Active`
     */
    LoadBalancerStatus: string;
    /**
     * ENS节点ID。
     * @example `cn-chengdu-telecom`
     */
    EnsRegionId: string;
    /**
     * 负载均衡实例服务地址。
     * @example `192.168.XX.XX`
     */
    Address: string;
    /**
     * 网络ID。
     * @example `n-5rwbi3g9zvgxcsiufwhw8****`
     */
    NetworkId: string;
    /**
     * 交换机ID。
     * @example `vsw-5s78m2pdr9osa0j64bn78****`
     */
    VSwitchId: string;
    /**
     * 负载均衡带宽峰值，默认值为-1（表示不限速）。
     * @example `-1
    `
     */
    Bandwidth: number;
    /**
     * 负载均衡实例的规格。
     * @example `elb.s2.medium`
     */
    LoadBalancerSpec: string;
    /**
     * 负载均衡实例的创建时间（UTC）。
     * @example `2019-05-21T12:22:00Z`
     */
    CreateTime: string;
    /**
     * 负载均衡实例结束时间。
     * @example `2020-05-21T12:22:00Z`
     */
    EndTime: string;
    /**
     * 负载均衡实例前端使用的端口。
     */
    ListenerPorts: string[];
    /**
     * 后端服务器列表。
     */
    BackendServers: {
        /**
         * 后端服务器实例ID。
         * @example `i-5vb5h5njxiuhn48a****`
         */
        ServerId: string;
        /**
         * 后端服务器的IP。
         * @example `192.168.XX.XX
        `
         */
        Ip: string;
        /**
         * 后端服务器使用的端口。
         * @example `0`
         */
        Port: string;
        /**
         * 后端服务器类型。
         * @example `ens`
         */
        Type: string;
        /**
         * 后端服务器的权重。
         * @example `100`
         */
        Weight: number;
    }[];
    /**
     * 负载均衡实例前端使用的端口和协议。
     */
    ListenerPortsAndProtocols: {
        /**
         * 监听端口。
         * @example `8080`
         */
        ListenerPort: number;
        /**
         * 监听协议。
         * @example `tcp`
         */
        ListenerProtocol: string;
        /**
         * 描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * 是否启用监听转发。
         * @example `off`
         */
        ListenerForward: string;
        /**
         * 转发到的目的监听端口
         * @example `0`
         */
        ForwardPort: number;
    }[];
    /**
     * 负载均衡实例的IP版本。取值：ipv4或者ipv6。
     * @example `ipv4`
     */
    AddressIPVersion: string;
    /**
     * 付费类型。取值：
     * - **PrePaid**：预付费。
     * - **PostPaid**（目前仅支持该付费类型）：后付费。
     * @example `PostPaid`
     */
    PayType: string;
}
