export interface DescribeLogSourceResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 规则对应的日志源。
         * @example `cloud_siem_aegis_sas_alert`
         */
        LogSource: string;
        /**
         * 规则对应的日志源美杜莎Code。
         * @example `sas.cloudsiem.prod.cloud_siem_aegis_sas_alert`
         */
        LogSourceName: string;
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
