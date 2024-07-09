export interface CreateRestoreJobRequest {
    /**
     * 恢复目的地数据源类型，取值范围：
     *   - **ECS_FILE**：恢复到ECS文件。
     *   - **OSS**：恢复到阿里云OSS。
     *   - **NAS**：恢复到阿里云NAS。
     *   - **OTS_TABLE**：恢复到阿里云OTS。
     *   - **UDM\_ECS_ROLLBACK**：恢复到阿里云ECS整机。
     * @example `ECS_FILE`
     */
    "RestoreType": string;
    /**
     * 备份快照所属备份仓库ID。
     * @example `v-*********************`
     */
    "VaultId"?: string;
    /**
     * 备份快照ID。
     * @example `s-********************`
     */
    "SnapshotId"?: string;
    /**
     * 备份快照HASH值。
     * @example `f2fe...`
     */
    "SnapshotHash"?: string;
    /**
     * 数据源类型，取值范围：
     *   - **ECS_FILE**：恢复ECS文件。
     *   - **OSS**：恢复阿里云OSS。
     *   - **NAS**：恢复阿里云NAS。
     *   - **OTS_TABLE**：恢复到阿里云OTS。
     *   - **UDM_ECS**：恢复到阿里云ECS整机。
     * @example `ECS_FILE`
     */
    "SourceType": string;
    /**
     * 恢复任务参数
     * @example `{\"includes\":[],\"excludes\":[],\"conflictPolicy\":\"OVERWRITE_EXISTING\"}`
     */
    "Options"?: string;
    /**
     * 仅当**RestoreType**取值为**NAS**时，该参数有效。表示恢复目的地的文件系统ID。
     * @example `005494`
     */
    "TargetFileSystemId"?: string;
    /**
     * 仅当**RestoreType**取值为**NAS**时，该参数有效。表示恢复目的地的文件系统创建时间。
     * @example `1554347313`
     */
    "TargetCreateTime"?: number;
    /**
     * 仅当**RestoreType**取值为**ECS_FILE**时，该参数有效。表示恢复目的地的文件路径。
     * @example `C:\`
     */
    "TargetPath"?: string;
    /**
     * 仅当**RestoreType**取值为**OSS**时，该参数有效。表示恢复目的地的OSS bucket名称。
     * @example `hbr-backup-oss`
     */
    "TargetBucket"?: string;
    /**
     * 仅当**RestoreType**取值为**OSS**时，该参数有效。表示恢复目的地的对象前缀。
     * @example `hbr`
     */
    "TargetPrefix"?: string;
    /**
     * 整机备份详情。
     * @example `{\"sourceInstanceId\":\"i-uf62te6pm3iwsyxyz66q\",\"bootAfterRestore\":false}`
     */
    "UdmDetail"?: any;
    /**
     * 仅当**SourceType**取值为**UDM_ECS**时，该参数有效。表示恢复的目标地域。
     * @example `cn-shanghai`
     */
    "UdmRegionId"?: string;
    /**
     * 仅当**RestoreType**取值为**ECS_FILE**时，该参数有效。表示恢复目的地的ECS实例ID。
     * @example `i-*********************`
     */
    "TargetInstanceId"?: string;
    /**
     * 恢复的路径。该路径下所有文档都会被恢复。最多255个字符。
     * @example `["/home/alice/*.pdf", "/home/bob/*.txt"]`
     */
    "Include"?: string;
    /**
     * 不做恢复的路径。该路径下所有文档都不会被恢复。最多255个字符。
     * @example `["/var", "/proc"]`
     */
    "Exclude"?: string;
    /**
     * 恢复的目标容器详情。
     * @example `{\"host\":\"k8s-node1\",\"hostPrefix\":\"/var/lib/kubelet/pods/4acb31fe-8577-40ff-bc8c-eccabd835f73/volumes/kubernetes.io~csi/pvc-b050b00e-ef17-4792-aab1-1642355cf1f4/mount\",\"pvPath\":\"/\"}`
     */
    "TargetContainer"?: string;
    /**
     * 是否由容器服务调用。默认为false。
     * @example `false`
     */
    "InitiatedByAck"?: boolean;
    /**
     * 恢复的目标容器集群ID。
     * @example `cc-000amjsc7o1h9506oob7`
     */
    "TargetContainerClusterId"?: string;
    /**
     * 恢复的目标表格存储实例名称。
     * @example `instancename`
     */
    "TargetInstanceName"?: string;
    /**
     * 恢复的目标表格存储的数据表名称。
     * @example `tablename`
     */
    "TargetTableName"?: string;
    /**
     * 恢复的表格存储的时间。UNIX时间，单位为秒。
     * @example `1642496881`
     */
    "TargetTime"?: number;
    /**
     * 表格存储实例详情。
     */
    "OtsDetail"?: any;
    /**
     * 跨账号备份类型。支持：
     * - SELF_ACCOUNT：本账号备份
     * - CROSS_ACCOUNT：跨账号备份
     * @example `SELF_ACCOUNT`
     */
    "CrossAccountType"?: string;
    /**
     * 被当前账号管理的跨账号备份的原账号ID。
     * @example `158975xxxxx4625`
     */
    "CrossAccountUserId"?: number;
    /**
     * 被当前账号管理的跨账号备份的原账号RAM中创建的角色名。
     * @example `BackupRole`
     */
    "CrossAccountRoleName"?: string;
    /**
     * 恢复至本地的详细信息。
     * @example `{"cpu":4,"extra":"{\"restoreVMNamePrefix\":\"627-\",\"dataCenterName\":\"SDDC-Datacenter\",\"dataStoreId\":\"datastore-50\",\"folderId\":\"group-v49\",\"resourcePoolId\":\"resgroup-46\",\"locationName\":\"vcenter.pc-uf600a******1.acvs.aliyuncs.com/SDDC-Datacenter/Workloads\",\"computeResourceName\":\"SDDC-Datacenter/Default_c-uf600a******\",\"dataStoreName\":\"Default_c-uf600a******​/WorkloadDatastore\",\"networkMoReference\":\"DistributedVirtualPortgroup:dvportgroup-1001\",\"useHotAdd\":false}","instanceId":"i-2vc******z","memoryInMB":8192,"serverId":"0fdc0c86-eb92-4e05-91ab-eeaf9fb6ad01","uefiBoot":false}`
     */
    "FailbackDetail"?: any;
}
