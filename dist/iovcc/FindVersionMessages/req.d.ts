export interface FindVersionMessagesRequest {
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
     * 取值有：
     * - **VERSION_TEST**：系统版本测试消息推送
     * - **SYSTEM_UPDATE**：系统版本发布消息推送
     * - **APP_VERSION_TEST**：应用自升级测试消息推送
     * - **APP_VERSION_UPDATE**：应用自升级发布消息推送
     * @example `VERSION_TEST`
     */
    "MessageType"?: string;
    /**
     * 测试ID
     * @example `1`
     */
    "TestId"?: string;
    /**
     * 版本ID
     * @example `1`
     */
    "VersionId": string;
    /**
     * 群发记录ID
     * @example `1`
     */
    "SendRecordId"?: string;
    /**
     * 云设备ID
     * @example `b8fe2e24ff2b48e0a3aa4e49809fc1b3`
     */
    "DeviceId"?: string;
    /**
     * 版本类型，取值有：FOTA 系统版本，APP 应用版本。
     * @example `FOTA`
     */
    "VersionType": string;
}
