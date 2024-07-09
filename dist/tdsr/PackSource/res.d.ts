export interface PackSourceResponse {
    /**
     * 请求ID
     * @example `A8CD0AD9-8A92-455A-A984-A7E4B76F****`
     */
    RequestId: string;
    /**
     * 200：成功，其他：失败
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `xxxxx`
     */
    Message: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 任务ID
         * @example `hjsyuyiuwe7wehg****`
         */
        TaskId: string;
    };
}
