export interface GetTaskResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    requestId: string;
    /**
     * 任务信息。
     */
    task: {
        /**
         * 任务ID。
         * @example `task-433aead756057fff8189a7ce5****`
         */
        taskId: string;
        /**
         * 产品code。
         * @example `ECS`
         */
        product: string;
        /**
         * 资源类型。
         * @example `Instance`
         */
        resourceType: string;
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        regionId: string;
        /**
         * 资源ID。
         * @example `i-8vbascjthm7kzhp3****
        `
         */
        resourceId: string;
        /**
         * 资源路径。相对资源id，资源路径会包含完整的资源定位（父资源/子资源）。
         * @example `Instance/i-8vbascjthm7kzhp3****
        Instance/r-8vbf5abe31c9c4d4/Account/cctest`
         */
        resourcePath: string;
        /**
         * 任务操作类型（Create | Update | Delete）。
         * @example `Create`
         */
        taskAction: string;
        /**
         * 任务状态。
         * Pending 排队中
         * Running 进行中
         * Succeeded 成功完成
         * Failed 失败
         * Cancelling 取消中
         * Cancelled 已取消。
         * @example `Succeeded`
         */
        status: string;
        /**
         * 任务错误信息。
         */
        error: {
            /**
             * 错误码。
             * @example `OperationFailure.OperationFailed`
             */
            code: string;
            /**
             * 错误信息
             * @example `{
                 "requestId": "123****",
                 "errorCode": "InvalidRamUser.NoPermission",
                 "errorMsg": "Ram user is not authorized to perform the operation."
            }`
             */
            message: string;
        };
        /**
         * 任务创建时间
         * @example `2022-10-09T00:46:03Z`
         */
        createTime: string;
    };
}
