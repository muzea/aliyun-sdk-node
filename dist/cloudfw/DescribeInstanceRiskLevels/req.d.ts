export interface DescribeInstanceRiskLevelsRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例列表信息。
     */
    "Instances"?: {
        /**
         * 实例的UUID。
         * @example `181ad081-e4f2-4e3e-b925-03b67f648397`
         */
        Uuid: string;
        /**
         * 云防火墙的ID。
         * @example `vipcloudfw-cn-7mz2fj8nm0u`
         */
        InstanceId: string;
        /**
         * 实例的私网IP。
         * @example `172.17.XX.XX`
         */
        IntranetIp: string;
        /**
         * 实例的公网IP。
         */
        InternetIp: string[];
    }[];
}
