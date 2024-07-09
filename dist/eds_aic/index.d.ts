import { CreateAppRequest } from "./CreateApp/req";
import { CreateAppResponse } from "./CreateApp/res";
import { CreateAndroidInstanceGroupRequest } from "./CreateAndroidInstanceGroup/req";
import { CreateAndroidInstanceGroupResponse } from "./CreateAndroidInstanceGroup/res";
import { DeleteAndroidInstanceGroupRequest } from "./DeleteAndroidInstanceGroup/req";
import { DeleteAndroidInstanceGroupResponse } from "./DeleteAndroidInstanceGroup/res";
import { ModifyAndroidInstanceRequest } from "./ModifyAndroidInstance/req";
import { ModifyAndroidInstanceResponse } from "./ModifyAndroidInstance/res";
import { RenewAndroidInstanceGroupsRequest } from "./RenewAndroidInstanceGroups/req";
import { RenewAndroidInstanceGroupsResponse } from "./RenewAndroidInstanceGroups/res";
import { DescribeAndroidInstancesRequest } from "./DescribeAndroidInstances/req";
import { DescribeAndroidInstancesResponse } from "./DescribeAndroidInstances/res";
import { ModifyAndroidInstanceGroupRequest } from "./ModifyAndroidInstanceGroup/req";
import { ModifyAndroidInstanceGroupResponse } from "./ModifyAndroidInstanceGroup/res";
import { RebootAndroidInstancesInGroupRequest } from "./RebootAndroidInstancesInGroup/req";
import { RebootAndroidInstancesInGroupResponse } from "./RebootAndroidInstancesInGroup/res";
import { ResetAndroidInstancesInGroupRequest } from "./ResetAndroidInstancesInGroup/req";
import { ResetAndroidInstancesInGroupResponse } from "./ResetAndroidInstancesInGroup/res";
import { DescribeAndroidInstanceGroupsRequest } from "./DescribeAndroidInstanceGroups/req";
import { DescribeAndroidInstanceGroupsResponse } from "./DescribeAndroidInstanceGroups/res";
import { AuthorizeAndroidInstanceRequest } from "./AuthorizeAndroidInstance/req";
import { AuthorizeAndroidInstanceResponse } from "./AuthorizeAndroidInstance/res";
import { CreateKeyPairRequest } from "./CreateKeyPair/req";
import { CreateKeyPairResponse } from "./CreateKeyPair/res";
import { DescribeKeyPairsRequest } from "./DescribeKeyPairs/req";
import { DescribeKeyPairsResponse } from "./DescribeKeyPairs/res";
import { DeleteKeyPairsRequest } from "./DeleteKeyPairs/req";
import { DeleteKeyPairsResponse } from "./DeleteKeyPairs/res";
import { AttachKeyPairRequest } from "./AttachKeyPair/req";
import { AttachKeyPairResponse } from "./AttachKeyPair/res";
import { SetAdbSecureRequest } from "./SetAdbSecure/req";
import { SetAdbSecureResponse } from "./SetAdbSecure/res";
import { DetachKeyPairRequest } from "./DetachKeyPair/req";
import { DetachKeyPairResponse } from "./DetachKeyPair/res";
import { ModifyKeyPairNameRequest } from "./ModifyKeyPairName/req";
import { ModifyKeyPairNameResponse } from "./ModifyKeyPairName/res";
import { GetAdbSecureRequest } from "./GetAdbSecure/req";
import { GetAdbSecureResponse } from "./GetAdbSecure/res";
import { ImportKeyPairRequest } from "./ImportKeyPair/req";
import { ImportKeyPairResponse } from "./ImportKeyPair/res";
import { ModifyAppRequest } from "./ModifyApp/req";
import { ModifyAppResponse } from "./ModifyApp/res";
import { DeleteAppsRequest } from "./DeleteApps/req";
import { DeleteAppsResponse } from "./DeleteApps/res";
import { DescribeAppsRequest } from "./DescribeApps/req";
import { DescribeAppsResponse } from "./DescribeApps/res";
import { UninstallAppRequest } from "./UninstallApp/req";
import { UninstallAppResponse } from "./UninstallApp/res";
import { InstallAppRequest } from "./InstallApp/req";
import { InstallAppResponse } from "./InstallApp/res";
import { ListPolicyGroupsRequest } from "./ListPolicyGroups/req";
import { ListPolicyGroupsResponse } from "./ListPolicyGroups/res";
import { CreatePolicyGroupRequest } from "./CreatePolicyGroup/req";
import { CreatePolicyGroupResponse } from "./CreatePolicyGroup/res";
import { ModifyPolicyGroupRequest } from "./ModifyPolicyGroup/req";
import { ModifyPolicyGroupResponse } from "./ModifyPolicyGroup/res";
import { UpgradeAndroidInstanceGroupRequest } from "./UpgradeAndroidInstanceGroup/req";
import { UpgradeAndroidInstanceGroupResponse } from "./UpgradeAndroidInstanceGroup/res";
import { DescribeInvocationsRequest } from "./DescribeInvocations/req";
import { DescribeInvocationsResponse } from "./DescribeInvocations/res";
import { RunCommandRequest } from "./RunCommand/req";
import { RunCommandResponse } from "./RunCommand/res";
import { DescribeSpecRequest } from "./DescribeSpec/req";
import { DescribeSpecResponse } from "./DescribeSpec/res";
import { FetchFileRequest } from "./FetchFile/req";
import { FetchFileResponse } from "./FetchFile/res";
import { RecoveryFileRequest } from "./RecoveryFile/req";
import { RecoveryFileResponse } from "./RecoveryFile/res";
import { SendFileRequest } from "./SendFile/req";
import { SendFileResponse } from "./SendFile/res";
import { DescribeBackupFilesRequest } from "./DescribeBackupFiles/req";
import { DescribeBackupFilesResponse } from "./DescribeBackupFiles/res";
import { BackupFileRequest } from "./BackupFile/req";
import { BackupFileResponse } from "./BackupFile/res";
import { StopAndroidInstanceRequest } from "./StopAndroidInstance/req";
import { StopAndroidInstanceResponse } from "./StopAndroidInstance/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DeletePolicyGroupRequest } from "./DeletePolicyGroup/req";
import { DeletePolicyGroupResponse } from "./DeletePolicyGroup/res";
import { DeleteImagesRequest } from "./DeleteImages/req";
import { DeleteImagesResponse } from "./DeleteImages/res";
import { UpdateCustomImageNameRequest } from "./UpdateCustomImageName/req";
import { UpdateCustomImageNameResponse } from "./UpdateCustomImageName/res";
import { UpdateInstanceGroupImageRequest } from "./UpdateInstanceGroupImage/req";
import { UpdateInstanceGroupImageResponse } from "./UpdateInstanceGroupImage/res";
import { DescribeImageListRequest } from "./DescribeImageList/req";
import { DescribeImageListResponse } from "./DescribeImageList/res";
import { CreateCustomImageRequest } from "./CreateCustomImage/req";
import { CreateCustomImageResponse } from "./CreateCustomImage/res";
import { DistributeImageRequest } from "./DistributeImage/req";
import { DistributeImageResponse } from "./DistributeImage/res";
import { DowngradeAndroidInstanceGroupRequest } from "./DowngradeAndroidInstanceGroup/req";
import { DowngradeAndroidInstanceGroupResponse } from "./DowngradeAndroidInstanceGroup/res";
import { StartAndroidInstanceRequest } from "./StartAndroidInstance/req";
import { StartAndroidInstanceResponse } from "./StartAndroidInstance/res";
import { CheckResourceStockRequest } from "./CheckResourceStock/req";
import { CheckResourceStockResponse } from "./CheckResourceStock/res";
import { DescribeTasksRequest } from "./DescribeTasks/req";
import { DescribeTasksResponse } from "./DescribeTasks/res";

interface EDS_AIC {
    /**
     * 创建Android应用。
     */
    CreateApp(query: CreateAppRequest): Promise<CreateAppResponse>;
    /**
     * 创建按量付费或包年包月的云手机实例组。
     */
    CreateAndroidInstanceGroup(query: CreateAndroidInstanceGroupRequest): Promise<CreateAndroidInstanceGroupResponse>;
    /**
     * 删除云手机实例组。
     */
    DeleteAndroidInstanceGroup(query: DeleteAndroidInstanceGroupRequest): Promise<DeleteAndroidInstanceGroupResponse>;
    /**
     * 修改云手机实例信息。目前仅支持修改实例名称。
     */
    ModifyAndroidInstance(query: ModifyAndroidInstanceRequest): Promise<ModifyAndroidInstanceResponse>;
    /**
     * 续费云手机实例组。
     */
    RenewAndroidInstanceGroups(query: RenewAndroidInstanceGroupsRequest): Promise<RenewAndroidInstanceGroupsResponse>;
    /**
     * 查询云手机实例的详情信息。
     */
    DescribeAndroidInstances(query: DescribeAndroidInstancesRequest): Promise<DescribeAndroidInstancesResponse>;
    /**
     * 修改云手机实例组的信息。
     */
    ModifyAndroidInstanceGroup(query: ModifyAndroidInstanceGroupRequest): Promise<ModifyAndroidInstanceGroupResponse>;
    /**
     * 重启云手机实例。
     */
    RebootAndroidInstancesInGroup(query: RebootAndroidInstancesInGroupRequest): Promise<RebootAndroidInstancesInGroupResponse>;
    /**
     * 重置云手机实例，即初始化系统。
     */
    ResetAndroidInstancesInGroup(query: ResetAndroidInstancesInGroupRequest): Promise<ResetAndroidInstancesInGroupResponse>;
    /**
     * 查询云手机实例组的详细信息。
     */
    DescribeAndroidInstanceGroups(query: DescribeAndroidInstanceGroupsRequest): Promise<DescribeAndroidInstanceGroupsResponse>;
    /**
     * 为云手机实例分配用户或者取消已分配用户。目前一台云手机实例仅支持分配一个用户。
     */
    AuthorizeAndroidInstance(query: AuthorizeAndroidInstanceRequest): Promise<AuthorizeAndroidInstanceResponse>;
    /**
     * 调用CreateKeyPair创建一对ADB密钥对。系统会为您保管密钥的公钥部分，并返回符合ADB连接规范的PEM编码的PKCS#8格式私钥。您需要自行妥善保管私钥部分。
     */
    CreateKeyPair(query: CreateKeyPairRequest): Promise<CreateKeyPairResponse>;
    /**
     * 查询一个或多个密钥对。
     */
    DescribeKeyPairs(query: DescribeKeyPairsRequest): Promise<DescribeKeyPairsResponse>;
    /**
     * 调用本接口删除云手机密钥对。
     */
    DeleteKeyPairs(query: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse>;
    /**
     * 调用AttachKeyPair绑定一个ADB密钥对到一台或多台云手机实例。
     */
    AttachKeyPair(query: AttachKeyPairRequest): Promise<AttachKeyPairResponse>;
    /**
     * 设置实例的ADB鉴权状态。
     * 如果设置ADB鉴权状态为开启，通过ADB去连接云手机实例时，云手机实例会校验ADB密钥对的合法性；此时建议您绑定ADB密钥对后，再通过ADB连接云手机实例。
     * 如果设置ADB鉴权状态为关闭，通过ADB去连接云手机实例时，云手机实例不会校验ADB密钥对的合法性，即只要网络是通的，就能通过ADB连接上云手机实例。
     */
    SetAdbSecure(query: SetAdbSecureRequest): Promise<SetAdbSecureResponse>;
    /**
     * 调用本接口解除ADB密钥对到一台或多台云手机实例的绑定关系。
     */
    DetachKeyPair(query: DetachKeyPairRequest): Promise<DetachKeyPairResponse>;
    /**
     * 调用本接口修改ADB密钥对的名称。
     */
    ModifyKeyPairName(query: ModifyKeyPairNameRequest): Promise<ModifyKeyPairNameResponse>;
    /**
     * 获取ADB鉴权开关。
     * 如果ADB鉴权状态开启，尝试通过ADB去连接云手机实例时，云手机实例会校验ADB密钥对的合法性；此时建议您绑定ADB密钥对后，再通过ADB连接云手机实例。
     * 如果ADB鉴权状态关闭，尝试通过ADB去连接云手机实例时，云手机实例不会校验ADB密钥对的合法性，即只要网络是通的，就能通过ADB连接上云手机实例。
     */
    GetAdbSecure(query: GetAdbSecureRequest): Promise<GetAdbSecureResponse>;
    /**
     * 导入由ADB工具产生的ADB密钥对的公钥部分。
     */
    ImportKeyPair(query: ImportKeyPairRequest): Promise<ImportKeyPairResponse>;
    /**
     * 修改应用信息。
     */
    ModifyApp(query: ModifyAppRequest): Promise<ModifyAppResponse>;
    /**
     * 删除应用。
     * 删除时需保证该应用未安装在任何实例组。
     */
    DeleteApps(query: DeleteAppsRequest): Promise<DeleteAppsResponse>;
    /**
     * 查询已经创建的应用信息。
     */
    DescribeApps(query: DescribeAppsRequest): Promise<DescribeAppsResponse>;
    /**
     * 批量从无影云手机实例组中卸载应用。卸载时需保证应用已经安装在云手机实例组中。
     * 此接口为异步接口，卸载结果可以通过查询应用安装历史查看。
     */
    UninstallApp(query: UninstallAppRequest): Promise<UninstallAppResponse>;
    /**
     * 批量在无影云手机实例组的实例中安装应用。
     * 此接口为异步接口，安装结果可以通过查询应用安装历史查看。
     */
    InstallApp(query: InstallAppRequest): Promise<InstallAppResponse>;
    /**
     * 查询策略的详细信息。
     */
    ListPolicyGroups(query: ListPolicyGroupsRequest): Promise<ListPolicyGroupsResponse>;
    /**
     * 创建策略。
     */
    CreatePolicyGroup(query: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse>;
    /**
     * 修改策略。
     */
    ModifyPolicyGroup(query: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse>;
    /**
     * 升级实例组。目前仅支持增加实例组中的实例数量。
     */
    UpgradeAndroidInstanceGroup(query: UpgradeAndroidInstanceGroupRequest): Promise<UpgradeAndroidInstanceGroupResponse>;
    /**
     * 查询RunCommand接口命令执行结果。
     */
    DescribeInvocations(query: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse>;
    /**
     * 在云手机实例中执行命令。
     */
    RunCommand(query: RunCommandRequest): Promise<RunCommandResponse>;
    /**
     * 查询云手机可用规格。
     */
    DescribeSpec(query: DescribeSpecRequest): Promise<DescribeSpecResponse>;
    /**
     * 调用Fetch接口云手机拉取文件到OSS。
     */
    FetchFile(query: FetchFileRequest): Promise<FetchFileResponse>;
    /**
     * 调用RecoveryFile接口恢复备份文件。
     */
    RecoveryFile(query: RecoveryFileRequest): Promise<RecoveryFileResponse>;
    /**
     * 调用SendFile接口将OSS文件推送到云手机。
     */
    SendFile(query: SendFileRequest): Promise<SendFileResponse>;
    /**
     * 调用DescribeBackupFiles接口查询备份文件列表。
     */
    DescribeBackupFiles(query: DescribeBackupFilesRequest): Promise<DescribeBackupFilesResponse>;
    /**
     * 调用BackupFile接口生成并上传备份文件。
     */
    BackupFile(query: BackupFileRequest): Promise<BackupFileResponse>;
    /**
     * 停止云手机实例。
     */
    StopAndroidInstance(query: StopAndroidInstanceRequest): Promise<StopAndroidInstanceResponse>;
    /**
     * 查询地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 删除策略。
     */
    DeletePolicyGroup(query: DeletePolicyGroupRequest): Promise<DeletePolicyGroupResponse>;
    /**
     * 删除自定义镜像。
     */
    DeleteImages(query: DeleteImagesRequest): Promise<DeleteImagesResponse>;
    /**
     * 更新自定义镜像名称。
     */
    UpdateCustomImageName(query: UpdateCustomImageNameRequest): Promise<UpdateCustomImageNameResponse>;
    /**
     * 变更实例组镜像。
     */
    UpdateInstanceGroupImage(query: UpdateInstanceGroupImageRequest): Promise<UpdateInstanceGroupImageResponse>;
    /**
     * 查询镜像列表。
     */
    DescribeImageList(query: DescribeImageListRequest): Promise<DescribeImageListResponse>;
    /**
     * 根据云手机实例创建自定义镜像。
     */
    CreateCustomImage(query: CreateCustomImageRequest): Promise<CreateCustomImageResponse>;
    /**
     * 分发镜像。
     */
    DistributeImage(query: DistributeImageRequest): Promise<DistributeImageResponse>;
    /**
     * 降级实例组。目前仅支持删除实例组中的指定实例。
     */
    DowngradeAndroidInstanceGroup(query: DowngradeAndroidInstanceGroupRequest): Promise<DowngradeAndroidInstanceGroupResponse>;
    /**
     * 启动云手机实例。
     */
    StartAndroidInstance(query: StartAndroidInstanceRequest): Promise<StartAndroidInstanceResponse>;
    /**
     * 检查云手机资源库存状态。
     */
    CheckResourceStock(query: CheckResourceStockRequest): Promise<CheckResourceStockResponse>;
    /**
     * 获取云手机实例当前任务列表。
     */
    DescribeTasks(query: DescribeTasksRequest): Promise<DescribeTasksResponse>;
}
export default EDS_AIC;
