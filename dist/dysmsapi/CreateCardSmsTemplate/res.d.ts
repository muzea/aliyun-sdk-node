export interface CreateCardSmsTemplateResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8DE990`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回对象。
     */
    Data: {
        /**
         * 卡片短信模板CODE。
         * 您可以登录[短信服务控制台](https://dysms.console.aliyun.com/dysms.htm?spm=5176.12818093.categories-n-products.ddysms.3b2816d0xml2NA#/overview)，选择**国内卡片消息**，在**模板管理**页面查看**模板CODE**，如：CARD_SMS_2****。
         * >必须是已添加、并通过审核的卡片短信模板。
         * @example `CARD_SMS_2****`
         */
        TemplateCode: string;
    };
}
