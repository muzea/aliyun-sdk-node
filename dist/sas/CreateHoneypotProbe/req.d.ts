export interface CreateHoneypotProbeRequest {
    /**
     * 管理节点ID。
     * > 您可以调用[ListHoneypotNode](~~ListHoneypotNode~~)接口获取该值
     * @example `a882e590-b87b-45a6-87b9-d0a3e5a0****`
     */
    "ControlNodeId": string;
    /**
     * 探针类型。取值：
     * - **host_probe**：主机探针
     * - **vpc\_black\_hole_probe**：VPC黑洞探针
     * @example `host_probe`
     */
    "ProbeType": string;
    /**
     * 探针名称。
     * @example `testHoneyPotProbe`
     */
    "DisplayName": string;
    /**
     * 探针版本。
     * @example `0.0.0`
     */
    "ProbeVersion"?: string;
    /**
     * 实例UUID。
     * > **ProbeType**为**host_probe**时该值不能为空。
     * @example `e4af3620-6895-4e2f-a641-a9d8fb53****`
     */
    "Uuid"?: string;
    /**
     * 业务分组 。
     * @example `2022011817324588686`
     */
    "BusinessGroupId"?: string;
    /**
     * 配置服务集合。
     */
    "HoneypotBindList"?: {
        /**
         * 监听端口列表。
         */
        BindPortList: {
            /**
             * 目标端口。
             * > **HoneypotId**不为空时该值不能为空。
             * @example `80`
             */
            TargetPort: number;
            /**
             * 开始端口。
             * @example `80`
             */
            StartPort: number;
            /**
             * 结束端口。
             * @example `90`
             */
            EndPort: number;
            /**
             * 是否固定端口。取值：
             * - **0**：否
             * - **1**：是
             * @example `0`
             */
            Fixed: boolean;
            /**
             * 是否绑定端口。取值：
             * - **true**：是
             * - **false**：否
             * @example `true`
             */
            BindPort: boolean;
        }[];
        /**
         * 蜜罐ID。
         * > 您可以调用[ListHoneypot](~~ListHoneypot~~)接口获取该值。
         * @example `1a5eda2d40f92ac87d6b63e1a5ad4b76fe0d4110c4a3e2fa85438a29ae55****`
         */
        HoneypotId: string;
    }[];
    /**
     * ping扫描检测。取值：
     * - **true**：开启
     * - **false**：关闭
     * @example `true`
     */
    "Ping"?: boolean;
    /**
     * ARP欺骗检测。
     * - **true**：开启
     * - **false**：关闭
     * @example `true`
     */
    "Arp"?: boolean;
    /**
     * 专有网络的ID。
     * > **ProbeType**为**vpc\_black\_hole\_probe**时该值不能为空。 您可以调用[DescribeVpcHoneyPotList](~~DescribeVpcHoneyPotList~~)接口获取该值。
     * @example `vpc-zm0asrkpv1q8gnk7mn4dn`
     */
    "VpcId"?: string;
    /**
     * 代理IP。
     * @example `192.168.XX.XX`
     */
    "ProxyIp"?: string;
}
