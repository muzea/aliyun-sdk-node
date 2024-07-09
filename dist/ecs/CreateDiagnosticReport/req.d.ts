export interface CreateDiagnosticReportRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ID。
     * @example `i-uf6i0tv2refv8wz*****`
     */
    "ResourceId": string;
    /**
     * 诊断指标集合ID。如果为空，则会使用ECS实例的默认诊断指标集合dms-instancedefault。
     * @example `dms-uf6i0tv2refv8wz*****`
     */
    "MetricSetId"?: string;
    /**
     * 开始时间。只对无需在GuestOS内执行云助手指令的诊断指标生效。
     * @example `2022-07-11T12:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。只对无需在GuestOS内执行云助手指令的诊断指标生效。
     * @example `2022-07-11T14:00Z`
     */
    "EndTime"?: string;
}
