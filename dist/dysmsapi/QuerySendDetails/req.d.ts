export interface QuerySendDetailsRequest {
    /**
     * 接收短信的手机号码。格式：
     * * 国内短信：11位手机号码，例如1390000\*\*\*\*。
     * * 国际/港澳台消息：国际区号+号码，例如8520000\*\*\*\*。
     * @example `1390000****`
     */
    "PhoneNumber": string;
    /**
     * 发送回执ID，即发送流水号。调用[SendSms](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-sendsms?spm=a2c4g.11186623.0.0.517969c3U8B7GF)或[SendBatchSms](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-sendbatchsms?spm=a2c4g.11186623.0.0.93f969c3uSRK6z)发送短信时，返回值中的BizId字段。
     * > 只能传入一个Bizid的值，无法传入多个Bizid。
     * @example `134523^435****`
     */
    "BizId"?: string;
    /**
     * 短信发送日期，支持查询最近30天的记录。
     * 格式为yyyyMMdd，例如20181225。
     * @example `20181228`
     */
    "SendDate": string;
    /**
     * 分页查看发送记录，指定每页显示的短信记录数量。
     * 取值范围为1~50。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 分页查看发送记录，指定发送记录的当前页码。
     * @example `1`
     */
    "CurrentPage": number;
}
