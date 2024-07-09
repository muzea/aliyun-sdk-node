export interface QueryMonitorRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 监控类型如下：
     * [基础系统指标]
     * - cpu使用量 cpuUsage
     * - 内存使用量 memoryUsage
     * - 磁盘使用量 diskUsage
     * - gc次数（每分钟） gcCount
     * - gc时间（每分钟）  gcTime
     * [nacos 注册中心]
     * - 服务数 serviceCount
     * - 写接口的平均请求耗时 writeCostTime
     * - 读接口的平均请求耗时 readCostTime
     * - TPS regCenterTps
     * - QPS regCenterQps
     * [nacos 配置中心]
     * - 配置数 publish
     * - 配置监听者数 getConfig
     * [zookeeper]
     * - TPS zk_TpsCount
     * - QPS zk_QpsCount
     * - 平均RT zookeeper_AvgRequestLatency
     * @example `regCenterQps`
     */
    "MonitorType": string;
    /**
     * 监控开始时间戳。
     * @example `1666678376`
     */
    "StartTime": number;
    /**
     * 监控结束时间戳。
     * @example `1666678376`
     */
    "EndTime": number;
    /**
     * 数据点间隔，单位：s。
     * @example `7`
     */
    "Step"?: number;
    /**
     * 实例ID。
     * @example `mse-cn-****`
     */
    "InstanceId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
