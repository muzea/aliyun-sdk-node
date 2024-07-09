export interface SubmitIndexJobResponse {
    /**
     * Id of the request
     * @example `17204B98-xxxx-4F9A-8464-2446A84821CA`
     */
    RequestId: string;
    /**
     * 调用是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 错误信息，有错误信息时返回该值
     * @example `Required parameter(%s) missing or invalid, please check the request parameters.`
     */
    Message: string;
    /**
     * 错误状态码
     * @example `InvalidParameter`
     */
    Code: string;
    /**
     * 接口返回的状态码
     * @example `Success`
     */
    Status: string;
    /**
     * 接口返回的业务字段
     */
    Data: {
        /**
         * 任务作业ID
         * @example `eFDr2fGRzP9gdDZWAdo3YQ==`
         */
        Id: string;
        /**
         * 索引ID
         * @example `khdyak1uuj`
         */
        IndexId: string;
    };
}
