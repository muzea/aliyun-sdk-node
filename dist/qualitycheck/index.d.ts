import { AddBusinessCategoryRequest } from "./AddBusinessCategory/req";
import { AddBusinessCategoryResponse } from "./AddBusinessCategory/res";
import { AddRuleCategoryRequest } from "./AddRuleCategory/req";
import { AddRuleCategoryResponse } from "./AddRuleCategory/res";
import { AssignReviewerRequest } from "./AssignReviewer/req";
import { AssignReviewerResponse } from "./AssignReviewer/res";
import { CreateAsrVocabRequest } from "./CreateAsrVocab/req";
import { CreateAsrVocabResponse } from "./CreateAsrVocab/res";
import { CreateSkillGroupConfigRequest } from "./CreateSkillGroupConfig/req";
import { CreateSkillGroupConfigResponse } from "./CreateSkillGroupConfig/res";
import { CreateTaskAssignRuleRequest } from "./CreateTaskAssignRule/req";
import { CreateTaskAssignRuleResponse } from "./CreateTaskAssignRule/res";
import { CreateUserRequest } from "./CreateUser/req";
import { CreateUserResponse } from "./CreateUser/res";
import { CreateWarningConfigRequest } from "./CreateWarningConfig/req";
import { CreateWarningConfigResponse } from "./CreateWarningConfig/res";
import { DelRuleCategoryRequest } from "./DelRuleCategory/req";
import { DelRuleCategoryResponse } from "./DelRuleCategory/res";
import { DeleteAsrVocabRequest } from "./DeleteAsrVocab/req";
import { DeleteAsrVocabResponse } from "./DeleteAsrVocab/res";
import { DeleteBusinessCategoryRequest } from "./DeleteBusinessCategory/req";
import { DeleteBusinessCategoryResponse } from "./DeleteBusinessCategory/res";
import { DeleteCustomizationConfigRequest } from "./DeleteCustomizationConfig/req";
import { DeleteCustomizationConfigResponse } from "./DeleteCustomizationConfig/res";
import { DeleteDataSetRequest } from "./DeleteDataSet/req";
import { DeleteDataSetResponse } from "./DeleteDataSet/res";
import { DeletePrecisionTaskRequest } from "./DeletePrecisionTask/req";
import { DeletePrecisionTaskResponse } from "./DeletePrecisionTask/res";
import { DeleteScoreForApiRequest } from "./DeleteScoreForApi/req";
import { DeleteScoreForApiResponse } from "./DeleteScoreForApi/res";
import { DeleteSkillGroupConfigRequest } from "./DeleteSkillGroupConfig/req";
import { DeleteSkillGroupConfigResponse } from "./DeleteSkillGroupConfig/res";
import { DeleteSubScoreForApiRequest } from "./DeleteSubScoreForApi/req";
import { DeleteSubScoreForApiResponse } from "./DeleteSubScoreForApi/res";
import { DeleteTaskAssignRuleRequest } from "./DeleteTaskAssignRule/req";
import { DeleteTaskAssignRuleResponse } from "./DeleteTaskAssignRule/res";
import { DeleteWarningConfigRequest } from "./DeleteWarningConfig/req";
import { DeleteWarningConfigResponse } from "./DeleteWarningConfig/res";
import { GetAsrVocabRequest } from "./GetAsrVocab/req";
import { GetAsrVocabResponse } from "./GetAsrVocab/res";
import { GetBusinessCategoryListRequest } from "./GetBusinessCategoryList/req";
import { GetBusinessCategoryListResponse } from "./GetBusinessCategoryList/res";
import { GetCustomizationConfigListRequest } from "./GetCustomizationConfigList/req";
import { GetCustomizationConfigListResponse } from "./GetCustomizationConfigList/res";
import { GetNextResultToVerifyRequest } from "./GetNextResultToVerify/req";
import { GetNextResultToVerifyResponse } from "./GetNextResultToVerify/res";
import { GetPrecisionTaskRequest } from "./GetPrecisionTask/req";
import { GetPrecisionTaskResponse } from "./GetPrecisionTask/res";
import { GetResultRequest } from "./GetResult/req";
import { GetResultResponse } from "./GetResult/res";
import { GetResultToReviewRequest } from "./GetResultToReview/req";
import { GetResultToReviewResponse } from "./GetResultToReview/res";
import { GetRuleRequest } from "./GetRule/req";
import { GetRuleResponse } from "./GetRule/res";
import { GetRuleCategoryRequest } from "./GetRuleCategory/req";
import { GetRuleCategoryResponse } from "./GetRuleCategory/res";
import { GetScoreInfoRequest } from "./GetScoreInfo/req";
import { GetScoreInfoResponse } from "./GetScoreInfo/res";
import { GetSkillGroupConfigRequest } from "./GetSkillGroupConfig/req";
import { GetSkillGroupConfigResponse } from "./GetSkillGroupConfig/res";
import { GetSyncResultRequest } from "./GetSyncResult/req";
import { GetSyncResultResponse } from "./GetSyncResult/res";
import { HandleComplaintRequest } from "./HandleComplaint/req";
import { HandleComplaintResponse } from "./HandleComplaint/res";
import { InsertScoreForApiRequest } from "./InsertScoreForApi/req";
import { InsertScoreForApiResponse } from "./InsertScoreForApi/res";
import { InsertSubScoreForApiRequest } from "./InsertSubScoreForApi/req";
import { InsertSubScoreForApiResponse } from "./InsertSubScoreForApi/res";
import { InvalidRuleRequest } from "./InvalidRule/req";
import { InvalidRuleResponse } from "./InvalidRule/res";
import { ListAsrVocabRequest } from "./ListAsrVocab/req";
import { ListAsrVocabResponse } from "./ListAsrVocab/res";
import { ListPrecisionTaskRequest } from "./ListPrecisionTask/req";
import { ListPrecisionTaskResponse } from "./ListPrecisionTask/res";
import { ListRulesRequest } from "./ListRules/req";
import { ListRulesResponse } from "./ListRules/res";
import { ListSkillGroupConfigRequest } from "./ListSkillGroupConfig/req";
import { ListSkillGroupConfigResponse } from "./ListSkillGroupConfig/res";
import { ListTaskAssignRulesRequest } from "./ListTaskAssignRules/req";
import { ListTaskAssignRulesResponse } from "./ListTaskAssignRules/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { ListWarningConfigRequest } from "./ListWarningConfig/req";
import { ListWarningConfigResponse } from "./ListWarningConfig/res";
import { SaveConfigDataSetRequest } from "./SaveConfigDataSet/req";
import { SaveConfigDataSetResponse } from "./SaveConfigDataSet/res";
import { SubmitComplaintRequest } from "./SubmitComplaint/req";
import { SubmitComplaintResponse } from "./SubmitComplaint/res";
import { SubmitPrecisionTaskRequest } from "./SubmitPrecisionTask/req";
import { SubmitPrecisionTaskResponse } from "./SubmitPrecisionTask/res";
import { SubmitQualityCheckTaskRequest } from "./SubmitQualityCheckTask/req";
import { SubmitQualityCheckTaskResponse } from "./SubmitQualityCheckTask/res";
import { SubmitReviewInfoRequest } from "./SubmitReviewInfo/req";
import { SubmitReviewInfoResponse } from "./SubmitReviewInfo/res";
import { SyncQualityCheckRequest } from "./SyncQualityCheck/req";
import { SyncQualityCheckResponse } from "./SyncQualityCheck/res";
import { UpdateAsrVocabRequest } from "./UpdateAsrVocab/req";
import { UpdateAsrVocabResponse } from "./UpdateAsrVocab/res";
import { UpdateRuleRequest } from "./UpdateRule/req";
import { UpdateRuleResponse } from "./UpdateRule/res";
import { UpdateScoreForApiRequest } from "./UpdateScoreForApi/req";
import { UpdateScoreForApiResponse } from "./UpdateScoreForApi/res";
import { UpdateSkillGroupConfigRequest } from "./UpdateSkillGroupConfig/req";
import { UpdateSkillGroupConfigResponse } from "./UpdateSkillGroupConfig/res";
import { UpdateSubScoreForApiRequest } from "./UpdateSubScoreForApi/req";
import { UpdateSubScoreForApiResponse } from "./UpdateSubScoreForApi/res";
import { UpdateTaskAssignRuleRequest } from "./UpdateTaskAssignRule/req";
import { UpdateTaskAssignRuleResponse } from "./UpdateTaskAssignRule/res";
import { UpdateSyncQualityCheckDataRequest } from "./UpdateSyncQualityCheckData/req";
import { UpdateSyncQualityCheckDataResponse } from "./UpdateSyncQualityCheckData/res";
import { UpdateUserRequest } from "./UpdateUser/req";
import { UpdateUserResponse } from "./UpdateUser/res";
import { UpdateWarningConfigRequest } from "./UpdateWarningConfig/req";
import { UpdateWarningConfigResponse } from "./UpdateWarningConfig/res";
import { UploadAudioDataRequest } from "./UploadAudioData/req";
import { UploadAudioDataResponse } from "./UploadAudioData/res";
import { UploadDataRequest } from "./UploadData/req";
import { UploadDataResponse } from "./UploadData/res";
import { UploadDataSyncRequest } from "./UploadDataSync/req";
import { UploadDataSyncResponse } from "./UploadDataSync/res";
import { UploadRuleRequest } from "./UploadRule/req";
import { UploadRuleResponse } from "./UploadRule/res";
import { VerifyFileRequest } from "./VerifyFile/req";
import { VerifyFileResponse } from "./VerifyFile/res";
import { VerifySentenceRequest } from "./VerifySentence/req";
import { VerifySentenceResponse } from "./VerifySentence/res";
import { GetRuleDetailRequest } from "./GetRuleDetail/req";
import { GetRuleDetailResponse } from "./GetRuleDetail/res";
import { ListQualityCheckSchemeRequest } from "./ListQualityCheckScheme/req";
import { ListQualityCheckSchemeResponse } from "./ListQualityCheckScheme/res";
import { UpdateQualityCheckDataRequest } from "./UpdateQualityCheckData/req";
import { UpdateQualityCheckDataResponse } from "./UpdateQualityCheckData/res";
import { ListSchemeTaskConfigRequest } from "./ListSchemeTaskConfig/req";
import { ListSchemeTaskConfigResponse } from "./ListSchemeTaskConfig/res";
import { UpdateRuleToSchemeRequest } from "./UpdateRuleToScheme/req";
import { UpdateRuleToSchemeResponse } from "./UpdateRuleToScheme/res";
import { UpdateCheckTypeToSchemeRequest } from "./UpdateCheckTypeToScheme/req";
import { UpdateCheckTypeToSchemeResponse } from "./UpdateCheckTypeToScheme/res";
import { DeleteSchemeTaskConfigRequest } from "./DeleteSchemeTaskConfig/req";
import { DeleteSchemeTaskConfigResponse } from "./DeleteSchemeTaskConfig/res";
import { UpdateSchemeTaskConfigRequest } from "./UpdateSchemeTaskConfig/req";
import { UpdateSchemeTaskConfigResponse } from "./UpdateSchemeTaskConfig/res";
import { CreateSchemeTaskConfigRequest } from "./CreateSchemeTaskConfig/req";
import { CreateSchemeTaskConfigResponse } from "./CreateSchemeTaskConfig/res";
import { AssignReviewerBySessionGroupRequest } from "./AssignReviewerBySessionGroup/req";
import { AssignReviewerBySessionGroupResponse } from "./AssignReviewerBySessionGroup/res";
import { CreateCheckTypeToSchemeRequest } from "./CreateCheckTypeToScheme/req";
import { CreateCheckTypeToSchemeResponse } from "./CreateCheckTypeToScheme/res";
import { GetRulesCountListRequest } from "./GetRulesCountList/req";
import { GetRulesCountListResponse } from "./GetRulesCountList/res";
import { DeleteRuleRequest } from "./DeleteRule/req";
import { DeleteRuleResponse } from "./DeleteRule/res";
import { UpdateRuleByIdRequest } from "./UpdateRuleById/req";
import { UpdateRuleByIdResponse } from "./UpdateRuleById/res";
import { BatchSubmitReviewInfoRequest } from "./BatchSubmitReviewInfo/req";
import { BatchSubmitReviewInfoResponse } from "./BatchSubmitReviewInfo/res";
import { RevertAssignedSessionGroupRequest } from "./RevertAssignedSessionGroup/req";
import { RevertAssignedSessionGroupResponse } from "./RevertAssignedSessionGroup/res";
import { GetQualityCheckSchemeRequest } from "./GetQualityCheckScheme/req";
import { GetQualityCheckSchemeResponse } from "./GetQualityCheckScheme/res";
import { ListSessionGroupRequest } from "./ListSessionGroup/req";
import { ListSessionGroupResponse } from "./ListSessionGroup/res";
import { RevertAssignedSessionRequest } from "./RevertAssignedSession/req";
import { RevertAssignedSessionResponse } from "./RevertAssignedSession/res";
import { GetRuleByIdRequest } from "./GetRuleById/req";
import { GetRuleByIdResponse } from "./GetRuleById/res";
import { ListDataSetRequest } from "./ListDataSet/req";
import { ListDataSetResponse } from "./ListDataSet/res";
import { CreateQualityCheckSchemeRequest } from "./CreateQualityCheckScheme/req";
import { CreateQualityCheckSchemeResponse } from "./CreateQualityCheckScheme/res";
import { UpdateQualityCheckSchemeRequest } from "./UpdateQualityCheckScheme/req";
import { UpdateQualityCheckSchemeResponse } from "./UpdateQualityCheckScheme/res";
import { DeleteQualityCheckSchemeRequest } from "./DeleteQualityCheckScheme/req";
import { DeleteQualityCheckSchemeResponse } from "./DeleteQualityCheckScheme/res";
import { UpdateRuleV4Request } from "./UpdateRuleV4/req";
import { UpdateRuleV4Response } from "./UpdateRuleV4/res";
import { DeleteRuleV4Request } from "./DeleteRuleV4/req";
import { DeleteRuleV4Response } from "./DeleteRuleV4/res";
import { AddRuleV4Request } from "./AddRuleV4/req";
import { AddRuleV4Response } from "./AddRuleV4/res";
import { ListRulesV4Request } from "./ListRulesV4/req";
import { ListRulesV4Response } from "./ListRulesV4/res";
import { GetRuleV4Request } from "./GetRuleV4/req";
import { GetRuleV4Response } from "./GetRuleV4/res";
import { TestRuleV4Request } from "./TestRuleV4/req";
import { TestRuleV4Response } from "./TestRuleV4/res";
import { UploadDataV4Request } from "./UploadDataV4/req";
import { UploadDataV4Response } from "./UploadDataV4/res";

interface QUALITYCHECK {
    /**
     * 新增业务类型。
     */
    AddBusinessCategory(query: AddBusinessCategoryRequest): Promise<AddBusinessCategoryResponse>;
    /**
     * 新增规则类型。
     */
    AddRuleCategory(query: AddRuleCategoryRequest): Promise<AddRuleCategoryResponse>;
    /**
     * 进行手动分配质检员。
     */
    AssignReviewer(query: AssignReviewerRequest): Promise<AssignReviewerResponse>;
    /**
     * 将一组语音热词上传到服务端，并获取返回的热词ID。
     */
    CreateAsrVocab(query: CreateAsrVocabRequest): Promise<CreateAsrVocabResponse>;
    /**
     * 新建配置。
     */
    CreateSkillGroupConfig(query: CreateSkillGroupConfigRequest): Promise<CreateSkillGroupConfigResponse>;
    /**
     * 新建复核任务自动分配规则。
     */
    CreateTaskAssignRule(query: CreateTaskAssignRuleRequest): Promise<CreateTaskAssignRuleResponse>;
    /**
     * 添加用户。
     */
    CreateUser(query: CreateUserRequest): Promise<CreateUserResponse>;
    /**
     * 来新建预警配置。
     */
    CreateWarningConfig(query: CreateWarningConfigRequest): Promise<CreateWarningConfigResponse>;
    /**
     * 删除规则类型。
     */
    DelRuleCategory(query: DelRuleCategoryRequest): Promise<DelRuleCategoryResponse>;
    /**
     * 删除热词组。
     */
    DeleteAsrVocab(query: DeleteAsrVocabRequest): Promise<DeleteAsrVocabResponse>;
    /**
     * 删除适用业务。
     */
    DeleteBusinessCategory(query: DeleteBusinessCategoryRequest): Promise<DeleteBusinessCategoryResponse>;
    /**
     * 删除语言模型。
     */
    DeleteCustomizationConfig(query: DeleteCustomizationConfigRequest): Promise<DeleteCustomizationConfigResponse>;
    /**
     * 删除数据集。
     */
    DeleteDataSet(query: DeleteDataSetRequest): Promise<DeleteDataSetResponse>;
    /**
     * 删除语音识别检测任务。
     */
    DeletePrecisionTask(query: DeletePrecisionTaskRequest): Promise<DeletePrecisionTaskResponse>;
    /**
     * 删除评分大项。
     */
    DeleteScoreForApi(query: DeleteScoreForApiRequest): Promise<DeleteScoreForApiResponse>;
    /**
     * 删除配置。
     */
    DeleteSkillGroupConfig(query: DeleteSkillGroupConfigRequest): Promise<DeleteSkillGroupConfigResponse>;
    /**
     * 删除评分小项。
     */
    DeleteSubScoreForApi(query: DeleteSubScoreForApiRequest): Promise<DeleteSubScoreForApiResponse>;
    /**
     * 删除复核任务自动分配规则。
     */
    DeleteTaskAssignRule(query: DeleteTaskAssignRuleRequest): Promise<DeleteTaskAssignRuleResponse>;
    /**
     * 删除预警配置。
     */
    DeleteWarningConfig(query: DeleteWarningConfigRequest): Promise<DeleteWarningConfigResponse>;
    /**
     * 获取指定热词组的详情信息。
     */
    GetAsrVocab(query: GetAsrVocabRequest): Promise<GetAsrVocabResponse>;
    /**
     * 获取适用业务列表。
     */
    GetBusinessCategoryList(query: GetBusinessCategoryListRequest): Promise<GetBusinessCategoryListResponse>;
    /**
     * 获取语言模型列表。
     */
    GetCustomizationConfigList(query: GetCustomizationConfigListRequest): Promise<GetCustomizationConfigListResponse>;
    /**
     * 获取下一条文件详情用于人工校验。
     */
    GetNextResultToVerify(query: GetNextResultToVerifyRequest): Promise<GetNextResultToVerifyResponse>;
    /**
     * 获取语音识别检测任务详情。
     */
    GetPrecisionTask(query: GetPrecisionTaskRequest): Promise<GetPrecisionTaskResponse>;
    /**
     * 查询质检结果：部分结果需要入参requiredFields明确指定方可返回。服务地址（Region）请选择为杭州（cn-hangzhou）。
     */
    GetResult(query: GetResultRequest): Promise<GetResultResponse>;
    /**
     * 获取指定文件的质检结果详情数据，用于文件复核。详情数据包括：转写文本、录音地址、命中检测项信息，有了这些信息，就可以听录音、查看转写文本、查看检测项的命中位置，进行文件复核了。
     */
    GetResultToReview(query: GetResultToReviewRequest): Promise<GetResultToReviewResponse>;
    /**
     * 获取规则的基本信息。
     */
    GetRule(query: GetRuleRequest): Promise<GetRuleResponse>;
    /**
     * 获取规则类型列表。
     */
    GetRuleCategory(query: GetRuleCategoryRequest): Promise<GetRuleCategoryResponse>;
    /**
     * 获取全部评分项信息。
     */
    GetScoreInfo(query: GetScoreInfoRequest): Promise<GetScoreInfoResponse>;
    /**
     * 根据ID获取指定的配置。
     */
    GetSkillGroupConfig(query: GetSkillGroupConfigRequest): Promise<GetSkillGroupConfigResponse>;
    /**
     * 获取热线实时质检结果。
     */
    GetSyncResult(query: GetSyncResultRequest): Promise<GetSyncResultResponse>;
    /**
     * 处理申诉。
     */
    HandleComplaint(query: HandleComplaintRequest): Promise<HandleComplaintResponse>;
    /**
     * 创建评分大项。
     */
    InsertScoreForApi(query: InsertScoreForApiRequest): Promise<InsertScoreForApiResponse>;
    /**
     * 创建评分小项。
     */
    InsertSubScoreForApi(query: InsertSubScoreForApiRequest): Promise<InsertSubScoreForApiResponse>;
    /**
     * 删除规则。
     */
    InvalidRule(query: InvalidRuleRequest): Promise<InvalidRuleResponse>;
    /**
     * 获取热词组列表，不包括具体内容。
     */
    ListAsrVocab(query: ListAsrVocabRequest): Promise<ListAsrVocabResponse>;
    /**
     * 获取语音识别检测任务列表。服务地址（Region）请选择为杭州（cn-hangzhou）。
     */
    ListPrecisionTask(query: ListPrecisionTaskRequest): Promise<ListPrecisionTaskResponse>;
    /**
     * 获取规则列表。
     */
    ListRules(query: ListRulesRequest): Promise<ListRulesResponse>;
    /**
     * 调用ListSkillGroupConfig获取配置列表。
     */
    ListSkillGroupConfig(query: ListSkillGroupConfigRequest): Promise<ListSkillGroupConfigResponse>;
    /**
     * 获取复核任务自动分配规则列表。
     */
    ListTaskAssignRules(query: ListTaskAssignRulesRequest): Promise<ListTaskAssignRulesResponse>;
    /**
     * 获取用户列表。服务地址（Region）请选择为杭州（cn-hangzhou）。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 获取预警配置列表。
     */
    ListWarningConfig(query: ListWarningConfigRequest): Promise<ListWarningConfigResponse>;
    /**
     * 来保存数据集话者角色配置。
     */
    SaveConfigDataSet(query: SaveConfigDataSetRequest): Promise<SaveConfigDataSetResponse>;
    /**
     * 来提交申诉。
     */
    SubmitComplaint(query: SubmitComplaintRequest): Promise<SubmitComplaintResponse>;
    /**
     * 新建语音识别检测任务。服务地址（Region）请选择为杭州（cn-hangzhou）。
     */
    SubmitPrecisionTask(query: SubmitPrecisionTaskRequest): Promise<SubmitPrecisionTaskResponse>;
    /**
     * 新建数据集质检任务。
     */
    SubmitQualityCheckTask(query: SubmitQualityCheckTaskRequest): Promise<SubmitQualityCheckTaskResponse>;
    /**
     * 保存复核结果，仅支持旧版智能对话分析。
     */
    SubmitReviewInfo(query: SubmitReviewInfoRequest): Promise<SubmitReviewInfoResponse>;
    /**
     * 进行热线实时质检。
     */
    SyncQualityCheck(query: SyncQualityCheckRequest): Promise<SyncQualityCheckResponse>;
    /**
     * 更新热词词表。
     */
    UpdateAsrVocab(query: UpdateAsrVocabRequest): Promise<UpdateAsrVocabResponse>;
    /**
     * 更新规则信息。
     */
    UpdateRule(query: UpdateRuleRequest): Promise<UpdateRuleResponse>;
    /**
     * 编辑评分大项。
     */
    UpdateScoreForApi(query: UpdateScoreForApiRequest): Promise<UpdateScoreForApiResponse>;
    /**
     * 调用UpdateSkillGroupConfig更新配置。
     */
    UpdateSkillGroupConfig(query: UpdateSkillGroupConfigRequest): Promise<UpdateSkillGroupConfigResponse>;
    /**
     * 编辑评分子项。
     */
    UpdateSubScoreForApi(query: UpdateSubScoreForApiRequest): Promise<UpdateSubScoreForApiResponse>;
    /**
     * 更新复核任务自动分配规则。
     */
    UpdateTaskAssignRule(query: UpdateTaskAssignRuleRequest): Promise<UpdateTaskAssignRuleResponse>;
    /**
     * 来维护实时质检完成后的录音信息，用来复核时播放录音，并且维护录音信息后，任务状态将变为已完成。
     */
    UpdateSyncQualityCheckData(query: UpdateSyncQualityCheckDataRequest): Promise<UpdateSyncQualityCheckDataResponse>;
    /**
     * 编辑用户，可以批量修改用户的角色。
     */
    UpdateUser(query: UpdateUserRequest): Promise<UpdateUserResponse>;
    /**
     * 更新预警配置。
     */
    UpdateWarningConfig(query: UpdateWarningConfigRequest): Promise<UpdateWarningConfigResponse>;
    /**
     * 上传离线语音质检数据（录音会话文件）：适用于热线坐席场景。场景1：天然集成阿里云呼叫中心（CCC），无需开发，可以一键开启推送通话数据到SCA；场景2：与自有呼叫中心系统对接，呼叫中心每产生一条录音，就将录音推送至SCA进行分析。
     */
    UploadAudioData(query: UploadAudioDataRequest): Promise<UploadAudioDataResponse>;
    /**
     * 上传离线文本质检数据（纯文本会话）：适用于在线坐席场景。
     * 推荐使用UploadDataV4接口。
     * UploadDataV4与UploadData的差异：1、V4仅支持POST请求。2、V4支持更长的JsonStr。
     */
    UploadData(query: UploadDataRequest): Promise<UploadDataResponse>;
    /**
     * 文本实时质检。
     */
    UploadDataSync(query: UploadDataSyncRequest): Promise<UploadDataSyncResponse>;
    /**
     * 创建规则。一般用于客户需要自己提供规则编辑界面的场景。
     */
    UploadRule(query: UploadRuleRequest): Promise<UploadRuleResponse>;
    /**
     * 保存单个文件的校验结果。
     */
    VerifyFile(query: VerifyFileRequest): Promise<VerifyFileResponse>;
    /**
     * 保存单个句子的校验结果。
     */
    VerifySentence(query: VerifySentenceRequest): Promise<VerifySentenceResponse>;
    /**
     * 获取规则的明细信息。
     */
    GetRuleDetail(query: GetRuleDetailRequest): Promise<GetRuleDetailResponse>;
    /**
     * 获取质检方案列表。
     */
    ListQualityCheckScheme(query: ListQualityCheckSchemeRequest): Promise<ListQualityCheckSchemeResponse>;
    /**
     * 更新会话随录数据（三方业务字段），便于更多业务维度统计和查询。
     */
    UpdateQualityCheckData(query: UpdateQualityCheckDataRequest): Promise<UpdateQualityCheckDataResponse>;
    /**
     * 对应前端功能位置：任务管理。专有云URL：ip:port/api/task/ListSchemeTaskInfo.json。
     */
    ListSchemeTaskConfig(query: ListSchemeTaskConfigRequest): Promise<ListSchemeTaskConfigResponse>;
    /**
     * 对应前端功能位置：质检方案管理-新建质检任务或编辑-关联质检规则。专有云URL：ip:port/api/qcs/UpdateRuleToScheme.json。
     */
    UpdateRuleToScheme(query: UpdateRuleToSchemeRequest): Promise<UpdateRuleToSchemeResponse>;
    /**
     * 对应前端功能位置：质检方案管理-新建质检任务或编辑-质检维度名称旁编辑图标。专有云URL：ip:port/api/qcs/UpdateCheckTypeToScheme.json。
     */
    UpdateCheckTypeToScheme(query: UpdateCheckTypeToSchemeRequest): Promise<UpdateCheckTypeToSchemeResponse>;
    /**
     * 对应前端功能位置：暂无。专有云URL：ip:port/api/task/DeleteSchemeTaskConfig.json。
     */
    DeleteSchemeTaskConfig(query: DeleteSchemeTaskConfigRequest): Promise<DeleteSchemeTaskConfigResponse>;
    /**
     * 对应前端功能位置：任务管理-任一数据右侧编辑。专有云URL：ip:port/api/task/UpdateSchemeTaskConfig.json。
     */
    UpdateSchemeTaskConfig(query: UpdateSchemeTaskConfigRequest): Promise<UpdateSchemeTaskConfigResponse>;
    /**
     * 对应前端功能位置：质检方案管理-新建质检任务。专有云URL：ip:port/api/task/CreateSchemeTaskConfig.json。
     */
    CreateSchemeTaskConfig(query: CreateSchemeTaskConfigRequest): Promise<CreateSchemeTaskConfigResponse>;
    /**
     * 对应前端功能位置：质检方案管理-任务结果-会话组-批量分配。专有云URL：ip:port/api/job/AssignReviewerBySessionGroup.json。
     */
    AssignReviewerBySessionGroup(query: AssignReviewerBySessionGroupRequest): Promise<AssignReviewerBySessionGroupResponse>;
    /**
     * 对应前端功能位置：质检方案管理-新增质检维度或编辑-新增质检维度。专有云URL：ip:port/api/qcs/CreateCheckTypeToScheme.json。
     */
    CreateCheckTypeToScheme(query: CreateCheckTypeToSchemeRequest): Promise<CreateCheckTypeToSchemeResponse>;
    /**
     * 对应前端功能位置：质检规则配置-列表。专有云URL：ip:port/api/rule/GetRulesCountList.json。
     */
    GetRulesCountList(query: GetRulesCountListRequest): Promise<GetRulesCountListResponse>;
    /**
     * 对应前端功能位置：质检规则配置-删除。专有云URL：ip:port/api/client/DeleteRule.json。
     */
    DeleteRule(query: DeleteRuleRequest): Promise<DeleteRuleResponse>;
    /**
     * 对应前端功能位置：质检规则配置-新建&更新。专有云URL：ip:port/api/client/UpdateRuleById.json。
     */
    UpdateRuleById(query: UpdateRuleByIdRequest): Promise<UpdateRuleByIdResponse>;
    /**
     * 对应前端功能位置：任务管理-任务结果-批量复核
     * 对应私有云URL：ip:port/api/qcsBatchSubmitReviewInfo.json
     * 对筛选范围内的所有数据进行批量复核操作。
     * 注意！此操作涉及大量更新操作，可能生效有一定延迟。
     */
    BatchSubmitReviewInfo(query: BatchSubmitReviewInfoRequest): Promise<BatchSubmitReviewInfoResponse>;
    /**
     * 对应前端功能位置：质检方案管理-任务结果-会话组-批量回收。专有云URL：ip:port/api/job/RevertAssignedSessionGroup.json。
     */
    RevertAssignedSessionGroup(query: RevertAssignedSessionGroupRequest): Promise<RevertAssignedSessionGroupResponse>;
    /**
     * 对应前端功能位置：质检方案管理-查询。专有云URL：ip:port/api/qcs/GetQualityCheckScheme.json。
     */
    GetQualityCheckScheme(query: GetQualityCheckSchemeRequest): Promise<GetQualityCheckSchemeResponse>;
    ListSessionGroup(query: ListSessionGroupRequest): Promise<ListSessionGroupResponse>;
    /**
     * 对应前端功能位置：任务管理-任务结果-批量回收。专有云URL：ip:port/api/job/RevertAssignedSession.json。
     */
    RevertAssignedSession(query: RevertAssignedSessionRequest): Promise<RevertAssignedSessionResponse>;
    /**
     * 对应前端功能位置：质检规则配置-编辑
     * 对应私有云URL：ip:port/api/client/GetRuleById.json。
     */
    GetRuleById(query: GetRuleByIdRequest): Promise<GetRuleByIdResponse>;
    /**
     * 对应前端功能位置：数据集管理。专有云URL：ip:port/api/dataset/ListDataSet.json。
     */
    ListDataSet(query: ListDataSetRequest): Promise<ListDataSetResponse>;
    /**
     * 对应前端功能位置：质检方案管理-新建质检任务。专有云URL：ip:port/api/qcs/CreateQualityCheckScheme.json。
     */
    CreateQualityCheckScheme(query: CreateQualityCheckSchemeRequest): Promise<CreateQualityCheckSchemeResponse>;
    /**
     * 更新质检方案。
     */
    UpdateQualityCheckScheme(query: UpdateQualityCheckSchemeRequest): Promise<UpdateQualityCheckSchemeResponse>;
    /**
     * 对应前端功能位置：质检方案管理-任一数据右侧删除。专有云URL：ip:port/api/qcs/DeleteQualityCheckScheme.json。
     */
    DeleteQualityCheckScheme(query: DeleteQualityCheckSchemeRequest): Promise<DeleteQualityCheckSchemeResponse>;
    /**
     * 对应前端功能位置：质检规则配置-更新。专有云URL：ip:port/api/client/UpdateRuleById.json。
     */
    UpdateRuleV4(query: UpdateRuleV4Request): Promise<UpdateRuleV4Response>;
    /**
     * 对应前端功能位置：质检规则配置-删除。专有云URL：ip:port/api/client/DeleteRule.json。
     */
    DeleteRuleV4(query: DeleteRuleV4Request): Promise<DeleteRuleV4Response>;
    /**
     * 对应前端功能位置：质检规则配置-新建。专有云URL：ip:port/api/client/UpdateRuleById.json。
     */
    AddRuleV4(query: AddRuleV4Request): Promise<AddRuleV4Response>;
    /**
     * 对应前端功能位置：质检规则配置-列表。专有云URL：ip:port/api/rule/GetRulesCountList.json。
     */
    ListRulesV4(query: ListRulesV4Request): Promise<ListRulesV4Response>;
    /**
     * 对应前端功能位置：质检规则配置-查询。专有云URL：ip:port/api/client/GetRuleById.json。
     */
    GetRuleV4(query: GetRuleV4Request): Promise<GetRuleV4Response>;
    /**
     * 对应前端功能位置：质检规则配置-测试。专有云URL：ip:port/api/client/TestRule.json。
     */
    TestRuleV4(query: TestRuleV4Request): Promise<TestRuleV4Response>;
    /**
     * 上传离线文本质检数据（纯文本会话）：适用于在线坐席场景。
     * 推荐使用UploadDataV4接口。
     * UploadDataV4与UploadData的差异：1、V4仅支持POST请求。2、V4支持更长的JsonStr。
     */
    UploadDataV4(query: UploadDataV4Request): Promise<UploadDataV4Response>;
}
export default QUALITYCHECK;
