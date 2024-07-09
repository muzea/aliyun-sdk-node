export interface ListTicketTasksResponse {
    /**
     * 数据。
     */
    Data: {
        /**
         * 节点名称。
         * @example `节点1`
         */
        TaskName: string;
        /**
         * 处理人ID。
         * @example `assignee@ccc-test`
         */
        Assignee: string;
        /**
         * 处理意见。
         * @example `同意`
         */
        Comment: string;
        /**
         * 开始时间。
         * @example `1620259200000`
         */
        StartTime: number;
        /**
         * 结束时间。
         * @example `1620269200000`
         */
        EndTime: number;
        /**
         * 处理人姓名。
         * @example `assignee`
         */
        AssigneeName: string;
        /**
         * 节点ID。
         * @example `eb039a4a6a5742c6b44ccff0c1fca745`
         */
        TaskId: string;
        /**
         * 工单ID。
         * @example `5491d3b4-14ee-4341-b5f1-db2c78beddeb
        `
         */
        TicketId: string;
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * 文件列表。
         */
        FileKeys: string[];
        /**
         * 文件访问链接列表。
         */
        FileUrls: string[];
        /**
         * 工单节点流程定义ID。
         * @example `APPROVAL__6zu2QjAz`
         */
        TaskDefinitionNodeId: string;
        /**
         * 工单节点流程定义类型。
         * @example `APPROVAL`
         */
        TaskDefinitionNodeType: string;
        /**
         * 节点处理动作。
         * @example `CounterSignTask`
         */
        Action: string;
    }[];
    /**
     * 请求ID。
     * @example `DE803553-8AA9-4B9D-9E4E-A82BC69EDCEE	`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 错误参数列表。
     */
    Params: string[];
}
