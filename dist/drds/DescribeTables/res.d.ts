export interface DescribeTablesResponse {
    /**
     * 每页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `83AC3D7E-461C-4D87-8ACD-6CC295******`
     */
    RequestId: string;
    /**
     * 总数量。
     * @example `1`
     */
    Total: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的表信息列表。
     */
    List: {
        /**
         * 拆分任务状态，取值范围如下：
         * - 0：正常、无任务；
         * - 1：变更中、有拆分任务。
         * @example `0`
         */
        Status: number;
        /**
         * 是否锁定。
         * @example `false`
         */
        IsLocked: boolean;
        /**
         * 拆分键。
         * @example `null`
         */
        ShardKey: string;
        /**
         * 是否拆分。
         * @example `false`
         */
        IsShard: boolean;
        /**
         * 是否为广播表。
         * @example `false`
         */
        Broadcast: boolean;
        /**
         * 是否允许全表扫描。
         * @example `false`
         */
        AllowFullTableScan: boolean;
        /**
         * 表名称。
         * @example `test`
         */
        Table: string;
        /**
         * 实例类型，取值范围如下：
         * - 0：独享型；
         * - 1：共享型。
         * @example `0`
         */
        DbInstType: number;
    }[];
}
