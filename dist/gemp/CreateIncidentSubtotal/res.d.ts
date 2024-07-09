export interface CreateIncidentSubtotalResponse {
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
         * 小计Id
         * @example `123`
         */
        subtotalId: number;
    };
}
