export interface FindVersionMessageSendRecordsRequest {
    /**
     * 版本类型，取值有： FOTA 系统版本， APP 应用版本
     * @example `FOTA`
     */
    "VersionType"?: string;
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 本页开始序号
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 分页大小
     * @example `20`
     */
    "PageSize": number;
    /**
     *  消息类型，取值：
     * -  **SYSTEM_UPDATE**：系统版本发布消息推送,
     * -  **APP_VERSION_UPDATE**：应用自升级发布消息推送
     * @example `SYSTEM_UPDATE`
     */
    "MessageType"?: string;
    /**
     * 版本ID
     * @example `1`
     */
    "VersionId"?: string;
}
