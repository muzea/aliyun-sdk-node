export interface ListDiagnoseReportIdsResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
    Result: string[];
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 返回的总记录数。
         * @example `1`
         */
        X-Total-Count: number;
    };
}
