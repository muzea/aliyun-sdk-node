export interface AddBaselineCheckWhiteRecordResponse {
    /**
     * 任务创建结果。
     */
    Data: {
        /**
         * 记录ID。
         * @example `864153`
         */
        RecordId: number;
        /**
         * 检查项的ID。
         * > 您可调用[ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~)接口获取检查项ID。
         * @example `76`
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
         * @example `HOST_BASELINE_WHITE_LIST_21`
         */
        Target: string;
        /**
         * 加白原因。
         * @example `暂时忽略`
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
         * @example `zh`
         */
        Lang: string;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7532B7EE-7CE7-5F4D-BF04-B12447DD****`
     */
    RequestId: string;
}
