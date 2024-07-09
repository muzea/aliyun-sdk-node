export interface DescribeHdMonitorRegionConfigResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 资源所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~443657~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 日志服务LogProject的名称。
     * @example `hdmonitor-cn-hangzhou-223794579283657556
    `
     */
    LogProject: string;
    /**
     * 日志服务MetricStore的名称。
     * @example `hdmonitor-cn-hangzhou-metricStore-1`
     */
    MetricStore: string;
}
