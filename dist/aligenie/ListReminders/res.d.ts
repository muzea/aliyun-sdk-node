export interface ListRemindersResponse {
    /**
     * 接口调用结果标识，true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `400`
     */
    ErrorCode: number;
    /**
     * 错误信息的详细描述。
     * @example `参数不合法。`
     */
    ErrorMsg: string;
    /**
     * 提醒信息。
     */
    Model: {
        /**
         * 调用该接口返回的提醒信息列表。
         */
        RemindResponses: {
            /**
             * 提醒信息的ID。
             * @example `20****1`
             */
            RemindId: number;
            /**
             * 重复提醒的次数。
             * @example `1`
             */
            RepeatCount: number;
            /**
             * 提醒执行的动作topic。
             * @example `宝宝快去刷牙`
             */
            ActionTopic: string;
            /**
             * 触发提醒的条件描述。
             * @example `每天`
             */
            DayDesc: string;
            /**
             * 下次提醒时间。
             * @example `1629850800000`
             */
            RemindTime: string;
            /**
             * 按周触发提醒的日期，即每周几触发提醒。
             * @example `周三`
             */
            Week: string;
            /**
             * 调度信息列表，即提醒的详细时间信息。
             */
            RecurrenceRule: {
                /**
                 * 提醒的循环周期。
                 * @example `WEEKLY`
                 */
                Freq: string;
                /**
                 * 提醒触发的时间年份。
                 * @example `2021`
                 */
                Year: number;
                /**
                 * 提醒触发的时间月份。
                 * @example `8`
                 */
                Month: number;
                /**
                 * 提醒触发的时间日期。
                 * @example `27`
                 */
                Day: number;
                /**
                 * 提醒触发的时间时钟数。
                 * @example `18`
                 */
                Hour: number;
                /**
                 * 提醒触发的时间分钟数。
                 * @example `0`
                 */
                Minute: number;
                /**
                 * 提醒触发的时间秒钟数。
                 * @example `0`
                 */
                Second: number;
                /**
                 * 按月提醒的信息。
                 */
                DaysOfMonth: number[];
                /**
                 * 按周提醒的信息。
                 */
                DaysOfWeek: number[];
                /**
                 * 提醒生效的开始时间。
                 * @example `1630054800000`
                 */
                StartDateTime: string;
                /**
                 * 提醒失效的结束时间。
                 * @example `1661598000000`
                 */
                EndDateTime: string;
            };
        }[];
    };
}
