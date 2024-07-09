export interface ListProblemSubtotalsRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障Id
         * @example `1231`
         */
        problemId: number;
        /**
         * 幂等校验token
         * @example `4361a0e1-6747-4834-96ce-0c4840fdB812`
         */
        clientToken: string;
    };
}
