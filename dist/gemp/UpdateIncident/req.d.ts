export interface UpdateIncidentRequest {
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
         * 事件级别 P1 P2 P3 P4
         * @example `P1`
         */
        incidentLevel: string;
        /**
         * 影响等级 高：HIGH 低 LOW
         * @example `LOW`
         */
        effect: string;
        /**
         * 事件标题
         * @example `事件标题`
         */
        incidentTitle: string;
        /**
         * 幂等校验token
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A123`
         */
        clientToken: string;
    };
}
