export interface GetCaCertificateResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `020F6A43-19E6-4B6E-B846-44EB31DF****`
     */
    RequestId: string;
    /**
     * 证书详细信息。
     */
    Data: {
        /**
         * CA证书的注册码。
         * @example `13274673-8f90-4630-bea1-9cccb25756ad2089******`
         */
        RegistrationCode: string;
        /**
         * CA证书的名称。
         * @example `mqtt_ca`
         */
        CaName: string;
        /**
         * CA证书的SN序列号，用于唯一标识一个CA证书。
         * 取值范围：不超过128 Byte。
         * @example `00f26900ba87******`
         */
        Sn: string;
        /**
         * CA证书内容。
         * > \n表示换行。
         * @example `-----BEGIN CERTIFICATE-----\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\n-----END CERTIFICATE-----`
         */
        CaContent: string;
        /**
         * 验证证书内容。
         * > \n表示换行。
         * @example `-----BEGIN CERTIFICATE-----\nMIID/DCCAu+Y5sRMpp9tnd+4s******\n-----END CERTIFICATE-----`
         */
        VerificationContent: string;
        /**
         * CA证书生效的起始时间。格式为毫秒级别的Unix时间戳。
         * @example `1654137303000`
         */
        ValidBegin: string;
        /**
         * CA证书生效的终止时间。格式为毫秒级别的Unix时间戳。
         * @example `1969497303000`
         */
        ValidEnd: string;
        /**
         * CA证书的状态。取值如下：
         * - **0**：表示证书为未激活状态。
         * - **1**：表示证书为激活状态。
         * > CA证书注册后，默认为激活状态。
         * @example `1`
         */
        Status: string;
    };
}
