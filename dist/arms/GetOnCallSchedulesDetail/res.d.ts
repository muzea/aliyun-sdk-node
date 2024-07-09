export interface GetOnCallSchedulesDetailResponse {
    /**
     * 请求ID。
     * @example `21E85B16-75A6-429A-9F65-8AAC9A54****`
     */
    RequestId: string;
    /**
     * 排班策略详细信息。
     */
    Data: {
        /**
         * 排班策略ID。
         * @example `1234`
         */
        Id: number;
        /**
         * 排名策略名称。
         * @example `排班策略测试`
         */
        Name: string;
        /**
         * 排班策略描述信息。
         * @example `测试`
         */
        Description: string;
        /**
         * 换班通知的钉钉机器人地址。
         * @example `https://oapi.dingtalk.com/robot/send?access_token=69d4e009547e11069c6513309414937b7bf0482fb9284125b5******`
         */
        AlertRobotId: number;
        /**
         * 值班班次。
         */
        ScheduleLayers: {
            /**
             * 排班人员ID列表。
             */
            ContactIds: number[];
            /**
             * 换班生效起始时间。
             * @example `2022-10-01
            `
             */
            StartTime: string;
            /**
             * 换班周期，单位为小时。
             * @example `8`
             */
            ShiftLength: number;
            /**
             * 换班类型：
             * - DAY： 天
             * - WEEK： 周
             * - CUSTOM： 自定义
             * @example `DAY`
             */
            RotationType: string;
            /**
             * 排班限制时间。
             */
            Restrictions: {
                /**
                 * 限制时间类型：
                 * - daily_restriction：天
                 * - weekly_restriction：周
                 * @example `daily_restriction`
                 */
                RestrictionType: string;
                /**
                 * 每天开始值班时间。
                 * @example `09:00`
                 */
                StartTimeOfDay: string;
                /**
                 * 每天结束值班时间。
                 * @example `18:00`
                 */
                EndTimeOfDay: string;
            }[];
        }[];
        /**
         * 查询时间范围内的排班人员。
         */
        RenderedLayerEntries: {
            /**
             * 排班人开始值班时间。
             * @example `2022-10-01`
             */
            Start: string;
            /**
             * 排班人结束值班时间。
             * @example `2022-10-30`
             */
            End: string;
            /**
             * 排班人信息。
             */
            SimpleContact: {
                /**
                 * 排班人ID。
                 * @example `123`
                 */
                Id: number;
                /**
                 * 排班人名称。
                 * @example `员工1`
                 */
                Name: string;
            };
        }[][];
        /**
         * 查询时间范围内的替班人员。
         */
        RenderedSubstitudeEntries: {
            /**
             * 替班人开始值班时间。
             * @example `2022-10-01`
             */
            Start: string;
            /**
             * 替班人结束值班时间。
             * @example `2022-10-30`
             */
            End: string;
            /**
             * 替班人信息。
             */
            SimpleContact: {
                /**
                 * 替班人ID。
                 * @example `234`
                 */
                Id: number;
                /**
                 * 替班人名称。
                 * @example `员工2`
                 */
                Name: string;
            };
        }[];
        /**
         * 最终值班人员信息。
         */
        RenderedFinnalEntries: {
            /**
             * 值班人开始值班时间。
             * @example `2022-10-01`
             */
            Start: string;
            /**
             * 值班人结束值班时间。
             * @example `2022-10-30`
             */
            End: string;
            /**
             * 值班人信息。
             */
            SimpleContact: {
                /**
                 * 值班人ID。
                 * @example `123`
                 */
                Id: number;
                /**
                 * 值班人名称。
                 * @example `员工1`
                 */
                Name: string;
            };
        }[];
    };
}
