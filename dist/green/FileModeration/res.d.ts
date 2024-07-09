export interface FileModerationResponse {
    /**
     * Id of the request
     * @example `AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 错误码，和HTTP状态码一致。
     * @example `200`
     */
    Code: number;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 任务ID
         * @example `xxxxx-xxxxx`
         */
        TaskId: string;
    };
}
