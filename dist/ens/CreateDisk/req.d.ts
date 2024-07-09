export interface CreateDiskRequest {
    /**
     * 实例付费方式，当前仅支持**PostPaid**（按量付费）。
     * @example `PostPaid`
     */
    "InstanceChargeType": string;
    /**
     * 节点ID。
     * @example `cn-chengdu-telecom`
     */
    "EnsRegionId": string;
    /**
     * 磁盘种类。取值：
     * - 高效云盘：cloud_efficiency
     * - 全闪云盘：cloud_ssd
     * @example `cloud_efficiency`
     */
    "Category": string;
    /**
     * 磁盘大小，单位：GiB。
     * @example `20`
     */
    "Size"?: string;
    /**
     * 创建云盘使用的快照。
     * **SnapshotId**参数和**Size**参数存在以下限制：
     * - 如果**SnapshotId**参数对应的快照容量大于设置的**Size**参数值，实际创建的云盘大小为指定快照的大小。
     * - 如果**SnapshotId**参数对应的快照容量小于设置的**Size**参数值，实际创建的云盘大小为指定的**Size**参数值。
     * @example `s-897654321****`
     */
    "SnapshotId"?: string;
    /**
     * 是否加密云盘。取值范围：
     * - **true**：是
     * - **false**（默认值）：否
     * @example `false`
     */
    "Encrypted"?: boolean;
    /**
     * 云盘使用的KMS密钥ID。
     * >如果**Encrypted**置为**true**，**KMSKeyId**为空时则使用服务默认密钥。
     * @example `0e478b7a-4262-4802-b8cb-00d3fxxxxx`
     */
    "KMSKeyId"?: string;
    /**
     * 磁盘名称。
     * @example `yourDiskName`
     */
    "DiskName"?: string;
}
