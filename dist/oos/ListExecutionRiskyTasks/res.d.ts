export interface ListExecutionRiskyTasksResponse {
    /**
     * 请求ID
     * @example `C04B668D-D2DD-4B40-B6E9-0E3C4F53D5B5`
     */
    RequestId: string;
    /**
     * 风险任务
     */
    RiskyTasks: {
        /**
         * 风险API所属云产品
         * @example `ECS`
         */
        Service: string;
        /**
         * 风险API名称
         * @example `DeleteInstance`
         */
        API: string;
        /**
         * 风险API所在任务列表。
         */
        Task: string[];
        /**
         * 风险任务所在模版列表。
         */
        Template: string[];
    }[];
}
