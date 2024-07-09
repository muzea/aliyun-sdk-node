import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { GetInstanceRequest } from "./GetInstance/req";
import { GetInstanceResponse } from "./GetInstance/res";
import { DeleteCrowdRequest } from "./DeleteCrowd/req";
import { DeleteCrowdResponse } from "./DeleteCrowd/res";
import { UpdateCrowdRequest } from "./UpdateCrowd/req";
import { UpdateCrowdResponse } from "./UpdateCrowd/res";
import { DeleteSubCrowdRequest } from "./DeleteSubCrowd/req";
import { DeleteSubCrowdResponse } from "./DeleteSubCrowd/res";
import { ListCrowdsRequest } from "./ListCrowds/req";
import { ListCrowdsResponse } from "./ListCrowds/res";
import { ReportABMetricGroupRequest } from "./ReportABMetricGroup/req";
import { ReportABMetricGroupResponse } from "./ReportABMetricGroup/res";
import { CreateCrowdRequest } from "./CreateCrowd/req";
import { CreateCrowdResponse } from "./CreateCrowd/res";
import { CreateSubCrowdRequest } from "./CreateSubCrowd/req";
import { CreateSubCrowdResponse } from "./CreateSubCrowd/res";
import { ListSubCrowdsRequest } from "./ListSubCrowds/req";
import { ListSubCrowdsResponse } from "./ListSubCrowds/res";
import { GetSubCrowdRequest } from "./GetSubCrowd/req";
import { GetSubCrowdResponse } from "./GetSubCrowd/res";
import { PushAllExperimentRequest } from "./PushAllExperiment/req";
import { PushAllExperimentResponse } from "./PushAllExperiment/res";
import { ListExperimentsRequest } from "./ListExperiments/req";
import { ListExperimentsResponse } from "./ListExperiments/res";
import { OnlineExperimentGroupRequest } from "./OnlineExperimentGroup/req";
import { OnlineExperimentGroupResponse } from "./OnlineExperimentGroup/res";
import { OfflineExperimentRequest } from "./OfflineExperiment/req";
import { OfflineExperimentResponse } from "./OfflineExperiment/res";
import { DeleteExperimentRequest } from "./DeleteExperiment/req";
import { DeleteExperimentResponse } from "./DeleteExperiment/res";
import { CloneExperimentRequest } from "./CloneExperiment/req";
import { CloneExperimentResponse } from "./CloneExperiment/res";
import { GetExperimentRequest } from "./GetExperiment/req";
import { GetExperimentResponse } from "./GetExperiment/res";
import { UpdateExperimentRequest } from "./UpdateExperiment/req";
import { UpdateExperimentResponse } from "./UpdateExperiment/res";
import { CreateExperimentRequest } from "./CreateExperiment/req";
import { CreateExperimentResponse } from "./CreateExperiment/res";
import { OfflineExperimentGroupRequest } from "./OfflineExperimentGroup/req";
import { OfflineExperimentGroupResponse } from "./OfflineExperimentGroup/res";
import { CloneExperimentGroupRequest } from "./CloneExperimentGroup/req";
import { CloneExperimentGroupResponse } from "./CloneExperimentGroup/res";
import { DeleteExperimentGroupRequest } from "./DeleteExperimentGroup/req";
import { DeleteExperimentGroupResponse } from "./DeleteExperimentGroup/res";
import { UpdateExperimentGroupRequest } from "./UpdateExperimentGroup/req";
import { UpdateExperimentGroupResponse } from "./UpdateExperimentGroup/res";
import { OnlineExperimentRequest } from "./OnlineExperiment/req";
import { OnlineExperimentResponse } from "./OnlineExperiment/res";
import { UpdateLayerRequest } from "./UpdateLayer/req";
import { UpdateLayerResponse } from "./UpdateLayer/res";
import { GetLayerRequest } from "./GetLayer/req";
import { GetLayerResponse } from "./GetLayer/res";
import { CreateExperimentGroupRequest } from "./CreateExperimentGroup/req";
import { CreateExperimentGroupResponse } from "./CreateExperimentGroup/res";
import { DeleteLayerRequest } from "./DeleteLayer/req";
import { DeleteLayerResponse } from "./DeleteLayer/res";
import { GetExperimentGroupRequest } from "./GetExperimentGroup/req";
import { GetExperimentGroupResponse } from "./GetExperimentGroup/res";
import { ListExperimentGroupsRequest } from "./ListExperimentGroups/req";
import { ListExperimentGroupsResponse } from "./ListExperimentGroups/res";
import { CreateLayerRequest } from "./CreateLayer/req";
import { CreateLayerResponse } from "./CreateLayer/res";
import { ListLayersRequest } from "./ListLayers/req";
import { ListLayersResponse } from "./ListLayers/res";
import { OnlineLaboratoryRequest } from "./OnlineLaboratory/req";
import { OnlineLaboratoryResponse } from "./OnlineLaboratory/res";
import { OfflineLaboratoryRequest } from "./OfflineLaboratory/req";
import { OfflineLaboratoryResponse } from "./OfflineLaboratory/res";
import { UpdateLaboratoryRequest } from "./UpdateLaboratory/req";
import { UpdateLaboratoryResponse } from "./UpdateLaboratory/res";
import { ListLaboratoriesRequest } from "./ListLaboratories/req";
import { ListLaboratoriesResponse } from "./ListLaboratories/res";
import { GetLaboratoryRequest } from "./GetLaboratory/req";
import { GetLaboratoryResponse } from "./GetLaboratory/res";
import { CreateLaboratoryRequest } from "./CreateLaboratory/req";
import { CreateLaboratoryResponse } from "./CreateLaboratory/res";
import { CloneLaboratoryRequest } from "./CloneLaboratory/req";
import { CloneLaboratoryResponse } from "./CloneLaboratory/res";
import { DeleteLaboratoryRequest } from "./DeleteLaboratory/req";
import { DeleteLaboratoryResponse } from "./DeleteLaboratory/res";
import { GetCalculationJobRequest } from "./GetCalculationJob/req";
import { GetCalculationJobResponse } from "./GetCalculationJob/res";
import { ListCalculationJobsRequest } from "./ListCalculationJobs/req";
import { ListCalculationJobsResponse } from "./ListCalculationJobs/res";
import { CreateCalculationJobsRequest } from "./CreateCalculationJobs/req";
import { CreateCalculationJobsResponse } from "./CreateCalculationJobs/res";
import { DeleteABMetricGroupRequest } from "./DeleteABMetricGroup/req";
import { DeleteABMetricGroupResponse } from "./DeleteABMetricGroup/res";
import { UpdateABMetricGroupRequest } from "./UpdateABMetricGroup/req";
import { UpdateABMetricGroupResponse } from "./UpdateABMetricGroup/res";
import { UpdateABMetricRequest } from "./UpdateABMetric/req";
import { UpdateABMetricResponse } from "./UpdateABMetric/res";
import { GetABMetricGroupRequest } from "./GetABMetricGroup/req";
import { GetABMetricGroupResponse } from "./GetABMetricGroup/res";
import { CreateABMetricGroupRequest } from "./CreateABMetricGroup/req";
import { CreateABMetricGroupResponse } from "./CreateABMetricGroup/res";
import { ListABMetricGroupsRequest } from "./ListABMetricGroups/req";
import { ListABMetricGroupsResponse } from "./ListABMetricGroups/res";
import { DeleteABMetricRequest } from "./DeleteABMetric/req";
import { DeleteABMetricResponse } from "./DeleteABMetric/res";
import { GetABMetricRequest } from "./GetABMetric/req";
import { GetABMetricResponse } from "./GetABMetric/res";
import { ListABMetricsRequest } from "./ListABMetrics/req";
import { ListABMetricsResponse } from "./ListABMetrics/res";
import { CreateABMetricRequest } from "./CreateABMetric/req";
import { CreateABMetricResponse } from "./CreateABMetric/res";
import { GetInstanceResourceTableRequest } from "./GetInstanceResourceTable/req";
import { GetInstanceResourceTableResponse } from "./GetInstanceResourceTable/res";
import { DeleteTableMetaRequest } from "./DeleteTableMeta/req";
import { DeleteTableMetaResponse } from "./DeleteTableMeta/res";
import { ListTableMetasRequest } from "./ListTableMetas/req";
import { ListTableMetasResponse } from "./ListTableMetas/res";
import { GetTableMetaRequest } from "./GetTableMeta/req";
import { GetTableMetaResponse } from "./GetTableMeta/res";
import { CreateTableMetaRequest } from "./CreateTableMeta/req";
import { CreateTableMetaResponse } from "./CreateTableMeta/res";
import { UpdateTableMetaRequest } from "./UpdateTableMeta/req";
import { UpdateTableMetaResponse } from "./UpdateTableMeta/res";
import { DeleteParamRequest } from "./DeleteParam/req";
import { DeleteParamResponse } from "./DeleteParam/res";
import { CreateParamRequest } from "./CreateParam/req";
import { CreateParamResponse } from "./CreateParam/res";
import { UpdateParamRequest } from "./UpdateParam/req";
import { UpdateParamResponse } from "./UpdateParam/res";
import { ListParamsRequest } from "./ListParams/req";
import { ListParamsResponse } from "./ListParams/res";
import { UpdateSceneRequest } from "./UpdateScene/req";
import { UpdateSceneResponse } from "./UpdateScene/res";
import { GetSceneRequest } from "./GetScene/req";
import { GetSceneResponse } from "./GetScene/res";
import { DeleteSceneRequest } from "./DeleteScene/req";
import { DeleteSceneResponse } from "./DeleteScene/res";
import { ListScenesRequest } from "./ListScenes/req";
import { ListScenesResponse } from "./ListScenes/res";
import { CreateSceneRequest } from "./CreateScene/req";
import { CreateSceneResponse } from "./CreateScene/res";
import { CheckInstanceResourcesRequest } from "./CheckInstanceResources/req";
import { CheckInstanceResourcesResponse } from "./CheckInstanceResources/res";
import { UpdateInstanceResourceRequest } from "./UpdateInstanceResource/req";
import { UpdateInstanceResourceResponse } from "./UpdateInstanceResource/res";
import { DeleteInstanceResourceRequest } from "./DeleteInstanceResource/req";
import { DeleteInstanceResourceResponse } from "./DeleteInstanceResource/res";
import { ListInstanceResourcesRequest } from "./ListInstanceResources/req";
import { ListInstanceResourcesResponse } from "./ListInstanceResources/res";
import { CreateInstanceResourceRequest } from "./CreateInstanceResource/req";
import { CreateInstanceResourceResponse } from "./CreateInstanceResource/res";
import { GetInstanceResourceRequest } from "./GetInstanceResource/req";
import { GetInstanceResourceResponse } from "./GetInstanceResource/res";
import { ListCrowdUsersRequest } from "./ListCrowdUsers/req";
import { ListCrowdUsersResponse } from "./ListCrowdUsers/res";
import { GetFeatureConsistencyCheckJobConfigRequest } from "./GetFeatureConsistencyCheckJobConfig/req";
import { GetFeatureConsistencyCheckJobConfigResponse } from "./GetFeatureConsistencyCheckJobConfig/res";
import { CloneFeatureConsistencyCheckJobConfigRequest } from "./CloneFeatureConsistencyCheckJobConfig/req";
import { CloneFeatureConsistencyCheckJobConfigResponse } from "./CloneFeatureConsistencyCheckJobConfig/res";
import { CreateFeatureConsistencyCheckJobRequest } from "./CreateFeatureConsistencyCheckJob/req";
import { CreateFeatureConsistencyCheckJobResponse } from "./CreateFeatureConsistencyCheckJob/res";
import { ListFeatureConsistencyCheckJobFeatureReportsRequest } from "./ListFeatureConsistencyCheckJobFeatureReports/req";
import { ListFeatureConsistencyCheckJobFeatureReportsResponse } from "./ListFeatureConsistencyCheckJobFeatureReports/res";
import { TerminateFeatureConsistencyCheckJobRequest } from "./TerminateFeatureConsistencyCheckJob/req";
import { TerminateFeatureConsistencyCheckJobResponse } from "./TerminateFeatureConsistencyCheckJob/res";
import { GetFeatureConsistencyCheckJobRequest } from "./GetFeatureConsistencyCheckJob/req";
import { GetFeatureConsistencyCheckJobResponse } from "./GetFeatureConsistencyCheckJob/res";
import { ListFeatureConsistencyCheckJobsRequest } from "./ListFeatureConsistencyCheckJobs/req";
import { ListFeatureConsistencyCheckJobsResponse } from "./ListFeatureConsistencyCheckJobs/res";
import { ListFeatureConsistencyCheckJobScoreReportsRequest } from "./ListFeatureConsistencyCheckJobScoreReports/req";
import { ListFeatureConsistencyCheckJobScoreReportsResponse } from "./ListFeatureConsistencyCheckJobScoreReports/res";
import { ListFeatureConsistencyCheckJobConfigsRequest } from "./ListFeatureConsistencyCheckJobConfigs/req";
import { ListFeatureConsistencyCheckJobConfigsResponse } from "./ListFeatureConsistencyCheckJobConfigs/res";
import { UpdateFeatureConsistencyCheckJobConfigRequest } from "./UpdateFeatureConsistencyCheckJobConfig/req";
import { UpdateFeatureConsistencyCheckJobConfigResponse } from "./UpdateFeatureConsistencyCheckJobConfig/res";
import { CreateFeatureConsistencyCheckJobConfigRequest } from "./CreateFeatureConsistencyCheckJobConfig/req";
import { CreateFeatureConsistencyCheckJobConfigResponse } from "./CreateFeatureConsistencyCheckJobConfig/res";
import { BackflowFeatureConsistencyCheckJobDataRequest } from "./BackflowFeatureConsistencyCheckJobData/req";
import { BackflowFeatureConsistencyCheckJobDataResponse } from "./BackflowFeatureConsistencyCheckJobData/res";
import { SyncFeatureConsistencyCheckJobReplayLogRequest } from "./SyncFeatureConsistencyCheckJobReplayLog/req";
import { SyncFeatureConsistencyCheckJobReplayLogResponse } from "./SyncFeatureConsistencyCheckJobReplayLog/res";

interface PAIRECSERVICE {
    /**
     * 获取PAIRec实例的列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 获取指定PAIRec实例的详细信息。
     */
    GetInstance(query: GetInstanceRequest): Promise<GetInstanceResponse>;
    /**
     * 删除指定人群。
     */
    DeleteCrowd(query: DeleteCrowdRequest): Promise<DeleteCrowdResponse>;
    /**
     * 更新指定人群信息，例如更新人群的名称、描述。
     */
    UpdateCrowd(query: UpdateCrowdRequest): Promise<UpdateCrowdResponse>;
    /**
     * 删除指定子人群。
     */
    DeleteSubCrowd(query: DeleteSubCrowdRequest): Promise<DeleteSubCrowdResponse>;
    /**
     * 获取人群列表。
     */
    ListCrowds(query: ListCrowdsRequest): Promise<ListCrowdsResponse>;
    /**
     * 查询指标组的报表。
     */
    ReportABMetricGroup(query: ReportABMetricGroupRequest): Promise<ReportABMetricGroupResponse>;
    /**
     * 创建一个人群，用于表示用户群体。
     */
    CreateCrowd(query: CreateCrowdRequest): Promise<CreateCrowdResponse>;
    /**
     * 在指定人群下创建子人群。
     */
    CreateSubCrowd(query: CreateSubCrowdRequest): Promise<CreateSubCrowdResponse>;
    /**
     * 获取指定人群下的子人群列表。
     */
    ListSubCrowds(query: ListSubCrowdsRequest): Promise<ListSubCrowdsResponse>;
    /**
     * 获取指定子人群的详细信息。
     */
    GetSubCrowd(query: GetSubCrowdRequest): Promise<GetSubCrowdResponse>;
    /**
     * 对于效果较优且稳定的实验，可对该实验进行推全。对某个实验推全后，该实验所属的实验组将结束生命周期，不再支持继续实验。平台会生成一个新的实验组，被推全的实验将在该实验组下占有全额的流量。
     */
    PushAllExperiment(query: PushAllExperimentRequest): Promise<PushAllExperimentResponse>;
    /**
     * 获取指定实验组下的实验列表。
     */
    ListExperiments(query: ListExperimentsRequest): Promise<ListExperimentsResponse>;
    /**
     * 上线指定实验组。
     */
    OnlineExperimentGroup(query: OnlineExperimentGroupRequest): Promise<OnlineExperimentGroupResponse>;
    /**
     * 将指定实验下线。
     */
    OfflineExperiment(query: OfflineExperimentRequest): Promise<OfflineExperimentResponse>;
    /**
     * 删除指定实验。
     */
    DeleteExperiment(query: DeleteExperimentRequest): Promise<DeleteExperimentResponse>;
    /**
     * 对指定实验进行克隆。
     */
    CloneExperiment(query: CloneExperimentRequest): Promise<CloneExperimentResponse>;
    /**
     * 获取指定实验的详细信息。
     */
    GetExperiment(query: GetExperimentRequest): Promise<GetExperimentResponse>;
    /**
     * 更新指定实验的信息，例如更新实验的名称。
     */
    UpdateExperiment(query: UpdateExperimentRequest): Promise<UpdateExperimentResponse>;
    /**
     * 在指定实验组下创建一个实验。
     */
    CreateExperiment(query: CreateExperimentRequest): Promise<CreateExperimentResponse>;
    /**
     * 下线指定实验组。
     */
    OfflineExperimentGroup(query: OfflineExperimentGroupRequest): Promise<OfflineExperimentGroupResponse>;
    /**
     * 向指定环境克隆一个实验组。
     */
    CloneExperimentGroup(query: CloneExperimentGroupRequest): Promise<CloneExperimentGroupResponse>;
    /**
     * 删除指定实验组。
     */
    DeleteExperimentGroup(query: DeleteExperimentGroupRequest): Promise<DeleteExperimentGroupResponse>;
    /**
     * 更新指定实验组的信息，例如更新实验组的名称、描述。
     */
    UpdateExperimentGroup(query: UpdateExperimentGroupRequest): Promise<UpdateExperimentGroupResponse>;
    /**
     * 将指定实验发布上线。
     */
    OnlineExperiment(query: OnlineExperimentRequest): Promise<OnlineExperimentResponse>;
    /**
     * 更新指定层的信息，例如更新层的名称、描述。
     */
    UpdateLayer(query: UpdateLayerRequest): Promise<UpdateLayerResponse>;
    /**
     * 获取指定层的详细信息。
     */
    GetLayer(query: GetLayerRequest): Promise<GetLayerResponse>;
    /**
     * 在指定层下，创建一个实验组。可按照实验类型划分实验组，从而按照实验组观测实验整体效果表现。
     */
    CreateExperimentGroup(query: CreateExperimentGroupRequest): Promise<CreateExperimentGroupResponse>;
    /**
     * 删除指定层。
     */
    DeleteLayer(query: DeleteLayerRequest): Promise<DeleteLayerResponse>;
    /**
     * 获取指定实验组的详细信息。
     */
    GetExperimentGroup(query: GetExperimentGroupRequest): Promise<GetExperimentGroupResponse>;
    /**
     * 获取实验组列表。
     */
    ListExperimentGroups(query: ListExperimentGroupsRequest): Promise<ListExperimentGroupsResponse>;
    /**
     * 在指定实验室下创建一个层，用于分层实验。层与层之间正交，可独立开展实验，避免流量饥饿问题。
     */
    CreateLayer(query: CreateLayerRequest): Promise<CreateLayerResponse>;
    /**
     * 获取某个实验室下的层列表。
     */
    ListLayers(query: ListLayersRequest): Promise<ListLayersResponse>;
    /**
     * 将指定实验室进行发布上线，以开展实验分析。
     */
    OnlineLaboratory(query: OnlineLaboratoryRequest): Promise<OnlineLaboratoryResponse>;
    /**
     * 将指定实验室下线。
     */
    OfflineLaboratory(query: OfflineLaboratoryRequest): Promise<OfflineLaboratoryResponse>;
    /**
     * 更新实验室信息，例如更新实验室的名称。
     */
    UpdateLaboratory(query: UpdateLaboratoryRequest): Promise<UpdateLaboratoryResponse>;
    /**
     * 获取某个场景下的实验室列表。
     */
    ListLaboratories(query: ListLaboratoriesRequest): Promise<ListLaboratoriesResponse>;
    /**
     * 获取指定实验室的详细信息。
     */
    GetLaboratory(query: GetLaboratoryRequest): Promise<GetLaboratoryResponse>;
    /**
     * 创建一个实验室，实验室是一组流量的集合，在实验室下可开展实验。
     */
    CreateLaboratory(query: CreateLaboratoryRequest): Promise<CreateLaboratoryResponse>;
    /**
     * 将指定实验室克隆到指定环境，克隆时需指定是否克隆实验室下的实验组。
     */
    CloneLaboratory(query: CloneLaboratoryRequest): Promise<CloneLaboratoryResponse>;
    /**
     * 删除指定实验室。
     */
    DeleteLaboratory(query: DeleteLaboratoryRequest): Promise<DeleteLaboratoryResponse>;
    /**
     * 获取指定计算任务详细信息。
     */
    GetCalculationJob(query: GetCalculationJobRequest): Promise<GetCalculationJobResponse>;
    /**
     * 获取计算任务列表。
     */
    ListCalculationJobs(query: ListCalculationJobsRequest): Promise<ListCalculationJobsResponse>;
    /**
     * 批量创建计算任务。
     */
    CreateCalculationJobs(query: CreateCalculationJobsRequest): Promise<CreateCalculationJobsResponse>;
    /**
     * 删除AB实验指标组。
     */
    DeleteABMetricGroup(query: DeleteABMetricGroupRequest): Promise<DeleteABMetricGroupResponse>;
    /**
     * 更新AB实验指标组。
     */
    UpdateABMetricGroup(query: UpdateABMetricGroupRequest): Promise<UpdateABMetricGroupResponse>;
    /**
     * 更新AB实验指标。
     */
    UpdateABMetric(query: UpdateABMetricRequest): Promise<UpdateABMetricResponse>;
    /**
     * 获取AB实验指标组详细信息。
     */
    GetABMetricGroup(query: GetABMetricGroupRequest): Promise<GetABMetricGroupResponse>;
    /**
     * 创建AB实验指标组。
     */
    CreateABMetricGroup(query: CreateABMetricGroupRequest): Promise<CreateABMetricGroupResponse>;
    /**
     * 获取AB实验指标组列表。
     */
    ListABMetricGroups(query: ListABMetricGroupsRequest): Promise<ListABMetricGroupsResponse>;
    /**
     * 删除指定AB实验指标。
     */
    DeleteABMetric(query: DeleteABMetricRequest): Promise<DeleteABMetricResponse>;
    /**
     * 获取AB实验指标详细信息。
     */
    GetABMetric(query: GetABMetricRequest): Promise<GetABMetricResponse>;
    /**
     * 获取AB实验指标列表。
     */
    ListABMetrics(query: ListABMetricsRequest): Promise<ListABMetricsResponse>;
    /**
     * 创建AB实验指标。
     */
    CreateABMetric(query: CreateABMetricRequest): Promise<CreateABMetricResponse>;
    /**
     * 获取数据源下数据表的列表。
     */
    GetInstanceResourceTable(query: GetInstanceResourceTableRequest): Promise<GetInstanceResourceTableResponse>;
    /**
     * 删除数据表。
     */
    DeleteTableMeta(query: DeleteTableMetaRequest): Promise<DeleteTableMetaResponse>;
    /**
     * 获取数据表列表。
     */
    ListTableMetas(query: ListTableMetasRequest): Promise<ListTableMetasResponse>;
    /**
     * 获取数据表详细信息。
     */
    GetTableMeta(query: GetTableMetaRequest): Promise<GetTableMetaResponse>;
    /**
     * 创建数据表。
     */
    CreateTableMeta(query: CreateTableMetaRequest): Promise<CreateTableMetaResponse>;
    /**
     * 更新数据表。
     */
    UpdateTableMeta(query: UpdateTableMetaRequest): Promise<UpdateTableMetaResponse>;
    /**
     * 删除指定参数。
     */
    DeleteParam(query: DeleteParamRequest): Promise<DeleteParamResponse>;
    /**
     * 创建一个参数。通过对参数进行管理，无需修改引擎配置、发布变更，即可对服务读取的变量进行修改，提高灵活性。
     */
    CreateParam(query: CreateParamRequest): Promise<CreateParamResponse>;
    /**
     * 更新指定参数的信息，例如更新参数的值。
     */
    UpdateParam(query: UpdateParamRequest): Promise<UpdateParamResponse>;
    /**
     * 获取参数列表。
     */
    ListParams(query: ListParamsRequest): Promise<ListParamsResponse>;
    /**
     * 更新场景信息，例如更新场景的名称、描述。
     */
    UpdateScene(query: UpdateSceneRequest): Promise<UpdateSceneResponse>;
    /**
     * 获取指定场景的详细信息。
     */
    GetScene(query: GetSceneRequest): Promise<GetSceneResponse>;
    /**
     * 删除指定场景。
     */
    DeleteScene(query: DeleteSceneRequest): Promise<DeleteSceneResponse>;
    /**
     * 获取场景列表。
     */
    ListScenes(query: ListScenesRequest): Promise<ListScenesResponse>;
    /**
     * 创建一个场景，在场景下可进行指标、实验分析。
     */
    CreateScene(query: CreateSceneRequest): Promise<CreateSceneResponse>;
    /**
     * 检测实例下配置的资源的连接状态。
     */
    CheckInstanceResources(query: CheckInstanceResourcesRequest): Promise<CheckInstanceResourcesResponse>;
    /**
     * 更新指定实例下指定资源的信息。
     */
    UpdateInstanceResource(query: UpdateInstanceResourceRequest): Promise<UpdateInstanceResourceResponse>;
    /**
     * 删除指定实例下的指定配置资源。
     */
    DeleteInstanceResource(query: DeleteInstanceResourceRequest): Promise<DeleteInstanceResourceResponse>;
    /**
     * 获取实例下配置的资源列表。
     */
    ListInstanceResources(query: ListInstanceResourcesRequest): Promise<ListInstanceResourcesResponse>;
    /**
     * 为指定实例配置创建新的配置资源。
     */
    CreateInstanceResource(query: CreateInstanceResourceRequest): Promise<CreateInstanceResourceResponse>;
    /**
     * 获取指定实例下指定资源的详细信息。
     */
    GetInstanceResource(query: GetInstanceResourceRequest): Promise<GetInstanceResourceResponse>;
    /**
     * 获取指定人群所包含的所有用户，包括人群下的子人群内的用户。
     */
    ListCrowdUsers(query: ListCrowdUsersRequest): Promise<ListCrowdUsersResponse>;
    /**
     * 获取特征一致性检查任务配置详情。
     */
    GetFeatureConsistencyCheckJobConfig(query: GetFeatureConsistencyCheckJobConfigRequest): Promise<GetFeatureConsistencyCheckJobConfigResponse>;
    /**
     * 克隆特征一致性检查任务配置。
     */
    CloneFeatureConsistencyCheckJobConfig(query: CloneFeatureConsistencyCheckJobConfigRequest): Promise<CloneFeatureConsistencyCheckJobConfigResponse>;
    /**
     * 创建特征一致性检查任务。
     */
    CreateFeatureConsistencyCheckJob(query: CreateFeatureConsistencyCheckJobRequest): Promise<CreateFeatureConsistencyCheckJobResponse>;
    /**
     * 获取特征一致性检查任务的特征报表。
     */
    ListFeatureConsistencyCheckJobFeatureReports(query: ListFeatureConsistencyCheckJobFeatureReportsRequest): Promise<ListFeatureConsistencyCheckJobFeatureReportsResponse>;
    /**
     * 取消指定特征一致性检查正在运行中的任务。
     */
    TerminateFeatureConsistencyCheckJob(query: TerminateFeatureConsistencyCheckJobRequest): Promise<TerminateFeatureConsistencyCheckJobResponse>;
    /**
     * 获取特征一致性检查任务详情。
     */
    GetFeatureConsistencyCheckJob(query: GetFeatureConsistencyCheckJobRequest): Promise<GetFeatureConsistencyCheckJobResponse>;
    /**
     * 获取特征一致性检查任务列表。
     */
    ListFeatureConsistencyCheckJobs(query: ListFeatureConsistencyCheckJobsRequest): Promise<ListFeatureConsistencyCheckJobsResponse>;
    /**
     * 获取特征一致性检查任务分数报表。
     */
    ListFeatureConsistencyCheckJobScoreReports(query: ListFeatureConsistencyCheckJobScoreReportsRequest): Promise<ListFeatureConsistencyCheckJobScoreReportsResponse>;
    /**
     * 获取特征一致性检查任务配置列表。
     */
    ListFeatureConsistencyCheckJobConfigs(query: ListFeatureConsistencyCheckJobConfigsRequest): Promise<ListFeatureConsistencyCheckJobConfigsResponse>;
    /**
     * 更新特征一致性检查任务配置详细信息，例如更新名称。
     */
    UpdateFeatureConsistencyCheckJobConfig(query: UpdateFeatureConsistencyCheckJobConfigRequest): Promise<UpdateFeatureConsistencyCheckJobConfigResponse>;
    /**
     * 创建特征一致性检查任务配置。
     */
    CreateFeatureConsistencyCheckJobConfig(query: CreateFeatureConsistencyCheckJobConfigRequest): Promise<CreateFeatureConsistencyCheckJobConfigResponse>;
    /**
     * 对指定特征一致性检查任务配置下，最近一次创建的任务进行数据回流。
     */
    BackflowFeatureConsistencyCheckJobData(query: BackflowFeatureConsistencyCheckJobDataRequest): Promise<BackflowFeatureConsistencyCheckJobDataResponse>;
    /**
     * 同步特征一致性检查任务重放日志。
     */
    SyncFeatureConsistencyCheckJobReplayLog(query: SyncFeatureConsistencyCheckJobReplayLogRequest): Promise<SyncFeatureConsistencyCheckJobReplayLogResponse>;
}
export default PAIRECSERVICE;
