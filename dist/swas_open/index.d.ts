import { CreateFirewallRuleRequest } from "./CreateFirewallRule/req";
import { CreateFirewallRuleResponse } from "./CreateFirewallRule/res";
import { CreateInstancesRequest } from "./CreateInstances/req";
import { CreateInstancesResponse } from "./CreateInstances/res";
import { CreateSnapshotRequest } from "./CreateSnapshot/req";
import { CreateSnapshotResponse } from "./CreateSnapshot/res";
import { DeleteFirewallRuleRequest } from "./DeleteFirewallRule/req";
import { DeleteFirewallRuleResponse } from "./DeleteFirewallRule/res";
import { DeleteSnapshotRequest } from "./DeleteSnapshot/req";
import { DeleteSnapshotResponse } from "./DeleteSnapshot/res";
import { ListDisksRequest } from "./ListDisks/req";
import { ListDisksResponse } from "./ListDisks/res";
import { ListFirewallRulesRequest } from "./ListFirewallRules/req";
import { ListFirewallRulesResponse } from "./ListFirewallRules/res";
import { ListImagesRequest } from "./ListImages/req";
import { ListImagesResponse } from "./ListImages/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { ListPlansRequest } from "./ListPlans/req";
import { ListPlansResponse } from "./ListPlans/res";
import { ListRegionsRequest } from "./ListRegions/req";
import { ListRegionsResponse } from "./ListRegions/res";
import { ListSnapshotsRequest } from "./ListSnapshots/req";
import { ListSnapshotsResponse } from "./ListSnapshots/res";
import { RebootInstanceRequest } from "./RebootInstance/req";
import { RebootInstanceResponse } from "./RebootInstance/res";
import { RenewInstanceRequest } from "./RenewInstance/req";
import { RenewInstanceResponse } from "./RenewInstance/res";
import { ResetDiskRequest } from "./ResetDisk/req";
import { ResetDiskResponse } from "./ResetDisk/res";
import { ResetSystemRequest } from "./ResetSystem/req";
import { ResetSystemResponse } from "./ResetSystem/res";
import { StartInstanceRequest } from "./StartInstance/req";
import { StartInstanceResponse } from "./StartInstance/res";
import { StopInstanceRequest } from "./StopInstance/req";
import { StopInstanceResponse } from "./StopInstance/res";
import { UpdateInstanceAttributeRequest } from "./UpdateInstanceAttribute/req";
import { UpdateInstanceAttributeResponse } from "./UpdateInstanceAttribute/res";
import { UpgradeInstanceRequest } from "./UpgradeInstance/req";
import { UpgradeInstanceResponse } from "./UpgradeInstance/res";
import { ListInstancesTrafficPackagesRequest } from "./ListInstancesTrafficPackages/req";
import { ListInstancesTrafficPackagesResponse } from "./ListInstancesTrafficPackages/res";
import { ModifyImageShareStatusRequest } from "./ModifyImageShareStatus/req";
import { ModifyImageShareStatusResponse } from "./ModifyImageShareStatus/res";
import { DeleteCustomImageRequest } from "./DeleteCustomImage/req";
import { DeleteCustomImageResponse } from "./DeleteCustomImage/res";
import { ListInstancePlansModificationRequest } from "./ListInstancePlansModification/req";
import { ListInstancePlansModificationResponse } from "./ListInstancePlansModification/res";
import { CreateCustomImageRequest } from "./CreateCustomImage/req";
import { CreateCustomImageResponse } from "./CreateCustomImage/res";
import { InstallCloudAssistantRequest } from "./InstallCloudAssistant/req";
import { InstallCloudAssistantResponse } from "./InstallCloudAssistant/res";
import { DescribeInvocationsRequest } from "./DescribeInvocations/req";
import { DescribeInvocationsResponse } from "./DescribeInvocations/res";
import { DescribeCloudAssistantStatusRequest } from "./DescribeCloudAssistantStatus/req";
import { DescribeCloudAssistantStatusResponse } from "./DescribeCloudAssistantStatus/res";
import { DescribeInvocationResultRequest } from "./DescribeInvocationResult/req";
import { DescribeInvocationResultResponse } from "./DescribeInvocationResult/res";
import { LoginInstanceRequest } from "./LoginInstance/req";
import { LoginInstanceResponse } from "./LoginInstance/res";
import { RunCommandRequest } from "./RunCommand/req";
import { RunCommandResponse } from "./RunCommand/res";
import { AllocatePublicConnectionRequest } from "./AllocatePublicConnection/req";
import { AllocatePublicConnectionResponse } from "./AllocatePublicConnection/res";
import { RestartDatabaseInstanceRequest } from "./RestartDatabaseInstance/req";
import { RestartDatabaseInstanceResponse } from "./RestartDatabaseInstance/res";
import { DescribeDatabaseSlowLogRecordsRequest } from "./DescribeDatabaseSlowLogRecords/req";
import { DescribeDatabaseSlowLogRecordsResponse } from "./DescribeDatabaseSlowLogRecords/res";
import { DescribeDatabaseErrorLogsRequest } from "./DescribeDatabaseErrorLogs/req";
import { DescribeDatabaseErrorLogsResponse } from "./DescribeDatabaseErrorLogs/res";
import { ResetDatabaseAccountPasswordRequest } from "./ResetDatabaseAccountPassword/req";
import { ResetDatabaseAccountPasswordResponse } from "./ResetDatabaseAccountPassword/res";
import { ModifyDatabaseInstanceParameterRequest } from "./ModifyDatabaseInstanceParameter/req";
import { ModifyDatabaseInstanceParameterResponse } from "./ModifyDatabaseInstanceParameter/res";
import { DescribeDatabaseInstanceMetricDataRequest } from "./DescribeDatabaseInstanceMetricData/req";
import { DescribeDatabaseInstanceMetricDataResponse } from "./DescribeDatabaseInstanceMetricData/res";
import { StopDatabaseInstanceRequest } from "./StopDatabaseInstance/req";
import { StopDatabaseInstanceResponse } from "./StopDatabaseInstance/res";
import { ReleasePublicConnectionRequest } from "./ReleasePublicConnection/req";
import { ReleasePublicConnectionResponse } from "./ReleasePublicConnection/res";
import { DescribeDatabaseInstancesRequest } from "./DescribeDatabaseInstances/req";
import { DescribeDatabaseInstancesResponse } from "./DescribeDatabaseInstances/res";
import { StartDatabaseInstanceRequest } from "./StartDatabaseInstance/req";
import { StartDatabaseInstanceResponse } from "./StartDatabaseInstance/res";
import { DescribeDatabaseInstanceParametersRequest } from "./DescribeDatabaseInstanceParameters/req";
import { DescribeDatabaseInstanceParametersResponse } from "./DescribeDatabaseInstanceParameters/res";
import { ModifyDatabaseInstanceDescriptionRequest } from "./ModifyDatabaseInstanceDescription/req";
import { ModifyDatabaseInstanceDescriptionResponse } from "./ModifyDatabaseInstanceDescription/res";
import { ModifyFirewallRuleRequest } from "./ModifyFirewallRule/req";
import { ModifyFirewallRuleResponse } from "./ModifyFirewallRule/res";
import { DescribeInstanceVncUrlRequest } from "./DescribeInstanceVncUrl/req";
import { DescribeInstanceVncUrlResponse } from "./DescribeInstanceVncUrl/res";
import { CreateFirewallRulesRequest } from "./CreateFirewallRules/req";
import { CreateFirewallRulesResponse } from "./CreateFirewallRules/res";
import { DeleteSnapshotsRequest } from "./DeleteSnapshots/req";
import { DeleteSnapshotsResponse } from "./DeleteSnapshots/res";
import { ListCustomImagesRequest } from "./ListCustomImages/req";
import { ListCustomImagesResponse } from "./ListCustomImages/res";
import { UpdateDiskAttributeRequest } from "./UpdateDiskAttribute/req";
import { UpdateDiskAttributeResponse } from "./UpdateDiskAttribute/res";
import { UpdateSnapshotAttributeRequest } from "./UpdateSnapshotAttribute/req";
import { UpdateSnapshotAttributeResponse } from "./UpdateSnapshotAttribute/res";
import { DisableFirewallRuleRequest } from "./DisableFirewallRule/req";
import { DisableFirewallRuleResponse } from "./DisableFirewallRule/res";
import { DescribeSecurityAgentStatusRequest } from "./DescribeSecurityAgentStatus/req";
import { DescribeSecurityAgentStatusResponse } from "./DescribeSecurityAgentStatus/res";
import { EnableFirewallRuleRequest } from "./EnableFirewallRule/req";
import { EnableFirewallRuleResponse } from "./EnableFirewallRule/res";
import { DescribeInstancePasswordsSettingRequest } from "./DescribeInstancePasswordsSetting/req";
import { DescribeInstancePasswordsSettingResponse } from "./DescribeInstancePasswordsSetting/res";
import { DescribeMonitorDataRequest } from "./DescribeMonitorData/req";
import { DescribeMonitorDataResponse } from "./DescribeMonitorData/res";
import { DeleteInstanceKeyPairRequest } from "./DeleteInstanceKeyPair/req";
import { DeleteInstanceKeyPairResponse } from "./DeleteInstanceKeyPair/res";
import { ModifyInstanceVncPasswordRequest } from "./ModifyInstanceVncPassword/req";
import { ModifyInstanceVncPasswordResponse } from "./ModifyInstanceVncPassword/res";
import { CreateInstanceKeyPairRequest } from "./CreateInstanceKeyPair/req";
import { CreateInstanceKeyPairResponse } from "./CreateInstanceKeyPair/res";
import { InstallCloudMonitorAgentRequest } from "./InstallCloudMonitorAgent/req";
import { InstallCloudMonitorAgentResponse } from "./InstallCloudMonitorAgent/res";
import { DescribeInstanceKeyPairRequest } from "./DescribeInstanceKeyPair/req";
import { DescribeInstanceKeyPairResponse } from "./DescribeInstanceKeyPair/res";
import { DescribeCloudMonitorAgentStatusesRequest } from "./DescribeCloudMonitorAgentStatuses/req";
import { DescribeCloudMonitorAgentStatusesResponse } from "./DescribeCloudMonitorAgentStatuses/res";
import { StartInstancesRequest } from "./StartInstances/req";
import { StartInstancesResponse } from "./StartInstances/res";
import { UploadInstanceKeyPairRequest } from "./UploadInstanceKeyPair/req";
import { UploadInstanceKeyPairResponse } from "./UploadInstanceKeyPair/res";
import { StopInstancesRequest } from "./StopInstances/req";
import { StopInstancesResponse } from "./StopInstances/res";
import { RebootInstancesRequest } from "./RebootInstances/req";
import { RebootInstancesResponse } from "./RebootInstances/res";
import { ListInstanceStatusRequest } from "./ListInstanceStatus/req";
import { ListInstanceStatusResponse } from "./ListInstanceStatus/res";
import { StartTerminalSessionRequest } from "./StartTerminalSession/req";
import { StartTerminalSessionResponse } from "./StartTerminalSession/res";
import { DeleteCommandRequest } from "./DeleteCommand/req";
import { DeleteCommandResponse } from "./DeleteCommand/res";
import { CreateCommandRequest } from "./CreateCommand/req";
import { CreateCommandResponse } from "./CreateCommand/res";
import { InvokeCommandRequest } from "./InvokeCommand/req";
import { InvokeCommandResponse } from "./InvokeCommand/res";
import { UpdateCommandAttributeRequest } from "./UpdateCommandAttribute/req";
import { UpdateCommandAttributeResponse } from "./UpdateCommandAttribute/res";
import { DescribeCommandsRequest } from "./DescribeCommands/req";
import { DescribeCommandsResponse } from "./DescribeCommands/res";
import { DescribeCommandInvocationsRequest } from "./DescribeCommandInvocations/req";
import { DescribeCommandInvocationsResponse } from "./DescribeCommandInvocations/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DeleteCustomImagesRequest } from "./DeleteCustomImages/req";
import { DeleteCustomImagesResponse } from "./DeleteCustomImages/res";
import { DescribeCloudAssistantAttributesRequest } from "./DescribeCloudAssistantAttributes/req";
import { DescribeCloudAssistantAttributesResponse } from "./DescribeCloudAssistantAttributes/res";
import { DeleteFirewallRulesRequest } from "./DeleteFirewallRules/req";
import { DeleteFirewallRulesResponse } from "./DeleteFirewallRules/res";
import { DescribeFirewallTemplatesRequest } from "./DescribeFirewallTemplates/req";
import { DescribeFirewallTemplatesResponse } from "./DescribeFirewallTemplates/res";
import { ModifyFirewallTemplateRequest } from "./ModifyFirewallTemplate/req";
import { ModifyFirewallTemplateResponse } from "./ModifyFirewallTemplate/res";
import { CreateFirewallTemplateRequest } from "./CreateFirewallTemplate/req";
import { CreateFirewallTemplateResponse } from "./CreateFirewallTemplate/res";
import { DescribeFirewallTemplateApplyResultsRequest } from "./DescribeFirewallTemplateApplyResults/req";
import { DescribeFirewallTemplateApplyResultsResponse } from "./DescribeFirewallTemplateApplyResults/res";
import { DescribeFirewallTemplateRulesApplyResultRequest } from "./DescribeFirewallTemplateRulesApplyResult/req";
import { DescribeFirewallTemplateRulesApplyResultResponse } from "./DescribeFirewallTemplateRulesApplyResult/res";
import { DeleteFirewallTemplatesRequest } from "./DeleteFirewallTemplates/req";
import { DeleteFirewallTemplatesResponse } from "./DeleteFirewallTemplates/res";
import { CreateFirewallTemplateRulesRequest } from "./CreateFirewallTemplateRules/req";
import { CreateFirewallTemplateRulesResponse } from "./CreateFirewallTemplateRules/res";
import { ApplyFirewallTemplateRequest } from "./ApplyFirewallTemplate/req";
import { ApplyFirewallTemplateResponse } from "./ApplyFirewallTemplate/res";
import { DeleteFirewallTemplateRulesRequest } from "./DeleteFirewallTemplateRules/req";
import { DeleteFirewallTemplateRulesResponse } from "./DeleteFirewallTemplateRules/res";
import { AttachKeyPairRequest } from "./AttachKeyPair/req";
import { AttachKeyPairResponse } from "./AttachKeyPair/res";
import { DeleteKeyPairsRequest } from "./DeleteKeyPairs/req";
import { DeleteKeyPairsResponse } from "./DeleteKeyPairs/res";
import { CreateKeyPairRequest } from "./CreateKeyPair/req";
import { CreateKeyPairResponse } from "./CreateKeyPair/res";
import { ListKeyPairsRequest } from "./ListKeyPairs/req";
import { ListKeyPairsResponse } from "./ListKeyPairs/res";
import { DetachKeyPairRequest } from "./DetachKeyPair/req";
import { DetachKeyPairResponse } from "./DetachKeyPair/res";
import { ImportKeyPairRequest } from "./ImportKeyPair/req";
import { ImportKeyPairResponse } from "./ImportKeyPair/res";

interface SWAS_OPEN {
    /**
     * 为指定的轻量应用服务器创建一条防火墙规则。
     */
    CreateFirewallRule(query: CreateFirewallRuleRequest): Promise<CreateFirewallRuleResponse>;
    /**
     * 创建一台或多台包年包月的实例。
     */
    CreateInstances(query: CreateInstancesRequest): Promise<CreateInstancesResponse>;
    /**
     * 为指定的磁盘创建快照。
     */
    CreateSnapshot(query: CreateSnapshotRequest): Promise<CreateSnapshotResponse>;
    /**
     * 删除指定轻量应用服务器的一条防火墙规则。
     */
    DeleteFirewallRule(query: DeleteFirewallRuleRequest): Promise<DeleteFirewallRuleResponse>;
    /**
     * 删除轻量应用服务器指定的快照。
     */
    DeleteSnapshot(query: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse>;
    /**
     * 查询指定地域下一个或多个已创建的磁盘信息。
     */
    ListDisks(query: ListDisksRequest): Promise<ListDisksResponse>;
    /**
     * 查询指定轻量应用服务器的防火墙规则。
     */
    ListFirewallRules(query: ListFirewallRulesRequest): Promise<ListFirewallRulesResponse>;
    /**
     * 查询指定地域下一个或多个镜像信息。
     */
    ListImages(query: ListImagesRequest): Promise<ListImagesResponse>;
    /**
     * 查询指定地域下一个或多个实例的详细信息。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 查询指定地域下轻量应用服务器所有的套餐信息。
     */
    ListPlans(query: ListPlansRequest): Promise<ListPlansResponse>;
    /**
     * 查询轻量服务器所有可用地域列表。
     */
    ListRegions(query: ListRegionsRequest): Promise<ListRegionsResponse>;
    /**
     * 查询一个或多个已创建的快照信息。
     */
    ListSnapshots(query: ListSnapshotsRequest): Promise<ListSnapshotsResponse>;
    /**
     * 重启一台轻量应用服务器。
     */
    RebootInstance(query: RebootInstanceRequest): Promise<RebootInstanceResponse>;
    /**
     * 续费一台轻量应用服务器。
     */
    RenewInstance(query: RenewInstanceRequest): Promise<RenewInstanceResponse>;
    /**
     * 根据快照回滚磁盘。
     */
    ResetDisk(query: ResetDiskRequest): Promise<ResetDiskResponse>;
    /**
     * 为指定的轻量应用服务器重置系统。
     */
    ResetSystem(query: ResetSystemRequest): Promise<ResetSystemResponse>;
    /**
     * 启动一台轻量应用服务器。
     */
    StartInstance(query: StartInstanceRequest): Promise<StartInstanceResponse>;
    /**
     * 停止一台轻量应用服务器。
     */
    StopInstance(query: StopInstanceRequest): Promise<StopInstanceResponse>;
    /**
     * 修改实例的部分信息，包括实例名称，密码。
     */
    UpdateInstanceAttribute(query: UpdateInstanceAttributeRequest): Promise<UpdateInstanceAttributeResponse>;
    /**
     * 为指定的轻量应用服务器升级套餐配置。
     */
    UpgradeInstance(query: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse>;
    /**
     * 查询一个或多个实例的流量包详情信息。
     */
    ListInstancesTrafficPackages(query: ListInstancesTrafficPackagesRequest): Promise<ListInstancesTrafficPackagesResponse>;
    /**
     * 为指定的自定义镜像共享或取消共享到ECS。
     */
    ModifyImageShareStatus(query: ModifyImageShareStatusRequest): Promise<ModifyImageShareStatusResponse>;
    /**
     * 删除指定的自定义镜像。
     */
    DeleteCustomImage(query: DeleteCustomImageRequest): Promise<DeleteCustomImageResponse>;
    /**
     * 查询指定的轻量应用服务器可升级的套餐列表。
     */
    ListInstancePlansModification(query: ListInstancePlansModificationRequest): Promise<ListInstancePlansModificationResponse>;
    /**
     * 通过快照创建用户自定义镜像。
     */
    CreateCustomImage(query: CreateCustomImageRequest): Promise<CreateCustomImageResponse>;
    /**
     * 为轻量应用服务器安装云助手。
     */
    InstallCloudAssistant(query: InstallCloudAssistantRequest): Promise<InstallCloudAssistantResponse>;
    /**
     * 查看命令详细信息。
     */
    DescribeInvocations(query: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse>;
    /**
     * 查询轻量云服务器是否安装云助手。
     */
    DescribeCloudAssistantStatus(query: DescribeCloudAssistantStatusRequest): Promise<DescribeCloudAssistantStatusResponse>;
    /**
     * 查询单个命令的执行结果。
     */
    DescribeInvocationResult(query: DescribeInvocationResultRequest): Promise<DescribeInvocationResultResponse>;
    /**
     * 使用Workbench远程登录轻量应用服务器。
     */
    LoginInstance(query: LoginInstanceRequest): Promise<LoginInstanceResponse>;
    /**
     * 在轻量应用服务器上执行命令。
     */
    RunCommand(query: RunCommandRequest): Promise<RunCommandResponse>;
    /**
     * 申请公网访问地址。
     */
    AllocatePublicConnection(query: AllocatePublicConnectionRequest): Promise<AllocatePublicConnectionResponse>;
    /**
     * 重启轻量数据库实例。
     */
    RestartDatabaseInstance(query: RestartDatabaseInstanceRequest): Promise<RestartDatabaseInstanceResponse>;
    /**
     * 查询轻量数据库慢日志明细信息。
     */
    DescribeDatabaseSlowLogRecords(query: DescribeDatabaseSlowLogRecordsRequest): Promise<DescribeDatabaseSlowLogRecordsResponse>;
    /**
     * 查询错误日志。
     */
    DescribeDatabaseErrorLogs(query: DescribeDatabaseErrorLogsRequest): Promise<DescribeDatabaseErrorLogsResponse>;
    /**
     * 重置数据库administrator账号的密码。
     */
    ResetDatabaseAccountPassword(query: ResetDatabaseAccountPasswordRequest): Promise<ResetDatabaseAccountPasswordResponse>;
    /**
     * 修改数据库参数。
     */
    ModifyDatabaseInstanceParameter(query: ModifyDatabaseInstanceParameterRequest): Promise<ModifyDatabaseInstanceParameterResponse>;
    /**
     * 查询数据库实例监控信息。
     */
    DescribeDatabaseInstanceMetricData(query: DescribeDatabaseInstanceMetricDataRequest): Promise<DescribeDatabaseInstanceMetricDataResponse>;
    /**
     * 停止轻量数据库实例。
     */
    StopDatabaseInstance(query: StopDatabaseInstanceRequest): Promise<StopDatabaseInstanceResponse>;
    /**
     * 释放外网访问地址。
     */
    ReleasePublicConnection(query: ReleasePublicConnectionRequest): Promise<ReleasePublicConnectionResponse>;
    /**
     * 查看轻量数据库实例信息。
     */
    DescribeDatabaseInstances(query: DescribeDatabaseInstancesRequest): Promise<DescribeDatabaseInstancesResponse>;
    /**
     * 启动轻量数据库实例。
     */
    StartDatabaseInstance(query: StartDatabaseInstanceRequest): Promise<StartDatabaseInstanceResponse>;
    /**
     * 查看轻量数据库实例的参数信息。
     */
    DescribeDatabaseInstanceParameters(query: DescribeDatabaseInstanceParametersRequest): Promise<DescribeDatabaseInstanceParametersResponse>;
    /**
     * 修改轻量数据库实例的描述信息。
     */
    ModifyDatabaseInstanceDescription(query: ModifyDatabaseInstanceDescriptionRequest): Promise<ModifyDatabaseInstanceDescriptionResponse>;
    /**
     * 修改指定轻量应用服务器的防火墙规则。
     */
    ModifyFirewallRule(query: ModifyFirewallRuleRequest): Promise<ModifyFirewallRuleResponse>;
    /**
     * 获取指定轻量应用服务器的VNC连接地址。
     */
    DescribeInstanceVncUrl(query: DescribeInstanceVncUrlRequest): Promise<DescribeInstanceVncUrlResponse>;
    /**
     * 为指定的轻量应用服务器批量创建防火墙规则。
     */
    CreateFirewallRules(query: CreateFirewallRulesRequest): Promise<CreateFirewallRulesResponse>;
    /**
     * 删除一个或多个已创建的快照。
     */
    DeleteSnapshots(query: DeleteSnapshotsRequest): Promise<DeleteSnapshotsResponse>;
    /**
     * 查询指定地域下一个或多个已创建的自定义镜像信息。
     */
    ListCustomImages(query: ListCustomImagesRequest): Promise<ListCustomImagesResponse>;
    /**
     * 修改轻量应用服务器指定数据盘的备注信息。
     */
    UpdateDiskAttribute(query: UpdateDiskAttributeRequest): Promise<UpdateDiskAttributeResponse>;
    /**
     * 修改轻量应用服务器指定快照的备注信息。
     */
    UpdateSnapshotAttribute(query: UpdateSnapshotAttributeRequest): Promise<UpdateSnapshotAttributeResponse>;
    /**
     * 禁用指定轻量应用服务器的一条防火墙策略。
     */
    DisableFirewallRule(query: DisableFirewallRuleRequest): Promise<DisableFirewallRuleResponse>;
    /**
     * 查询指定轻量应用服务器的安全中心Agent插件状态。
     */
    DescribeSecurityAgentStatus(query: DescribeSecurityAgentStatusRequest): Promise<DescribeSecurityAgentStatusResponse>;
    /**
     * 开启指定轻量应用服务器的一条防火墙策略。
     */
    EnableFirewallRule(query: EnableFirewallRuleRequest): Promise<EnableFirewallRuleResponse>;
    /**
     * 查询轻量应用服务器是否设置过密码。
     */
    DescribeInstancePasswordsSetting(query: DescribeInstancePasswordsSettingRequest): Promise<DescribeInstancePasswordsSettingResponse>;
    /**
     * 获取实例监控信息（vCPU、内存、磁盘IO、流量）。
     */
    DescribeMonitorData(query: DescribeMonitorDataRequest): Promise<DescribeMonitorDataResponse>;
    /**
     * 删除轻量应用服务器密钥对。
     */
    DeleteInstanceKeyPair(query: DeleteInstanceKeyPairRequest): Promise<DeleteInstanceKeyPairResponse>;
    /**
     * 修改实例的VNC密码。
     */
    ModifyInstanceVncPassword(query: ModifyInstanceVncPasswordRequest): Promise<ModifyInstanceVncPasswordResponse>;
    /**
     * 创建轻量应用服务器密钥对。
     */
    CreateInstanceKeyPair(query: CreateInstanceKeyPairRequest): Promise<CreateInstanceKeyPairResponse>;
    /**
     * 为指定的轻量应用服务器安装云监控插件。
     */
    InstallCloudMonitorAgent(query: InstallCloudMonitorAgentRequest): Promise<InstallCloudMonitorAgentResponse>;
    /**
     * 查询轻量应用服务器的密钥对信息。
     */
    DescribeInstanceKeyPair(query: DescribeInstanceKeyPairRequest): Promise<DescribeInstanceKeyPairResponse>;
    /**
     * 查询轻量应用服务器云监控插件的状态。
     */
    DescribeCloudMonitorAgentStatuses(query: DescribeCloudMonitorAgentStatusesRequest): Promise<DescribeCloudMonitorAgentStatusesResponse>;
    /**
     * 启动一台或多台轻量应用服务器。
     */
    StartInstances(query: StartInstancesRequest): Promise<StartInstancesResponse>;
    /**
     * 为一台轻量应用服务器导入密钥对。
     */
    UploadInstanceKeyPair(query: UploadInstanceKeyPairRequest): Promise<UploadInstanceKeyPairResponse>;
    /**
     * 停止一台或多台轻量应用服务器。
     */
    StopInstances(query: StopInstancesRequest): Promise<StopInstancesResponse>;
    /**
     * 重启一台或多台轻量应用服务器。
     */
    RebootInstances(query: RebootInstancesRequest): Promise<RebootInstancesResponse>;
    /**
     * 查询一个或多个实例的状态。
     */
    ListInstanceStatus(query: ListInstanceStatusRequest): Promise<ListInstanceStatusResponse>;
    /**
     * 为轻量应用服务器提供会话登录能力。
     */
    StartTerminalSession(query: StartTerminalSessionRequest): Promise<StartTerminalSessionResponse>;
    /**
     * 删除一条命令助手命令。
     */
    DeleteCommand(query: DeleteCommandRequest): Promise<DeleteCommandResponse>;
    /**
     * 新建一条命令助手命令。
     */
    CreateCommand(query: CreateCommandRequest): Promise<CreateCommandResponse>;
    /**
     * 为一台或多台轻量应用服务器执行一条命令助手命令。
     */
    InvokeCommand(query: InvokeCommandRequest): Promise<InvokeCommandResponse>;
    /**
     * 修改一条命令相关参数。
     */
    UpdateCommandAttribute(query: UpdateCommandAttributeRequest): Promise<UpdateCommandAttributeResponse>;
    /**
     * 查询您手动创建的命令或者阿里云提供的公共命令。
     */
    DescribeCommands(query: DescribeCommandsRequest): Promise<DescribeCommandsResponse>;
    /**
     * 查询命令助手执行命令的列表和状态。
     */
    DescribeCommandInvocations(query: DescribeCommandInvocationsRequest): Promise<DescribeCommandInvocationsResponse>;
    /**
     * 云产品查标签接口
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 打标签接口
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 删标签接口
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 如果您不再需要某些自定义镜像，可以将其批量删除。自定义镜像被删除后，使用该镜像创建的轻量应用服务器将无法使用该镜像重置系统。
     */
    DeleteCustomImages(query: DeleteCustomImagesRequest): Promise<DeleteCustomImagesResponse>;
    /**
     * 查询一台或者多台实例的命令助手信息。
     */
    DescribeCloudAssistantAttributes(query: DescribeCloudAssistantAttributesRequest): Promise<DescribeCloudAssistantAttributesResponse>;
    /**
     * 删除指定轻量应用服务器的多条防火墙规则。
     */
    DeleteFirewallRules(query: DeleteFirewallRulesRequest): Promise<DeleteFirewallRulesResponse>;
    /**
     * 查询防火墙模板的信息。
     */
    DescribeFirewallTemplates(query: DescribeFirewallTemplatesRequest): Promise<DescribeFirewallTemplatesResponse>;
    /**
     * 对于已创建的防火墙模板，您可以根据业务需求修改防火墙规则，并最终将这些规则通过防火墙模板设置到轻量应用服务器实例中。
     */
    ModifyFirewallTemplate(query: ModifyFirewallTemplateRequest): Promise<ModifyFirewallTemplateResponse>;
    /**
     * 创建一个防火墙模板。
     */
    CreateFirewallTemplate(query: CreateFirewallTemplateRequest): Promise<CreateFirewallTemplateResponse>;
    /**
     * 查询防火墙模板应用实例结果。
     */
    DescribeFirewallTemplateApplyResults(query: DescribeFirewallTemplateApplyResultsRequest): Promise<DescribeFirewallTemplateApplyResultsResponse>;
    /**
     * 查询防火墙模板规则应用结果信息。
     */
    DescribeFirewallTemplateRulesApplyResult(query: DescribeFirewallTemplateRulesApplyResultRequest): Promise<DescribeFirewallTemplateRulesApplyResultResponse>;
    /**
     * 删除已创建的防火墙模板。
     */
    DeleteFirewallTemplates(query: DeleteFirewallTemplatesRequest): Promise<DeleteFirewallTemplatesResponse>;
    /**
     * 对于已创建的防火墙模板，您可以根据业务需求为防火墙模板增加防火墙规则。
     */
    CreateFirewallTemplateRules(query: CreateFirewallTemplateRulesRequest): Promise<CreateFirewallTemplateRulesResponse>;
    /**
     * 使用防火墙模板可以同时为多台轻量应用服务器实例设置防火墙规则，提高设置防火墙规则的效率。
     */
    ApplyFirewallTemplate(query: ApplyFirewallTemplateRequest): Promise<ApplyFirewallTemplateResponse>;
    /**
     * 对于已创建的防火墙模板，您可以根据业务需求删除防火墙规则。
     */
    DeleteFirewallTemplateRules(query: DeleteFirewallTemplateRulesRequest): Promise<DeleteFirewallTemplateRulesResponse>;
    /**
     * 轻量应用服务器绑定密钥对。
     */
    AttachKeyPair(query: AttachKeyPairRequest): Promise<AttachKeyPairResponse>;
    /**
     * 删除轻量应用服务器密钥对。
     */
    DeleteKeyPairs(query: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse>;
    /**
     * 创建轻量应用服务器密钥对。
     */
    CreateKeyPair(query: CreateKeyPairRequest): Promise<CreateKeyPairResponse>;
    /**
     * 密钥对列表。
     */
    ListKeyPairs(query: ListKeyPairsRequest): Promise<ListKeyPairsResponse>;
    /**
     * 解绑轻量应用服务器的密钥对。
     */
    DetachKeyPair(query: DetachKeyPairRequest): Promise<DetachKeyPairResponse>;
    /**
     * 导入已有密钥对。
     */
    ImportKeyPair(query: ImportKeyPairRequest): Promise<ImportKeyPairResponse>;
}
export default SWAS_OPEN;
