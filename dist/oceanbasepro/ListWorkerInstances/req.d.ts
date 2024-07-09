export interface ListWorkerInstancesRequest {
    /**
     * 实例规格集合。
     */
    "Specs"?: string[];
    /**
     * 传输实例的名称。
     * @example `i4katz****`
     */
    "InstanceName"?: string;
    /**
     * 源端的类型，包括 OCEANBASE、KAFKA、ROCKETMQ、POLARDB_X_1、TIDB 和 POLARDB_X_2。
     * @example `OCEANBASE`
     */
    "SourceType"?: string;
    /**
     * 目标端的类型，包括 OCEANBASE、KAFKA、ROCKETMQ、POLARDB_X_1、POLARDB_X_2 和 TIDB。
     * @example `KAFKA`
     */
    "DestType"?: string;
    /**
     * 是否仅查询可以绑定的实例，默认为 true。
     * @example `true`
     */
    "OnlyBindable"?: boolean;
    /**
     * 页序号，分页查询时生效。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小，分页查询时生效。
     * @example `10`
     */
    "PageSize"?: number;
}
