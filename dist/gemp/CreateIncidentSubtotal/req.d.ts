export interface CreateIncidentSubtotalRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 事件Id
         * @example `12312`
         */
        incidentId: number;
        /**
         * 描述
         * @example `描述`
         */
        description: string;
        /**
         * 幂等校验
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
         */
        clientToken: string;
    };
}
