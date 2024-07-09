export interface GetFileUploadLimitResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1A975D03-5F49-5354-B2CB-3918D5DA431A`
     */
    RequestId: string;
    /**
     * 接口调用成功时，返回的数据。
     */
    Data: {
        /**
         * 设置的上传文件QPS。
         * @example `100`
         */
        Limit: string;
    };
}
