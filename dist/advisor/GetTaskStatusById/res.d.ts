export interface GetTaskStatusByIdResponse {
    /**
     * 请求ID。
     * @example `566331F9-5AB3-550F-B745-A730331F97A9
    `
     */
    RequestId: string;
    /**
     * 请求返回数据。
     */
    Data: {
        /**
         * 任务ID。
         * @example `95906135`
         */
        TaskId: number;
        /**
         * 任务状态：
         * - **1**: 任务进行中
         * - **2**: 任务已完成
         * - **3**: 任务执行失败
         * @example `1`
         */
        TaskStatus: number;
    };
}
