export interface ModifyStreamingDataSourceRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 数据源描述。
     * @example `test-kafka`
     */
    "DataSourceDescription"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~196830~~)接口查看目标地域下所有实例的详情，包括实例ID。
     * @example `gp-k2j36a3172b102593`
     */
    "DBInstanceId": string;
    /**
     * 数据源配置信息。
     * @example `{"brokers":"broker0:9091,broker1:9091","topic":"topic"}`
     */
    "DataSourceConfig"?: string;
    /**
     * 数据源ID。
     * @example `57`
     */
    "DataSourceId": string;
}
