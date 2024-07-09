export interface ModifyPWByDomainRequest {
    /**
     * 域名，长度1-50，可以为数字、大写字母、小写字母、.、-。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * - 长度为10~20位，且必须包含数字、大写字母、小写字母。
     * - 至少包含2位数字、2位大写字母和2位小写字母，并且数字和字母均不能只由单一字符重复组成。
     * - 不能与上一次设置密码相同。
     * @example `DM1mail1234`
     */
    "Password": string;
}
