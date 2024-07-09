export interface DescribeRunningLogRecordsResponse {
    /**
     * 查询开始时间。
     * @example `2018-12-03T07:01Z`
     */
    StartTime: string;
    /**
     * 请求ID。
     * @example `093B8579-9264-43A0-ABA9-AA86****`
     */
    RequestId: string;
    /**
     * 当前页显示的记录数。
     * @example `5`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `5`
     */
    TotalRecordCount: number;
    /**
     * 每页最大记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
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
         * 日志详情。
         */
        LogRecords: {
            /**
             * 日志生成时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-12-03T07:07:30Z`
             */
            CreateTime: string;
            /**
             * 实例ID。
             * @example `r-bp1zxszhcgatnx****`
             */
            InstanceId: string;
            /**
             * 日志内容。
             * @example `CONFIG REWRITE executed with success.`
             */
            Content: string;
            /**
             * 节点ID。
             * > 实例为标准架构时，本参数返回`(null)`
             * @example `r-bp1zxszhcgatnx****-db-0`
             */
            NodeId: string;
        }[];
    };
}
