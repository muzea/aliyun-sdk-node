import { CreateDatasetRequest } from "./CreateDataset/req";
import { CreateDatasetResponse } from "./CreateDataset/res";
import { CreateLabelsetRequest } from "./CreateLabelset/req";
import { CreateLabelsetResponse } from "./CreateLabelset/res";
import { CreateServiceRequest } from "./CreateService/req";
import { CreateServiceResponse } from "./CreateService/res";
import { CreateTrainTaskRequest } from "./CreateTrainTask/req";
import { CreateTrainTaskResponse } from "./CreateTrainTask/res";
import { CreateWorkspaceRequest } from "./CreateWorkspace/req";
import { CreateWorkspaceResponse } from "./CreateWorkspace/res";
import { DebugServiceRequest } from "./DebugService/req";
import { DebugServiceResponse } from "./DebugService/res";
import { DeleteDatasetRequest } from "./DeleteDataset/req";
import { DeleteDatasetResponse } from "./DeleteDataset/res";
import { DeleteLabelsetRequest } from "./DeleteLabelset/req";
import { DeleteLabelsetResponse } from "./DeleteLabelset/res";
import { DeleteServiceRequest } from "./DeleteService/req";
import { DeleteServiceResponse } from "./DeleteService/res";
import { DeleteTrainTaskRequest } from "./DeleteTrainTask/req";
import { DeleteTrainTaskResponse } from "./DeleteTrainTask/res";
import { DeleteWorkspaceRequest } from "./DeleteWorkspace/req";
import { DeleteWorkspaceResponse } from "./DeleteWorkspace/res";
import { DownloadLabelFileRequest } from "./DownloadLabelFile/req";
import { DownloadLabelFileResponse } from "./DownloadLabelFile/res";
import { GetDatasetRequest } from "./GetDataset/req";
import { GetDatasetResponse } from "./GetDataset/res";
import { GetLabelDetailRequest } from "./GetLabelDetail/req";
import { GetLabelDetailResponse } from "./GetLabelDetail/res";
import { GetLabelsetRequest } from "./GetLabelset/req";
import { GetLabelsetResponse } from "./GetLabelset/res";
import { GetServiceRequest } from "./GetService/req";
import { GetServiceResponse } from "./GetService/res";
import { GetTrainModelRequest } from "./GetTrainModel/req";
import { GetTrainModelResponse } from "./GetTrainModel/res";
import { GetTrainTaskRequest } from "./GetTrainTask/req";
import { GetTrainTaskResponse } from "./GetTrainTask/res";
import { GetTrainTaskEstimatedTimeRequest } from "./GetTrainTaskEstimatedTime/req";
import { GetTrainTaskEstimatedTimeResponse } from "./GetTrainTaskEstimatedTime/res";
import { GetUploadPolicyRequest } from "./GetUploadPolicy/req";
import { GetUploadPolicyResponse } from "./GetUploadPolicy/res";
import { GetWorkspaceRequest } from "./GetWorkspace/req";
import { GetWorkspaceResponse } from "./GetWorkspace/res";
import { ListDatasetDatasRequest } from "./ListDatasetDatas/req";
import { ListDatasetDatasResponse } from "./ListDatasetDatas/res";
import { ListDatasetsRequest } from "./ListDatasets/req";
import { ListDatasetsResponse } from "./ListDatasets/res";
import { ListLabelsetDatasRequest } from "./ListLabelsetDatas/req";
import { ListLabelsetDatasResponse } from "./ListLabelsetDatas/res";
import { ListLabelsetsRequest } from "./ListLabelsets/req";
import { ListLabelsetsResponse } from "./ListLabelsets/res";
import { ListServicesRequest } from "./ListServices/req";
import { ListServicesResponse } from "./ListServices/res";
import { ListTrainTasksRequest } from "./ListTrainTasks/req";
import { ListTrainTasksResponse } from "./ListTrainTasks/res";
import { ListWorkspacesRequest } from "./ListWorkspaces/req";
import { ListWorkspacesResponse } from "./ListWorkspaces/res";
import { SetDatasetUserOssPathRequest } from "./SetDatasetUserOssPath/req";
import { SetDatasetUserOssPathResponse } from "./SetDatasetUserOssPath/res";
import { StartServiceRequest } from "./StartService/req";
import { StartServiceResponse } from "./StartService/res";
import { StartTrainTaskRequest } from "./StartTrainTask/req";
import { StartTrainTaskResponse } from "./StartTrainTask/res";
import { StopServiceRequest } from "./StopService/req";
import { StopServiceResponse } from "./StopService/res";
import { StopTrainTaskRequest } from "./StopTrainTask/req";
import { StopTrainTaskResponse } from "./StopTrainTask/res";
import { UpdateDatasetRequest } from "./UpdateDataset/req";
import { UpdateDatasetResponse } from "./UpdateDataset/res";
import { UpdateLabelsetRequest } from "./UpdateLabelset/req";
import { UpdateLabelsetResponse } from "./UpdateLabelset/res";
import { UpdateServiceRequest } from "./UpdateService/req";
import { UpdateServiceResponse } from "./UpdateService/res";
import { UpdateTrainTaskRequest } from "./UpdateTrainTask/req";
import { UpdateTrainTaskResponse } from "./UpdateTrainTask/res";
import { UpdateWorkspaceRequest } from "./UpdateWorkspace/req";
import { UpdateWorkspaceResponse } from "./UpdateWorkspace/res";
import { CreateTagTaskRequest } from "./CreateTagTask/req";
import { CreateTagTaskResponse } from "./CreateTagTask/res";
import { DeleteLabelsetDataRequest } from "./DeleteLabelsetData/req";
import { DeleteLabelsetDataResponse } from "./DeleteLabelsetData/res";
import { GetDiffCountLabelsetAndDatasetRequest } from "./GetDiffCountLabelsetAndDataset/req";
import { GetDiffCountLabelsetAndDatasetResponse } from "./GetDiffCountLabelsetAndDataset/res";
import { DownloadFileNameListRequest } from "./DownloadFileNameList/req";
import { DownloadFileNameListResponse } from "./DownloadFileNameList/res";
import { CustomizeClassifyImageRequest } from "./CustomizeClassifyImage/req";
import { CustomizeClassifyImageResponse } from "./CustomizeClassifyImage/res";
import { CustomizeDetectImageRequest } from "./CustomizeDetectImage/req";
import { CustomizeDetectImageResponse } from "./CustomizeDetectImage/res";
import { CustomizeInstanceSegmentImageRequest } from "./CustomizeInstanceSegmentImage/req";
import { CustomizeInstanceSegmentImageResponse } from "./CustomizeInstanceSegmentImage/res";
import { GetServiceQpsRequest } from "./GetServiceQps/req";
import { GetServiceQpsResponse } from "./GetServiceQps/res";
import { GetServiceInvokeRequest } from "./GetServiceInvoke/req";
import { GetServiceInvokeResponse } from "./GetServiceInvoke/res";
import { DownloadDatasetRequest } from "./DownloadDataset/req";
import { DownloadDatasetResponse } from "./DownloadDataset/res";
import { DeleteDataReflowDataRequest } from "./DeleteDataReflowData/req";
import { DeleteDataReflowDataResponse } from "./DeleteDataReflowData/res";
import { ListDataReflowDatasRequest } from "./ListDataReflowDatas/req";
import { ListDataReflowDatasResponse } from "./ListDataReflowDatas/res";
import { DisableDataReflowRequest } from "./DisableDataReflow/req";
import { DisableDataReflowResponse } from "./DisableDataReflow/res";
import { ExportDataReflowDataListRequest } from "./ExportDataReflowDataList/req";
import { ExportDataReflowDataListResponse } from "./ExportDataReflowDataList/res";
import { EnableDataReflowRequest } from "./EnableDataReflow/req";
import { EnableDataReflowResponse } from "./EnableDataReflow/res";
import { GetUserInfoRequest } from "./GetUserInfo/req";
import { GetUserInfoResponse } from "./GetUserInfo/res";
import { CheckDatasetOssBucketCORSRequest } from "./CheckDatasetOssBucketCORS/req";
import { CheckDatasetOssBucketCORSResponse } from "./CheckDatasetOssBucketCORS/res";

interface VIAPI_REGEN {
    /**
     * 创建数据集CreateDataset的语法及示例。
     */
    CreateDataset(query: CreateDatasetRequest): Promise<CreateDatasetResponse>;
    /**
     * 创建标注集CreateLabelset的语法及示例。
     */
    CreateLabelset(query: CreateLabelsetRequest): Promise<CreateLabelsetResponse>;
    /**
     * 创建服务CreateService的语法及示例。
     */
    CreateService(query: CreateServiceRequest): Promise<CreateServiceResponse>;
    /**
     * 创建训练任务CreateTrainTask的语法及示例。
     */
    CreateTrainTask(query: CreateTrainTaskRequest): Promise<CreateTrainTaskResponse>;
    /**
     * 创建生产空间CreateWorkspace的语法及示例。
     */
    CreateWorkspace(query: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse>;
    /**
     * 标注请求服务获取结果DebugService的语法及示例。
     */
    DebugService(query: DebugServiceRequest): Promise<DebugServiceResponse>;
    /**
     * 删除数据集DeleteDataset的语法及示例。
     */
    DeleteDataset(query: DeleteDatasetRequest): Promise<DeleteDatasetResponse>;
    /**
     * 删除标注DeleteLabelset的语法及示例。
     */
    DeleteLabelset(query: DeleteLabelsetRequest): Promise<DeleteLabelsetResponse>;
    /**
     * 删除服务DeleteService的语法及示例。
     */
    DeleteService(query: DeleteServiceRequest): Promise<DeleteServiceResponse>;
    /**
     * 删除训练任务。
     */
    DeleteTrainTask(query: DeleteTrainTaskRequest): Promise<DeleteTrainTaskResponse>;
    /**
     * 删除生产空间DeleteWorkspace的语法及示例。
     */
    DeleteWorkspace(query: DeleteWorkspaceRequest): Promise<DeleteWorkspaceResponse>;
    /**
     * 下载标注文件。
     */
    DownloadLabelFile(query: DownloadLabelFileRequest): Promise<DownloadLabelFileResponse>;
    /**
     * 获得数据集GetDataset的语法及示例。
     */
    GetDataset(query: GetDatasetRequest): Promise<GetDatasetResponse>;
    /**
     * 获取标注信息。
     */
    GetLabelDetail(query: GetLabelDetailRequest): Promise<GetLabelDetailResponse>;
    /**
     * 获取标注。
     */
    GetLabelset(query: GetLabelsetRequest): Promise<GetLabelsetResponse>;
    /**
     * 获取服务信息。
     */
    GetService(query: GetServiceRequest): Promise<GetServiceResponse>;
    /**
     * 获取训练模型GetTrainModel的语法及示例。
     */
    GetTrainModel(query: GetTrainModelRequest): Promise<GetTrainModelResponse>;
    /**
     * 获得训练任务GetTrainTask的语法及示例。
     */
    GetTrainTask(query: GetTrainTaskRequest): Promise<GetTrainTaskResponse>;
    /**
     * 获取训练任务剩余时间GetTrainTaskEstimatedTime的语法及示例。
     */
    GetTrainTaskEstimatedTime(query: GetTrainTaskEstimatedTimeRequest): Promise<GetTrainTaskEstimatedTimeResponse>;
    /**
     * 获得上传凭证GetUploadPolicy的语法及示例。
     */
    GetUploadPolicy(query: GetUploadPolicyRequest): Promise<GetUploadPolicyResponse>;
    /**
     * 获得工作空间GetWorkspace的语法及示例。
     */
    GetWorkspace(query: GetWorkspaceRequest): Promise<GetWorkspaceResponse>;
    /**
     * 查看数据集数据。
     */
    ListDatasetDatas(query: ListDatasetDatasRequest): Promise<ListDatasetDatasResponse>;
    /**
     * 数据集列表ListDatasets的语法及示例。
     */
    ListDatasets(query: ListDatasetsRequest): Promise<ListDatasetsResponse>;
    /**
     * 标注集数据列表ListLabelsetDatas的语法及示例。
     */
    ListLabelsetDatas(query: ListLabelsetDatasRequest): Promise<ListLabelsetDatasResponse>;
    /**
     * 标注集列表ListLabelsets的语法及示例。
     */
    ListLabelsets(query: ListLabelsetsRequest): Promise<ListLabelsetsResponse>;
    /**
     * 服务数据列表ListServices的语法及示例。
     */
    ListServices(query: ListServicesRequest): Promise<ListServicesResponse>;
    /**
     * 训练任务列表ListTrainTasks的语法及示例。
     */
    ListTrainTasks(query: ListTrainTasksRequest): Promise<ListTrainTasksResponse>;
    /**
     * 生产空间列表ListWorkspaces的语法及示例。
     */
    ListWorkspaces(query: ListWorkspacesRequest): Promise<ListWorkspacesResponse>;
    /**
     * 设置数据集OSS路径。
     */
    SetDatasetUserOssPath(query: SetDatasetUserOssPathRequest): Promise<SetDatasetUserOssPathResponse>;
    /**
     * 启动服务StartService的语法及示例。
     */
    StartService(query: StartServiceRequest): Promise<StartServiceResponse>;
    /**
     * 开启训练任务StartTrainTask的语法及示例。
     */
    StartTrainTask(query: StartTrainTaskRequest): Promise<StartTrainTaskResponse>;
    /**
     * 停止服务StopService的语法及示例。
     */
    StopService(query: StopServiceRequest): Promise<StopServiceResponse>;
    /**
     * 停止训练任务接口StopTrainTask的语法及示例。
     */
    StopTrainTask(query: StopTrainTaskRequest): Promise<StopTrainTaskResponse>;
    /**
     * 更新数据集UpdateDataset的语法及示例。
     */
    UpdateDataset(query: UpdateDatasetRequest): Promise<UpdateDatasetResponse>;
    /**
     * 更新标注集UpdateLabelset的语法及示例。
     */
    UpdateLabelset(query: UpdateLabelsetRequest): Promise<UpdateLabelsetResponse>;
    /**
     * 更新服务UpdateService的语法及示例。
     */
    UpdateService(query: UpdateServiceRequest): Promise<UpdateServiceResponse>;
    /**
     * 更新训练任务UpdateTrainTask的语法及示例。
     */
    UpdateTrainTask(query: UpdateTrainTaskRequest): Promise<UpdateTrainTaskResponse>;
    /**
     * 更新生产空间UpdateWorkspace的语法及示例。
     */
    UpdateWorkspace(query: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse>;
    /**
     * 创建标注任务CreateTagTask的语法及示例。
     */
    CreateTagTask(query: CreateTagTaskRequest): Promise<CreateTagTaskResponse>;
    /**
     * 删除标注集内的数据DeleteLabelsetData的语法及示例。
     */
    DeleteLabelsetData(query: DeleteLabelsetDataRequest): Promise<DeleteLabelsetDataResponse>;
    /**
     * 获取数据集和标注集的数量差GetDiffCountLabelsetAndDataset的语法及示例。
     */
    GetDiffCountLabelsetAndDataset(query: GetDiffCountLabelsetAndDatasetRequest): Promise<GetDiffCountLabelsetAndDatasetResponse>;
    /**
     * 数据集列表ListDatasets的语法及示例。
     */
    DownloadFileNameList(query: DownloadFileNameListRequest): Promise<DownloadFileNameListResponse>;
    /**
     * 自学习分类CustomizeClassifyImage的语法及示例。
     */
    CustomizeClassifyImage(query: CustomizeClassifyImageRequest): Promise<CustomizeClassifyImageResponse>;
    /**
     * 自学习检测CustomizeDetectImage的语法及示例。
     */
    CustomizeDetectImage(query: CustomizeDetectImageRequest): Promise<CustomizeDetectImageResponse>;
    /**
     * 自学习分割CustomizeInstanceSegmentImage的语法及示例。
     */
    CustomizeInstanceSegmentImage(query: CustomizeInstanceSegmentImageRequest): Promise<CustomizeInstanceSegmentImageResponse>;
    /**
     * 获取服务QPS。
     */
    GetServiceQps(query: GetServiceQpsRequest): Promise<GetServiceQpsResponse>;
    /**
     * 获取服务调用量。
     */
    GetServiceInvoke(query: GetServiceInvokeRequest): Promise<GetServiceInvokeResponse>;
    /**
     * 下载数据集。
     */
    DownloadDataset(query: DownloadDatasetRequest): Promise<DownloadDatasetResponse>;
    /**
     * 本文介绍删除回流数据DeleteDataReflowData的语法及示例。
     */
    DeleteDataReflowData(query: DeleteDataReflowDataRequest): Promise<DeleteDataReflowDataResponse>;
    /**
     * 本文介绍回流数据列表ListDataReflowDatas的语法及示例。
     */
    ListDataReflowDatas(query: ListDataReflowDatasRequest): Promise<ListDataReflowDatasResponse>;
    /**
     * 本文介绍关闭数据回流DisableDataReflow的语法及示例。
     */
    DisableDataReflow(query: DisableDataReflowRequest): Promise<DisableDataReflowResponse>;
    /**
     * 本文介绍导出回流数据ExportDataReflowDataList的语法及示例。
     */
    ExportDataReflowDataList(query: ExportDataReflowDataListRequest): Promise<ExportDataReflowDataListResponse>;
    /**
     * 本文介绍开启数据回流EnableDataReflow的语法及示例。
     */
    EnableDataReflow(query: EnableDataReflowRequest): Promise<EnableDataReflowResponse>;
    /**
     * 本文介绍获取用户信息GetUserInfo的语法及示例。
     */
    GetUserInfo(query: GetUserInfoRequest): Promise<GetUserInfoResponse>;
    /**
     * 本文介绍检查用户OSS Bucket的跨域规则CheckDatasetOssBucketCORS的语法及示例。
     */
    CheckDatasetOssBucketCORS(query: CheckDatasetOssBucketCORSRequest): Promise<CheckDatasetOssBucketCORSResponse>;
}
export default VIAPI_REGEN;
