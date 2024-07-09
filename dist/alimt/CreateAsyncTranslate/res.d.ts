export interface CreateAsyncTranslateResponse {
    /**
     * 请求的唯一id，用于后续排查问题使用
     * @example `DC2DCCC9-C3DF-4F59-8D8E-78185729F16D`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 异步任务ID。
         * @example `98bbb007-71bb-448b-bab0-2695ce8f8599`
         */
        JobId: string;
        /**
         * 任务状态
         * @example `ready`
         */
        Status: string;
    };
}
