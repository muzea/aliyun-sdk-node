export interface CreateDiagnosticMetricSetRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 诊断资源类型。
     * 默认值：instance。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 诊断指标集合的名称。
     * @example `远程连接问题诊断`
     */
    "MetricSetName"?: string;
    /**
     * 诊断指标列表。最多支持100个。
     */
    "MetricIds": string[];
    /**
     * 诊断指标集合的描述信息。
     * @example `远程连接问题诊断`
     */
    "Description"?: string;
}
