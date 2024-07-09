export interface UpdateServiceGroupSpecialDaySchedulingRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 服务组ID
         * @example `6666`
         */
        serviceGroupId: number;
        /**
         * 排班日期
         * @example `2021-08-19`
         */
        schedulingDate: string;
        /**
         * 排班信息
         */
        schedulingSpecialDays: {
            /**
             * 排班开始时间
             * @example `2021-08-19 08:00:00`
             */
            schedulingStartTime: string;
            /**
             * 排班结束时间
             * @example `2021-08-19 12:00:00`
             */
            schedulingEndTime: string;
            /**
             * 排班用户
             * @example `64`
             */
            schedulingUserId: number;
            /**
             * 班次顺序
             * @example `1`
             */
            schedulingOrder: number;
            schedulingObjectType: string;
            schedulingUserIdList: number[];
        }[];
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
    };
}
