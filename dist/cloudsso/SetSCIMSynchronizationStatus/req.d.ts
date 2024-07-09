export interface SetSCIMSynchronizationStatusRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * SCIM同步状态。取值：
     * - Enabled：启用。
     * - Disabled：禁用。
     * @example `Enabled`
     */
    "SCIMSynchronizationStatus"?: string;
}
