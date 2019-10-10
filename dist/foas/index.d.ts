import { ShrinkClusterRequest } from "./ShrinkCluster/req";
import { ShrinkClusterResponse } from "./ShrinkCluster/res";
import { ModifyMasterSpecRequest } from "./ModifyMasterSpec/req";
import { ModifyMasterSpecResponse } from "./ModifyMasterSpec/res";
import { GetClusterEngineVersionsRequest } from "./GetClusterEngineVersions/req";
import { GetClusterEngineVersionsResponse } from "./GetClusterEngineVersions/res";
import { DeleteQueueRequest } from "./DeleteQueue/req";
import { DeleteQueueResponse } from "./DeleteQueue/res";
import { CreateProjectRequest } from "./CreateProject/req";
import { CreateProjectResponse } from "./CreateProject/res";
import { ValidateJobRequest } from "./ValidateJob/req";
import { ValidateJobResponse } from "./ValidateJob/res";
import { DestroyClusterRequest } from "./DestroyCluster/req";
import { DestroyClusterResponse } from "./DestroyCluster/res";
import { ExpandClusterRequest } from "./ExpandCluster/req";
import { ExpandClusterResponse } from "./ExpandCluster/res";
import { BindQueueRequest } from "./BindQueue/req";
import { BindQueueResponse } from "./BindQueue/res";
import { CreateQueueRequest } from "./CreateQueue/req";
import { CreateQueueResponse } from "./CreateQueue/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { ListClusterRequest } from "./ListCluster/req";
import { ListClusterResponse } from "./ListCluster/res";
import { GetClusterResourceRequest } from "./GetClusterResource/req";
import { GetClusterResourceResponse } from "./GetClusterResource/res";
import { DeleteProjectRequest } from "./DeleteProject/req";
import { DeleteProjectResponse } from "./DeleteProject/res";
import { ListProjectRequest } from "./ListProject/req";
import { ListProjectResponse } from "./ListProject/res";
import { GetClusterQueueInfoRequest } from "./GetClusterQueueInfo/req";
import { GetClusterQueueInfoResponse } from "./GetClusterQueueInfo/res";
import { GetRawPlanJsonRequest } from "./GetRawPlanJson/req";
import { GetRawPlanJsonResponse } from "./GetRawPlanJson/res";
import { ListProjectBindQueueRequest } from "./ListProjectBindQueue/req";
import { ListProjectBindQueueResponse } from "./ListProjectBindQueue/res";
import { UpdatePackageRequest } from "./UpdatePackage/req";
import { UpdatePackageResponse } from "./UpdatePackage/res";
import { ListProjectBindQueueResourceRequest } from "./ListProjectBindQueueResource/req";
import { ListProjectBindQueueResourceResponse } from "./ListProjectBindQueueResource/res";
import { GetProjectRequest } from "./GetProject/req";
import { GetProjectResponse } from "./GetProject/res";
import { GetPackageRequest } from "./GetPackage/req";
import { GetPackageResponse } from "./GetPackage/res";
import { GetRefPackageJobRequest } from "./GetRefPackageJob/req";
import { GetRefPackageJobResponse } from "./GetRefPackageJob/res";
import { ListJobRequest } from "./ListJob/req";
import { ListJobResponse } from "./ListJob/res";
import { StartJobRequest } from "./StartJob/req";
import { StartJobResponse } from "./StartJob/res";
import { ListInstanceRequest } from "./ListInstance/req";
import { ListInstanceResponse } from "./ListInstance/res";
import { UpdateJobRequest } from "./UpdateJob/req";
import { UpdateJobResponse } from "./UpdateJob/res";
import { ModifyInstanceStateRequest } from "./ModifyInstanceState/req";
import { ModifyInstanceStateResponse } from "./ModifyInstanceState/res";
import { ListPackageRequest } from "./ListPackage/req";
import { ListPackageResponse } from "./ListPackage/res";
import { ListChildFolderRequest } from "./ListChildFolder/req";
import { ListChildFolderResponse } from "./ListChildFolder/res";
import { UnbindQueueRequest } from "./UnbindQueue/req";
import { UnbindQueueResponse } from "./UnbindQueue/res";
import { GetInstanceResourceRequest } from "./GetInstanceResource/req";
import { GetInstanceResourceResponse } from "./GetInstanceResource/res";
import { GetInstanceMetricRequest } from "./GetInstanceMetric/req";
import { GetInstanceMetricResponse } from "./GetInstanceMetric/res";
import { GetClusterDetailsRequest } from "./GetClusterDetails/req";
import { GetClusterDetailsResponse } from "./GetClusterDetails/res";
import { GetJobRequest } from "./GetJob/req";
import { GetJobResponse } from "./GetJob/res";
import { GetInstanceExceptionsRequest } from "./GetInstanceExceptions/req";
import { GetInstanceExceptionsResponse } from "./GetInstanceExceptions/res";
import { GetInstanceConfigRequest } from "./GetInstanceConfig/req";
import { GetInstanceConfigResponse } from "./GetInstanceConfig/res";
import { GetInstanceDetailRequest } from "./GetInstanceDetail/req";
import { GetInstanceDetailResponse } from "./GetInstanceDetail/res";
import { OfflineJobRequest } from "./OfflineJob/req";
import { OfflineJobResponse } from "./OfflineJob/res";
import { GetInstanceFinalStateRequest } from "./GetInstanceFinalState/req";
import { GetInstanceFinalStateResponse } from "./GetInstanceFinalState/res";
import { CreatePackageRequest } from "./CreatePackage/req";
import { CreatePackageResponse } from "./CreatePackage/res";
import { GetInstanceRunSummaryRequest } from "./GetInstanceRunSummary/req";
import { GetInstanceRunSummaryResponse } from "./GetInstanceRunSummary/res";
import { DeletePackageRequest } from "./DeletePackage/req";
import { DeletePackageResponse } from "./DeletePackage/res";
import { DeleteFolderRequest } from "./DeleteFolder/req";
import { DeleteFolderResponse } from "./DeleteFolder/res";
import { GetInstanceCheckpointRequest } from "./GetInstanceCheckpoint/req";
import { GetInstanceCheckpointResponse } from "./GetInstanceCheckpoint/res";
import { GetInstanceRequest } from "./GetInstance/req";
import { GetInstanceResponse } from "./GetInstance/res";
import { GetFolderRequest } from "./GetFolder/req";
import { GetFolderResponse } from "./GetFolder/res";
import { MVFolderRequest } from "./MVFolder/req";
import { MVFolderResponse } from "./MVFolder/res";
import { CommitJobRequest } from "./CommitJob/req";
import { CommitJobResponse } from "./CommitJob/res";
import { CreateFolderRequest } from "./CreateFolder/req";
import { CreateFolderResponse } from "./CreateFolder/res";
import { DeleteJobRequest } from "./DeleteJob/req";
import { DeleteJobResponse } from "./DeleteJob/res";
import { BatchGetInstanceRunSummaryRequest } from "./BatchGetInstanceRunSummary/req";
import { BatchGetInstanceRunSummaryResponse } from "./BatchGetInstanceRunSummary/res";
import { CheckRawPlanJsonRequest } from "./CheckRawPlanJson/req";
import { CheckRawPlanJsonResponse } from "./CheckRawPlanJson/res";
import { CreateJobRequest } from "./CreateJob/req";
import { CreateJobResponse } from "./CreateJob/res";
import { CreateCellClusterOrderRequest } from "./CreateCellClusterOrder/req";
import { CreateCellClusterOrderResponse } from "./CreateCellClusterOrder/res";
import { GetClusterMetricsRequest } from "./GetClusterMetrics/req";
import { GetClusterMetricsResponse } from "./GetClusterMetrics/res";
import { CalcPlanJsonResourceRequest } from "./CalcPlanJsonResource/req";
import { CalcPlanJsonResourceResponse } from "./CalcPlanJsonResource/res";
import { GetJobLatestAutoScalePlanRequest } from "./GetJobLatestAutoScalePlan/req";
import { GetJobLatestAutoScalePlanResponse } from "./GetJobLatestAutoScalePlan/res";
import { UpdateAutoScaleConfigRequest } from "./UpdateAutoScaleConfig/req";
import { UpdateAutoScaleConfigResponse } from "./UpdateAutoScaleConfig/res";
import { GetInstanceHistoryAutoScalePlanContentRequest } from "./GetInstanceHistoryAutoScalePlanContent/req";
import { GetInstanceHistoryAutoScalePlanContentResponse } from "./GetInstanceHistoryAutoScalePlanContent/res";
import { GetInstanceHistoryAutoScalePlanListRequest } from "./GetInstanceHistoryAutoScalePlanList/req";
import { GetInstanceHistoryAutoScalePlanListResponse } from "./GetInstanceHistoryAutoScalePlanList/res";
import { GetInstanceVertexTaskManagersRequest } from "./GetInstanceVertexTaskManagers/req";
import { GetInstanceVertexTaskManagersResponse } from "./GetInstanceVertexTaskManagers/res";

interface FOAS {
    /**
    * 调用本API，可以减少集群slave台数，仅限独享模式后付费集群
    */ ShrinkCluster(query: ShrinkClusterRequest): Promise<ShrinkClusterResponse>;
    /**
    * 修改集群master规格
    */ ModifyMasterSpec(query: ModifyMasterSpecRequest): Promise<ModifyMasterSpecResponse>;
    /**
    * 获取目前集群上存在的版本型号
    */ GetClusterEngineVersions(query: GetClusterEngineVersionsRequest): Promise<GetClusterEngineVersionsResponse>;
    /**
    * 删除已经创建的queue
    */ DeleteQueue(query: DeleteQueueRequest): Promise<DeleteQueueResponse>;
    /**
    * 创建project
    */ CreateProject(query: CreateProjectRequest): Promise<CreateProjectResponse>;
    /**
    * 作业语法检查
    */ ValidateJob(query: ValidateJobRequest): Promise<ValidateJobResponse>;
    /**
    * 销毁您的独享集群
    */ DestroyCluster(query: DestroyClusterRequest): Promise<DestroyClusterResponse>;
    /**
    * 对后付费集群进行slave扩容或者master升配
    */ ExpandCluster(query: ExpandClusterRequest): Promise<ExpandClusterResponse>;
    /**
    * 将某个创建但是没有绑定queue的project，绑定到某个尚未绑定过project的queue
    */ BindQueue(query: BindQueueRequest): Promise<BindQueueResponse>;
    /**
    * 创建Queue
    */ CreateQueue(query: CreateQueueRequest): Promise<CreateQueueResponse>;
    /**
    * 已经下单购买的用户可以通过本api创建集群，仅限独享集群
    */ CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
    * 查询已拥有的集群信息
    */ ListCluster(query: ListClusterRequest): Promise<ListClusterResponse>;
    /**
    * 获取集群资源情况
    */ GetClusterResource(query: GetClusterResourceRequest): Promise<GetClusterResourceResponse>;
    /**
    * 删除已经存在的某个project
    */ DeleteProject(query: DeleteProjectRequest): Promise<DeleteProjectResponse>;
    /**
    * 查询用户已有的project
    */ ListProject(query: ListProjectRequest): Promise<ListProjectResponse>;
    /**
    * 获取集群中创建的Queue的信息
    */ GetClusterQueueInfo(query: GetClusterQueueInfoRequest): Promise<GetClusterQueueInfoResponse>;
    /**
    * 获取作业原始执行计划
    */ GetRawPlanJson(query: GetRawPlanJsonRequest): Promise<GetRawPlanJsonResponse>;
    /**
    * 查询project绑定的队列信息
    */ ListProjectBindQueue(query: ListProjectBindQueueRequest): Promise<ListProjectBindQueueResponse>;
    /**
    * 更新package信息
    */ UpdatePackage(query: UpdatePackageRequest): Promise<UpdatePackageResponse>;
    /**
    * 查询project绑定的队列的资源信息
    */ ListProjectBindQueueResource(query: ListProjectBindQueueResourceRequest): Promise<ListProjectBindQueueResourceResponse>;
    /**
    * 获取项目详情
    */ GetProject(query: GetProjectRequest): Promise<GetProjectResponse>;
    /**
    * 获得package信息
    */ GetPackage(query: GetPackageRequest): Promise<GetPackageResponse>;
    /**
    * 获取引用特定package的作业
    */ GetRefPackageJob(query: GetRefPackageJobRequest): Promise<GetRefPackageJobResponse>;
    /**
    * 搜索job
    */ ListJob(query: ListJobRequest): Promise<ListJobResponse>;
    /**
    * 启动作业
    */ StartJob(query: StartJobRequest): Promise<StartJobResponse>;
    /**
    * 获取某个project下所有的运行实例
    */ ListInstance(query: ListInstanceRequest): Promise<ListInstanceResponse>;
    /**
    * 更新作业相关属性
    */ UpdateJob(query: UpdateJobRequest): Promise<UpdateJobResponse>;
    /**
    * 修改实例状态
    */ ModifyInstanceState(query: ModifyInstanceStateRequest): Promise<ModifyInstanceStateResponse>;
    /**
    * 搜索package信息
    */ ListPackage(query: ListPackageRequest): Promise<ListPackageResponse>;
    /**
    * 获取子目录
    */ ListChildFolder(query: ListChildFolderRequest): Promise<ListChildFolderResponse>;
    /**
    * 将project从queue上解绑
    */ UnbindQueue(query: UnbindQueueRequest): Promise<UnbindQueueResponse>;
    /**
    * 获取运行实例使用的cpu和memory等信息
    */ GetInstanceResource(query: GetInstanceResourceRequest): Promise<GetInstanceResourceResponse>;
    /**
    * 获取运行实例的metric信息
    */ GetInstanceMetric(query: GetInstanceMetricRequest): Promise<GetInstanceMetricResponse>;
    /**
    * 获取集有集群的集群详细配置信息
    */ GetClusterDetails(query: GetClusterDetailsRequest): Promise<GetClusterDetailsResponse>;
    /**
    * 获取job的具体信息
    */ GetJob(query: GetJobRequest): Promise<GetJobResponse>;
    /**
    * 获取运行实例的failover信息
    */ GetInstanceExceptions(query: GetInstanceExceptionsRequest): Promise<GetInstanceExceptionsResponse>;
    /**
    * 获取作业实例运行时的具体参数
    */ GetInstanceConfig(query: GetInstanceConfigRequest): Promise<GetInstanceConfigResponse>;
    /**
    * 获取实例运行的DAG图
    */ GetInstanceDetail(query: GetInstanceDetailRequest): Promise<GetInstanceDetailResponse>;
    /**
    * 下线作业
    */ OfflineJob(query: OfflineJobRequest): Promise<OfflineJobResponse>;
    /**
    * 获取运行实例在yarn上的最终状态
    */ GetInstanceFinalState(query: GetInstanceFinalStateRequest): Promise<GetInstanceFinalStateResponse>;
    /**
    * 获取用户OSS中某个Package的信息
    */ CreatePackage(query: CreatePackageRequest): Promise<CreatePackageResponse>;
    /**
    * 获取作业运行实例的运行概要
    */ GetInstanceRunSummary(query: GetInstanceRunSummaryRequest): Promise<GetInstanceRunSummaryResponse>;
    /**
    * 删除foas上保存的oss package信息
    */ DeletePackage(query: DeletePackageRequest): Promise<DeletePackageResponse>;
    /**
    * 删除文件夹
    */ DeleteFolder(query: DeleteFolderRequest): Promise<DeleteFolderResponse>;
    /**
    * 获取运行实例的ckeckpoint
    */ GetInstanceCheckpoint(query: GetInstanceCheckpointRequest): Promise<GetInstanceCheckpointResponse>;
    /**
    * 获得运行实例的相关信息
    */ GetInstance(query: GetInstanceRequest): Promise<GetInstanceResponse>;
    /**
    * 获取文件夹信息
    */ GetFolder(query: GetFolderRequest): Promise<GetFolderResponse>;
    /**
    * 移动文件夹
    */ MVFolder(query: MVFolderRequest): Promise<MVFolderResponse>;
    /**
    * 使用API提交作业
    */ CommitJob(query: CommitJobRequest): Promise<CommitJobResponse>;
    /**
    * 在确定项目路径下创建文件夹
    */ CreateFolder(query: CreateFolderRequest): Promise<CreateFolderResponse>;
    /**
    * 删除作业
    */ DeleteJob(query: DeleteJobRequest): Promise<DeleteJobResponse>;
    /**
    * 根据作业类型和名称获BatchGetInstanceRunSummary（批量获取实例运行信息）接口用来批量获取某个项目下，某一类作业（批作业或者流作业）的多个Job的运行实例情况。
    */ BatchGetInstanceRunSummary(query: BatchGetInstanceRunSummaryRequest): Promise<BatchGetInstanceRunSummaryResponse>;
    /**
    * 根据项目名称和作业名称检测是否已经获取到planjson
    */ CheckRawPlanJson(query: CheckRawPlanJsonRequest): Promise<CheckRawPlanJsonResponse>;
    /**
    * 创建作业
    */ CreateJob(query: CreateJobRequest): Promise<CreateJobResponse>;
    CreateCellClusterOrder(query: CreateCellClusterOrderRequest): Promise<CreateCellClusterOrderResponse>;
    GetClusterMetrics(query: GetClusterMetricsRequest): Promise<GetClusterMetricsResponse>;
    CalcPlanJsonResource(query: CalcPlanJsonResourceRequest): Promise<CalcPlanJsonResourceResponse>;
    GetJobLatestAutoScalePlan(query: GetJobLatestAutoScalePlanRequest): Promise<GetJobLatestAutoScalePlanResponse>;
    UpdateAutoScaleConfig(query: UpdateAutoScaleConfigRequest): Promise<UpdateAutoScaleConfigResponse>;
    GetInstanceHistoryAutoScalePlanContent(query: GetInstanceHistoryAutoScalePlanContentRequest): Promise<GetInstanceHistoryAutoScalePlanContentResponse>;
    GetInstanceHistoryAutoScalePlanList(query: GetInstanceHistoryAutoScalePlanListRequest): Promise<GetInstanceHistoryAutoScalePlanListResponse>;
    GetInstanceVertexTaskManagers(query: GetInstanceVertexTaskManagersRequest): Promise<GetInstanceVertexTaskManagersResponse>;
}
export default FOAS;
