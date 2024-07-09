export interface CreateProblemResponse {
    /**
     * Id of the request
     * @example `E789D869-DB13-4933-BAA8-A1F56F94B94D`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 故障Id
         * @example `321331`
         */
        problemId: number;
    };
}
