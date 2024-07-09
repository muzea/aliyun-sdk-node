export interface DescribeSlowLogRecordsResponse {
    /**
     * 查询的开始时间。
     * @example `2019-03-10T14:00Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `686BB8A6-BBA5-47E5-8A75-D2ADE433****`
     */
    RequestId: string;
    /**
     * 当前页显示的日志数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 日志条目总数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 每页显示的日志数上限。
     * @example `30`
     */
    PageSize: number;
    /**
     * 实例ID。
     * @example `r-bp10n********`
     */
    InstanceId: string;
    /**
     * 数据库类型。
     * @example `Redis`
     */
    Engine: string;
    /**
     * 当前显示的页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 由慢日志信息组成的集合。
         */
        LogRecords: {
            /**
             * 账号ID。
             * @example `0`
             */
            Account: string;
            /**
             * 执行时长，单位为微秒。
             * @example `248`
             */
            ElapsedTime: number;
            /**
             * 慢查询语句。
             * @example `KEYS *`
             */
            Command: string;
            /**
             * 数据库名称。
             * @example `0`
             */
            DBName: string;
            /**
             * 执行开始时间，格式：YYYY-MM-DDTHH:mm:ssZ。
             * @example `2019-03-12T09:18:41Z`
             */
            ExecuteTime: string;
            /**
             * 数据库名称，与**DBName**作用一致，推荐使用**DBName**参数。
             * @example `0`
             */
            DataBaseName: string;
            /**
             * 节点ID。
             * @example `r-bp1zxszhcgatnx****-db-0`
             */
            NodeId: string;
            /**
             * 账号名称。
             * @example `demo`
             */
            AccountName: string;
            /**
             * 客户端的IP地址。
             * @example `172.16.88.***`
             */
            IPAddress: string;
        }[];
    };
}
