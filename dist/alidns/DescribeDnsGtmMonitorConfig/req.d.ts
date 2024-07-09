export interface DescribeDnsGtmMonitorConfigRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 健康检查配置id。
     * @example `MonitorConfigId1`
     */
    "MonitorConfigId": string;
}
