export interface DescribeAlertTypeResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 威胁类型。
         * @example `WEBSHELL`
         */
        AlertType: string;
        /**
         * 威胁类型美杜莎code。
         * @example `siem_rule_type_process_abnormal_command`
         */
        AlertTypeMds: string;
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
