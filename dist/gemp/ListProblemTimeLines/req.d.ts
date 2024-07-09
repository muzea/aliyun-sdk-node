export interface ListProblemTimeLinesRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障ID
         * @example `10002010`
         */
        problemId: number;
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
    };
}
