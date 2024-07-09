export interface DescribeInstanceMonitorDataResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    MonitorData: {
        /**
         * 实例的监控数据集合。
         */
        InstanceMonitorData: {
            /**
             * 突发性能实例积分总数。
             * @example `120`
             */
            CPUCreditBalance: number;
            /**
             * 实例云盘（包括系统盘和数据盘）的读带宽，单位：Byte/s。
             * @example `1000`
             */
            BPSRead: number;
            /**
             * 在查询监控信息时（`TimeStamp`），实例在指定的间隔时间（`Period`）内发送的公网数据流量。单位：kbits。
             * @example `343`
             */
            InternetTX: number;
            /**
             * 实例vCPU的使用比例，单位：百分比（%）。
             * @example `2`
             */
            CPU: number;
            /**
             * 突发性能实例已使用的积分数。
             * @example `30`
             */
            CPUCreditUsage: number;
            /**
             * 实例云盘（包括系统盘和数据盘）的I/O写操作，单位：次/s。
             * @example `200`
             */
            IOPSWrite: number;
            /**
             * 在查询监控信息时（`TimeStamp`），实例在指定的间隔时间（`Period`）内发送的内网数据流量。单位：kbits。
             * @example `343`
             */
            IntranetTX: number;
            /**
             * 实例ID。
             * @example `i-bp1a36962lrhj4****`
             */
            InstanceId: string;
            /**
             * 实例云盘（包括系统盘和数据盘）的写带宽，单位：Byte/s。
             * @example `13585`
             */
            BPSWrite: number;
            /**
             * 超额未支付积分。
             * @example `0.5`
             */
            CPUNotpaidSurplusCreditUsage: number;
            /**
             * 超额积分（突发性能实例积分超限部分）。
             * @example `0.4`
             */
            CPUAdvanceCreditBalance: number;
            /**
             * 实例云盘（包括系统盘和数据盘）的I/O读操作，单位：次/s。
             * @example `1000`
             */
            IOPSRead: number;
            /**
             * 实例的公网带宽，单位时间内的网络流量，单位：kbits/s。
             * @example `10`
             */
            InternetBandwidth: number;
            /**
             * 在查询监控信息时（`TimeStamp`），实例在指定的间隔时间（`Period`）内接收的公网数据流量。单位：kbits。
             * @example `122`
             */
            InternetRX: number;
            /**
             * 查询监控信息的时间戳。
             * @example `2014-10-30T05:00:00Z`
             */
            TimeStamp: string;
            /**
             * 在查询监控信息时（`TimeStamp`），实例在指定的间隔时间（`Period`）内接收的内网数据流量。单位：kbits。
             * @example `122`
             */
            IntranetRX: number;
            /**
             * 实例的内网带宽，单位时间内的网络流量，单位：kbits/s。
             * @example `10`
             */
            IntranetBandwidth: number;
        }[];
    };
}
