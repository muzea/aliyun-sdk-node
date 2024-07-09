export interface CreateTtsQuestionGroupResponse {
    /**
     * 为保证一致，建议统一使用requestid
     * @example `B2AADC9E-2A58-5918-AE4E-FF59E19D7***`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: number;
    /**
     * 错误消息
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * TTS任务组唯一ID
         * @example `63bb629d-92bf-4cdc-ad0b-3032c926d***`
         */
        Id: string;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
}
