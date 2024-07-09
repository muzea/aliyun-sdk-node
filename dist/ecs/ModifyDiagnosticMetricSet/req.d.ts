export interface ModifyDiagnosticMetricSetRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 诊断指标集合ID。
     * @example `dms-uf6i0tv2refv8wz*****`
     */
    "MetricSetId": string;
    /**
     * 诊断指标列表。
     */
    "MetricIds"?: string[];
    /**
     * 资源类型。
     * @example `instance`
     */
    "ResourceType"?: string;
    /**
     * 诊断指标集合的名称。
     * @example `remoteConnectError`
     */
    "MetricSetName"?: string;
    /**
     * 诊断指标集合的描述信息。
     * @example `远程连接诊断`
     */
    "Description"?: string;
}
