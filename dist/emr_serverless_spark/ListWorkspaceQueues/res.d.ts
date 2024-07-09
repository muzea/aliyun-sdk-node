export interface ListWorkspaceQueuesResponse {
    /**
     * 队列列表
     */
    queues: {
        /**
         * regionId。
         * @example `cn-hangzhou`
         */
        regionId: string;
        /**
         * 队列名称。
         * @example `dev_queue`
         */
        queueName: string;
        /**
         * 工作空间id。
         * @example `w-1234abcd`
         */
        workspaceId: string;
        /**
         * 队列类型
         * @example `instance, instanceChildren`
         */
        queueType: string;
        /**
         * 队列Label
         * @example `dev_queue`
         */
        properties: string;
        /**
         * 队列架构
         * @example `{"arch": "x86"}`
         */
        queueScope: string;
        /**
         * 队列资源最大容量
         * @example `{"cpu": "2","memory": "2Gi"}`
         */
        maxResource: string;
        /**
         * 队列资源最小容量
         * @example `{"cpu": "2","memory": "2Gi"}`
         */
        minResource: string;
        /**
         * 队列资源使用容量
         * @example `{"cpu": "2","memory": "2Gi"}`
         */
        usedResource: string;
        /**
         * 队列状态
         * @example `RUNNING`
         */
        queueStatus: string;
        /**
         * 创建用户UID。
         * @example `237109`
         */
        creator: string;
        /**
         * 队列允许的操作列表
         */
        allowActions: {
            /**
             * 行为 arn。
             * @example `acs:emr::workspaceId:action/create_queue`
             */
            actionArn: string;
            /**
             * 权限名称。
             * @example `view`
             */
            actionName: string;
            /**
             * 权限展示名称。
             * @example `文件目录遍历、文件浏览`
             */
            displayName: string;
            /**
             * action 描述。
             * @example `文件目录遍历、文件浏览`
             */
            description: string;
            /**
             * action 依赖列表。
             * @example `["view"]`
             */
            dependencies: string[];
        }[];
        /**
         * 队列环境类型列表
         */
        environments: string[];
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
    /**
     * 下一页TOKEN。
     * @example `1`
     */
    nextToken: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    maxResults: number;
    /**
     * 记录总数。
     * @example `200`
     */
    totalCount: number;
}
