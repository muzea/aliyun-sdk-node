export interface GetServiceGroupSchedulingResponse {
    /**
     * Id of the request
     * @example `xxxxxxxxxxxx`
     */
    requestId: string;
    /**
     * 排班详情
     */
    data: {
        /**
         * 排班方式 FAST 快速排班 FINE 精细排班
         * @example `FINE`
         */
        schedulingWay: string;
        /**
         * 服务组ID
         * @example `99999`
         */
        serviceGroupId: number;
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
                 * @example `66666`
                 */
                schedulingUserId: number;
                /**
                 * 排班顺序
                 * @example `1`
                 */
                schedulingOrder: number;
                /**
                 * 轮班用户名字
                 * @example `张杰`
                 */
                schedulingUserName: string;
                /**
                 * 多人排班时，人员Id
                 */
                schedulingUserIdList: number[];
                /**
                 * 排班对象类型
                 * @example `single`
                 */
                schedulingObjectType: string;
            }[];
            /**
             * 快速排班ID
             * @example `2222`
             */
            id: number;
        };
        /**
         * 精细排班
         */
        fineScheduling: {
            /**
             * 1
             * @example `循环周期`
             */
            period: number;
            /**
             * 1
             * @example `精细排班ID`
             */
            id: number;
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
                 * 循环次序
                 * @example `1`
                 */
                cycleOrder: number;
                /**
                 * 排班用户ID
                 * @example `1111`
                 */
                schedulingUserId: number;
                /**
                 * 是否跨天
                 * @example `false`
                 */
                skipOneDay: boolean;
                /**
                 * 排班用户名字
                 * @example `刘德华`
                 */
                schedulingUserName: string;
                /**
                 * 多人排班时，人员Id
                 */
                schedulingUserIdList: number[];
                /**
                 * 任务调度类型
                 * @example `single`
                 */
                schedulingObjectType: string;
            }[];
            /**
             * 精细排班模版
             */
            schedulingTemplateFineShifts: {
                /**
                 * 排班开始时间
                 * @example `2021-09-01 00:00:00`
                 */
                schedulingStartTime: string;
                /**
                 * 排班结束时间
                 * @example `2021-10-01 00:00:00`
                 */
                schedulingEndTime: string;
                /**
                 * 排班顺序
                 * @example `1`
                 */
                schedulingOrder: number;
                /**
                 * 用户ID
                 * @example `1`
                 */
                schedulingUserId: string;
                /**
                 * 是否跨天
                 * @example `true`
                 */
                skipOneDay: boolean;
                /**
                 * 排班用户名字
                 * @example `刘德华`
                 */
                schedulingUserName: string;
                /**
                 * 班次名称
                 * @example `早班`
                 */
                shiftName: string;
                /**
                 * 多人排班时，人员Id
                 */
                schedulingUserIdList: number[];
                /**
                 * 任务调度类型
                 * @example `single`
                 */
                schedulingObjectType: string;
            }[];
        };
        /**
         * 已经排班
         */
        users: {
            /**
             * 66666
             * @example `用户ID`
             */
            userId: number;
            /**
             * 用户名字
             * @example `用户名字`
             */
            userName: string;
        }[];
    };
}
