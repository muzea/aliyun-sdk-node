export interface CreateProblemSubtotalResponse {
    /**
     * Id of the request
     * @example `4361a0e1-6747-4834-96ce-0c4840fd381A`
     */
    requestId: string;
    /**
     * object
     */
    data: {
        /**
         * 小计id
         * @example `123`
         */
        subtotalId: number;
    };
}
