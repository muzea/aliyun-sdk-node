export interface DeleteProblemEffectionServiceRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 影响服务ID
         * @example `567`
         */
        effectionServiceId: number;
        /**
         * 故障id
         * @example `876`
         */
        problemId: number;
        /**
         * clientToken
         * @example `e0b6735e-1a04-4d6b-a625-d2350612492c`
         */
        clientToken: string;
    };
}
