export interface ListInstancesTrafficPackagesResponse {
    /**
     * 实例流量包详情信息。
     */
    InstanceTrafficPackageUsages: {
        /**
         * 轻量应用服务器实例ID。
         * @example `ccscqwqwqqqw****`
         */
        InstanceId: string;
        /**
         * 流量包当月周期内已使用流量。单位：Byte。
         * @example `10000`
         */
        TrafficUsed: number;
        /**
         * 流量包当月周期内的总流量。单位：Byte。
         * > 流量包当月周期内的总流量=流量包当月周期内已使用流量+流量包当月周期内的剩余流量
         * @example `20000`
         */
        TrafficPackageTotal: number;
        /**
         * 流量包当月周期内的剩余流量。单位：Byte。
         * @example `10000`
         */
        TrafficPackageRemaining: number;
        /**
         * 流量包当月周期内超出流量包额度的流量。单位：Byte。
         * @example `0`
         */
        TrafficOverflow: number;
    }[];
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F****`
     */
    RequestId: string;
}
