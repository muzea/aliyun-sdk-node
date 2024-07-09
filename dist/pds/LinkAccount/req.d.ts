export interface LinkAccountRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 待绑定的UserID
         * @example `xxx`
         */
        user_id: string;
        /**
         * 账号类型
         * - mobile：手机号
         * - email：邮箱
         * - ding：钉钉
         * - ram：阿里云RAM子账号
         * - wechat：企业微信
         * - ldap：LDAP账号
         * - custom：自定义账号
         * @example `ding`
         */
        type: string;
        /**
         * 账号的唯一标识，比如手机号
         * @example `eyy***`
         */
        identity: string;
        /**
         * 账号唯一标识的附加信息，比如当账号为手机号时，此字段填手机的区域编码，比如中国大陆为86，不填写默认为86
         * @example `86`
         */
        extra: string;
    };
}
