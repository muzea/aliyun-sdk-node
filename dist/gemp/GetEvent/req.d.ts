export interface GetEventRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 监控源ID不能为空
         * @example `1`
         */
        monitorSourceId: number;
    };
}
