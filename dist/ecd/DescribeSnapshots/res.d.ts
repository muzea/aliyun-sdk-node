export interface DescribeSnapshotsResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `51592A88-0F2C-55E6-AD2C-2AD9C10D****`
     */
    RequestId: string;
    /**
     * 快照信息集合。
     */
    Snapshots: {
        /**
         * 快照的创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为`yyyy-mm-ddthh:mm:ssz`。
         * @example `2020-12-20T14:52:28Z`
         */
        CreationTime: string;
        /**
         * 快照状态。
         * @example `ACCOMPLISHED`
         */
        Status: string;
        /**
         * 快照创建类型。
         * @example `USER`
         */
        SnapshotType: string;
        /**
         * 快照名称。
         * @example `testSnapshotName`
         */
        SnapshotName: string;
        /**
         * 快照创建进度。单位为百分比。
         * @example `100%`
         */
        Progress: string;
        /**
         * 快照描述信息。
         * @example `testDescription`
         */
        Description: string;
        /**
         * 快照ID。
         * @example `s-2zeipxmnhej803x7****`
         */
        SnapshotId: string;
        /**
         * 正在创建的快照剩余完成时间。单位为秒。
         * > 当`Status`为`PROGRESSING`时，`RemainTime`的值显示为`-1`，表示正在计算剩余时间。
         * @example `30`
         */
        RemainTime: number;
        /**
         * 源磁盘容量。单位：GiB。
         * @example `150`
         */
        SourceDiskSize: string;
        /**
         * 源磁盘类型。
         * @example `SYSTEM`
         */
        SourceDiskType: string;
        /**
         * 快照所属的云电脑ID。
         * @example `ecd-g03l3tlm8djoj****`
         */
        DesktopId: string;
        /**
         * 云电脑名称。
         * @example `test`
         */
        DesktopName: string;
        /**
         * 云电脑状态。
         * @example `Running`
         */
        DesktopStatus: string;
        /**
         * 创建者。
         * @example `Administrator`
         */
        Creator: string;
        /**
         * 协议类型。
         * @example `ASP`
         */
        ProtocolType: string;
        /**
         * 是否开启磁盘加密。
         * @example `false`
         */
        VolumeEncryptionEnabled: boolean;
        /**
         * 开启磁盘加密的情况下使用的KMS的密钥ID。可通过[ListKeys](~~28951~~)接口获取。
         * @example `08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****`
         */
        VolumeEncryptionKey: string;
        /**
         * 快照创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为`yyyy-mm-ddthh:mm:ssz`。
         * @example `2020-12-20T14:52:28Z
        `
         */
        DeletionTime: string;
    }[];
}
