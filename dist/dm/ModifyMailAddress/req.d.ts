export interface ModifyMailAddressRequest {
    /**
     * 发信地址ID
     * @example `1344565`
     */
    "MailAddressId": number;
    /**
     * 回信地址
     * @example `a***@example.net`
     */
    "ReplyAddress"?: string;
    /**
     * - 长度为 10~20 位，且必须包含数字、大写字母、小写字母。
     * - 至少包含 2 位数字、2 位大写字母和 2 位小写字母，并且数字和字母均不能只由单一字符重复组成。
     * - 不能与上一次设置密码相同。
     * @example `DM1mail1234`
     */
    "Password"?: string;
}
