export interface DescribeWeb3RiskScoreResponse {
    /**
     * The unique ID of the request, which can be used to locate issues.
     * @example `5E63B760-0ECB-5C07-8503-A65C27876968`
     */
    RequestId: string;
    /**
     * Return code. For the full list of codes, see Codes and Messages.
     * @example `Success`
     */
    Code: string;
    /**
     * Response detailed message.
     * @example `success`
     */
    Message: string;
    /**
     * data
     */
    Data: {
        /**
         * Risk score
         * @example `80`
         */
        Score: string;
        /**
         * risk results
         */
        RiskResults: {
            /**
             * [ CRITICAL, HIGH, MEDIUM, LOW, NO ]
             * 100: Critical
             * 67-99: High risk
             * 34-66: Medium risk
             * 1-33: Low risk
             * 0: No risk
             * @example `HIGH`
             */
            Severity: string;
            /**
             * Address
             * Transaction
             * @example `Address`
             */
            Type: string;
            /**
             * description
             * @example `incoming address risk critical xxxxxx`
             */
            Description: string;
        }[];
    };
    /**
     * The HTTP status code.
     * @example `200`
     */
    HttpStatusCode: number;
}
