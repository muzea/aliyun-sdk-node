export interface GetIncidentRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 事件ID
         * @example `32113`
         */
        incidentId: number;
        /**
         * 幂等校验
         * @example `2b63cdef-7ac3-4892-a76d-0f3389ef729f`
         */
        clientToken: string;
    };
}
