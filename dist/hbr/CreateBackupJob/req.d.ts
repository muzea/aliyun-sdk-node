export interface CreateBackupJobRequest {
    /**
     * 备份任务名称。
     * @example `k8s-backup-infra-20220131150046-hbr`
     */
    "JobName"?: string;
    /**
     * 数据源类型，取值范围：
     *   - **ECS_FILE**：表示ECS文件备份任务。
     *   - **UDM_ECS**：表示ECS整机备份任务。
     *   - **CONTAINER**表示容器备份任务。
     * @example `CONTAINER`
     */
    "SourceType": string;
    /**
     * 备份保留天数。
     * @example `15`
     */
    "Retention"?: number;
    /**
     * 仅当**SourceType**取值为**UDM_ECS**时，需要配置该参数。表示ECS实例ID。
     * @example `i-bp1xxxxxxxxxxxxxxysm`
     */
    "InstanceId"?: string;
    /**
     * 整机备份详情，类型为JSON字符串。
     * * doCopy：是否开启异地复制
     * * destinationRegionId：异地复制目标地域
     * * destinationRetention：异地复制备份点保留时间
     * * diskIdList：备份的云盘ID列表，为空时备份全部云盘。
     * * snapshotGroup：是否使用一致性快照组（仅实例所有云盘均为ESSD时有效）。
     * * appConsistent：是否使用应用一致性（需要搭配参数preScriptPath和postScriptPath使用）。
     * * preScriptPath：冻结脚本路径。
     * * postScriptPath：解冻脚本路径。
     * * enableWriters：仅当**AppConsistent**为**true**时，需要配置该参数。是否设置应用一致性快照（默认为 true）：
     *   * true：创建应用一致性快照
     *   * false：创建文件系统一致性快照
     * * enableFsFreeze：仅当**AppConsistent**为**true**时，需要配置该参数。是否在创建应用一致性快照前使用 Linux 的 FsFreeze 机制确保文件系统处于只读一致性。默认为 true。
     * * timeoutSeconds：仅当**AppConsistent**为**true**时，需要配置该参数。IO 冻结超时时间。默认为 30 秒。
     * @example `{
        "doCopy": false,
        "destinationRegionId": "",
        "destinationRetention": null,
        "diskIdList": [],
        "snapshotGroup": false,
        "appConsistent": false,
        "enableWriters": true,
        "preScriptPath": "",
        "postScriptPath": "",
        "enableFsFreeze": true,
        "timeoutInSeconds": 60
    }`
     */
    "Detail"?: any;
    /**
     * 备份类型。
     * * **COMPLETE**：全量备份。
     * * **INCREMENTAL**：增量备份。
     * @example `INCREMENTAL`
     */
    "BackupType"?: string;
    /**
     * 备份仓库ID。
     * @example `v-000xxxxxxxxxxxxxxy1v`
     */
    "VaultId"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示备份流量控制。格式为`{start}|{end}|{bandwidth}`。多个流量控制配置使用|分隔，并且配置时间不允许有重叠。
     * - **start**：起始小时。
     * - **end**：结束小时。
     * - **bandwidth**：限制速率，单位KB/s。
     * @example `0:24:NaN`
     */
    "SpeedLimit"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示是否使用Windows系统VSS定义备份路径。
     * - 此功能仅支持Windows类型ECS实例。
     * - 如果备份源中有数据更改，需要确保备份数据与源数据的一致时，才可配置为`["UseVSS":true]`。
     * - 选择使用VSS后，不支持多个文件目录同时备份。
     * @example `{"UseVSS":false}`
     */
    "Options"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示需要备份的路径，该路径下所有文件都备份。最多支持255个字符。
     * @example `["/home/alice/*.pdf", "/home/bob/*.txt"]`
     */
    "Include"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示不需要进行备份的路径，该路径下所有文件都不备份。最多支持255个字符。
     * @example `["/var", "/proc"]`
     */
    "Exclude"?: string;
    /**
     * 集群ID。
     * @example `cl-00068btz******oku`
     */
    "ClusterId"?: string;
    /**
     * 集群资源，仅**SourceType**取值为**CONTAINER**时需要配置该参数。
     * @example `[{\"resourceType\":\"PV\",\"backupMethod\":\"FILE\",\"resourceId\":\"674dac6d-74cd-47e9-a675-09e2f10d2c45\",\"resourceInfo\":\"{\\\"pv_name\\\":\\\"nas-650dac6d-74cd-47e9-a675-09e2f10d2c45\\\",\\\"pv_size\\\":\\\"8Gi\\\",\\\"storage_class\\\":\\\"alibabacloud-cnfs-nas\\\",\\\"pvc_name\\\":\\\"data-postgresql-default-0\\\",\\\"namespace\\\":\\\"database\\\"}\",\"host\":\"cn-huhehaote.192.168.13.133\",\"hostPrefix\":\"6f5e758e-8d35-4584-b9ce-8333adfc7547/volumes/kubernetes.io~csi/nas-670dac6d-74cd-47e9-a675-09e2f10d2c45/mount\",\"pvPath\":\"/\"}]`
     */
    "ContainerResources"?: string;
    /**
     * 是否由容器服务调用。默认为false。
     * @example `false`
     */
    "InitiatedByAck"?: boolean;
    /**
     * 集群ID，仅**SourceType**取值为**CONTAINER**时需要配置该参数。
     * @example `cc-000xxxxxxxxxxxxxxi00`
     */
    "ContainerClusterId"?: string;
    /**
     * 跨账号备份类型。支持：
     * - SELF_ACCOUNT：本账号备份
     * - CROSS_ACCOUNT：跨账号备份
     * @example `SELF_ACCOUNT`
     */
    "CrossAccountType"?: string;
    /**
     * 被当前账号管理的跨账号备份的原账号ID。
     * @example `158975xxxxxx4625`
     */
    "CrossAccountUserId"?: number;
    /**
     * 被当前账号管理的跨账号备份的原账号RAM中创建的角色名。
     * @example `BackupRole`
     */
    "CrossAccountRoleName"?: string;
}
