export interface CreateIncidentResponse {
    /**
     * Id of the request
     */
    data: {
        /**
         * 事件主健Id
         * @example `事件Id`
         */
        incidentId: number;
    };
    /**
     * requestId
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
}
