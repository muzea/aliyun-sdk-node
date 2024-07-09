export interface ListStackResourceDriftsRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 使用NextToken方式查询时，每次最多返回的结果数。
     * 取值范围：1~100。
     * 默认值：50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2****w==`
     */
    "NextToken"?: string;
    /**
     * 资源偏差状态。取值：
     * - DELETED：资源与预期的模板配置不同，因为资源已被删除。
     * - MODIFIED：资源与预期的模板配置不同。
     * - NOT_CHECKED：ROS没有检查资源是否与预期的模板配置不同。
     * - IN_SYNC：资源的当前配置与其预期的模板配置相匹配。
     * @example `MODIFIED`
     */
    "ResourceDriftStatus"?: string[];
}
