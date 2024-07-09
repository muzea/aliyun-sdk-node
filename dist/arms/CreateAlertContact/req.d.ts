export interface CreateAlertContactRequest {
    /**
     * 报警联系人名称。
     * @example `JohnDoe`
     */
    "ContactName"?: string;
    /**
     * 联系人手机号码。PhoneNum、Email和DingRobotWebhookUrl必须至少填写一个。
     * @example `1381111****`
     */
    "PhoneNum"?: string;
    /**
     * 联系人邮箱地址。PhoneNum、Email和DingRobotWebhookUrl必须至少填写一个。
     * @example `someone@example.com`
     */
    "Email"?: string;
    /**
     * <props="china">钉钉机器人Webhook URL，获取方式请参见[设置钉钉机器人报警](https://help.aliyun.com/document_detail/106247.html)。PhoneNum、Email和DingRobotWebhookUrl必须至少填写一个。</props>
     * <props="intl">钉钉机器人Webhook URL，获取方式请参见[设置钉钉机器人报警](https://www.alibabacloud.com/help/zh/doc-detail/106247.htm)。PhoneNum、Email和DingRobotWebhookUrl必须至少填写一个。</props>
     * > 钉钉机器人安全设置中的自定义关键词请填写`报警`。
     * @example `https://oapi.dingtalk.com/robot/send?access_token=91f2f6****`
     */
    "DingRobotWebhookUrl"?: string;
    /**
     * 是否接收系统通知：
     * - `true`：接收系统通知
     * - `false`：不接收系统通知
     * @example `true`
     */
    "SystemNoc"?: boolean;
    /**
     * 地域ID。始终填写`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID，您可以通过**资源管理**控制台获取。
     * @example `rg-aek2eq4peca****`
     */
    "ResourceGroupId"?: string;
}
