export interface SetEventSubscriptionResponse {
    /**
     * 请求ID。
     * @example `097F0C56-B252-515A-B602-FC56EF93EF8A`
     */
    RequestId: string;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 详细信息列表。
     */
    Data: {
        /**
         * 用户ID。
         * @example `1088760496****`
         */
        userId: string;
        /**
         * 实例ID。
         * @example `rm-2ze8g2am97624****`
         */
        instanceId: string;
        /**
         * 支持的事件场景，当前仅支持**AllContext**，表示支持所有场景。
         * @example `AllContext`
         */
        eventContext: string;
        /**
         * 事件通知的语言，当前仅支持**zh-CN**，表示事件通知为中文。
         * @example `zh_CN`
         */
        lang: string;
        /**
         * 是否启用事件订阅：
         * - **0**：关闭。
         * - **1**：开启。
         * @example `1`
         */
        active: number;
        /**
         * 通知最小间隔时间，单位秒（s）。
         * @example `60`
         */
        minInterval: number;
        /**
         * 告警事件订阅人名称，多个名称间以英文逗号分隔。
         * @example `默认联系人`
         */
        contactName: string;
        /**
         * 告警事件订阅组名称，多个名称间以英文逗号分隔。
         * @example `默认联系组`
         */
        contactGroupName: string;
        /**
         * 通知方式：
         * - **hdm\_alarm\_sms**：手机短信。
         * - **dingtalk**：钉钉机器人。
         * - **hdm\_alarm\_sms\_and\_email**：手机短信+邮件。
         * - **hdm\_alarm\_sms,dingtalk**：手机短信+钉钉机器人。
         * @example `hdm_alarm_sms,dingtalk`
         */
        channelType: string;
        /**
         * 事件风险级别：
         * - **Notice**：通知。
         * - **Optimization**：优化。
         * - **Warn**：警告。
         * - **Critical**：严重。
         * @example `Optimization`
         */
        level: string;
    };
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
