export interface DeleteStreamingDataSourceRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `gp-bp10g78o9807yv9h3`
     */
    "DBInstanceId": string;
    /**
     * 数据源ID。
     * @example `1`
     */
    "DataSourceId": number;
}
