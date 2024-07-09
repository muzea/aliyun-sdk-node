export interface DescribeLogFieldsResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 规则字段名称。
         * @example `activity_name`
         */
        FieldName: string;
        /**
         * 字段描述美杜莎Code。
         * @example `sas.cloudsiem.prod.activity_name`
         */
        FieldDesc: string;
        /**
         * 字段所属日志源。
         * @example `cloud_siem_aegis_sas_alert`
         */
        LogCode: string;
        /**
         * 字段所属日志类型。
         * @example `HTTP_ACTIVITY`
         */
        ActivityName: string;
        /**
         * 字段数据类型。 取值：
         * - varchar：字符串
         * - bigint：数字
         * @example `varchar`
         */
        FieldType: string;
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
