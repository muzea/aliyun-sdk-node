export interface CreateDISyncTaskResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc1411515937635973****`
     */
    RequestId: string;
    /**
     * 创建数据集成同步任务的返回结果。
     */
    Data: {
        /**
         * 创建数据集成同步任务的结果状态。取值如下：
         * - success：表示创建任务成功。
         * - fail：表示创建任务失败。
         * @example `success`
         */
        Status: string;
        /**
         * 创建数据集成同步任务失败的原因描述，如果成功，该字段为空，如果不成功，实例如下"不合法的目录路径：业务流程/xxxx/数据集成"，
         * @example `不合法的目录路径：业务流程/xxxx/数据集成`
         */
        Message: string;
        /**
         * 成功创建的数据集成同步任务的任务ID。
         * @example `1000001`
         */
        FileId: number;
    };
}
