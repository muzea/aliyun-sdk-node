export interface QueryCardSmsTemplateRequest {
    /**
     * 卡片短信模板Code。
     * 请在控制台**国内卡片消息**的**模板管理**页面查看模板Code。
     * >必须是已添加、并通过审核的卡片短信模板Code。
     * @example `CARD_SMS_2****`
     */
    "TemplateCode": string;
}
