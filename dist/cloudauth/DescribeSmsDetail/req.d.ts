export interface DescribeSmsDetailRequest {
    /**
     * 接收闪信的11位手机号码。
     * @example `150000xxxx`
     */
    "Mobile"?: string;
    /**
     * 待查询的闪信记录的发送日期。例如，20210510。
     * > 最多支持查询近30天的闪信记录。
     * @example `20210428`
     */
    "SendDate": string;
    /**
     * 明细错误码。关于明细的错误码信息，请登录**[增强版实人认证控制台](https://yundun.console.aliyun.com/?spm=5176.12818093.ProductAndService--ali--widget-home-product-recent.dre0.5adc16d00DIZys&p=cloudauth#/fraud/record)**，在智能反诈的发送记录页面查询失败的原因。
     * @example `SP_UNKNOWN_ERROR`
     */
    "ErrorCode"?: string;
    /**
     * 该标识用于后续定位排查问题，您需要确保该值在您的业务中是唯一的。
     * 支持使用英文字母（包含大小写）、数字，最长不超过32个字符。
     * @example `qwertyuiopasdfghjklzxcvbnmqxxxx`
     */
    "OuterOrderNo"?: string;
    /**
     * 待查询的闪信记录的状态。取值：
     *   - **FAILED**：表示查询发送失败明细。
     *   - **SUCCESS**：表示查询发送成功明细。
     *   - **RECEIPT**：表示查询未回执明细。
     *   - 不传则查询全部明细。
     * @example `FAILED`
     */
    "SendStatus"?: string;
    /**
     * 待查询的闪信明细的签名类型。关于签名的问题，请联系运营人员。
     * @example `反诈专用`
     */
    "SignName"?: string;
    /**
     * 闪信模板ID。关于闪信的模板信息，请参见**[模板](~~215420~~)**。
     * @example `SMS_0000`
     */
    "TemplateCode"?: string;
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 单页最多显示的明细数量。支持最多显示100条。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 智能反诈闪信发送接口返回的唯一ID。
     * @example `qwer^xxxxx`
     */
    "BizId"?: string;
}
