export interface DuplexDecisionResponse {
    /**
     * 返回结果码
     * @example `0`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 返回结果
     */
    Data: {
        /**
         *  算法决策出的行为类别，可选项如下：
         *  INTERRUPT：打断
         *  NO_ACTION：没有动作行为
         *  UNDERTAKE：承接
         * @example `UNDERTAKE`
         */
        ActionType: string;
        /**
         * 输出的承接文本
         * @example `嗯`
         */
        OutputText: string;
        /**
         * 打断数字人播报后，当前的ASR文本是否需要去请求问答
         * - GRAB：触发问答
         * - NO_GRAB：不触发问答
         * @example `GRAB`
         */
        GrabType: string;
    };
    /**
     * 请求id
     * @example `13E0445E-CA7F-5DD3-9B0F-D4B39E0180F7`
     */
    RequestId: string;
}
