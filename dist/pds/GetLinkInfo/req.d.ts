export interface GetLinkInfoRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 账号类型
         * - mobile：手机号
         * - email：邮箱
         * - ding：钉钉
         * - ram：阿里云RAM子账号
         * - wechat：企业微信
         * - ldap：LDAP账号
         * - custom：自定义账号
         * @example `mobile`
         */
        type: string;
        /**
         * 账号的唯一标识，比如手机号
         * @example `130***`
         */
        identity: string;
        /**
         * 账号唯一标识的附加信息，比如当账号为手机号时，此字段填手机的区域编码。
         * @example `1`
         */
        extra: string;
    };
}
