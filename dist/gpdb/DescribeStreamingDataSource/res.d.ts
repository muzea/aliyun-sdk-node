export interface DescribeStreamingDataSourceResponse {
    /**
     * 数据源ID。
     * @example `1`
     */
    DataSourceId: string;
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 数据源名称。
     * @example `test-kafka`
     */
    DataSourceName: string;
    /**
     * 数据源描述。
     * @example `test-kafka`
     */
    DataSourceDescription: string;
    /**
     * 服务状态：
     * - 初始化中init
     * - 运行中 running
     * - 异常 exception
     * @example `running`
     */
    Status: string;
    /**
     * 服务状态信息，例如异常情况，则显示异常原因。正常Running状态下空值。
     * @example `""`
     */
    ErrorMessage: string;
    /**
     * 创建时间。
     * @example `2019-09-08T16:00:00Z`
     */
    CreateTime: string;
    /**
     * 数据源配置信息。
     * @example `{"brokers":"broker0:9091,broker1:9091","topic":"topic"}`
     */
    DataSourceConfig: string;
    /**
     * 外部数据服务ID。
     * @example `1`
     */
    ServiceId: number;
    /**
     * 数据源类型，取值：
     *  -  kafka
     * @example `kafka`
     */
    DataSourceType: string;
}
