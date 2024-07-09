export interface DescribeDrdsDBsResponse {
    /**
     * 每页记录数。
     * @example `30`
     */
    PageSize: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 请求ID。
     * @example `006B7D19-8CDB-4AA6-AAE7-23C107GS3W2T`
     */
    RequestId: string;
    /**
     * 数据库列表的总数量。
     * @example `1`
     */
    Total: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 数据库列表。
         */
        Db: {
            /**
             * 数据库状态。
             * @example `NORMAL`
             */
            Status: string;
            /**
             * 数据库名称。
             * @example `drds_test`
             */
            DbName: string;
            /**
             * 系统为拆分后的数据库分配的schema ID。
             * @example `drds_test_1563773871118kxqd`
             */
            Schema: string;
            /**
             * 数据库创建时间，格式为Unix时间戳，单位为毫秒。
             * @example `1563773824000`
             */
            CreateTime: string;
            /**
             * 数据库拆分模式，取值范围如下：
             * * **HORIZONTAL**：水平拆分
             * * **VERTICAL**：垂直拆分
             * @example `HORIZONTAL`
             */
            Mode: string;
            /**
             * 数据库类型，取值为**RDS**或**POLARDB**。
             * @example `RDS`
             */
            DbInstType: string;
        }[];
    };
}
