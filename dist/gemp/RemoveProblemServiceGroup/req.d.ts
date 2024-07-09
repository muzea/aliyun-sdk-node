export interface RemoveProblemServiceGroupRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障ID
         * @example `13123`
         */
        problemId: number;
        /**
         * 应急协同组
         */
        serviceGroupIds: number[];
    };
}
