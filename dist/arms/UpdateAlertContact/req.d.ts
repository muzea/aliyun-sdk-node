export interface UpdateAlertContactRequest {
    /**
     * 将报警联系人名称改为此名称。
     * @example `John Doe`
     */
    "ContactName"?: string;
    /**
     * 将报警联系人的手机号码修改为此值。PhoneNum、Email和DingRobotWebhookUrl必须至少填写一个。
     * > 如果此参数为空，则表示删除报警联系人的该参数。如果此参数设为一个值，则表示更新报警联系人的该参数。
     * @example `1381111****`
     */
    "PhoneNum"?: string;
    /**
     * 将报警联系人的邮箱地址修改为此值。PhoneNum、Email和DingRobotWebhookUrl必须至少填写一个。
     * > 如果此参数为空，则表示删除报警联系人的该参数。如果此参数设为一个值，则表示更新报警联系人的该参数。
     * @example `someone@example.com`
     */
    "Email"?: string;
    /**
     * 将报警联系人的钉钉机器人Webhook URL修改为此值，获取方式请参见[设置钉钉机器人报警](~~106247~~)。PhoneNum、Email和DingRobotWebhookUrl必须至少填写一个。
     * > 如果此参数为空，则表示删除报警联系人的该参数。如果此参数设为一个值，则表示更新报警联系人的该参数。
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
     * 需要更新的报警联系人的ID，可调用SearchAlertContact接口来查询，详情请参见[SearchAlertContact](~~130703~~)。
     * @example `123`
     */
    "ContactId": number;
}
