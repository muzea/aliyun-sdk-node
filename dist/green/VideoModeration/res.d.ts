export interface VideoModerationResponse {
    /**
     * Id of the request
     * @example `AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****`
     */
    RequestId: string;
    /**
     * 请求消息的响应消息。
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 返回码。返回200代表成功。
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
        /**
         * API请求时传入的dataId 的值，如请求时未传入，则没有该字段。
         * @example `data1234`
         */
        DataId: string;
    };
}
