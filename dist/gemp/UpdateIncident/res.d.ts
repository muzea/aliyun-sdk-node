export interface UpdateIncidentResponse {
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
         * 事件id
         * @example `2312`
         */
        incidentId: number;
    };
}
