export interface ListHotlineTransferRegisterFileResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `6086693B-2250-17CE-A41F-06259AB6DB1B`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 页数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `1`
         */
        Total: number;
        /**
         * 备案文件。
         */
        Values: {
            /**
             * 经办人邮箱。
             * @example `username@example.com`
             */
            MngOpMail: string;
            /**
             * 经办人姓名。
             * @example `A***`
             */
            MngOpName: string;
            /**
             * 企业名称。
             * @example `A**`
             */
            CorpName: string;
            /**
             * 确认承诺书真实性。
             * @example `true`
             */
            Agree: string;
            /**
             * 经办人手机号。
             * @example `150****0000`
             */
            MngOpMobile: string;
            /**
             * 经办人身份证号。
             * @example `5****************9`
             */
            MngOpIdentityCard: string;
            /**
             * 400号码。
             * @example `400903****`
             */
            HotlineNumber: string;
            /**
             * 资质ID。
             * @example `10000004933****`
             */
            QualificationId: string;
            /**
             * 资源唯一编码。
             * @example `1`
             */
            ResUniqueCode: number;
        }[];
    };
}
