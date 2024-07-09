import { CancelTaskRequest } from "./CancelTask/req";
import { CancelTaskResponse } from "./CancelTask/res";
import { CopyImageRequest } from "./CopyImage/req";
import { CopyImageResponse } from "./CopyImage/res";
import { CreateImageRequest } from "./CreateImage/req";
import { CreateImageResponse } from "./CreateImage/res";
import { DeleteImagesRequest } from "./DeleteImages/req";
import { DeleteImagesResponse } from "./DeleteImages/res";
import { DeleteInstancesRequest } from "./DeleteInstances/req";
import { DeleteInstancesResponse } from "./DeleteInstances/res";
import { DeleteKeyPairsRequest } from "./DeleteKeyPairs/req";
import { DeleteKeyPairsResponse } from "./DeleteKeyPairs/res";
import { FetchFileRequest } from "./FetchFile/req";
import { FetchFileResponse } from "./FetchFile/res";
import { ImportImageRequest } from "./ImportImage/req";
import { ImportImageResponse } from "./ImportImage/res";
import { ImportKeyPairRequest } from "./ImportKeyPair/req";
import { ImportKeyPairResponse } from "./ImportKeyPair/res";
import { InstallApplicationRequest } from "./InstallApplication/req";
import { InstallApplicationResponse } from "./InstallApplication/res";
import { ListImageSharePermissionRequest } from "./ListImageSharePermission/req";
import { ListImageSharePermissionResponse } from "./ListImageSharePermission/res";
import { ListImagesRequest } from "./ListImages/req";
import { ListImagesResponse } from "./ListImages/res";
import { ListInstanceVncUrlRequest } from "./ListInstanceVncUrl/req";
import { ListInstanceVncUrlResponse } from "./ListInstanceVncUrl/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { ListKeyPairsRequest } from "./ListKeyPairs/req";
import { ListKeyPairsResponse } from "./ListKeyPairs/res";
import { ListTasksRequest } from "./ListTasks/req";
import { ListTasksResponse } from "./ListTasks/res";
import { RebootInstancesRequest } from "./RebootInstances/req";
import { RebootInstancesResponse } from "./RebootInstances/res";
import { ResetInstancesRequest } from "./ResetInstances/req";
import { ResetInstancesResponse } from "./ResetInstances/res";
import { RunCommandRequest } from "./RunCommand/req";
import { RunCommandResponse } from "./RunCommand/res";
import { RunInstancesRequest } from "./RunInstances/req";
import { RunInstancesResponse } from "./RunInstances/res";
import { SendFileRequest } from "./SendFile/req";
import { SendFileResponse } from "./SendFile/res";
import { StartInstancesRequest } from "./StartInstances/req";
import { StartInstancesResponse } from "./StartInstances/res";
import { StopInstancesRequest } from "./StopInstances/req";
import { StopInstancesResponse } from "./StopInstances/res";
import { UninstallApplicationRequest } from "./UninstallApplication/req";
import { UninstallApplicationResponse } from "./UninstallApplication/res";
import { UpdateImageAttributeRequest } from "./UpdateImageAttribute/req";
import { UpdateImageAttributeResponse } from "./UpdateImageAttribute/res";
import { UpdateInstanceAttributeRequest } from "./UpdateInstanceAttribute/req";
import { UpdateInstanceAttributeResponse } from "./UpdateInstanceAttribute/res";
import { ListInstanceTypesRequest } from "./ListInstanceTypes/req";
import { ListInstanceTypesResponse } from "./ListInstanceTypes/res";
import { ListRegionsRequest } from "./ListRegions/req";
import { ListRegionsResponse } from "./ListRegions/res";
import { ListZonesRequest } from "./ListZones/req";
import { ListZonesResponse } from "./ListZones/res";
import { RenewInstancesRequest } from "./RenewInstances/req";
import { RenewInstancesResponse } from "./RenewInstances/res";
import { ListTagValuesRequest } from "./ListTagValues/req";
import { ListTagValuesResponse } from "./ListTagValues/res";
import { ListTagKeysRequest } from "./ListTagKeys/req";
import { ListTagKeysResponse } from "./ListTagKeys/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";

interface CLOUDPHONE {
    /**
     * 取消云手机当前正在执行的任务。
     */
    CancelTask(query: CancelTaskRequest): Promise<CancelTaskResponse>;
    /**
     * 将当前地域的自定义镜像拷贝至目标地域。
     */
    CopyImage(query: CopyImageRequest): Promise<CopyImageResponse>;
    /**
     * 创建一份云手机自定义镜像。
     */
    CreateImage(query: CreateImageRequest): Promise<CreateImageResponse>;
    /**
     * 批量删除自定义镜像。
     */
    DeleteImages(query: DeleteImagesRequest): Promise<DeleteImagesResponse>;
    /**
     * 批量删除云手机实例。
     */
    DeleteInstances(query: DeleteInstancesRequest): Promise<DeleteInstancesResponse>;
    /**
     * 删除一对或者多对云手机密钥对。
     */
    DeleteKeyPairs(query: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse>;
    /**
     * 从云手机拉取文件并保存到OSS。
     */
    FetchFile(query: FetchFileRequest): Promise<FetchFileResponse>;
    /**
     * 导入一份您的本地镜像到云手机，作为自定义镜像出现在相应地域中。
     */
    ImportImage(query: ImportImageRequest): Promise<ImportImageResponse>;
    /**
     * 导入由其他工具产生的RSA密钥对的公钥部分。
     */
    ImportKeyPair(query: ImportKeyPairRequest): Promise<ImportKeyPairResponse>;
    /**
     * 安装应用到云手机。
     */
    InstallApplication(query: InstallApplicationRequest): Promise<InstallApplicationResponse>;
    /**
     * 查询自定义镜像已经共享的用户列表。
     */
    ListImageSharePermission(query: ListImageSharePermissionRequest): Promise<ListImageSharePermissionResponse>;
    /**
     * 查询您可以使用的镜像资源。
     */
    ListImages(query: ListImagesRequest): Promise<ListImagesResponse>;
    /**
     * 查询一台云手机实例的Web管理终端地址。
     */
    ListInstanceVncUrl(query: ListInstanceVncUrlRequest): Promise<ListInstanceVncUrlResponse>;
    /**
     * 查询云手机列表接口。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 查询一个或多个密钥对。
     */
    ListKeyPairs(query: ListKeyPairsRequest): Promise<ListKeyPairsResponse>;
    /**
     * 获取云手机实例当前任务列表。
     */
    ListTasks(query: ListTasksRequest): Promise<ListTasksResponse>;
    /**
     * 重启实例。
     */
    RebootInstances(query: RebootInstancesRequest): Promise<RebootInstancesResponse>;
    /**
     * 初始化实例到创建时的初始状态。
     */
    ResetInstances(query: ResetInstancesRequest): Promise<ResetInstancesResponse>;
    /**
     * 在云手机中执行命令。
     */
    RunCommand(query: RunCommandRequest): Promise<RunCommandResponse>;
    /**
     * 批量创建并启动实例。
     */
    RunInstances(query: RunInstancesRequest): Promise<RunInstancesResponse>;
    /**
     * 推送文件到手机。
     */
    SendFile(query: SendFileRequest): Promise<SendFileResponse>;
    /**
     * 批量启动实例。
     */
    StartInstances(query: StartInstancesRequest): Promise<StartInstancesResponse>;
    /**
     * 批量停止实例。
     */
    StopInstances(query: StopInstancesRequest): Promise<StopInstancesResponse>;
    /**
     * 卸载应用。
     */
    UninstallApplication(query: UninstallApplicationRequest): Promise<UninstallApplicationResponse>;
    /**
     * 修改一份自定义镜像的名称和描述信息，以及管理镜像的共享权限。
     */
    UpdateImageAttribute(query: UpdateImageAttributeRequest): Promise<UpdateImageAttributeResponse>;
    /**
     * 修改云手机实例属性。
     */
    UpdateInstanceAttribute(query: UpdateInstanceAttributeRequest): Promise<UpdateInstanceAttributeResponse>;
    /**
     * 查询云手机规格列表。
     */
    ListInstanceTypes(query: ListInstanceTypesRequest): Promise<ListInstanceTypesResponse>;
    /**
     * 查询云手机售卖地域。
     */
    ListRegions(query: ListRegionsRequest): Promise<ListRegionsResponse>;
    /**
     * 查询指定地域支持的可用区列表。
     */
    ListZones(query: ListZonesRequest): Promise<ListZonesResponse>;
    /**
     * 云手机预付费实例批量续费接口。
     */
    RenewInstances(query: RenewInstancesRequest): Promise<RenewInstancesResponse>;
    /**
     * 查询指定标签键对应的标签值。
     */
    ListTagValues(query: ListTagValuesRequest): Promise<ListTagValuesResponse>;
    /**
     * 查询标签键列表。
     */
    ListTagKeys(query: ListTagKeysRequest): Promise<ListTagKeysResponse>;
    /**
     * 为多个云资源统一解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询多个云资源绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为多个云资源统一创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
}
export default CLOUDPHONE;
