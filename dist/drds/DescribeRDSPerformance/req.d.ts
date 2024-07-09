export interface DescribeRDSPerformanceRequest {
    /**
     * <props="china">PolarDB-X实例ID。</props>
     * <props="intl">DRDS实例ID。</props>
     * @example `drds*********`
     */
    "DrdsInstanceId": string;
    /**
     * 存储层RDS实例ID。
     * @example `rm-************`
     */
    "RdsInstanceId": string;
    /**
     * 性能监控指标，允许一次传入多个指标进行查询，多个指标参数间用英文逗号（,）隔开。
     * > 更多关于性能监控指标详情，请参见[存储监控](~~186705~~)。
     * @example `MySQL_MemCpuUsage`
     */
    "Keys": string;
    /**
     * 查询开始时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * @example `1603123290000`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * @example `1603209690000`
     */
    "EndTime"?: number;
    /**
     * 数据库引擎类型。
     * @example `mysql`
     */
    "DbInstType"?: string;
}
