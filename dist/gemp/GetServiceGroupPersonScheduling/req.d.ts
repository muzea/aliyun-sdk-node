export interface GetServiceGroupPersonSchedulingRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 用户ID
         * @example `66666`
         */
        userId: number;
        /**
         * 服务组ID
         * @example `77777`
         */
        serviceGroupId: number;
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
        /**
         * 排班开始时间
         * @example `2020-09-01 00:00:00`
         */
        startTime: string;
        /**
         * 排班结束时间
         * @example `2020-09-31 00:00:00`
         */
        endTime: string;
    };
}
