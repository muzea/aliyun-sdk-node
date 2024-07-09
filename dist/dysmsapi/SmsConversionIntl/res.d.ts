export interface SmsConversionIntlResponse {
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8D****
    `
     */
    RequestId: string;
    /**
     * 状态码。返回OK代表请求成功，其他错误码，请参见[错误码列表](https://help.aliyun.com/document_detail/101346.html?spm=a2c4g.101345.0.0.74326ff2J5EZyt)。
     * @example `OK`
     */
    Code: string;
}
