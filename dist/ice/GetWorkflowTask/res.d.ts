export interface GetWorkflowTaskResponse {
    /**
     * Id of the request
     * @example `******0C-7870-15FE-B96F-8880BB******`
     */
    RequestId: string;
    /**
     * 工作流任务信息
     */
    WorkflowTask: {
        /**
         * 工作流任务ID
         * @example `******4215e042b3966ca5441e******`
         */
        TaskId: string;
        /**
         * 任务状态
         * @example `Succeed`
         */
        Status: string;
        /**
         * 工作流任务输入
         * @example `{
              "Type": "Media",
              "Media": "******30706071edbfe290b488******"
        }`
         */
        TaskInput: string;
        /**
         * 任务创建时间。格式为：yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2023-01-04T02:05:17Z`
         */
        CreateTime: string;
        /**
         * 任务完成时间。格式为: yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2023-01-04T02:06:19Z`
         */
        FinishTime: string;
        /**
         * 工作流信息
         */
        Workflow: {
            /**
             * 工作流ID
             * @example `******63dca94c609de02ac0d1******`
             */
            WorkflowId: string;
            /**
             * 工作流名称
             * @example `超分转码工作流`
             */
            Name: string;
            /**
             * 工作流状态
             * @example `Active`
             */
            Status: string;
            /**
             * 工作流类型
             * @example `Common`
             */
            Type: string;
            /**
             * 工作流创建时间
             * @example `2022-11-27T10:02:12Z`
             */
            CreateTime: string;
            /**
             * 工作流最后修改时间
             * @example `2022-11-29T02:06:19Z
            `
             */
            ModifiedTime: string;
        };
        /**
         * 工作流任务各节点结果。
         * @example `Json格式，内容根据工作流配置有变化。`
         */
        ActivityResults: string;
        /**
         * 用户提交工作流任务时设置的自定义字段。
         * @example `{"NotifyAddress":"http://xx.xx.xxx"}`
         */
        UserData: string;
    };
}
