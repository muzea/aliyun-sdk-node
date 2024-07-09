export interface MoveCdsFileResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 操作是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 执行结果。返回`success`表示成功，否则将返回错误信息。
     * @example `success`
     */
    Code: string;
    /**
     * 错误信息。当Code为`success`时，不返回该参数。
     * @example `success`
     */
    Message: string;
    /**
     * 移动文件的操作结果。
     */
    MoveCdsFileModel: {
        /**
         * 异步任务ID。当复制文件时，不返回该字段；当复制文件夹时，因为是后台异步复制，所以会返回该字段，调用[GetAsyncTask](~~2357404~~)并传入该异步任务ID即可获取任务详细信息。
         * @example `fe307518-825a-4c8b-a69c-958f0e8a****`
         */
        AsyncTaskId: string;
        /**
         * 文件是否已存在。
         * @example `false`
         */
        Exist: boolean;
        /**
         * 文件ID。
         * @example `63636837e47e5a24a8a940218bef395c210e****`
         */
        FileId: string;
    };
}
