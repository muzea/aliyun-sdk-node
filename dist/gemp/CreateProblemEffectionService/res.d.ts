export interface CreateProblemEffectionServiceResponse {
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
         * 影响服务id
         * @example `6442430`
         */
        effectionServiceId: number;
    };
}
