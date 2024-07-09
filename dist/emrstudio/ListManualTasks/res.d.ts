export interface ListManualTasksResponse {
    /**
     * Id of the request
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
    /**
     * 下一次请求的分页token。
     * @example `123abc***`
     */
    nextToken: string;
    /**
     * 记录总数
     * @example `10`
     */
    totalSize: number;
    /**
     * 返回结果
     */
    data: {
        /**
         * 手动任务ID
         * @example `mt-3q9jo749ne5****`
         */
        ManualTaskId: string;
        /**
         * 创建时间
         * @example `2024-03-27 00:00:00`
         */
        CreateTime: string;
        /**
         * 手动任务名称
         * @example `test`
         */
        ManualTaskName: string;
        /**
         * 描述
         * @example `test`
         */
        Description: string;
        /**
         * 项目ID
         * @example `p-3q9jo749ne5****`
         */
        ProjectId: string;
        /**
         * 任务类型
         * @example `SHELL`
         */
        TaskType: string;
        /**
         * 任务参数
         * @example `{
            "yarnUser": "",
            "conditionResult": "null",
            "rawScript": "sleep 300",
            "submitOnYarnFlag": false,
            "emrClusterId": "",
            "yarnPriority": "",
            "dependence": "null",
            "yarnMemory": "",
            "localParams": [],
            "switchResult": "null",
            "resourceList": [],
            "yarnQueue": "",
            "yarnVCores": "",
            "associateManualTaskFlag": false
        }`
         */
        TaskParams: string;
        /**
         * 资源ID列表
         * @example `r-oy98v7n43el****`
         */
        ResourceIds: string;
        /**
         * 更新时间
         * @example `2024-03-27 00:00:00`
         */
        UpdateTime: string;
        /**
         * 目录ID
         * @example `mtd-oy98v7n43el****`
         */
        ParentDirectoryId: string;
    }[];
}
