import { CreateDBRequest } from "./CreateDB/req";
import { CreateDBResponse } from "./CreateDB/res";
import { CreateAccountRequest } from "./CreateAccount/req";
import { CreateAccountResponse } from "./CreateAccount/res";
import { CreateDBInstanceRequest } from "./CreateDBInstance/req";
import { CreateDBInstanceResponse } from "./CreateDBInstance/res";
import { CreateSuperAccountRequest } from "./CreateSuperAccount/req";
import { CreateSuperAccountResponse } from "./CreateSuperAccount/res";
import { DeleteAccountRequest } from "./DeleteAccount/req";
import { DeleteAccountResponse } from "./DeleteAccount/res";
import { DeleteDBInstanceRequest } from "./DeleteDBInstance/req";
import { DeleteDBInstanceResponse } from "./DeleteDBInstance/res";
import { DeleteDBRequest } from "./DeleteDB/req";
import { DeleteDBResponse } from "./DeleteDB/res";
import { DescribeAccountListRequest } from "./DescribeAccountList/req";
import { DescribeAccountListResponse } from "./DescribeAccountList/res";
import { DescribeDBInstanceAttributeRequest } from "./DescribeDBInstanceAttribute/req";
import { DescribeDBInstanceAttributeResponse } from "./DescribeDBInstanceAttribute/res";
import { DescribeDBInstancesRequest } from "./DescribeDBInstances/req";
import { DescribeDBInstancesResponse } from "./DescribeDBInstances/res";
import { DescribeDbListRequest } from "./DescribeDbList/req";
import { DescribeDbListResponse } from "./DescribeDbList/res";
import { DescribeDistributeTableListRequest } from "./DescribeDistributeTableList/req";
import { DescribeDistributeTableListResponse } from "./DescribeDistributeTableList/res";
import { DescribeParametersRequest } from "./DescribeParameters/req";
import { DescribeParametersResponse } from "./DescribeParameters/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeSecurityIpsRequest } from "./DescribeSecurityIps/req";
import { DescribeSecurityIpsResponse } from "./DescribeSecurityIps/res";
import { ModifyAccountDescriptionRequest } from "./ModifyAccountDescription/req";
import { ModifyAccountDescriptionResponse } from "./ModifyAccountDescription/res";
import { ModifyDBInstanceClassRequest } from "./ModifyDBInstanceClass/req";
import { ModifyDBInstanceClassResponse } from "./ModifyDBInstanceClass/res";
import { ModifyDBInstanceConfigRequest } from "./ModifyDBInstanceConfig/req";
import { ModifyDBInstanceConfigResponse } from "./ModifyDBInstanceConfig/res";
import { ModifyDBInstanceDescriptionRequest } from "./ModifyDBInstanceDescription/req";
import { ModifyDBInstanceDescriptionResponse } from "./ModifyDBInstanceDescription/res";
import { ModifyDatabaseDescriptionRequest } from "./ModifyDatabaseDescription/req";
import { ModifyDatabaseDescriptionResponse } from "./ModifyDatabaseDescription/res";
import { ModifyParameterRequest } from "./ModifyParameter/req";
import { ModifyParameterResponse } from "./ModifyParameter/res";
import { ModifySecurityIpsRequest } from "./ModifySecurityIps/req";
import { ModifySecurityIpsResponse } from "./ModifySecurityIps/res";
import { RestartDBInstanceRequest } from "./RestartDBInstance/req";
import { RestartDBInstanceResponse } from "./RestartDBInstance/res";
import { UpdatePolarDBXInstanceNodeRequest } from "./UpdatePolarDBXInstanceNode/req";
import { UpdatePolarDBXInstanceNodeResponse } from "./UpdatePolarDBXInstanceNode/res";
import { UpgradeDBInstanceKernelVersionRequest } from "./UpgradeDBInstanceKernelVersion/req";
import { UpgradeDBInstanceKernelVersionResponse } from "./UpgradeDBInstanceKernelVersion/res";
import { CreateBackupRequest } from "./CreateBackup/req";
import { CreateBackupResponse } from "./CreateBackup/res";
import { DescribeBackupPolicyRequest } from "./DescribeBackupPolicy/req";
import { DescribeBackupPolicyResponse } from "./DescribeBackupPolicy/res";
import { DescribeBackupSetListRequest } from "./DescribeBackupSetList/req";
import { DescribeBackupSetListResponse } from "./DescribeBackupSetList/res";
import { UpdateBackupPolicyRequest } from "./UpdateBackupPolicy/req";
import { UpdateBackupPolicyResponse } from "./UpdateBackupPolicy/res";
import { AllocateInstancePublicConnectionRequest } from "./AllocateInstancePublicConnection/req";
import { AllocateInstancePublicConnectionResponse } from "./AllocateInstancePublicConnection/res";
import { ReleaseInstancePublicConnectionRequest } from "./ReleaseInstancePublicConnection/req";
import { ReleaseInstancePublicConnectionResponse } from "./ReleaseInstancePublicConnection/res";
import { DescribeScaleOutMigrateTaskListRequest } from "./DescribeScaleOutMigrateTaskList/req";
import { DescribeScaleOutMigrateTaskListResponse } from "./DescribeScaleOutMigrateTaskList/res";
import { DescribeTasksRequest } from "./DescribeTasks/req";
import { DescribeTasksResponse } from "./DescribeTasks/res";
import { DescribeDBInstanceSSLRequest } from "./DescribeDBInstanceSSL/req";
import { DescribeDBInstanceSSLResponse } from "./DescribeDBInstanceSSL/res";
import { EnableRightsSeparationRequest } from "./EnableRightsSeparation/req";
import { EnableRightsSeparationResponse } from "./EnableRightsSeparation/res";
import { UpdateDBInstanceSSLRequest } from "./UpdateDBInstanceSSL/req";
import { UpdateDBInstanceSSLResponse } from "./UpdateDBInstanceSSL/res";
import { DescribeCharacterSetRequest } from "./DescribeCharacterSet/req";
import { DescribeCharacterSetResponse } from "./DescribeCharacterSet/res";
import { DescribeDBInstanceConfigRequest } from "./DescribeDBInstanceConfig/req";
import { DescribeDBInstanceConfigResponse } from "./DescribeDBInstanceConfig/res";
import { DescribeParameterTemplatesRequest } from "./DescribeParameterTemplates/req";
import { DescribeParameterTemplatesResponse } from "./DescribeParameterTemplates/res";
import { DisableRightsSeparationRequest } from "./DisableRightsSeparation/req";
import { DisableRightsSeparationResponse } from "./DisableRightsSeparation/res";
import { ModifyAccountPrivilegeRequest } from "./ModifyAccountPrivilege/req";
import { ModifyAccountPrivilegeResponse } from "./ModifyAccountPrivilege/res";
import { ResetAccountPasswordRequest } from "./ResetAccountPassword/req";
import { ResetAccountPasswordResponse } from "./ResetAccountPassword/res";
import { DescribeDBInstanceTopologyRequest } from "./DescribeDBInstanceTopology/req";
import { DescribeDBInstanceTopologyResponse } from "./DescribeDBInstanceTopology/res";
import { DescribeUserEncryptionKeyListRequest } from "./DescribeUserEncryptionKeyList/req";
import { DescribeUserEncryptionKeyListResponse } from "./DescribeUserEncryptionKeyList/res";
import { CheckCloudResourceAuthorizedRequest } from "./CheckCloudResourceAuthorized/req";
import { CheckCloudResourceAuthorizedResponse } from "./CheckCloudResourceAuthorized/res";
import { DescribeBinaryLogListRequest } from "./DescribeBinaryLogList/req";
import { DescribeBinaryLogListResponse } from "./DescribeBinaryLogList/res";
import { DescribeDBInstanceTDERequest } from "./DescribeDBInstanceTDE/req";
import { DescribeDBInstanceTDEResponse } from "./DescribeDBInstanceTDE/res";
import { UpdateDBInstanceTDERequest } from "./UpdateDBInstanceTDE/req";
import { UpdateDBInstanceTDEResponse } from "./UpdateDBInstanceTDE/res";
import { DescribeDBNodePerformanceRequest } from "./DescribeDBNodePerformance/req";
import { DescribeDBNodePerformanceResponse } from "./DescribeDBNodePerformance/res";
import { CancelActiveOperationTasksRequest } from "./CancelActiveOperationTasks/req";
import { CancelActiveOperationTasksResponse } from "./CancelActiveOperationTasks/res";
import { DescribeActiveOperationMaintainConfRequest } from "./DescribeActiveOperationMaintainConf/req";
import { DescribeActiveOperationMaintainConfResponse } from "./DescribeActiveOperationMaintainConf/res";
import { DescribeEventsRequest } from "./DescribeEvents/req";
import { DescribeEventsResponse } from "./DescribeEvents/res";
import { ModifyActiveOperationTasksRequest } from "./ModifyActiveOperationTasks/req";
import { ModifyActiveOperationTasksResponse } from "./ModifyActiveOperationTasks/res";
import { DescribeActiveOperationTaskCountRequest } from "./DescribeActiveOperationTaskCount/req";
import { DescribeActiveOperationTaskCountResponse } from "./DescribeActiveOperationTaskCount/res";
import { ModifyActiveOperationMaintainConfRequest } from "./ModifyActiveOperationMaintainConf/req";
import { ModifyActiveOperationMaintainConfResponse } from "./ModifyActiveOperationMaintainConf/res";
import { DescribeActiveOperationTasksRequest } from "./DescribeActiveOperationTasks/req";
import { DescribeActiveOperationTasksResponse } from "./DescribeActiveOperationTasks/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { DescribeTagsRequest } from "./DescribeTags/req";
import { DescribeTagsResponse } from "./DescribeTags/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ModifyDBInstanceConnectionStringRequest } from "./ModifyDBInstanceConnectionString/req";
import { ModifyDBInstanceConnectionStringResponse } from "./ModifyDBInstanceConnectionString/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DescribeBackupSetRequest } from "./DescribeBackupSet/req";
import { DescribeBackupSetResponse } from "./DescribeBackupSet/res";
import { AlignStoragePrimaryAzoneRequest } from "./AlignStoragePrimaryAzone/req";
import { AlignStoragePrimaryAzoneResponse } from "./AlignStoragePrimaryAzone/res";
import { DescribeDBInstanceHARequest } from "./DescribeDBInstanceHA/req";
import { DescribeDBInstanceHAResponse } from "./DescribeDBInstanceHA/res";
import { SwitchDBInstanceHARequest } from "./SwitchDBInstanceHA/req";
import { SwitchDBInstanceHAResponse } from "./SwitchDBInstanceHA/res";
import { DescribeColdDataBasicInfoRequest } from "./DescribeColdDataBasicInfo/req";
import { DescribeColdDataBasicInfoResponse } from "./DescribeColdDataBasicInfo/res";
import { DescribeArchiveTableListRequest } from "./DescribeArchiveTableList/req";
import { DescribeArchiveTableListResponse } from "./DescribeArchiveTableList/res";
import { AllocateColdDataVolumeRequest } from "./AllocateColdDataVolume/req";
import { AllocateColdDataVolumeResponse } from "./AllocateColdDataVolume/res";
import { ReleaseColdDataVolumeRequest } from "./ReleaseColdDataVolume/req";
import { ReleaseColdDataVolumeResponse } from "./ReleaseColdDataVolume/res";
import { DescribeDBInstanceViaEndpointRequest } from "./DescribeDBInstanceViaEndpoint/req";
import { DescribeDBInstanceViaEndpointResponse } from "./DescribeDBInstanceViaEndpoint/res";

interface POLARDBX {
    /**
     * 调用CreateDB接口创建数据库。
     */
    CreateDB(query: CreateDBRequest): Promise<CreateDBResponse>;
    /**
     * 调用CreateAccount接口创建账号。
     */
    CreateAccount(query: CreateAccountRequest): Promise<CreateAccountResponse>;
    /**
     * 调用CreateDBInstance接口创建PolarDB-X实例。
     */
    CreateDBInstance(query: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse>;
    /**
     * 调用CreateSuperAccount接口创建高权限账号，一个实例只能有一个高权限账号。
     */
    CreateSuperAccount(query: CreateSuperAccountRequest): Promise<CreateSuperAccountResponse>;
    /**
     * 调用DeleteAccount接口删除账号。
     */
    DeleteAccount(query: DeleteAccountRequest): Promise<DeleteAccountResponse>;
    /**
     * 调用DeleteDBInstance接口删除实例。
     */
    DeleteDBInstance(query: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse>;
    /**
     * 调用DeleteDB接口删除数据库。
     */
    DeleteDB(query: DeleteDBRequest): Promise<DeleteDBResponse>;
    /**
     * 调用DescribeAccountList接口获取账号列表。
     */
    DescribeAccountList(query: DescribeAccountListRequest): Promise<DescribeAccountListResponse>;
    /**
     * 调用DescribeDBInstanceAttribute接口获取实例属性。
     */
    DescribeDBInstanceAttribute(query: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse>;
    /**
     * 调用DescribeDBInstances接口查询实例列表。
     */
    DescribeDBInstances(query: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse>;
    /**
     * 调用DescribeDbList接口获取数据库列表。
     */
    DescribeDbList(query: DescribeDbListRequest): Promise<DescribeDbListResponse>;
    /**
     * 调用DescribeDistributeTableList接口获取数据库表列表。
     */
    DescribeDistributeTableList(query: DescribeDistributeTableListRequest): Promise<DescribeDistributeTableListResponse>;
    /**
     * 调用DescribeParameters接口获取实例参数。
     */
    DescribeParameters(query: DescribeParametersRequest): Promise<DescribeParametersResponse>;
    /**
     * 调用DescribeRegions接口获取地域列表。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用DescribeSecurityIps接口查看实例白名单。
     */
    DescribeSecurityIps(query: DescribeSecurityIpsRequest): Promise<DescribeSecurityIpsResponse>;
    /**
     * 调用ModifyAccountDescription接口修改账号备注描述。
     */
    ModifyAccountDescription(query: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse>;
    /**
     * 调用ModifyDBInstanceClass接口修改实例规格。
     */
    ModifyDBInstanceClass(query: ModifyDBInstanceClassRequest): Promise<ModifyDBInstanceClassResponse>;
    /**
     * 调用ModifyDBInstanceConfig接口修改实例配置项。
     */
    ModifyDBInstanceConfig(query: ModifyDBInstanceConfigRequest): Promise<ModifyDBInstanceConfigResponse>;
    /**
     * 调用ModifyDBInstanceDescription接口修改实例备注描述。
     */
    ModifyDBInstanceDescription(query: ModifyDBInstanceDescriptionRequest): Promise<ModifyDBInstanceDescriptionResponse>;
    /**
     * 调用ModifyDatabaseDescription接口修改数据库备注描述。
     */
    ModifyDatabaseDescription(query: ModifyDatabaseDescriptionRequest): Promise<ModifyDatabaseDescriptionResponse>;
    /**
     * 调用ModifyParameter接口修改实例参数，包括计算层和存储层。
     */
    ModifyParameter(query: ModifyParameterRequest): Promise<ModifyParameterResponse>;
    /**
     * 调用ModifySecurityIps接口修改实例白名单。
     */
    ModifySecurityIps(query: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse>;
    /**
     * 调用RestartDBInstance接口重启实例。
     */
    RestartDBInstance(query: RestartDBInstanceRequest): Promise<RestartDBInstanceResponse>;
    /**
     * 调用UpdatePolarDBXInstanceNode接口变更实例节点数，包括扩容和缩容。该请求会产生交易订单。
     */
    UpdatePolarDBXInstanceNode(query: UpdatePolarDBXInstanceNodeRequest): Promise<UpdatePolarDBXInstanceNodeResponse>;
    /**
     * 调用UpgradeDBInstanceKernelVersion接口更新实例内核版本。
     */
    UpgradeDBInstanceKernelVersion(query: UpgradeDBInstanceKernelVersionRequest): Promise<UpgradeDBInstanceKernelVersionResponse>;
    /**
     * 调用CreateBackup接口创建备份。
     */
    CreateBackup(query: CreateBackupRequest): Promise<CreateBackupResponse>;
    /**
     * 调用DescribeBackupPolicy接口查询实例备份设置。
     */
    DescribeBackupPolicy(query: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse>;
    /**
     * 调用DescribeBackupSetList接口查看备份集列表。
     */
    DescribeBackupSetList(query: DescribeBackupSetListRequest): Promise<DescribeBackupSetListResponse>;
    /**
     * 调用UpdateBackupPolicy接口修改实例备份策略。
     */
    UpdateBackupPolicy(query: UpdateBackupPolicyRequest): Promise<UpdateBackupPolicyResponse>;
    /**
     * 调用AllocateInstancePublicConnection接口创建公网IP。
     */
    AllocateInstancePublicConnection(query: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse>;
    /**
     * 调用ReleaseInstancePublicConnection接口释放实例公网连接。
     */
    ReleaseInstancePublicConnection(query: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse>;
    /**
     * 展示ScaleOut迁移任务进度。
     */
    DescribeScaleOutMigrateTaskList(query: DescribeScaleOutMigrateTaskListRequest): Promise<DescribeScaleOutMigrateTaskListResponse>;
    /**
     * 获取实例任务列表。
     */
    DescribeTasks(query: DescribeTasksRequest): Promise<DescribeTasksResponse>;
    /**
     * 查看SSL信息。
     */
    DescribeDBInstanceSSL(query: DescribeDBInstanceSSLRequest): Promise<DescribeDBInstanceSSLResponse>;
    /**
     * 打开三权分立。
     */
    EnableRightsSeparation(query: EnableRightsSeparationRequest): Promise<EnableRightsSeparationResponse>;
    /**
     * 更新实例SSL配置。
     */
    UpdateDBInstanceSSL(query: UpdateDBInstanceSSLRequest): Promise<UpdateDBInstanceSSLResponse>;
    /**
     * 调用DescribeCharacterSet接口查询目标实例下数据库所支持的字符集类型。
     */
    DescribeCharacterSet(query: DescribeCharacterSetRequest): Promise<DescribeCharacterSetResponse>;
    /**
     * 调用DescribeDBInstanceConfig接口获取实例配置参数。
     */
    DescribeDBInstanceConfig(query: DescribeDBInstanceConfigRequest): Promise<DescribeDBInstanceConfigResponse>;
    /**
     * 调用DescribeParameterTemplates接口获取实例参数模版列表。
     */
    DescribeParameterTemplates(query: DescribeParameterTemplatesRequest): Promise<DescribeParameterTemplatesResponse>;
    /**
     * 关闭三权分立。
     */
    DisableRightsSeparation(query: DisableRightsSeparationRequest): Promise<DisableRightsSeparationResponse>;
    /**
     * 修改普通账号的权限。
     */
    ModifyAccountPrivilege(query: ModifyAccountPrivilegeRequest): Promise<ModifyAccountPrivilegeResponse>;
    /**
     * 重置账号密码。
     */
    ResetAccountPassword(query: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse>;
    /**
     * 调用DescribeDBInstanceTopology接口获取实例拓扑信息。
     */
    DescribeDBInstanceTopology(query: DescribeDBInstanceTopologyRequest): Promise<DescribeDBInstanceTopologyResponse>;
    /**
     * 调用DescribeUserEncryptionKeyList接口获取用户TDE秘钥列表。
     */
    DescribeUserEncryptionKeyList(query: DescribeUserEncryptionKeyListRequest): Promise<DescribeUserEncryptionKeyListResponse>;
    /**
     * 调用CheckCloudResourceAuthorized接口查询PolarDB-X实例是否已被授权使用KMS密钥服务。
     */
    CheckCloudResourceAuthorized(query: CheckCloudResourceAuthorizedRequest): Promise<CheckCloudResourceAuthorizedResponse>;
    /**
     * 调用DescribeBinaryLogList接口查询Binlog日志。
     */
    DescribeBinaryLogList(query: DescribeBinaryLogListRequest): Promise<DescribeBinaryLogListResponse>;
    /**
     * 调用DescribeDBInstanceTDE接口获取实例TDE的详细信息。
     */
    DescribeDBInstanceTDE(query: DescribeDBInstanceTDERequest): Promise<DescribeDBInstanceTDEResponse>;
    /**
     * 调用UpdateDBInstanceTDE接口开启实例TDE。
     */
    UpdateDBInstanceTDE(query: UpdateDBInstanceTDERequest): Promise<UpdateDBInstanceTDEResponse>;
    /**
     * 调用DescribeDBNodePerformance接口查询实例性能数据。
     */
    DescribeDBNodePerformance(query: DescribeDBNodePerformanceRequest): Promise<DescribeDBNodePerformanceResponse>;
    /**
     * 调用CancelActiveOperationTasks接口取消运维事件任务。
     */
    CancelActiveOperationTasks(query: CancelActiveOperationTasksRequest): Promise<CancelActiveOperationTasksResponse>;
    /**
     * 调用DescribeActiveOperationMaintainConf接口展示运维时间配置。
     */
    DescribeActiveOperationMaintainConf(query: DescribeActiveOperationMaintainConfRequest): Promise<DescribeActiveOperationMaintainConfResponse>;
    /**
     * 获取历史事件。
     */
    DescribeEvents(query: DescribeEventsRequest): Promise<DescribeEventsResponse>;
    /**
     * 调用ModifyActiveOperationTasks接口修改运维事件执行时间。
     */
    ModifyActiveOperationTasks(query: ModifyActiveOperationTasksRequest): Promise<ModifyActiveOperationTasksResponse>;
    /**
     * 获取运维事件总数。
     */
    DescribeActiveOperationTaskCount(query: DescribeActiveOperationTaskCountRequest): Promise<DescribeActiveOperationTaskCountResponse>;
    /**
     * 调用ModifyActiveOperationMaintainConf接口修改运维事件时间配置。
     */
    ModifyActiveOperationMaintainConf(query: ModifyActiveOperationMaintainConfRequest): Promise<ModifyActiveOperationMaintainConfResponse>;
    /**
     * 调用DescribeActiveOperationTasks接口获取运维事件。
     */
    DescribeActiveOperationTasks(query: DescribeActiveOperationTasksRequest): Promise<DescribeActiveOperationTasksResponse>;
    /**
     * 修改实例资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 获取标签信息。
     */
    DescribeTags(query: DescribeTagsRequest): Promise<DescribeTagsResponse>;
    /**
     * 标签列表获取。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 修改实例地址链接串。
     */
    ModifyDBInstanceConnectionString(query: ModifyDBInstanceConnectionStringRequest): Promise<ModifyDBInstanceConnectionStringResponse>;
    /**
     * 调用TagResources接口为资源打标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 资源删除标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 调用DescribeBackupSet接口查看备份集详情。
     */
    DescribeBackupSet(query: DescribeBackupSetRequest): Promise<DescribeBackupSetResponse>;
    AlignStoragePrimaryAzone(query: AlignStoragePrimaryAzoneRequest): Promise<AlignStoragePrimaryAzoneResponse>;
    DescribeDBInstanceHA(query: DescribeDBInstanceHARequest): Promise<DescribeDBInstanceHAResponse>;
    SwitchDBInstanceHA(query: SwitchDBInstanceHARequest): Promise<SwitchDBInstanceHAResponse>;
    /**
     * 冷存储基础信息
     */
    DescribeColdDataBasicInfo(query: DescribeColdDataBasicInfoRequest): Promise<DescribeColdDataBasicInfoResponse>;
    /**
     * 冷存储表列表
     */
    DescribeArchiveTableList(query: DescribeArchiveTableListRequest): Promise<DescribeArchiveTableListResponse>;
    /**
     * 调用AllocateColdDataVolume接口
     */
    AllocateColdDataVolume(query: AllocateColdDataVolumeRequest): Promise<AllocateColdDataVolumeResponse>;
    /**
     * 调用ReleaseColdDataVolume接口
     */
    ReleaseColdDataVolume(query: ReleaseColdDataVolumeRequest): Promise<ReleaseColdDataVolumeResponse>;
    /**
     * 通过实例的连接地址获取实例的基本信息
     */
    DescribeDBInstanceViaEndpoint(query: DescribeDBInstanceViaEndpointRequest): Promise<DescribeDBInstanceViaEndpointResponse>;
}
export default POLARDBX;
