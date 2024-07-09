export interface CreateUserResponse {
    /**
     * id of the request
     * @example `c26f36de-1ec8-496a-a828-880676c5ef81`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 用户id
         * @example `1`
         */
        userId: number;
    };
}
