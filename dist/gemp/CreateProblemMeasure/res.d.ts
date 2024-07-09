export interface CreateProblemMeasureResponse {
    /**
     * Id of the request
     * @example `4361a0e1-6747-4834-96ce-0c4840fd3812`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 故障措施Id
         * @example `1231`
         */
        measureId: number;
    };
}
