export interface DescribeInstanceIpAddressResponse {
    /**
     * 查询到的公网IP资产的总数量。
     * @example `1`
     */
    Total: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BC0907F8-A9F3-5E11-977B-D59CD98C64ED`
     */
    RequestId: string;
    /**
     * 公网IP资产所属实例的详情列表。
     */
    InstanceList: {
        /**
         * 实例ID。
         * @example `i-bp1cb6x80tfgocid****`
         */
        InstanceId: string;
        /**
         * 公网IP资产的类型。取值：
         * - **ecs**：表示云服务器ECS实例。
         * - **slb**：表示负载均衡SLB实例。
         * - **eip**：表示弹性公网IP实例。
         * @example `ecs`
         */
        InstanceType: string;
        /**
         * 实例的名称。
         * @example `launch-advisor-2021****`
         */
        InstanceName: string;
        /**
         * 实例的DDoS防护状态。取值：
         * - **normal**：表示正常。
         * - **abnormal**：表示被攻击中。
         * @example `normal`
         */
        InstanceStatus: string;
        /**
         * 公网IP资产的详情列表。
         */
        IpAddressConfig: {
            /**
             * 公网IP资产的IP地址。
             * @example `192.0.XX.XX`
             */
            InstanceIp: string;
            /**
             * 公网IP资产是否已绑定DDoS原生防护。取值：
             * - **true**：表示是。
             * - **false**：表示否。
             * @example `true`
             */
            IsBgppack: boolean;
            /**
             * IP地址的协议类型。取值：
             * - **v4**：表示IPv4协议。
             * - **v6**：表示IPv6协议。
             * @example `v4`
             */
            IpVersion: string;
            /**
             * 公网IP资产的DDoS防护状态。取值：
             * - **mitigating**：表示清洗中。
             * - **blackholed**：表示黑洞中。
             * - **normal**：表示正常。
             * @example `normal`
             */
            IpStatus: string;
            /**
             * 公网IP资产所属的地域编码。
             * @example `cn-hangzhou-dg-a01`
             */
            RegionId: string;
            /**
             * 公网IP资产的DDoS弹性防护阈值。单位：Mbps。
             * @example `12310`
             */
            ElasticThreshold: number;
            /**
             * 公网IP资产的DDoS基础防护阈值。单位：Mbps。
             * @example `5200`
             */
            BlackholeThreshold: number;
            /**
             * 公网IP资产的流量清洗阈值。单位：Mbps。
             * @example `300`
             */
            DefenseBpsThreshold: number;
            /**
             * 公网IP资产的报文数量清洗阈值。单位：pps。
             * @example `70000`
             */
            DefensePpsThreshold: number;
            /**
             * 公网IP资产是否在原生防护中全力防护。取值：
             * - **0**：表示非全力防护。
             * - **1**：表示全力防护。
             * @example `0`
             */
            IsFullProtection: number;
        }[];
    }[];
}
