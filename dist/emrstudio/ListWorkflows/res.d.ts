export interface ListWorkflowsResponse {
    /**
     * 返回结果
     */
    data: {
        /**
         * 工作流ID
         * @example `w-3q9jo749ne5****`
         */
        workflowId: string;
        /**
         * 工作流名称
         * @example `workflow_name`
         */
        name: string;
        /**
         * 描述
         * @example `workflow description`
         */
        description: string;
        /**
         * 创建时间
         * @example `2024-01-01 00:00:00`
         */
        createTime: string;
        /**
         * 修改时间
         * @example `2024-01-01 00:00:00`
         */
        updateTime: string;
        /**
         * 目录ID
         * @example `wd-3q9jo749ne5****`
         */
        parentDirectoryId: string;
    }[];
    /**
     * 下一次请求的分页token。
     * @example `123abc****`
     */
    nextToken: string;
    /**
     * 记录总数
     * @example `10`
     */
    totalSize: number;
    /**
     * 请求ID
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
}
