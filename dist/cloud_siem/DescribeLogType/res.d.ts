export interface DescribeLogTypeResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 规则对应的日志类型。
         * @example `HTTP_ACTIVITY`
         */
        LogType: string;
        /**
         * 日志类型名称美杜莎Code。
         * @example `sas.cloudsiem.prod.http_activity`
         */
        LogTypeName: string;
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
