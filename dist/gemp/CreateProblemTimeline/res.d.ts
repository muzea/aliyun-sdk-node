export interface CreateProblemTimelineResponse {
    /**
     * id of the request
     * @example `10REQUES-AC5C-4B59-BE11-378F117A6A88`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 故障时间线id
         * @example `102`
         */
        problemTimelineId: number;
    };
}
