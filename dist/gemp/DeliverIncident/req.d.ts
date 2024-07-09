export interface DeliverIncidentRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 事件ID
         * @example `1223212`
         */
        incidentId: number;
        /**
         * 转交用户ID
         * @example `212321`
         */
        assignUserId: number;
        /**
         * 幂等校验id
         * @example `FD200FAE-E98F-496E-BFE6-4CE61CS9A221`
         */
        clientToken: string;
    };
}
