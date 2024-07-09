export interface SmsUpRequest {
    /**
     * 请求参数的主体信息。
     */
    "body"?: {
        /**
         * 发送内容。
         * @example `内容`
         */
        content: string;
        /**
         * 上行短信扩展号码，系统后台自动生成，不支持自定义传入。
         * @example `1234`
         */
        dest_code: string;
        /**
         * 手机号码。
         * @example `1390000****`
         */
        phone_number: string;
        /**
         * 发送时间。
         * @example `2017-09-01 00:00:00`
         */
        send_time: string;
        /**
         * 序列号。
         * @example `1234567890`
         */
        sequence_id: number;
        /**
         * 签名信息。
         * @example `签名`
         */
        sign_name: string;
    }[];
}
