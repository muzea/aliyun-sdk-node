export interface AsrSentenceResponse {
    /**
     * 请求id
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: number;
    /**
     * 错误信息
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 双录端处理asr任务ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        Id: string;
        /**
         * 智能语音asr任务ID
         * @example `368cfa55-2364-4d79-aeb4-c0956c4a45cd`
         */
        TaskId: string;
        /**
         * 智能语音asr任务名称
         * @example `任务1`
         */
        Name: string;
        /**
         * 智能语音asr任务code
         * @example `20000000`
         */
        Code: number;
        /**
         * 智能语音asr任务message
         * @example `-`
         */
        Message: string;
        /**
         * asr识别出的文本
         * @example `北京的天气`
         */
        Result: string;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * HTTP 状态码
     * @example `200`
     */
    HttpCode: number;
}
