export interface QueryMobilesCardSupportRequest {
    /**
     * 卡片短信模板Code。请在控制台选择**国内消息**，在**模板管理**页面**查看。
     * >必须是已添加、并通过审核的卡片短信模板。
     * @example `CARD_SMS_2****`
     */
    "TemplateCode": string;
    /**
     * 手机号列表。
     */
    "Mobiles": any[];
}
