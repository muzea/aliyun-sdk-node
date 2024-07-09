export interface DescribeBroadcastTablesResponse {
    /**
     * 请求ID。
     * @example `86E420ED-43F2-4788-A58C-921849******`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
    /**
     * 是否拆分。
     * @example `true`
     */
    IsShard: boolean;
    /**
     * 分页当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页大小。
     * @example `40`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `2`
     */
    Total: number;
    /**
     * 广播表列表。
     */
    List: {
        /**
         * 广播表激活状态，取值范围如下：
         * * **1**：激活
         * * **2**：激活中
         * * **3**：激活异常
         * @example `1`
         */
        Status: number;
        /**
         * 是否拆分表。
         * @example `false`
         */
        IsShard: boolean;
        /**
         * 是否是广播表。
         * @example `true`
         */
        Broadcast: boolean;
        /**
         * 表名称。
         * @example `nation`
         */
        Table: string;
        /**
         * 数据库存储类型，取值范围如下：
         * * **0**：RDS
         * * **4**：PolarDB
         * @example `0`
         */
        DbInstType: number;
        /**
         * 广播表类型，取值：
         * * **1**：多写模式
         * * **2**：同步模式
         * @example `1`
         */
        BroadcastType: string;
    }[];
}
