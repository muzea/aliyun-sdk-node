export interface SmsReportRequest {
    /**
     * 请求参数的主体信息。
     */
    "body"?: {
        /**
         * 发送回执ID，即发送流水号。
         * @example `12345`
         */
        biz_id: string;
        /**
         * 状态报告编码。
         * @example `DELIVERED`
         */
        err_code: string;
        /**
         * 状态报告说明。
         * @example `用户接收成功`
         */
        err_msg: string;
        /**
         * 短信ID。调用发送接口SendMessage发送短信时，返回值中的ID字段。可使用短信ID在接口ListMessages查询具体的发送状态。
         * @example `123`
         */
        message_id: string;
        /**
         * 外部拓展字段。
         * @example `123`
         */
        out_id: string;
        /**
         * 手机号码。
         * @example `1390000****`
         */
        phone_number: string;
        /**
         * 状态报告时间。
         * @example `2017-09-01 00:00:00`
         */
        report_time: string;
        /**
         * 短信批处理ID。调用发送接口SendMessage发送短信时，返回值中的RequestId字段。可使用短信批处理ID在接口ListMessages查询具体的发送状态。
         * @example `62a72a20-8a9b-4060-a510-0c30a9340cba`
         */
        request_id: string;
        /**
         * 发送时间。
         * @example `2017-09-01 00:00:00`
         */
        send_time: string;
        /**
         * 签名。
         * @example `签名`
         */
        sign_name: string;
        /**
         * 短信长度。短信长度不超过70个字，按照一条短信计费；超过70个字，即为长短信，按照67字/条拆分成多条计费。
         * @example `1`
         */
        sms_size: string;
        /**
         * 是否接收成功。
         * - true : 接收成功。
         * - false : 接收失败。
         * @example `true`
         */
        success: boolean;
        /**
         * 模板号。
         * @example `SMS_123456`
         */
        template_code: string;
    }[];
}
