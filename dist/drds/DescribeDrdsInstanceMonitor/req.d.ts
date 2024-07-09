export interface DescribeDrdsInstanceMonitorRequest {
    /**
     * 实例ID。
     * @example `drds*********`
     */
    "DrdsInstanceId": string;
    /**
     * 性能监控指标，允许一次传入多个指标进行查询，多个指标参数间用英文逗号（,）隔开。
     * > 更多关于性能监控指标详情，请参见[实例监控](~~186703~~)。
     * @example `cpu`
     */
    "Key": string;
    /**
     * 查询开始时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * @example `1603123290000`
     */
    "StartTime": number;
    /**
     * 查询结束时间，格式为Unix时间戳（UTC时间），单位为毫秒。
     * > 如果查询时间范围小于1小时，会返回结束时间前1小时的数据。
     * @example `1603209690000`
     */
    "EndTime": number;
    /**
     * 监控数据周期倍数。例如，各资源监控项的数据采集周期均默认为1分钟，若设置周期倍数为2，则表示当前资源监控项数据采集周期为2分钟。
     * @example `1`
     */
    "PeriodMultiple"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
