export interface CheckMobilesCardSupportRequest {
    /**
     * 卡片短信模板Code。
     * 请在控制台选择**国内卡片消息**，在**模板管理**页面查看。
     * >必须是已添加、并通过审核的卡片短信模板。
     * @example `CARD_SMS_****`
     */
    "TemplateCode": string;
    /**
     * 手机号列表。
     */
    "Mobiles": any[];
}
