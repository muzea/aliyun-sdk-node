export interface DescribeInstanceResponse {
    /**
     * 查询到的公网IP资产的总数量。
     * @example `1`
     */
    Total: number;
    /**
     * 本次请求的ID。
     * @example `C728D7E9-9A39-52E0-966B-5C33118BDBB0`
     */
    RequestId: string;
    InstanceList: {
        /**
         * 公网IP资产的实例详情列表。
         */
        Instance: {
            /**
             * 实例的IP地址。
             * @example `121.199.XX.XX`
             */
            InstanceIp: string;
            /**
             * 实例是否已绑定DDoS原生防护。取值：
             * - **true**：表示是。
             * - **false**：表示否。
             * @example `false`
             */
            IsBgppack: boolean;
            /**
             * 实例IP地址的协议类型。取值：
             * - **v4**：表示IPv4协议。
             * - **v6**：表示IPv6协议。
             * @example `v4`
             */
            IpVersion: string;
            /**
             * 实例的DDoS弹性防护阈值。单位：Mbps。
             * @example `12310`
             */
            ElasticThreshold: number;
            /**
             * 实例的DDoS基础防护阈值。单位：Mbps。
             * @example `5200`
             */
            BlackholeThreshold: number;
            /**
             * 实例的流量清洗阈值。单位：Mbps。
             * @example `300`
             */
            DefenseBpsThreshold: number;
            /**
             * 实例的名称。
             * @example `launch-advisor-2021****`
             */
            InstanceName: string;
            /**
             * 实例的DDoS防护状态。取值：
             * - **mitigating**：表示清洗中。
             * - **blackholed**：表示黑洞中。
             * - **normal**：表示正常。
             * @example `normal`
             */
            InstanceStatus: string;
            /**
             * 实例的报文数量清洗阈值。单位：pps。
             * @example `70000`
             */
            DefensePpsThreshold: number;
            /**
             * 实例ID。
             * @example `i-bp1cb6x80tfgocid****`
             */
            InstanceId: string;
            /**
             * 实例的类型。取值：
             * - **ecs**：表示云服务器ECS实例。
             * - **slb**：表示负载均衡SLB实例。
             * - **eip**：表示弹性公网IP实例。
             * @example `ecs`
             */
            InstanceType: string;
        }[];
    };
}
