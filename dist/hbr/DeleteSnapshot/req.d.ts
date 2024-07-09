export interface DeleteSnapshotRequest {
    /**
     * 删除的凭证内容。
     * @example `02WJDOE7`
     */
    "Token"?: string;
    /**
     * 备份仓库ID。
     * @example `v-*********************`
     */
    "VaultId"?: string;
    /**
     * 客户端ID。删除ECS文件备份快照时，与**InstanceId**二者必选其一。
     * @example `c-*********************`
     */
    "ClientId"?: string;
    /**
     * 备份快照ID。
     * @example `s-*********************`
     */
    "SnapshotId": string;
    /**
     * 备份源类型。取值范围：
     * * **ECS_FILE**：表示ECS文件的备份快照。
     * * **OSS**：表示阿里云OSS的备份快照。
     * * **NAS**：表示阿里云NAS的备份快照。
     * @example `ECS_FILE`
     */
    "SourceType"?: string;
    /**
     * ECS实例ID。删除ECS文件备份快照时，与**ClientId**二者必选其一。
     * @example `i-*********************`
     */
    "InstanceId"?: string;
    /**
     * 是否强制删除最近一次备份快照。
     * - true表示强制删除最近一次备份快照。
     * - false（默认值）表示不强制删除。
     * @example `false`
     */
    "Force"?: boolean;
}
