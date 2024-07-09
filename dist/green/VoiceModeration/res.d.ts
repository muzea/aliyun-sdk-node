export interface VoiceModerationResponse {
    /**
     * Id of the request
     * @example `AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****`
     */
    RequestId: string;
    /**
     * 错误代码
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 返回任务信息数据结构
     */
    Data: {
        /**
         * 任务Id
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
