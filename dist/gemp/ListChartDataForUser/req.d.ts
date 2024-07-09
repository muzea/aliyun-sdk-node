export interface ListChartDataForUserRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * clientToken
         * @example `3232dsd32sd32gr`
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
