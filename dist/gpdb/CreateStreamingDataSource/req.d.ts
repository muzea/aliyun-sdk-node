export interface CreateStreamingDataSourceRequest {
    /**
     * 地域ID。
     * > 您可以通过[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 数据源名称。
     * @example `test-kafka`
     */
    "DataSourceName": string;
    /**
     * 数据源类型。取值：
     *  -  kafka
     * @example `kafka`
     */
    "DataSourceType": string;
    /**
     * 数据源描述。
     * @example `test-kafka`
     */
    "DataSourceDescription"?: string;
    /**
     * 实例ID。
     * @example `CreateExternalDataSource`
     */
    "DBInstanceId": string;
    /**
     * 数据源配置信息。
     * @example `{"broker_list":"broker0:9091,broker1:9091","topic":"topic"}`
     */
    "DataSourceConfig": string;
    /**
     * 实时数据服务ID。
     * @example `1`
     */
    "ServiceId": number;
}
