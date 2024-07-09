export interface SendSmsRequest {
    /**
     * 闪信接收的号码。格式为：86+11位手机号码。
     * 支持设置多个号码，多个号码之间使用英文逗号（,）分隔，最多支持一次设置1000个号码。
     * 验证码类型的闪信推荐使用单个号码的调用的方式。发送只支持国内手机号。例如，861500000****。
     * @example `861500000****`
     */
    "Mobile": string;
    /**
     * 闪信签名。
     * > **说明**智能反诈闪信发送的签名需提前申请，请您联系运营人员咨询具体流程。
     * @example `反诈专用`
     */
    "SignName": string;
    /**
     * 闪信模板ID。关于闪信模板ID的详细信息，请参见**[模板](~~215420~~)**。
     * @example `SMS_0000`
     */
    "TemplateCode": string;
    "TemplateParam"?: string;
    /**
     * 客户服务端自定义的业务唯一标识。
     * 该标识用于后续定位排查问题。值最长为32位长度的字母数字组合，请确保该值是唯一的。
     * @example `abcdefghfdfsdffafdaqwertyuioxxxx`
     */
    "OuterOrderNo"?: string;
}
