export interface ListChartDataForServiceGroupRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * clientToken
         * @example `23es23s32xas23`
         */
        clientToken: string;
        /**
         * 开始时间
         * @example `2021-09-09`
         */
        startTime: string;
        /**
         * 结束时间
         * @example `2021-10-09`
         */
        endTime: string;
    };
}
