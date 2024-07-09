export interface CreateAccessKeyResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 访问密钥。
     */
    AccessKey: {
        /**
         * 状态，激活或禁用。
         * @example `Active`
         */
        Status: string;
        /**
         * 访问密钥。
         * @example `PupkTg8jdmau1cXxYacgE736PJ****`
         */
        AccessKeySecret: string;
        /**
         * 创建时间。
         * @example `2015-01-23T12:33:18Z`
         */
        CreateDate: string;
        /**
         * 访问密钥标识。
         * @example `0wNEpMMlzy7s****`
         */
        AccessKeyId: string;
    };
}
