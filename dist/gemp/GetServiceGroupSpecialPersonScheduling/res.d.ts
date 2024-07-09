export interface GetServiceGroupSpecialPersonSchedulingResponse {
    /**
     * Id of the request
     * @example `xxxxxx`
     */
    requestId: string;
    /**
     * 人员排班信息
     */
    data: {
        /**
         * 排班开始时间
         * @example `2021-08-17  00:00:00`
         */
        schedulingStartTime: string;
        /**
         * 排班结束时间
         * @example `2021-08-17  12:00:00`
         */
        schedulingEndTime: string;
        /**
         * 排班日期
         * @example `2021-08-17`
         */
        schedulingDate: string;
        /**
         * 服务组id
         * @example `8888`
         */
        serviceGroupId: number;
        /**
         * 服务组名字
         * @example `雪豹突击队`
         */
        serviceGroupName: string;
        /**
         * 排班用户ID
         * @example `111111`
         */
        schedulingUserId: number;
    }[];
}
