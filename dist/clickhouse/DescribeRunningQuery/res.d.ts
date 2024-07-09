export interface DescribeRunningQueryResponse {
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
         * 查询开始时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2021-02-02T09:14:48Z`
         */
        QueryStartTime: string;
        /**
         * 查询语句。
         * @example `select * from test order by score limit 1;`
         */
        Query: string;
    }[];
    /**
     * 请求ID。
     * @example `48CBEEBE-FA07-5A06-8BA4-567B92ADD6A0`
     */
    RequestId: string;
}
