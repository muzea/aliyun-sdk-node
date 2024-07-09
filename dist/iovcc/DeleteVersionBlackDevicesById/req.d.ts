export interface DeleteVersionBlackDevicesByIdRequest {
    /**
     * 黑名单ID列表，英文逗号分割。
     * @example `100,200,300`
     */
    "Ids": string;
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本类型，支持：
     * - **FOTA**：系统升级
     * - **APP**：应用升级
     * @example `FOTA`
     */
    "VersionType": string;
    /**
     * 版本ID
     * @example `12345`
     */
    "VersionId": string;
}
