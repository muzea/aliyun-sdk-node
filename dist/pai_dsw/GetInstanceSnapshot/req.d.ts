export interface GetInstanceSnapshotRequest {
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~470439~~)。
     * @example `dsw-730xxxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 实例快照ID。如何获取实例快照ID，请参见[ListInstanceSnapshot](~~470434~~)。
     * @example `snp-05cexxxxxxxxx`
     */
    "SnapshotId": string;
}
