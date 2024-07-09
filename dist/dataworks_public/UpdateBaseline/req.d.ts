export interface UpdateBaselineRequest {
    /**
     * 基线的ID, 可通过 [ListBaselines](~~2261507~~) 获取。
     * @example `1000010800007`
     */
    "BaselineId": number;
    /**
     * 项目ID, 可通过 [ListBaselines](~~2261507~~) 获取。
     * @example `2043`
     */
    "ProjectId": number;
    /**
     * 基线名。
     * @example `BaselineName`
     */
    "BaselineName"?: string;
    /**
     * 基线责任人的阿里云uid。
     * @example `3726346****`
     */
    "Owner"?: string;
    /**
     * 基线的优先级，取值范围为{1,3,5,7,8}。
     * @example `7`
     */
    "Priority"?: number;
    /**
     * 基线上游节点列表，使用逗号分割，节点较多的情况下，建议在其下游增加虚节点，便于管理。
     * @example `1,2,3`
     */
    "NodeIds"?: string;
    /**
     * 基线承诺时间配置。
     */
    "OvertimeSettings"?: {
        /**
         * 承诺时间对应的周期，天基线是1，小时基线可以配置最多24个周期。
         * @example `1`
         */
        Cycle: number;
        /**
         * 承诺时间，hh:mm格式，hh的取值范围为[0,47]，mm的取值范围为[0,59]。
         * @example `00:00`
         */
        Time: string;
    }[];
    /**
     * 基线预警余量，单位为分钟。
     * @example `30`
     */
    "AlertMarginThreshold"?: number;
    /**
     * 基线类型，包括DAILY（天基线）和HOURLY（小时基线）。
     * @example `DAILY`
     */
    "BaselineType"?: string;
    /**
     * 基线是否开启，包括true（可用）和false（不可用）。
     * @example `true`
     */
    "Enabled"?: boolean;
    /**
     * 是否开启告警，包括true（开启）和false（关闭）。
     * @example `true`
     */
    "AlertEnabled"?: boolean;
    /**
     * 基线告警配置。
     */
    "AlertSettings"?: {
        /**
         * 告警类型，BASELINE - 基线 / TOPIC - 事件。
         * @example `BASELINE`
         */
        AlertType: string;
        /**
         * MAIL（邮件）
         * SMS（短信）
         * PHONE（电话），仅DataWorks专业版及以上版本支持使用电话方式接收报警。
         * DINGROBOTS（钉钉机器人），仅当配置RobotUrls参数后，该报警方式才会生效。
         * Webhooks（企业微信或飞书机器人），仅当配置 Webhooks 参数后，该报警方式才会生效。
         */
        AlertMethods: string[];
        /**
         * 静默开始时间。
         * @example `00:00:00`
         */
        SilenceStartTime: string;
        /**
         * 静默结束时间。
         * @example `00:00:00`
         */
        SilenceEndTime: string;
        /**
         * 事件告警间隔，单位为秒，最小为900。
         * @example `1800`
         */
        AlertInterval: number;
        /**
         * 事件告警最大次数，最大为24。
         * @example `1`
         */
        AlertMaximum: number;
        /**
         * 钉钉机器人列表
         */
        DingRobots: {
            /**
             * 钉钉群机器人的webhook地址。
             * @example `https://oapi.dingtalk.com/robot/send?access_token=xxx	`
             */
            WebUrl: string;
            /**
             * 是否@所有人，包括true（是）和false（否）。
             * @example `false`
             */
            AtAll: boolean;
        }[];
        /**
         * webhook 列表。
         */
        Webhooks: string[];
        /**
         * 事件告警类型，事件特有配置。
         */
        TopicTypes: string[];
        /**
         * 基线告警开关，基线特有配置，包括true（是）和false（否）。
         * @example `true`
         */
        BaselineAlertEnabled: boolean;
        /**
         * 告警接收人类型，OWNER（任务责任人）/ OTHER（指定的人）/ SHIFT_SCHEDULE（值班表）。
         * @example `OWNER`
         */
        AlertRecipientType: string;
        /**
         * 告警接收人详情，指定人：工号列表，值班表：值班表名，责任人：空。
         * @example `123123`
         */
        AlertRecipient: string;
    }[];
    /**
     * 需要从基线上提出的节点ID，多个ID间使用,分隔
     * @example `123,456`
     */
    "RemoveNodeIds"?: string;
}
