export interface GetResourceStatisticsResponse {
    /**
     * Id of the request
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 事件总数
         * @example `1331`
         */
        incidentCount: number;
        /**
         * 报警总数
         * @example `123`
         */
        alertCount: number;
        /**
         * 故障总数
         * @example `221`
         */
        problemCount: number;
        /**
         * 集成总数
         * @example `2211`
         */
        integrationCount: number;
    };
}
