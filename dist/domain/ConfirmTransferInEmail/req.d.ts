export interface ConfirmTransferInEmailRequest {
    /**
     * 用户ip
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言，枚举值范围：zh 中文；en 英文。默认为en
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 邮箱
     * @example `test@test.com`
     */
    "Email": string;
    /**
     * 域名列表
     * @example `abc.com`
     */
    "DomainName": string[];
}
