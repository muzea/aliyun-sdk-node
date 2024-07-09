export interface GetAutoScalingConfigurationResponse {
    /**
     * Id of the request
     * @example `B7A39AE5-0B36-4442-A304-E0885265***`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Data: {
        ScheduledScalingRules: {
            /**
             * 定时任务策略结果集。
             */
            ScheduledScalingRules: {
                /**
                 * 持续时间（单位：分钟），一次定时弹性任务持续的时间。
                 * @example `60`
                 */
                DurationMinutes: number;
                /**
                 * 启用或禁用定时任务策略。取值范围如下：
                 * - **true**：启用。
                 * - **false**：禁用。
                 * @example `true`
                 */
                Enable: boolean;
                /**
                 * 预估的弹性缩容耗时，单位秒。
                 * @example `780`
                 */
                EstimatedElasticScalingDownTimeSecs: number;
                /**
                 * 预估的弹性扩容耗时，单位秒。
                 * @example `780`
                 */
                EstimatedElasticScalingUpTimeSecs: number;
                /**
                 * 开始执行定时策略时间。
                 * @example `1714467540000`
                 */
                FirstScheduledTime: number;
                /**
                 * 当 ScheduleType 为 repeat 时则返回该参数，枚举值为
                 *       <li> Daily：每天定时调度。
                 *       <li> Weekly：每周定时调度。
                 * @example `Weekly`
                 */
                RepeatType: string;
                /**
                 * 定时弹性预留生产规格（单位：MB/s）
                 * @example `120`
                 */
                ReservedPubFlow: number;
                /**
                 * 定时弹性预留消费规格（单位：MB/s）
                 * @example `120`
                 */
                ReservedSubFlow: number;
                /**
                 * 规则ID。
                 * @example `64`
                 */
                RuleId: number;
                /**
                 * 定时策略规则名称。
                 * @example `test`
                 */
                RuleName: string;
                /**
                 * 定时类型。返回值如下：
                 * - at ：只调度一次。
                 * -  repeat：重复调度。
                 * @example `at`
                 */
                ScheduleType: string;
                /**
                 * 时区（协调世界时）。
                 * @example `GMT+8`
                 */
                TimeZone: string;
                WeeklyTypes: {
                    /**
                     * 每周的类型。支持多日重复执行。
                     */
                    WeeklyTypes: string[];
                };
            }[];
        };
    };
}
