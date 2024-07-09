export interface UpdateServiceGroupSchedulingRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 服务组ID
         * @example `1000`
         */
        serviceGroupId: number;
        /**
         * 排班方式 FAST 快速排班 FINE 精细排班
         * @example `FAST`
         */
        schedulingWay: string;
        /**
         * 快速排班
         * @example `HOUR`
         */
        fastScheduling: {
            /**
             * 每人排班时长
             * @example `12`
             */
            singleDuration: number;
            /**
             * 值班方案 dutyPlan FAST_CHOICE 快速选择   CUSTOM  自定义
             * @example `FAST_CHOICE`
             */
            dutyPlan: string;
            /**
             * 每人排班时长单位 HOUR 小时 DAY 天
             * @example `DAY`
             */
            singleDurationUnit: string;
            /**
             * 快速轮班用户
             */
            schedulingUsers: {
                /**
                 * 轮班用户ID
                 * @example `6666`
                 */
                schedulingUserId: number;
                /**
                 * 排班顺序
                 * @example `1`
                 */
                schedulingOrder: number;
                /**
                 * 任务调度类型
                 * @example `1`
                 */
                schedulingObjectType: string;
                /**
                 * 调度用户列表
                 */
                schedulingUserIdList: number[];
            }[];
            /**
             * 快速排班ID
             * @example `1`
             */
            id: number;
        };
        /**
         * 精细排班
         */
        fineScheduling: {
            /**
             * 循环周期
             * @example `1`
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
                /**
                 * 跨天
                 * @example `true`
                 */
                skipOneDay: boolean;
                /**
                 * 排班用户id
                 * @example `32`
                 */
                schedulingUserId: number;
                /**
                 * 排班顺序
                 * @example `123`
                 */
                cycleOrder: number;
                /**
                 * 调度任务类型
                 * @example `1`
                 */
                schedulingObjectType: string;
                /**
                 * 用户调度列表
                 */
                schedulingUserIdList: number[];
            }[];
            /**
             * 精细排班模版
             */
            schedulingTemplateFineShifts: {
                /**
                 * 排班开始时间
                 * @example `2021-10-01 00:00：00`
                 */
                schedulingStartTime: string;
                /**
                 * 排班结束时间
                 * @example `2021-11-01 00:00：00`
                 */
                schedulingEndTime: string;
                /**
                 * 排班顺序
                 * @example `1`
                 */
                schedulingOrder: number;
                /**
                 * 排班用户ID
                 * @example `1`
                 */
                schedulingUserId: number;
                /**
                 * 班次名称
                 * @example `早班`
                 */
                shiftName: string;
                /**
                 *  是否跨天
                 * @example `false`
                 */
                skipOneDay: boolean;
                /**
                 * 调度类型
                 * @example `1`
                 */
                schedulingObjectType: string;
                /**
                 * 调度用户列表
                 */
                schedulingUserIdList: number[];
            }[];
            /**
             * 精细排班ID
             * @example `1`
             */
            id: number;
        };
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
    };
}
