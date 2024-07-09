export interface TtsCommonResponse {
    /**
     * requestId
     * @example `c761f0ec-107c-43dc-8565-45330e10e11b`
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
         * 双录端处理tts任务ID
         * @example `63bb629d-92bf-4cdc-ad0b-3032c926****`
         */
        Id: string;
        /**
         * 智能语音tts任务ID
         * @example `368cfa55-2364-4d79-aeb4-c0956c4a****`
         */
        TaskId: string;
        /**
         * 智能语音tts任务名称
         * @example `任务1`
         */
        Name: string;
        /**
         * 智能语音tts任务code
         * @example `20000000`
         */
        Code: number;
        /**
         * 智能语音tts任务message
         * @example `-`
         */
        Message: string;
        /**
         * 双录端语音合成结果可公网下载地址
         * @example `http://idrs-daily.oss-cn-beijing.aliyuncs.com/mode/android/model.zip?Expires=1607004612&OSSAccessKeyId=LTAI4FcsdDhFc7h78gqB****&Signature=XXXXX`
         */
        PublicUrl: string;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: number;
}
