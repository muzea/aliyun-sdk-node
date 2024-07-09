export interface CreateProblemSubtotalRequest {
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
         * 小计文本
         * @example `描述`
         */
        description: string;
        /**
         * 幂等校验token
         * @example `4361a0e1-6747-4834-96ce-0c4840fd3814`
         */
        clientToken: string;
    };
}
