export interface AddProblemServiceGroupRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障ID
         * @example `10`
         */
        problemId: number;
        /**
         * 应急协同组
         */
        serviceGroupIds: number[];
    };
}
