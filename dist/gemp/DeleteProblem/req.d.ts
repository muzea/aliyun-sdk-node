export interface DeleteProblemRequest {
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
         * 幂等校验
         * @example `4361a0e1-6747-4834-96ce-0c4840fd3812`
         */
        clientToken: string;
    };
}
