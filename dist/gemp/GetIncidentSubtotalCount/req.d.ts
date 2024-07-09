export interface GetIncidentSubtotalCountRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 事件id列表
         */
        incidentIds: number[];
        /**
         * 幂等标识
         * @example `7C56D225-7C34-40BB-9624-C8BA449260E6`
         */
        clientToken: string;
    };
}
