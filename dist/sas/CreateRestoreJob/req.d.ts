export interface CreateRestoreJobRequest {
    /**
     * 需要恢复的服务器的uuid。
     * @example `inet-ecs-4e876cb0-09f7-43b8-82ef-4bc7a93769b5`
     */
    "Uuid": string;
    /**
     * 需要恢复的快照id。
     * >调用[DescribeSnapshots](~~DescribeSnapshots~~)接口可以获取该参数。
     * @example `s-00023dhaatxp18mh****`
     */
    "SnapshotId": string;
    /**
     * 快照hash值。
     * >调用[DescribeSnapshots](~~DescribeSnapshots~~)接口可以获取该参数。
     * @example `d4b399edaad94b038e8f91873f19e3eae010ca30798fc36db3a164dd343f****`
     */
    "SnapshotHash": string;
    /**
     * 恢复路径。
     * @example `/root/testfls`
     */
    "Target": string;
    /**
     * 数据源类型。取值范围：
     * * **ECS_FILE**：表示ECS文件的备份快照。
     * * **File**：表示本地服务器备份快照。
     * @example `ECS_FILE`
     */
    "SourceType"?: string;
    /**
     * 恢复任务的备份仓库id。
     * >调用[DescribeSnapshots](~~DescribeSnapshots~~)接口可以获取该参数。
     * @example `v-0002n12wokck2q0x****`
     */
    "VaultId": string;
    /**
     * 服务器数据的恢复版本（即备份版本）。
     * >调用[DescribeSnapshots](~~DescribeSnapshots~~)接口可以获取该参数。
     * @example `165570544****`
     */
    "SnapshotVersion": string;
    /**
     * 恢复文件中所包含的目录。该目录是在创建防勒索防护策略时指定的，即需要防护的目录。
     * @example `["root"]`
     */
    "Includes": string;
}
