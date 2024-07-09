export interface DeleteProblemTimelineRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 时间线id
         * @example `11`
         */
        problemTimelineId: number;
        /**
         * 故障id
         * @example `102`
         */
        problemId: number;
        /**
         * 幂等标识
         * @example `601FA6A2-AC5C-4B59-BE11-378FTOKENA11`
         */
        clientToken: string;
    };
}
