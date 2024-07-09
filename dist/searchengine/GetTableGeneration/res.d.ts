export interface GetTableGenerationResponse {
    /**
     * requestId
     * @example `E7B7D598-B080-5C8E-AA35-D43EC0D5F886`
     */
    requestId: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * generationId
         * @example `1708674867`
         */
        generationId: number;
        /**
         * starting, building, ready, stopped, failed
         * @example `ready`
         */
        status: string;
    };
}
