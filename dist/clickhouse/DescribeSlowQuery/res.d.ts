export interface DescribeSlowQueryResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    PageSize: number;
    Data: {
        /**
         * 查询ID。
         * @example `7c28bbbb-753b-4eba-98b1-efcbe2b9bdf6`
         */
        InitialQueryId: string;
        /**
         * 查询用户。
         * @example `test`
         */
        InitialUser: string;
        /**
         * 发起查询的客户端IP地址。
         * @example `::ffff:10.1.XX.XX`
         */
        InitialAddress: string;
        /**
         * 查询耗时。单位：毫秒。
         * @example `2000`
         */
        QueryDurationMs: number;
        /**
         * 开始时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2021-02-02T08:30:00Z`
         */
        QueryStartTime: string;
        /**
         * 查询语句。
         * @example `select * from test order by score limit 1;`
         */
        Query: string;
        /**
         * 扫描数据行数。
         * @example `1000000`
         */
        ReadRows: number;
        /**
         * 扫描数据大小。单位：Byte。
         * @example `9141300000`
         */
        ReadBytes: number;
        /**
         * 结果数据行数。
         * @example `1`
         */
        ResultRows: number;
        /**
         * 结果数据大小。单位：Byte。
         * @example `8174`
         */
        ResultBytes: number;
        /**
         * 查询内存使用峰值。单位：Byte。
         * @example `1024000000`
         */
        MemoryUsage: number;
        /**
         * 查询状态。取值说明：
         * - **QueryFinish**：查询结束。
         * - **Processing**：查询运行中。
         * @example `QueryFinish`
         */
        QueryState: string;
    }[];
    /**
     * 请求ID。
     * @example `48CBEEBE-FA07-5A06-8BA4-567B92ADD6A0`
     */
    RequestId: string;
}
