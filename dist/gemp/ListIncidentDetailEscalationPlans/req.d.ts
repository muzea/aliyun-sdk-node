export interface ListIncidentDetailEscalationPlansRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 事件ID
         * @example `2311`
         */
        incidentId: number;
        /**
         * 幂等校验
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
         */
        clientToken: string;
    };
}
