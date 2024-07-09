export interface DescribeIpDdosThresholdResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `025F1688-680B-551A-9A8E-1A0D796315CF`
     */
    RequestId: string;
    /**
     * 公网IP资产的阈值详情列表。
     */
    Threshold: {
        /**
         * 阈值类型。取值：
         * - **defense**：表示流量清洗阈值。
         * - **blackhole**：表示DDoS防护阈值。
         * @example `defense`
         */
        DdosType: string;
        /**
         * 是否为系统默认阈值。取值：
         * - **true**：表示是，即由DDoS防护服务根据云服务器的流量负载，动态调整清洗阈值。
         * - **false**：表示否，即由您手动设置清洗阈值。
         * @example `false`
         */
        IsAuto: boolean;
        /**
         * 最大流量清洗阈值。单位：Mbps。
         * @example `7500`
         */
        MaxBps: number;
        /**
         * DDoS弹性防护阈值（即DDoS最大防护阈值）。单位：Mbps。
         * > 只有当**DdosType**为**blackhole**（表示查询DDoS防护阈值）时，才会返回该参数。
         * @example `12310`
         */
        ElasticBps: number;
        /**
         * 实例ID。
         * @example `i-bp1i88rqjza51s****`
         */
        InstanceId: string;
        /**
         * **DdosType**为**defense**（表示查询流量清洗阈值）时，表示当前流量清洗阈值。单位：Mbps。
         * **DdosType**为**blackhole**（表示查询DDoS防护阈值）时，表示当前DDoS基础防护阈值。单位：Mbps。
         * @example `7500`
         */
        Bps: number;
        /**
         * 当前报文数量清洗阈值。单位：pps。
         * > 只有当**DdosType**为**defense**（表示查询流量清洗阈值）时，才会返回该参数。
         * @example `5000000`
         */
        Pps: number;
        /**
         * 最大报文数量清洗阈值。单位：pps。
         * @example `5000000`
         */
        MaxPps: number;
        /**
         * 公网IP资产的IP地址。
         * @example `192.0.XX.XX`
         */
        InternetIp: string;
    };
}
