import { ActivateMediaWorkflowRequest } from "./ActivateMediaWorkflow/req";
import { ActivateMediaWorkflowResponse } from "./ActivateMediaWorkflow/res";
import { AddMediaRequest } from "./AddMedia/req";
import { AddMediaResponse } from "./AddMedia/res";
import { AddMediaTagRequest } from "./AddMediaTag/req";
import { AddMediaTagResponse } from "./AddMediaTag/res";
import { AddMediaWorkflowRequest } from "./AddMediaWorkflow/req";
import { AddMediaWorkflowResponse } from "./AddMediaWorkflow/res";
import { AddPipelineRequest } from "./AddPipeline/req";
import { AddPipelineResponse } from "./AddPipeline/res";
import { AddSmarttagTemplateRequest } from "./AddSmarttagTemplate/req";
import { AddSmarttagTemplateResponse } from "./AddSmarttagTemplate/res";
import { AddTemplateRequest } from "./AddTemplate/req";
import { AddTemplateResponse } from "./AddTemplate/res";
import { AddWaterMarkTemplateRequest } from "./AddWaterMarkTemplate/req";
import { AddWaterMarkTemplateResponse } from "./AddWaterMarkTemplate/res";
import { BindInputBucketRequest } from "./BindInputBucket/req";
import { BindInputBucketResponse } from "./BindInputBucket/res";
import { BindOutputBucketRequest } from "./BindOutputBucket/req";
import { BindOutputBucketResponse } from "./BindOutputBucket/res";
import { CancelJobRequest } from "./CancelJob/req";
import { CancelJobResponse } from "./CancelJob/res";
import { CreateFpShotDBRequest } from "./CreateFpShotDB/req";
import { CreateFpShotDBResponse } from "./CreateFpShotDB/res";
import { DeactivateMediaWorkflowRequest } from "./DeactivateMediaWorkflow/req";
import { DeactivateMediaWorkflowResponse } from "./DeactivateMediaWorkflow/res";
import { DeleteMediaRequest } from "./DeleteMedia/req";
import { DeleteMediaResponse } from "./DeleteMedia/res";
import { DeleteMediaTagRequest } from "./DeleteMediaTag/req";
import { DeleteMediaTagResponse } from "./DeleteMediaTag/res";
import { DeleteMediaWorkflowRequest } from "./DeleteMediaWorkflow/req";
import { DeleteMediaWorkflowResponse } from "./DeleteMediaWorkflow/res";
import { DeletePipelineRequest } from "./DeletePipeline/req";
import { DeletePipelineResponse } from "./DeletePipeline/res";
import { DeleteSmarttagTemplateRequest } from "./DeleteSmarttagTemplate/req";
import { DeleteSmarttagTemplateResponse } from "./DeleteSmarttagTemplate/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { DeleteWaterMarkTemplateRequest } from "./DeleteWaterMarkTemplate/req";
import { DeleteWaterMarkTemplateResponse } from "./DeleteWaterMarkTemplate/res";
import { ListAllMediaBucketRequest } from "./ListAllMediaBucket/req";
import { ListAllMediaBucketResponse } from "./ListAllMediaBucket/res";
import { ListCustomPersonsRequest } from "./ListCustomPersons/req";
import { ListCustomPersonsResponse } from "./ListCustomPersons/res";
import { ListFpShotDBRequest } from "./ListFpShotDB/req";
import { ListFpShotDBResponse } from "./ListFpShotDB/res";
import { ListJobRequest } from "./ListJob/req";
import { ListJobResponse } from "./ListJob/res";
import { ListMediaWorkflowExecutionsRequest } from "./ListMediaWorkflowExecutions/req";
import { ListMediaWorkflowExecutionsResponse } from "./ListMediaWorkflowExecutions/res";
import { QueryAnalysisJobListRequest } from "./QueryAnalysisJobList/req";
import { QueryAnalysisJobListResponse } from "./QueryAnalysisJobList/res";
import { QueryFpShotJobListRequest } from "./QueryFpShotJobList/req";
import { QueryFpShotJobListResponse } from "./QueryFpShotJobList/res";
import { QueryIProductionJobRequest } from "./QueryIProductionJob/req";
import { QueryIProductionJobResponse } from "./QueryIProductionJob/res";
import { QueryJobListRequest } from "./QueryJobList/req";
import { QueryJobListResponse } from "./QueryJobList/res";
import { QueryMediaCensorJobDetailRequest } from "./QueryMediaCensorJobDetail/req";
import { QueryMediaCensorJobDetailResponse } from "./QueryMediaCensorJobDetail/res";
import { QueryMediaCensorJobListRequest } from "./QueryMediaCensorJobList/req";
import { QueryMediaCensorJobListResponse } from "./QueryMediaCensorJobList/res";
import { QueryMediaInfoJobListRequest } from "./QueryMediaInfoJobList/req";
import { QueryMediaInfoJobListResponse } from "./QueryMediaInfoJobList/res";
import { QueryMediaListRequest } from "./QueryMediaList/req";
import { QueryMediaListResponse } from "./QueryMediaList/res";
import { QueryMediaListByURLRequest } from "./QueryMediaListByURL/req";
import { QueryMediaListByURLResponse } from "./QueryMediaListByURL/res";
import { QueryMediaWorkflowExecutionListRequest } from "./QueryMediaWorkflowExecutionList/req";
import { QueryMediaWorkflowExecutionListResponse } from "./QueryMediaWorkflowExecutionList/res";
import { QueryMediaWorkflowListRequest } from "./QueryMediaWorkflowList/req";
import { QueryMediaWorkflowListResponse } from "./QueryMediaWorkflowList/res";
import { QueryPipelineListRequest } from "./QueryPipelineList/req";
import { QueryPipelineListResponse } from "./QueryPipelineList/res";
import { QuerySmarttagTemplateListRequest } from "./QuerySmarttagTemplateList/req";
import { QuerySmarttagTemplateListResponse } from "./QuerySmarttagTemplateList/res";
import { QuerySmarttagJobRequest } from "./QuerySmarttagJob/req";
import { QuerySmarttagJobResponse } from "./QuerySmarttagJob/res";
import { QuerySnapshotJobListRequest } from "./QuerySnapshotJobList/req";
import { QuerySnapshotJobListResponse } from "./QuerySnapshotJobList/res";
import { QueryTemplateListRequest } from "./QueryTemplateList/req";
import { QueryTemplateListResponse } from "./QueryTemplateList/res";
import { QueryWaterMarkTemplateListRequest } from "./QueryWaterMarkTemplateList/req";
import { QueryWaterMarkTemplateListResponse } from "./QueryWaterMarkTemplateList/res";
import { RegisterCustomFaceRequest } from "./RegisterCustomFace/req";
import { RegisterCustomFaceResponse } from "./RegisterCustomFace/res";
import { SearchMediaWorkflowRequest } from "./SearchMediaWorkflow/req";
import { SearchMediaWorkflowResponse } from "./SearchMediaWorkflow/res";
import { SearchPipelineRequest } from "./SearchPipeline/req";
import { SearchPipelineResponse } from "./SearchPipeline/res";
import { SearchTemplateRequest } from "./SearchTemplate/req";
import { SearchTemplateResponse } from "./SearchTemplate/res";
import { SearchWaterMarkTemplateRequest } from "./SearchWaterMarkTemplate/req";
import { SearchWaterMarkTemplateResponse } from "./SearchWaterMarkTemplate/res";
import { SubmitAnalysisJobRequest } from "./SubmitAnalysisJob/req";
import { SubmitAnalysisJobResponse } from "./SubmitAnalysisJob/res";
import { SubmitFpShotJobRequest } from "./SubmitFpShotJob/req";
import { SubmitFpShotJobResponse } from "./SubmitFpShotJob/res";
import { SubmitIProductionJobRequest } from "./SubmitIProductionJob/req";
import { SubmitIProductionJobResponse } from "./SubmitIProductionJob/res";
import { SubmitJobsRequest } from "./SubmitJobs/req";
import { SubmitJobsResponse } from "./SubmitJobs/res";
import { SubmitMediaCensorJobRequest } from "./SubmitMediaCensorJob/req";
import { SubmitMediaCensorJobResponse } from "./SubmitMediaCensorJob/res";
import { SubmitMediaInfoJobRequest } from "./SubmitMediaInfoJob/req";
import { SubmitMediaInfoJobResponse } from "./SubmitMediaInfoJob/res";
import { SubmitSmarttagJobRequest } from "./SubmitSmarttagJob/req";
import { SubmitSmarttagJobResponse } from "./SubmitSmarttagJob/res";
import { SubmitSnapshotJobRequest } from "./SubmitSnapshotJob/req";
import { SubmitSnapshotJobResponse } from "./SubmitSnapshotJob/res";
import { TagCustomPersonRequest } from "./TagCustomPerson/req";
import { TagCustomPersonResponse } from "./TagCustomPerson/res";
import { UnbindInputBucketRequest } from "./UnbindInputBucket/req";
import { UnbindInputBucketResponse } from "./UnbindInputBucket/res";
import { UnbindOutputBucketRequest } from "./UnbindOutputBucket/req";
import { UnbindOutputBucketResponse } from "./UnbindOutputBucket/res";
import { UnregisterCustomFaceRequest } from "./UnregisterCustomFace/req";
import { UnregisterCustomFaceResponse } from "./UnregisterCustomFace/res";
import { UpdateMediaRequest } from "./UpdateMedia/req";
import { UpdateMediaResponse } from "./UpdateMedia/res";
import { UpdateMediaCategoryRequest } from "./UpdateMediaCategory/req";
import { UpdateMediaCategoryResponse } from "./UpdateMediaCategory/res";
import { UpdateMediaCoverRequest } from "./UpdateMediaCover/req";
import { UpdateMediaCoverResponse } from "./UpdateMediaCover/res";
import { UpdateMediaPublishStateRequest } from "./UpdateMediaPublishState/req";
import { UpdateMediaPublishStateResponse } from "./UpdateMediaPublishState/res";
import { UpdateMediaWorkflowRequest } from "./UpdateMediaWorkflow/req";
import { UpdateMediaWorkflowResponse } from "./UpdateMediaWorkflow/res";
import { UpdateMediaWorkflowTriggerModeRequest } from "./UpdateMediaWorkflowTriggerMode/req";
import { UpdateMediaWorkflowTriggerModeResponse } from "./UpdateMediaWorkflowTriggerMode/res";
import { UpdatePipelineRequest } from "./UpdatePipeline/req";
import { UpdatePipelineResponse } from "./UpdatePipeline/res";
import { UpdateSmarttagTemplateRequest } from "./UpdateSmarttagTemplate/req";
import { UpdateSmarttagTemplateResponse } from "./UpdateSmarttagTemplate/res";
import { UpdateTemplateRequest } from "./UpdateTemplate/req";
import { UpdateTemplateResponse } from "./UpdateTemplate/res";
import { UpdateWaterMarkTemplateRequest } from "./UpdateWaterMarkTemplate/req";
import { UpdateWaterMarkTemplateResponse } from "./UpdateWaterMarkTemplate/res";
import { ListFpShotFilesRequest } from "./ListFpShotFiles/req";
import { ListFpShotFilesResponse } from "./ListFpShotFiles/res";
import { QueryFpDBDeleteJobListRequest } from "./QueryFpDBDeleteJobList/req";
import { QueryFpDBDeleteJobListResponse } from "./QueryFpDBDeleteJobList/res";
import { QueryFpFileDeleteJobListRequest } from "./QueryFpFileDeleteJobList/req";
import { QueryFpFileDeleteJobListResponse } from "./QueryFpFileDeleteJobList/res";
import { SubmitFpDBDeleteJobRequest } from "./SubmitFpDBDeleteJob/req";
import { SubmitFpDBDeleteJobResponse } from "./SubmitFpDBDeleteJob/res";
import { SubmitFpFileDeleteJobRequest } from "./SubmitFpFileDeleteJob/req";
import { SubmitFpFileDeleteJobResponse } from "./SubmitFpFileDeleteJob/res";
import { ImAuditRequest } from "./ImAudit/req";
import { ImAuditResponse } from "./ImAudit/res";
import { ImportFpShotJobRequest } from "./ImportFpShotJob/req";
import { ImportFpShotJobResponse } from "./ImportFpShotJob/res";
import { ListFpShotImportJobRequest } from "./ListFpShotImportJob/req";
import { ListFpShotImportJobResponse } from "./ListFpShotImportJob/res";
import { ListCustomViewsRequest } from "./ListCustomViews/req";
import { ListCustomViewsResponse } from "./ListCustomViews/res";
import { CreateCustomEntityRequest } from "./CreateCustomEntity/req";
import { CreateCustomEntityResponse } from "./CreateCustomEntity/res";
import { CreateCustomGroupRequest } from "./CreateCustomGroup/req";
import { CreateCustomGroupResponse } from "./CreateCustomGroup/res";
import { DeleteCustomGroupRequest } from "./DeleteCustomGroup/req";
import { DeleteCustomGroupResponse } from "./DeleteCustomGroup/res";
import { DeleteCustomViewRequest } from "./DeleteCustomView/req";
import { DeleteCustomViewResponse } from "./DeleteCustomView/res";
import { RegisterCustomViewRequest } from "./RegisterCustomView/req";
import { RegisterCustomViewResponse } from "./RegisterCustomView/res";
import { ListCustomGroupsRequest } from "./ListCustomGroups/req";
import { ListCustomGroupsResponse } from "./ListCustomGroups/res";
import { DeleteCustomEntityRequest } from "./DeleteCustomEntity/req";
import { DeleteCustomEntityResponse } from "./DeleteCustomEntity/res";
import { ListCustomEntitiesRequest } from "./ListCustomEntities/req";
import { ListCustomEntitiesResponse } from "./ListCustomEntities/res";

interface MTS {
    /**
     * 激活媒体工作流。
     */
    ActivateMediaWorkflow(query: ActivateMediaWorkflowRequest): Promise<ActivateMediaWorkflowResponse>;
    /**
     * 提交新增媒体作业。
     */
    AddMedia(query: AddMediaRequest): Promise<AddMediaResponse>;
    /**
     * 调用AddMediaTag接口为媒体文件添加单个标签。
     */
    AddMediaTag(query: AddMediaTagRequest): Promise<AddMediaTagResponse>;
    /**
     * 新增媒体工作流。
     */
    AddMediaWorkflow(query: AddMediaWorkflowRequest): Promise<AddMediaWorkflowResponse>;
    /**
     * 新增一个管道。
     */
    AddPipeline(query: AddPipelineRequest): Promise<AddPipelineResponse>;
    /**
     * 添加一个智能标签作业的分析模板。
     */
    AddSmarttagTemplate(query: AddSmarttagTemplateRequest): Promise<AddSmarttagTemplateResponse>;
    /**
     * 创建自定义模板，包含容器信息，视频跟音频流等设置。
     */
    AddTemplate(query: AddTemplateRequest): Promise<AddTemplateResponse>;
    /**
     * 创建水印模板。
     */
    AddWaterMarkTemplate(query: AddWaterMarkTemplateRequest): Promise<AddWaterMarkTemplateResponse>;
    /**
     * 媒体处理操作的文件资源均存放在OSS的Bucket中。将OSS的Bucket在媒体处理MPS中绑定为输入媒体Bucket、输出媒体Bucket后，媒体处理MPS才有权限监听该Bucket上传完成的消息，以实现触发工作流执行和处理完成的文件回写动作。您可以调用BindInputBucket接口绑定输入媒体Bucket。
     */
    BindInputBucket(query: BindInputBucketRequest): Promise<BindInputBucketResponse>;
    /**
     * 媒体处理操作的文件资源均存放在OSS的Bucket中。将OSS的Bucket在媒体处理MPS中绑定为输入媒体Bucket、输出媒体Bucket后，媒体处理MPS才有权限监听该Bucket上传完成的消息，以实现触发工作流执行和处理完成的文件回写动作。您可以调用BindOutputBucket接口绑定输出媒体Bucket。
     */
    BindOutputBucket(query: BindOutputBucketRequest): Promise<BindOutputBucketResponse>;
    /**
     * 取消转码作业。
     */
    CancelJob(query: CancelJobRequest): Promise<CancelJobResponse>;
    /**
     * 提交新建DNA库作业。
     */
    CreateFpShotDB(query: CreateFpShotDBRequest): Promise<CreateFpShotDBResponse>;
    /**
     * 停用媒体工作流。
     */
    DeactivateMediaWorkflow(query: DeactivateMediaWorkflowRequest): Promise<DeactivateMediaWorkflowResponse>;
    /**
     * 删除媒体。
     */
    DeleteMedia(query: DeleteMediaRequest): Promise<DeleteMediaResponse>;
    /**
     * 删除媒体标签。
     */
    DeleteMediaTag(query: DeleteMediaTagRequest): Promise<DeleteMediaTagResponse>;
    /**
     * 删除媒体工作流。
     */
    DeleteMediaWorkflow(query: DeleteMediaWorkflowRequest): Promise<DeleteMediaWorkflowResponse>;
    /**
     * 删除管道。
     */
    DeletePipeline(query: DeletePipelineRequest): Promise<DeletePipelineResponse>;
    /**
     * 删除一个智能标签作业的分析模板。
     */
    DeleteSmarttagTemplate(query: DeleteSmarttagTemplateRequest): Promise<DeleteSmarttagTemplateResponse>;
    /**
     * 删除自定义模板。
     */
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    /**
     * 删除水印模板。
     */
    DeleteWaterMarkTemplate(query: DeleteWaterMarkTemplateRequest): Promise<DeleteWaterMarkTemplateResponse>;
    /**
     * 列出媒体库所有媒体Bucket。
     */
    ListAllMediaBucket(query: ListAllMediaBucketRequest): Promise<ListAllMediaBucketResponse>;
    /**
     * 列出指定⼈物库下的所有⼈物和⼈脸信息。
     */
    ListCustomPersons(query: ListCustomPersonsRequest): Promise<ListCustomPersonsResponse>;
    /**
     * 查询DNA库。
     */
    ListFpShotDB(query: ListFpShotDBRequest): Promise<ListFpShotDBResponse>;
    /**
     * 遍历转码作业。
     */
    ListJob(query: ListJobRequest): Promise<ListJobResponse>;
    /**
     * 遍历媒体工作流执行实例。
     */
    ListMediaWorkflowExecutions(query: ListMediaWorkflowExecutionsRequest): Promise<ListMediaWorkflowExecutionsResponse>;
    /**
     * 查询模板分析作业，模板分析作业完成后，返回可用的预置模板列表。
     */
    QueryAnalysisJobList(query: QueryAnalysisJobListRequest): Promise<QueryAnalysisJobListResponse>;
    /**
     * 查询DNA作业结果，本接口支持查询所有类型的DNA作业结果。
     */
    QueryFpShotJobList(query: QueryFpShotJobListRequest): Promise<QueryFpShotJobListResponse>;
    /**
     * 查询智能生产作业。
     */
    QueryIProductionJob(query: QueryIProductionJobRequest): Promise<QueryIProductionJobResponse>;
    /**
     * 通过转码作业ID，批量查询转码作业。
     */
    QueryJobList(query: QueryJobListRequest): Promise<QueryJobListResponse>;
    /**
     * 查询媒体审核作业的详细信息。
     */
    QueryMediaCensorJobDetail(query: QueryMediaCensorJobDetailRequest): Promise<QueryMediaCensorJobDetailResponse>;
    /**
     * 查询媒体审核作业列表。
     */
    QueryMediaCensorJobList(query: QueryMediaCensorJobListRequest): Promise<QueryMediaCensorJobListResponse>;
    /**
     * 查询媒体信息作业。
     */
    QueryMediaInfoJobList(query: QueryMediaInfoJobListRequest): Promise<QueryMediaInfoJobListResponse>;
    /**
     * 使用媒体ID查询媒体。
     */
    QueryMediaList(query: QueryMediaListRequest): Promise<QueryMediaListResponse>;
    /**
     * 使用OSS文件地址查询媒体。
     */
    QueryMediaListByURL(query: QueryMediaListByURLRequest): Promise<QueryMediaListByURLResponse>;
    /**
     * 查询媒体工作流执行实例。
     */
    QueryMediaWorkflowExecutionList(query: QueryMediaWorkflowExecutionListRequest): Promise<QueryMediaWorkflowExecutionListResponse>;
    /**
     * 查询已注册的媒体工作流。
     */
    QueryMediaWorkflowList(query: QueryMediaWorkflowListRequest): Promise<QueryMediaWorkflowListResponse>;
    /**
     * 通过管道ID查询管道。
     */
    QueryPipelineList(query: QueryPipelineListRequest): Promise<QueryPipelineListResponse>;
    /**
     * 查询智能标签作业的分析模板。
     */
    QuerySmarttagTemplateList(query: QuerySmarttagTemplateListRequest): Promise<QuerySmarttagTemplateListResponse>;
    /**
     * 查询智能标签作业。
     */
    QuerySmarttagJob(query: QuerySmarttagJobRequest): Promise<QuerySmarttagJobResponse>;
    /**
     * 查询截图作业。
     */
    QuerySnapshotJobList(query: QuerySnapshotJobListRequest): Promise<QuerySnapshotJobListResponse>;
    /**
     * 查询转码模板详细信息。
     */
    QueryTemplateList(query: QueryTemplateListRequest): Promise<QueryTemplateListResponse>;
    /**
     * 查询水印模板。
     */
    QueryWaterMarkTemplateList(query: QueryWaterMarkTemplateListRequest): Promise<QueryWaterMarkTemplateListResponse>;
    /**
     * 注册⼀张⾃定义⼈脸。
     */
    RegisterCustomFace(query: RegisterCustomFaceRequest): Promise<RegisterCustomFaceResponse>;
    /**
     * 搜索媒体工作流。
     */
    SearchMediaWorkflow(query: SearchMediaWorkflowRequest): Promise<SearchMediaWorkflowResponse>;
    /**
     * 通过管道状态搜索管道。
     */
    SearchPipeline(query: SearchPipelineRequest): Promise<SearchPipelineResponse>;
    /**
     * 搜索指定状态的自定义模板。
     */
    SearchTemplate(query: SearchTemplateRequest): Promise<SearchTemplateResponse>;
    /**
     * 搜索水印模板。
     */
    SearchWaterMarkTemplate(query: SearchWaterMarkTemplateRequest): Promise<SearchWaterMarkTemplateResponse>;
    /**
     * 提交预置模板分析作业。
     */
    SubmitAnalysisJob(query: SubmitAnalysisJobRequest): Promise<SubmitAnalysisJobResponse>;
    /**
     * 查询DNA底库中是否存在相同或者相近的DNA结果。
     */
    SubmitFpShotJob(query: SubmitFpShotJobRequest): Promise<SubmitFpShotJobResponse>;
    /**
     * 提交智能生产作业。
     */
    SubmitIProductionJob(query: SubmitIProductionJobRequest): Promise<SubmitIProductionJobResponse>;
    /**
     * 提交转码作业。当控制台创建的转码任务和工作流均无法满足您的使用场景时，可以按需调用SubmitJobs接口进行转码。根据您的业务逻辑配置所需的转码参数即可。
     */
    SubmitJobs(query: SubmitJobsRequest): Promise<SubmitJobsResponse>;
    /**
     * 提交媒体审核作业。
     */
    SubmitMediaCensorJob(query: SubmitMediaCensorJobRequest): Promise<SubmitMediaCensorJobResponse>;
    /**
     * 提交媒体信息作业。调用本接口之后媒体处理MPS会对输入文件进行媒体信息分析，返回输入文件的媒体信息。
     */
    SubmitMediaInfoJob(query: SubmitMediaInfoJobRequest): Promise<SubmitMediaInfoJobResponse>;
    /**
     * 提交智能标签作业。
     */
    SubmitSmarttagJob(query: SubmitSmarttagJobRequest): Promise<SubmitSmarttagJobResponse>;
    /**
     * 提交截图作业。调用本接口之后媒体处理MPS会对输入文件进行截图和拼图。
     */
    SubmitSnapshotJob(query: SubmitSnapshotJobRequest): Promise<SubmitSnapshotJobResponse>;
    /**
     * 给⾃定义⼈物库或⼈物贴标签。
     */
    TagCustomPerson(query: TagCustomPersonRequest): Promise<TagCustomPersonResponse>;
    /**
     * 解绑输入媒体Bucket。
     */
    UnbindInputBucket(query: UnbindInputBucketRequest): Promise<UnbindInputBucketResponse>;
    /**
     * 解绑输出媒体Bucket。
     */
    UnbindOutputBucket(query: UnbindOutputBucketRequest): Promise<UnbindOutputBucketResponse>;
    /**
     * 注销⼀张⾃定义⼈脸，或者注销某个⾃定义⼈物下的所有⼈脸。
     */
    UnregisterCustomFace(query: UnregisterCustomFaceRequest): Promise<UnregisterCustomFaceResponse>;
    /**
     * 更新媒体基本信息。
     */
    UpdateMedia(query: UpdateMediaRequest): Promise<UpdateMediaResponse>;
    /**
     * 更新媒体类目。
     */
    UpdateMediaCategory(query: UpdateMediaCategoryRequest): Promise<UpdateMediaCategoryResponse>;
    /**
     * 更新媒体封面。
     */
    UpdateMediaCover(query: UpdateMediaCoverRequest): Promise<UpdateMediaCoverResponse>;
    /**
     * 更新媒体发布状态。
     */
    UpdateMediaPublishState(query: UpdateMediaPublishStateRequest): Promise<UpdateMediaPublishStateResponse>;
    /**
     * 更新媒体工作流。
     */
    UpdateMediaWorkflow(query: UpdateMediaWorkflowRequest): Promise<UpdateMediaWorkflowResponse>;
    /**
     * 更新媒体工作流的触发模式。
     */
    UpdateMediaWorkflowTriggerMode(query: UpdateMediaWorkflowTriggerModeRequest): Promise<UpdateMediaWorkflowTriggerModeResponse>;
    /**
     * 更新管道。
     */
    UpdatePipeline(query: UpdatePipelineRequest): Promise<UpdatePipelineResponse>;
    /**
     * 更新一个智能标签作业的分析模板。
     */
    UpdateSmarttagTemplate(query: UpdateSmarttagTemplateRequest): Promise<UpdateSmarttagTemplateResponse>;
    /**
     * 更新自定义转码模板设置。
     */
    UpdateTemplate(query: UpdateTemplateRequest): Promise<UpdateTemplateResponse>;
    /**
     * 更新指定水印模板的名称、配置。
     */
    UpdateWaterMarkTemplate(query: UpdateWaterMarkTemplateRequest): Promise<UpdateWaterMarkTemplateResponse>;
    /**
     * 查询DNA库文件列表。
     */
    ListFpShotFiles(query: ListFpShotFilesRequest): Promise<ListFpShotFilesResponse>;
    /**
     * 查询清空或删除DNA库作业。
     */
    QueryFpDBDeleteJobList(query: QueryFpDBDeleteJobListRequest): Promise<QueryFpDBDeleteJobListResponse>;
    /**
     * 查询删除DNA文件作业。
     */
    QueryFpFileDeleteJobList(query: QueryFpFileDeleteJobListRequest): Promise<QueryFpFileDeleteJobListResponse>;
    /**
     * 提交清空或删除DNA库作业。
     */
    SubmitFpDBDeleteJob(query: SubmitFpDBDeleteJobRequest): Promise<SubmitFpDBDeleteJobResponse>;
    /**
     * 提交删除DNA文件作业。
     */
    SubmitFpFileDeleteJob(query: SubmitFpFileDeleteJobRequest): Promise<SubmitFpFileDeleteJobResponse>;
    /**
     * 进行图片、文本内容审核，审核结果同步返回。
     */
    ImAudit(query: ImAuditRequest): Promise<ImAuditResponse>;
    /**
     * 提交文本导库任务。
     */
    ImportFpShotJob(query: ImportFpShotJobRequest): Promise<ImportFpShotJobResponse>;
    /**
     * 查询文本导库作业。
     */
    ListFpShotImportJob(query: ListFpShotImportJobRequest): Promise<ListFpShotImportJobResponse>;
    /**
     * 获取自定义库实体不同view图片列表。
     */
    ListCustomViews(query: ListCustomViewsRequest): Promise<ListCustomViewsResponse>;
    /**
     * 创建相应自定义库中自定义实体。
     */
    CreateCustomEntity(query: CreateCustomEntityRequest): Promise<CreateCustomEntityResponse>;
    /**
     * 创建自定义库。
     */
    CreateCustomGroup(query: CreateCustomGroupRequest): Promise<CreateCustomGroupResponse>;
    /**
     * 删除自定义库。
     */
    DeleteCustomGroup(query: DeleteCustomGroupRequest): Promise<DeleteCustomGroupResponse>;
    /**
     * 删除自定义实体照片。
     */
    DeleteCustomView(query: DeleteCustomViewRequest): Promise<DeleteCustomViewResponse>;
    /**
     * 注册自定义实体照片。
     */
    RegisterCustomView(query: RegisterCustomViewRequest): Promise<RegisterCustomViewResponse>;
    /**
     * 获取自定义库列表。
     */
    ListCustomGroups(query: ListCustomGroupsRequest): Promise<ListCustomGroupsResponse>;
    /**
     * 删除自定义库实体。
     */
    DeleteCustomEntity(query: DeleteCustomEntityRequest): Promise<DeleteCustomEntityResponse>;
    /**
     * 获取自定义库下实体列表。
     */
    ListCustomEntities(query: ListCustomEntitiesRequest): Promise<ListCustomEntitiesResponse>;
}
export default MTS;
