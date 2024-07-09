export interface DescribeImportOASTaskResponse {
    /**
     * 请求的id
     * @example `CE5722A6-AE78-4741-A9B0-6C817D360510`
     */
    RequestId: string;
    ApiResults: {
        /**
         * API的导入结果
         */
        ApiResult: {
            /**
             * API的ID
             * @example `c5a0c2900ff746b789c007545be22fb8`
             */
            ApiId: string;
            /**
             * API的请求路径
             * @example `/creator/getByCreatorId`
             */
            Path: string;
            /**
             * API的请求HTTP Method
             * @example `GET`
             */
            Method: string;
            /**
             * API的描述信息
             * @example `这个API用于查询`
             */
            Description: string;
            /**
             * API分组 ID
             * @example `736508d885074167ba8fbce3bc95ea0b`
             */
            GroupId: string;
            /**
             * api名称
             * @example `GetByCreatorIdUsingGET`
             */
            ApiName: string;
            /**
             * 如果导入失败时，显示失败的原因
             * @example `Internal Error`
             */
            ErrorMessage: string;
            /**
             * 当前子任务执行的状态
             *  - RUNNING：执行中
             *  - WAIT：等待调度
             *  - OVER：执行成功
             *  - FAIL：执行失败
             *  - CANCEL：取消执行
             * @example `WAIT`
             */
            UpdateStatus: string;
        }[];
    };
    ModelResults: {
        /**
         * 模型的导入结果
         */
        ModelResult: {
            /**
             * 模型名称
             * @example `Pet`
             */
            ModelName: string;
            /**
             * 导入的模型id
             * @example `6b48d724c921415486e190c494dd6bf8`
             */
            ModelId: string;
            /**
             * API分组ID
             * @example `736508d885074167ba8fbce3bc95ea0b`
             */
            GroupId: string;
            /**
             * 如果导入失败时，显示失败的原因
             * @example `Internal Error
            `
             */
            ErrorMessage: string;
            /**
             * 当前子任务执行的状态
             *  - RUNNING：执行中
             *  - WAIT：等待调度
             *  - OVER：执行成功
             *  - FAIL：执行失败
             *  - CANCEL：取消执行
             * @example `FAIL`
             */
            UpdateStatus: string;
        }[];
    };
    /**
     * 导入任务的执行状态：
     * - Running：运行中
     * - Finished：执行完成
     * @example `Finished`
     */
    TaskStatus: string;
}
