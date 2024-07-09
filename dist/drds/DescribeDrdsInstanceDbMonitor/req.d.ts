export interface DescribeDrdsInstanceDbMonitorRequest {
    /**
     * <props="china">PolarDB-X实例ID。</props>
     * <props="intl">DRDS实例ID。</props>
     * @example `drds*************`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `drds_test`
     */
    "DbName": string;
    /**
     * 性能监控指标，允许一次传入多个指标进行查询，多个指标参数间用英文逗号（,）隔开。
     * >更多关于性能监控指标详情，请参见[数据库监控](~~186704~~)。
     * @example `qps`
     */
    "Key": string;
    /**
     * 开始时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * @example `1603162800000`
     */
    "StartTime": number;
    /**
     * 结束时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * @example `1603166400000`
     */
    "EndTime": number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
