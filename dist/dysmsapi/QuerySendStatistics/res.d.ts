export interface QuerySendStatisticsResponse {
    /**
     * 请求ID。
     * @example `819BE656-D2E0-4858-8B21-B2E47708****`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 返回数据的总条数。
         * @example `20`
         */
        TotalSize: number;
        /**
         * 返回数据列表。
         */
        TargetList: {
            /**
             * 发送成功的短信条数。
             * @example `20`
             */
            TotalCount: number;
            /**
             * 接收到回执成功的短信条数。
             * @example `17`
             */
            RespondedSuccessCount: number;
            /**
             * 接收到回执失败的短信条数。
             * @example `2`
             */
            RespondedFailCount: number;
            /**
             * 未收到回执的短信条数。
             * @example `1`
             */
            NoRespondedCount: number;
            /**
             * 短信发送日期，格式为yyyyMMdd，例如20181225。
             * @example `20201010`
             */
            SendDate: string;
        }[];
    };
}
