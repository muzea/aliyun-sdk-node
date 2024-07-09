export interface DescribeEpnInstanceAttributeResponse {
    /**
     * 边边网络配置信息。
     */
    ConfVersions: {
        /**
         * 版本号。
         * @example `2017-10-11`
         */
        ConfVersion: string;
        /**
         * 节点ID。
         * @example `cn-chengdu-telecom`
         */
        EnsRegionId: string;
    }[];
    /**
     * 边边网络实例ID。
     * @example `epn-xxxx`
     */
    EPNInstanceId: string;
    /**
     * 边边网络实例名称。
     * @example `epn-test`
     */
    EPNInstanceName: string;
    /**
     * 实例信息。
     */
    Instances: {
        /**
         * 节点ID。
         * @example `cn-chengdu-telecom-4`
         */
        EnsRegionId: string;
        /**
         * 实例ID。
         * @example `epn-xxx`
         */
        InstanceId: string;
        /**
         * 实例名称。
         * @example `epn-test`
         */
        InstanceName: string;
        /**
         * 运营商取值：
         * - cmcc：移动。
         * - unicom：联通。
         * - telecom：电信。
         * @example `cmcc`
         */
        Isp: string;
        /**
         * 私网IP。
         * @example `192.168.1.12`
         */
        PrivateIpAddress: string;
        /**
         * 公网IP。
         * @example `20.3.XX.XX`
         */
        PublicIpAddress: string;
        /**
         * 实例状态如下所示：
         * - Running：运行中。
         * - Stopped：已停止。
         * - Expired：已过期。
         * @example `Running`
         */
        Status: string;
    }[];
    /**
     * 组网模式，取值：
     * - 智能加速（外网）：SpeedUp。
     * - 内网联通（内网模式）：Connection。
     * - 智能加速及内网联通（内网模式）：SpeedUpAndConnection。
     * @example `SpeedUp`
     */
    NetworkingModel: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 交换机信息。
     */
    VSwitches: {
        /**
         * Cidr地址段。
         * @example `10.0.0.1/24`
         */
        CidrBlock: string;
        /**
         * 节点ID。
         * @example `	 cn-chengdu-telecom-4`
         */
        EnsRegionId: string;
        /**
         * 交换机ID。
         * @example `vs-xxxx`
         */
        VSwitchId: string;
        /**
         * 交换机名称。
         * @example `vs-test`
         */
        VSwitchName: string;
    }[];
}
