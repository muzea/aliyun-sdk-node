export interface CreateBatchRepeatJobResponse {
    /**
     * http错误码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 作业组信息
     * @example `{}`
     */
    JobGroup: {
        /**
         * 作业组id
         * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
         */
        Id: string;
        /**
         * 振铃时长
         * @example `30`
         */
        RingingDuration: number;
        /**
         * 作业优先级
         * @example `3`
         */
        Priority: string;
        /**
         * 最小并发
         * @example `1`
         */
        MinConcurrency: number;
    };
}
