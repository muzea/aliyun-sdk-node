export interface DescribeDisposeStrategyPlaybookResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 剧本唯一标识名称。
         * @example `WafBlockIP`
         */
        PlaybookName: string;
        /**
         * 剧本UUID。
         * @example `system_aliyun_clb_process_book`
         */
        PlaybookUuid: string;
    }[];
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
}
