export interface GetProblemImprovementRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障ID
         * @example `312312`
         */
        problemId: string;
        /**
         * 幂等校验token
         * @example `4361a0e1-6747-4834-96ce-0c4840fd3812`
         */
        clientToken: string;
    };
}
