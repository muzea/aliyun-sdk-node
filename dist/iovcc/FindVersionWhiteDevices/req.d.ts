export interface FindVersionWhiteDevicesRequest {
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 版本ID
     * @example `12345`
     */
    "VersionId": string;
    /**
     * 版本类型。支持：
     * - **FOTA**：系统升级
     * - **APP**：应用升级
     * @example `FOTA`
     */
    "VersionType": string;
    /**
     * 设备ID，支持模糊匹配。
     * @example `AS23DG23SA5D43GA34SD23GW456E`
     */
    "DeviceId"?: string;
    /**
     * 源设备ID，支持模糊匹配。
     * @example `23452345234523452`
     */
    "OriginalId"?: string;
    /**
     * 分页索引，从1开始。
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 分页大小，支持10、20、50三种。
     * @example `20`
     */
    "PageSize": number;
}
