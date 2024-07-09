export interface ListHotlineTransferNumberResponse {
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
     * 备案号码信息。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 页数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `1`
         */
        Total: number;
        /**
         * 号码列表。
         */
        Values: {
            /**
             * 备案号码。
             * @example `1580000****`
             */
            PhoneNumber: string;
            /**
             * 机主真实姓名或公司名。
             * @example `A***`
             */
            NumberOwnerName: string;
            /**
             * 资质ID。
             * @example `100***`
             */
            QualificationId: string;
            /**
             * 400号码。
             * @example `400****`
             */
            HotlineNumber: string;
            /**
             * 机主身份证号。
             * @example `500***4119`
             */
            IdentityCard: string;
            /**
             * 资源Code。
             * @example `1***`
             */
            ResUniqueCode: string;
        }[];
    };
}
