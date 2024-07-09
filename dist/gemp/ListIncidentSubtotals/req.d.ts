export interface ListIncidentSubtotalsRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 事件ID
         * @example `3123`
         */
        incidentId: number;
        /**
         * 幂等校验token
         * @example `FD200FAE-E98F-496E-BFE6-4CE62E59A2E9`
         */
        clientToken: string;
    };
}
