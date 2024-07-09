export interface UpdateBaselineCheckWhiteRecordResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 白名单记录的ID。
         * @example `1582`
         */
        RecordId: number;
        /**
         * 检查项的ID。
         * @example `92`
         */
        CheckId: number;
        /**
         * 生效目标类型：
         * - **all_instance**：全部主机
         * - **instance**：部分主机
         * @example `instance`
         */
        TargetType: string;
        /**
         * 加白目标。
         * @example `HOST_BASELINE_WHITE_LIST_23`
         */
        Target: string;
        /**
         * 加白原因。
         * @example `暂可忽略`
         */
        Reason: string;
        /**
         * 数据来源。取值：
         * - **default**：主机
         * - **agentless**：agentless
         * @example `agentless`
         */
        Source: string;
        /**
         * 指定请求和接收消息的语言类型，默认值为**zh**。取值：
         * - **zh**：中文
         * - **en**：英文
         * @example `en`
         */
        Lang: string;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7BC55C8F-226E-5AF5-9A2C-2EC43864****`
     */
    RequestId: string;
}
