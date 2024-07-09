export interface ListExternalDataSourcesResponse {
    /**
     * 请求ID。
     * @example `BBE00C04-A3E8-4114-881D-0480A72CB92E`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `2`
     */
    TotalRecordCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * Hadoop外部表服务列表。
     */
    Items: {
        /**
         * 服务ID。
         * @example `123`
         */
        DataSourceId: number;
        /**
         * 服务名称。
         * @example `hdfs_pxf`
         */
        DataSourceName: string;
        /**
         * 数据源类型。
         * @example `hdfs`
         */
        DataSourceType: string;
        /**
         * 数据源描述。
         * @example `test`
         */
        DataSourceDescription: string;
        /**
         * 创建时间。
         * @example `2019-09-08T16:00:00Z`
         */
        CreateTime: string;
        /**
         * 最后修改时间。
         * @example `2019-10-08T16:00:00Z`
         */
        ModifyTime: string;
        /**
         * 服务状态位，取值：
         * - 初始化中 Init
         * - 运行中 Running
         * - 异常 Exception
         * @example `Running`
         */
        DataSourceStatus: string;
        /**
         * 服务状态信息，例如异常情况，则显示异常原因。正常Running状态下空值。
         * @example `""`
         */
        StatusMessage: string;
        /**
         * 服务目录，在该目录下保留有Hadoop相关的配置文件。
         * @example `HadoopDir`
         */
        DataSourceDir: string;
        /**
         * 外部数据服务id
         * @example `123`
         */
        ExternalDataServiceId: number;
    }[];
}
