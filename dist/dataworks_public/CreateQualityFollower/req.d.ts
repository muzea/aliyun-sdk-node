export interface CreateQualityFollowerRequest {
    /**
     * 引擎或者数据源的名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 订阅人的账号ID。
     * @example `123`
     */
    "Follower": string;
    /**
     * 订阅的方式，包括1（邮件）、2（邮件和短信）、4（钉钉群机器人）、5（钉钉群机器人@ALL）、6（飞书）、7（企业微信）、8（WEBHOOK）和9（电话告警）。
     * @example `1`
     */
    "AlarmMode": number;
    /**
     * 分区表达式的ID。
     * @example `12345`
     */
    "EntityId": number;
    /**
     * DataWorks工作空间的ID。您可以进入DataWorks管理控制台获取。
     * @example `123`
     */
    "ProjectId": number;
}
