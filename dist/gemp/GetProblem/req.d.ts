export interface GetProblemRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 故障id
         * @example `1`
         */
        problemId: number;
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
    };
}
