export interface QueryChangeLogListResponse {
    /**
     * 是否有上一页。
     * @example `false`
     */
    PrePage: boolean;
    /**
     * 当前页码。
     * @example `1`
     */
    CurrentPageNum: number;
    /**
     * 唯一请求识别码。
     * @example `2DEDFF32-7827-46B1-BE90-3DB8ABD91A58`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `1`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `1000`
     */
    TotalPageNum: number;
    Data: {
        /**
         * 操作日志列表。
         */
        ChangeLog: {
            /**
             * 操作行为。
             * @example `DNS modification`
             */
            Operation: string;
            /**
             * 操作时间，UTC时间，如2017-12-25 12:00:00，具体格式与入参Lang有关。
             * @example `2017-12-26 12:00:00`
             */
            Time: string;
            /**
             * 操作结果。
             * @example `Failed`
             */
            Result: string;
            /**
             * 域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 操作IP。
             * @example `127.0.0.1`
             */
            OperationIPAddress: string;
            /**
             * 详情。
             * @example `dns1;dns2 -> dns3;dns4`
             */
            Details: string;
        }[];
    };
    /**
     * 当前查询除分页限制外，服务端最多处理最近1000条记录。如结果超过1000条，**ResultLimit**为**true**，请缩小时间范围重新搜索；否则**ResultLimit**为**false**。
     *
     * @example `true`
     */
    ResultLimit: boolean;
    /**
     * 记录总数。
     * @example `1000`
     */
    TotalItemNum: number;
    /**
     * 是否有下一页。
     * @example `true`
     */
    NextPage: boolean;
}
