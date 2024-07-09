export interface GetServiceGroupSchedulingPreviewRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 服务组ID
         * @example `55555`
         */
        serviceGroupId: number;
        /**
         * 排班方式 FAST 快速排班 FINE 精细排班
         * @example `FAST`
         */
        schedulingWay: string;
        /**
         * 快速排班
         */
        fastScheduling: {
            /**
             * 每人排班时长
             * @example `12`
             */
            singleDuration: number;
            /**
             * FAST_CHOICE
             * @example `FAST_CHOICE`
             */
            dutyPlan: string;
            /**
             * DAY
             * @example `DAY`
             */
            singleDurationUnit: string;
            /**
             * 快速轮班用户
             */
            schedulingUsers: {
                /**
                 * 轮班用户ID
                 * @example `122222`
                 */
                schedulingUserId: number;
                /**
                 * 排班顺序
                 * @example `1`
                 */
                schedulingOrder: number;
            }[];
        };
        /**
         * 精细排班
         */
        fineScheduling: {
            /**
             * 循环周期
             * @example `2`
             */
            period: number;
            /**
             * 循环周期单位 HOUR 小时 DAY 天
             * @example `DAY`
             */
            periodUnit: string;
            /**
             * 班次类型 MORNING_NIGHT 早晚班 MORNING_NOON_NIGHT 早中晚班 CUSTOM 自定义
             * @example `MORNING_NIGHT`
             */
            shiftType: string;
            /**
             * 精细排班班次人员信息
             */
            schedulingFineShifts: {
                /**
                 * 排班开始时间
                 * @example `2020-08-13`
                 */
                schedulingStartTime: string;
                /**
                 * 排班结束时间
                 * @example `2020-10-13`
                 */
                schedulingEndTime: string;
                /**
                 * 排班顺序
                 * @example `1`
                 */
                schedulingOrder: number;
                /**
                 * 班次名称
                 * @example `早班`
                 */
                shiftName: string;
            }[];
        };
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
        /**
         * 预览值班开始时间
         * @example `2021-09-01 00:00:00`
         */
        endTime: string;
        /**
         * 预览值班结束时间
         * @example `2021-11-01 00:00:00`
         */
        startTime: string;
    };
}
