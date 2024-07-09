import { SendMessageRequest } from "./SendMessage/req";
import { SendMessageResponse } from "./SendMessage/res";
import { GetTemplateRequest } from "./GetTemplate/req";
import { GetTemplateResponse } from "./GetTemplate/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { GetSignatureRequest } from "./GetSignature/req";
import { GetSignatureResponse } from "./GetSignature/res";
import { ListSignaturesRequest } from "./ListSignatures/req";
import { ListSignaturesResponse } from "./ListSignatures/res";
import { CreateSignatureRequest } from "./CreateSignature/req";
import { CreateSignatureResponse } from "./CreateSignature/res";
import { CreateTemplateRequest } from "./CreateTemplate/req";
import { CreateTemplateResponse } from "./CreateTemplate/res";
import { DeleteSignatureRequest } from "./DeleteSignature/req";
import { DeleteSignatureResponse } from "./DeleteSignature/res";
import { ListTemplatesRequest } from "./ListTemplates/req";
import { ListTemplatesResponse } from "./ListTemplates/res";
import { ListMessagesRequest } from "./ListMessages/req";
import { ListMessagesResponse } from "./ListMessages/res";
import { ListMessageMetricsRequest } from "./ListMessageMetrics/req";
import { ListMessageMetricsResponse } from "./ListMessageMetrics/res";
import { UpdateReportUrlRequest } from "./UpdateReportUrl/req";
import { UpdateReportUrlResponse } from "./UpdateReportUrl/res";
import { UpdateUploadUrlRequest } from "./UpdateUploadUrl/req";
import { UpdateUploadUrlResponse } from "./UpdateUploadUrl/res";
import { SmsUpRequest } from "./SmsUp/req";
import { SmsUpResponse } from "./SmsUp/res";
import { SmsReportRequest } from "./SmsReport/req";
import { SmsReportResponse } from "./SmsReport/res";
import { GetMessageConfigRequest } from "./GetMessageConfig/req";
import { GetMessageConfigResponse } from "./GetMessageConfig/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { DeleteCampaignRequest } from "./DeleteCampaign/req";
import { DeleteCampaignResponse } from "./DeleteCampaign/res";
import { UpdateCampaignRequest } from "./UpdateCampaign/req";
import { UpdateCampaignResponse } from "./UpdateCampaign/res";
import { ListGroupsRequest } from "./ListGroups/req";
import { ListGroupsResponse } from "./ListGroups/res";
import { ListTrainingJobsRequest } from "./ListTrainingJobs/req";
import { ListTrainingJobsResponse } from "./ListTrainingJobs/res";
import { GetInferenceJobRequest } from "./GetInferenceJob/req";
import { GetInferenceJobResponse } from "./GetInferenceJob/res";
import { DeleteGroupRequest } from "./DeleteGroup/req";
import { DeleteGroupResponse } from "./DeleteGroup/res";
import { DeleteInferenceJobRequest } from "./DeleteInferenceJob/req";
import { DeleteInferenceJobResponse } from "./DeleteInferenceJob/res";
import { CreateInferenceJobRequest } from "./CreateInferenceJob/req";
import { CreateInferenceJobResponse } from "./CreateInferenceJob/res";
import { GetGroupRequest } from "./GetGroup/req";
import { GetGroupResponse } from "./GetGroup/res";
import { GetAlgorithmRequest } from "./GetAlgorithm/req";
import { GetAlgorithmResponse } from "./GetAlgorithm/res";
import { ListAlgorithmsRequest } from "./ListAlgorithms/req";
import { ListAlgorithmsResponse } from "./ListAlgorithms/res";
import { ListInferenceJobsRequest } from "./ListInferenceJobs/req";
import { ListInferenceJobsResponse } from "./ListInferenceJobs/res";
import { CreateScheduleRequest } from "./CreateSchedule/req";
import { CreateScheduleResponse } from "./CreateSchedule/res";
import { CreateGroupRequest } from "./CreateGroup/req";
import { CreateGroupResponse } from "./CreateGroup/res";
import { GetCampaignRequest } from "./GetCampaign/req";
import { GetCampaignResponse } from "./GetCampaign/res";
import { CreateTrainingJobRequest } from "./CreateTrainingJob/req";
import { CreateTrainingJobResponse } from "./CreateTrainingJob/res";
import { CreateCampaignRequest } from "./CreateCampaign/req";
import { CreateCampaignResponse } from "./CreateCampaign/res";
import { GetScheduleRequest } from "./GetSchedule/req";
import { GetScheduleResponse } from "./GetSchedule/res";
import { ListCampaignsRequest } from "./ListCampaigns/req";
import { ListCampaignsResponse } from "./ListCampaigns/res";
import { DeleteTrainingJobRequest } from "./DeleteTrainingJob/req";
import { DeleteTrainingJobResponse } from "./DeleteTrainingJob/res";
import { GetTrainingJobRequest } from "./GetTrainingJob/req";
import { GetTrainingJobResponse } from "./GetTrainingJob/res";
import { DeleteScheduleRequest } from "./DeleteSchedule/req";
import { DeleteScheduleResponse } from "./DeleteSchedule/res";
import { ListSchedulesRequest } from "./ListSchedules/req";
import { ListSchedulesResponse } from "./ListSchedules/res";

interface PAIPLUGIN {
    /**
     * 发送短信，使用前须注册签名和模板。
     */
    SendMessage(query: SendMessageRequest): Promise<SendMessageResponse>;
    /**
     * 获取模板详细内容。
     */
    GetTemplate(query: GetTemplateRequest): Promise<GetTemplateResponse>;
    /**
     * 删除短信模板。
     */
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    /**
     * 获取签名的详细信息。
     */
    GetSignature(query: GetSignatureRequest): Promise<GetSignatureResponse>;
    /**
     * 获取签名注册记录列表。
     */
    ListSignatures(query: ListSignaturesRequest): Promise<ListSignaturesResponse>;
    /**
     * 发起注册签名请求，可通过控制台或GetSignature查看签名审核状态。
     */
    CreateSignature(query: CreateSignatureRequest): Promise<CreateSignatureResponse>;
    /**
     * 调用CreateTemplate来创建模板。
     */
    CreateTemplate(query: CreateTemplateRequest): Promise<CreateTemplateResponse>;
    /**
     * 删除签名。
     */
    DeleteSignature(query: DeleteSignatureRequest): Promise<DeleteSignatureResponse>;
    /**
     * 获取模板注册记录列表。
     */
    ListTemplates(query: ListTemplatesRequest): Promise<ListTemplatesResponse>;
    /**
     * 按指定过滤条件获取指定日期的短信发送状态。
     */
    ListMessages(query: ListMessagesRequest): Promise<ListMessagesResponse>;
    /**
     * 获取短信发送统计数据，可按指定条件获取分类别详细数据。
     */
    ListMessageMetrics(query: ListMessageMetricsRequest): Promise<ListMessageMetricsResponse>;
    /**
     * 更新短信发送状态回执接收服务地址。
     */
    UpdateReportUrl(query: UpdateReportUrlRequest): Promise<UpdateReportUrlResponse>;
    /**
     * 更新上行信息接收服务地址。
     */
    UpdateUploadUrl(query: UpdateUploadUrlRequest): Promise<UpdateUploadUrlResponse>;
    /**
     * 上行短信消息接口定义。
     */
    SmsUp(query: SmsUpRequest): Promise<SmsUpResponse>;
    /**
     * 短信发送状态报告接口定义。
     */
    SmsReport(query: SmsReportRequest): Promise<SmsReportResponse>;
    /**
     * 获取用户短信配置，如回执接口，上行短信接口等。
     */
    GetMessageConfig(query: GetMessageConfigRequest): Promise<GetMessageConfigResponse>;
    /**
     * 获取用户产品状态等基本信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 删除运营活动。
     */
    DeleteCampaign(query: DeleteCampaignRequest): Promise<DeleteCampaignResponse>;
    /**
     * 更新运营活动名称和备注。
     */
    UpdateCampaign(query: UpdateCampaignRequest): Promise<UpdateCampaignResponse>;
    /**
     * 获取人群列表。
     */
    ListGroups(query: ListGroupsRequest): Promise<ListGroupsResponse>;
    /**
     * 获取训练任务列表。
     */
    ListTrainingJobs(query: ListTrainingJobsRequest): Promise<ListTrainingJobsResponse>;
    /**
     * 获取预测任务详情。
     */
    GetInferenceJob(query: GetInferenceJobRequest): Promise<GetInferenceJobResponse>;
    /**
     * 删除人群。
     */
    DeleteGroup(query: DeleteGroupRequest): Promise<DeleteGroupResponse>;
    /**
     * 删除预测任务。
     */
    DeleteInferenceJob(query: DeleteInferenceJobRequest): Promise<DeleteInferenceJobResponse>;
    /**
     * 创建预测任务。
     */
    CreateInferenceJob(query: CreateInferenceJobRequest): Promise<CreateInferenceJobResponse>;
    /**
     * 获取人群详情。
     */
    GetGroup(query: GetGroupRequest): Promise<GetGroupResponse>;
    /**
     * 获取算法详细参数信息。
     */
    GetAlgorithm(query: GetAlgorithmRequest): Promise<GetAlgorithmResponse>;
    /**
     * 获取当前可用算法列表。
     */
    ListAlgorithms(query: ListAlgorithmsRequest): Promise<ListAlgorithmsResponse>;
    /**
     * 获取预测任务列表。
     */
    ListInferenceJobs(query: ListInferenceJobsRequest): Promise<ListInferenceJobsResponse>;
    /**
     * 创建触达计划。
     */
    CreateSchedule(query: CreateScheduleRequest): Promise<CreateScheduleResponse>;
    /**
     * 创建人群。
     */
    CreateGroup(query: CreateGroupRequest): Promise<CreateGroupResponse>;
    /**
     * 获取运营活动详细内容。
     */
    GetCampaign(query: GetCampaignRequest): Promise<GetCampaignResponse>;
    /**
     * 创建训练任务。
     */
    CreateTrainingJob(query: CreateTrainingJobRequest): Promise<CreateTrainingJobResponse>;
    /**
     * 创建运营活动。
     */
    CreateCampaign(query: CreateCampaignRequest): Promise<CreateCampaignResponse>;
    /**
     * 获取发送计划详情。
     */
    GetSchedule(query: GetScheduleRequest): Promise<GetScheduleResponse>;
    /**
     * 获取运营活动列表。
     */
    ListCampaigns(query: ListCampaignsRequest): Promise<ListCampaignsResponse>;
    /**
     * 删除训练任务。
     */
    DeleteTrainingJob(query: DeleteTrainingJobRequest): Promise<DeleteTrainingJobResponse>;
    /**
     * 获取训练任务详情。
     */
    GetTrainingJob(query: GetTrainingJobRequest): Promise<GetTrainingJobResponse>;
    /**
     * 删除发送计划。
     */
    DeleteSchedule(query: DeleteScheduleRequest): Promise<DeleteScheduleResponse>;
    /**
     * 获取发送计划列表。
     */
    ListSchedules(query: ListSchedulesRequest): Promise<ListSchedulesResponse>;
}
export default PAIPLUGIN;
