export interface GetBaselineResponse {
    /**
     * 请求是否成功，true - 成功，false - 失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid`
     */
    ErrorMessage: string;
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回值。
     */
    Data: {
        /**
         * 基线的id。
         * @example `1001`
         */
        BaselineId: number;
        /**
         * 基线名。
         * @example `测试基线`
         */
        BaselineName: string;
        /**
         * 项目id。
         * @example `10000`
         */
        ProjectId: number;
        /**
         * 责任人。
         * @example `9527952****`
         */
        Owner: string;
        /**
         * 基线的优先级，取值集合为{1,3,5,7,8}。
         * @example `1`
         */
        Priority: number;
        /**
         * 基线类型。
         * - DAILY - 日基线
         * - HOURLY - 小时基线
         * @example `DAILY`
         */
        BaselineType: string;
        /**
         * 基线承诺时间设置。
         */
        OverTimeSettings: {
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
         * 是否开启基线。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 基线上游节点列表。
         */
        NodeIds: number[];
        /**
         * 是否开启告警。
         * - true - 是
         * - false - 否
         * @example `true`
         */
        AlertEnabled: boolean;
        /**
         * 预警余量，单位为分钟。
         * @example `60`
         */
        AlertMarginThreshold: number;
        /**
         * 告警设置。
         */
        AlertSettings: {
            /**
             * 告警类型
             * - BASELINE - 基线
             * - TOPIC - 事件
             * @example `BASELINE`
             */
            AlertType: string;
            /**
             * 告警方式列表
             */
            AlertMethods: string[];
            /**
             * 静默开始时间，格式为 HH:mm:ss 。
             * @example `00:00:00`
             */
            SilenceStartTime: string;
            /**
             * 静默结束时间，格式为 HH:mm:ss 。
             * @example `00:00:00`
             */
            SilenceEndTime: string;
            /**
             * 事件告警间隔，单位为秒。
             * @example `900`
             */
            AlertInterval: number;
            /**
             * 事件告警最大次数。
             * @example `1`
             */
            AlertMaximum: number;
            /**
             * 钉钉机器人列表。
             */
            DingRobots: {
                /**
                 * 钉钉机器人地址。
                 * @example `https://oapi.dingtalk.com/robot/send?access_token=xxx`
                 */
                WebUrl: string;
                /**
                 * 是否 @所有人。
                 * @example `true`
                 */
                AtAll: boolean;
            }[];
            /**
             * webhook 列表。
             */
            Webhooks: string[];
            /**
             * 事件告警类型列表，事件特有配置。
             */
            TopicTypes: string[];
            /**
             * 基线告警开关，基线特有配置。
             * - true - 开启
             * - false - 关闭
             * @example `false`
             */
            BaselineAlertEnabled: boolean;
            /**
             * 告警接收人类型。
             * - OWNER - 任务责任人
             * - OTHER - 指定的人
             * - SHIFT_SCHEDULE - 值班表
             * @example `OWNER`
             */
            AlertRecipientType: string;
            /**
             * 告警接收人详情。
             * - AlertRecipientType 为 OWNER：空
             * - AlertRecipientType 为 SHIFT_SCHEDULE：值班表uid
             * - AlertRecipientType 为 OTHER: uid列表，多个uid使用英文 , 分割
             * @example `123123`
             */
            AlertRecipient: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `ecb967ec-c137-48a5-860****`
     */
    RequestId: string;
}
