export interface DescribeDBInstanceSwitchLogResponse {
    /**
     * 请求ID。
     * @example `ECBCA991-XXXX-XXXX-834C-B3E8007F33AA`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `dds-uf68f1b5a57exxxx`
     */
    DBInstanceId: string;
    /**
     * 查询结果中主备切换记录的数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 每页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 主备切换日志列表。
     */
    LogItems: {
        /**
         * 切换状态。
         * 返回值为：
         * - **1**：切换成功。
         * - **0**：切换失败。
         * @example `1`
         */
        SwitchStatus: string;
        /**
         * 切换时间，格式为<i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z（UTC时间）。
         * @example `2023-02-07T18:00:00Z`
         */
        SwitchTime: string;
        /**
         * 切换原因代码：
         * - USER_CONSOLE_OPERATION：人工操作
         * - OPERATION_AND_MAINTENANCE：风险隐患
         * - MACHINE_DOWNTIME：宿主机下线
         * - PRIMARY_UNHEALTHY：实例异常
         * - SECONDARY_UNHEALTHY：实例异常
         * - MULTIPLE_NODE_FAILURES：实例异常
         * @example `USER_CONSOLE_OPERATION`
         */
        SwitchCode: string;
        /**
         * 当实例为副本集实例，展示实例ID；当实例为分片集实例，展示切换的节点ID。
         * @example `当实例为副本集实例：dds-uf68f1b5a57exxxx。
        当实例为分片集实例：d-uf652b73f554xxxx`
         */
        NodeId: string;
    }[];
}
