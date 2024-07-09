export interface CreateOrUpdateContactRequest {
    /**
     * 告警联系人ID。
     * - 不填代表创建新的告警联系人。
     * - 填写代表修改指定告警联系人信息。
     * @example `123`
     */
    "ContactId"?: number;
    /**
     * 告警联系人姓名。
     * @example `JohnDoe`
     */
    "ContactName": string;
    /**
     * 告警联系人手机号码。
     * > **Phone**和**Email**参数至少填写一项。每个手机号码或邮箱只能用于一个联系人。
     * @example `1381111****`
     */
    "Phone"?: string;
    /**
     * 告警联系人邮箱地址。
     * > **Phone**和**Email**参数至少填写一项。每个手机号码或邮箱只能用于一个联系人。
     * @example `someone@example.com`
     */
    "Email"?: string;
    /**
     * 电话通知失败后，通知补发类型。
     * - 0：不补发
     * - 1：重复拨打一次电话
     * - 2：发送短信通知
     * - 3（默认）：使用全局默认值
     * @example `3`
     */
    "ReissueSendNotice"?: number;
    /**
     * 邮箱是否已验证
     * @example `true`
     */
    "IsEmailVerify"?: boolean;
    /**
     * 钉钉Webhook地址。
     * @example `https://oapi.dingtalk.com/robot/send?access_token=69d4e0******`
     */
    "DingRobotUrl"?: string;
    /**
     * 资源组 ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 告警联系人在自己企业组织内的标识，用于三方IM的@功能
     * @example `A123221`
     */
    "CorpUserId"?: string;
}
