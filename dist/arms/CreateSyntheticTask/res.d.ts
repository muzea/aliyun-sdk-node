export interface CreateSyntheticTaskResponse {
    /**
     * 请求ID。
     * @example `A5EC8221-08F2-4C95-9AF1-49FD998C****`
     */
    RequestId: string;
    /**
     * 系统返回状态码：
     * - 1001：请求成功
     * - 1002：请求失败
     * - 1003：参数错误
     * - 1004：鉴权失败
     * - 1006：任务不存在
     * - 1099：内部错误
     * @example `1001`
     */
    Code: string;
    /**
     * 任务创建失败的返回说明。
     * @example `null`
     */
    Msg: string;
    /**
     * 云拨测任务信息。
     */
    Data: {
        /**
         * 云拨测任务ID。
         * @example `1234`
         */
        TaskId: number;
    };
}
