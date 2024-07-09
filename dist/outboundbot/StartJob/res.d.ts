export interface StartJobResponse {
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `8a621aa1-d2e7-43f3-b54d-8830af73c468`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 联系人第三方id和外呼系统任务id的映射
     */
    TaskIds: {
        /**
         * 联系人第三方id
         * @example `c93cdd1c-f9b5-4758-be43-7a237a7eaa1d`
         */
        Key: string;
        /**
         * 外呼系统任务id
         * @example `62229628-45d8-41bd-a80f-6e4c0a39f79b`
         */
        Value: string;
    }[];
    /**
     * 通话ID列表
     */
    CallIds: {
        /**
         * 联系人第三方id，referenceId。
         * @example `c93cdd1c-f9b5-4758-be43-7a237a7eaa1d`
         */
        Key: string;
        /**
         * 通话ID
         * @example `62229628-45d8-41bd-a80f-6e4c0a39f79b`
         */
        Value: string;
    }[];
}
