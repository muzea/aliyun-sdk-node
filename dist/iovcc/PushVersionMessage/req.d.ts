export interface PushVersionMessageRequest {
    /**
     * 所属项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本ID
     * @example `1`
     */
    "VersionId": string;
    /**
     * 版本类型，取值：
     * - **FOTA**：系统版本
     * - **APP**：应用版本
     * @example `FOTA`
     */
    "VersionType": string;
}
