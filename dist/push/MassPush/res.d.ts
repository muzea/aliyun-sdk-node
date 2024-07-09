export interface MassPushResponse {
    /**
     * 请求ID。
     * @example `9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC`
     */
    RequestId: string;
    MessageIds: {
        /**
         * 批量消息ID列表，每个消息ID对应传入的PushTask的推送结果
         */
        MessageId: string[];
    };
}
