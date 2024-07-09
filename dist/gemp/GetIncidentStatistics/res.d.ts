export interface GetIncidentStatisticsResponse {
    /**
     * requestId
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 我的待响应
         * @example `1`
         */
        myResponse: number;
        /**
         * 我的完结
         * @example `11`
         */
        myFinish: number;
        /**
         * 所有待响应
         * @example `12`
         */
        allResponse: number;
        /**
         * 所有完结
         * @example `113`
         */
        allFinish: number;
    };
}
