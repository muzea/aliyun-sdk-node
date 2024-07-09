export interface GetEventSubscriptionResponse {
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
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
        minInterval: string;
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
         * 事件风险级别，即触发哪种级别的事件后需要通知您：
         * - **Notice**：通知。
         * - **Optimization**：优化。
         * - **Warn**：警告。
         * - **Critical**：严重。
         * @example `Optimization`
         */
        level: string;
        /**
         * 告警联系人列表。
         */
        contacts: {
            /**
             * 告警联系人名称。
             * @example `张先生`
             */
            name: string;
            /**
             * 告警联系人电话。
             * @example `1390000****`
             */
            phone: string;
            /**
             * 告警联系人邮箱。
             * @example `a***@example.net`
             */
            email: string;
            /**
             * 钉钉机器人的Webhook地址。
             * @example `https://oapi.dingtalk.com/robot/send?access_token=68fa29a9eaf3ba9994f54fxxxc1aa9879700308f90e9c23ebfb3663642c9****`
             */
            dingtalkHook: string;
            /**
             * 告警联系人所属的联系组列表。
             */
            groups: string[];
            /**
             * 是否和云监控上的联系人姓名相同。
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            isCmsReduplicated: boolean;
            /**
             * 用户ID。
             * @example `1088760496****`
             */
            userId: string;
        }[];
        /**
         * 告警联系组列表。
         */
        contactGroups: {
            /**
             * 告警联系组名称。
             * @example `张先生`
             */
            name: string;
            /**
             * 告警联系组描述。
             * @example `默认联系人`
             */
            description: string;
            /**
             * 告警联系组成员列表。
             * @example `"[\"张先生\",\"王女士\",\"李先生\"]"`
             */
            contacts: string;
            /**
             * 用户ID。
             * @example `1088760496****`
             */
            userId: string;
        }[];
        /**
         * 支持发送的事件场景列表。
         */
        eventSendGroup: string[];
        /**
         * 数据库主键ID。
         * @example `1`
         */
        id: number;
        /**
         * 开启事件订阅的时间，格式为Unix时间戳，单位为毫秒（ms）。
         * @example `1633071840000`
         */
        gmtCreate: number;
        /**
         * 最后修改事件订阅设置的时间，格式为Unix时间戳，单位为毫秒（ms）。
         * @example `1633071850000`
         */
        gmtModified: number;
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
