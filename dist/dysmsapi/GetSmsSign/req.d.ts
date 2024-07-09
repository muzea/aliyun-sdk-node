export interface GetSmsSignRequest {
    /**
     * 签名名称。必须是本账号已申请的短信签名。
     * - 调用[CreateSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-createsmssign?spm)接口后在返回参数中获取。
     * - 在[签名管理](https://dysms.console.aliyun.com/domestic/text/sign)页面查看签名。
     * @example `登录验证`
     */
    "SignName": string;
}
