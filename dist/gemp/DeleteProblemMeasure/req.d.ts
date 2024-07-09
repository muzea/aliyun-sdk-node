export interface DeleteProblemMeasureRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障改成措施id
         * @example `1213`
         */
        measureId: number;
        /**
         * 故障Id
         * @example `2131`
         */
        problemId: string;
        /**
         * 幂等校验token
         * @example `4361a0e1-6747-4834-96ce-0c4840fd3812`
         */
        clientToken: string;
    };
}
