export interface DelayPublishOsVersionRequest {
    /**
     * 版本ID
     * @example `12323`
     */
    "VersionId": string;
    /**
     * 项目ID
     * @example `SASUHQ`
     */
    "ProjectId": string;
    /**
     * 定时预发布时间
     * @example `1570672685997`
     */
    "PrepubTime"?: number;
    /**
     * 定时发布时间
     * @example `1570672685997`
     */
    "PublishTime"?: number;
    /**
     * 定时下架时间
     * @example `1570672685997`
     */
    "DownTime"?: number;
    /**
     * 邮箱
     * @example `12323232@qq.com`
     */
    "Email": string;
    /**
     * 描述
     * @example `发布描述`
     */
    "Description"?: string;
    /**
     * 升级说明
     * @example `升级说明`
     */
    "SendMessage"?: string;
    /**
     * 预发布总数限制
     * @example `1000`
     */
    "PrepublishCount"?: string;
}
