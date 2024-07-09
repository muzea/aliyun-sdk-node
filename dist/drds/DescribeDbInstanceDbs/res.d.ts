export interface DescribeDbInstanceDbsResponse {
    /**
     * 请求ID。
     * @example `E9F3D991-08DE-4B74-BE0E-06B809******`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据库总数。
     * @example `1`
     */
    Total: string;
    Databases: {
        /**
         * 数据库详情列表。
         */
        Database: {
            /**
             * 数据库状态，取值范围如下：
             * * **0**：创建中
             * * **1**：可用
             * * **3**：正在删除
             * @example `1`
             */
            Status: number;
            /**
             * 数据库名称。
             * @example `db_test`
             */
            DbName: string;
            /**
             * 数据库描述。
             * @example `test`
             */
            Description: string;
        }[];
    };
}
