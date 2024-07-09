export interface RespondIncidentRequest {
    /**
     * body参数
     */
    "Body": {
        /**
         * 事件ID数组
         */
        incidentIds: number[];
        /**
         * 幂等校验token
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A221`
         */
        clientToken: string;
    };
}
