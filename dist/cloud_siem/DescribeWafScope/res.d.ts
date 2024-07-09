export interface DescribeWafScopeResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * Waf实例ID。
         * @example `waf-cn-tl123ast****`
         */
        InstanceId: string;
        /**
         * SIEM主账号ID。
         * @example `127608589417****`
         */
        Aliuid: number;
        /**
         * Waf实例下的防护的域名列表。
         * @example `[123.com, 456.com]`
         */
        Domains: string[];
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
