export interface DescribeDiagnosticMetricSetsRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 诊断项集合列表。
     */
    "MetricSetIds"?: string[];
    /**
     * 诊断项集合类型。取值范围：
     * - User：用户。
     * - Common：公共。
     * 默认值：User。
     * @example `User`
     */
    "Type"?: string;
    /**
     * 资源类型。
     * @example `instance`
     */
    "ResourceType"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。最大值为100。
     * 默认值：
     * - 当不设置值时，默认值为10。
     * - 当设置的值大于100时，默认值为100。
     * @example `10`
     */
    "MaxResults"?: number;
}
