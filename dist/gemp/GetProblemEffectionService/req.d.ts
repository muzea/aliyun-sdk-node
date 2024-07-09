export interface GetProblemEffectionServiceRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * id主键
         * @example `9`
         */
        effectionServiceId: number;
        /**
         * 故障id
         * @example `46`
         */
        problemId: number;
        /**
         * clientToken
         * @example `e2d4306a-bf4d-4345-9ae6-158223c85dbd`
         */
        clientToken: string;
    };
}
