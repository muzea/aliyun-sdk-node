import { CreateQuotaAlarmRequest } from "./CreateQuotaAlarm/req";
import { CreateQuotaAlarmResponse } from "./CreateQuotaAlarm/res";
import { CreateQuotaApplicationRequest } from "./CreateQuotaApplication/req";
import { CreateQuotaApplicationResponse } from "./CreateQuotaApplication/res";
import { CreateQuotaApplicationsForTemplateRequest } from "./CreateQuotaApplicationsForTemplate/req";
import { CreateQuotaApplicationsForTemplateResponse } from "./CreateQuotaApplicationsForTemplate/res";
import { CreateTemplateQuotaItemRequest } from "./CreateTemplateQuotaItem/req";
import { CreateTemplateQuotaItemResponse } from "./CreateTemplateQuotaItem/res";
import { DeleteQuotaAlarmRequest } from "./DeleteQuotaAlarm/req";
import { DeleteQuotaAlarmResponse } from "./DeleteQuotaAlarm/res";
import { DeleteTemplateQuotaItemRequest } from "./DeleteTemplateQuotaItem/req";
import { DeleteTemplateQuotaItemResponse } from "./DeleteTemplateQuotaItem/res";
import { GetProductQuotaRequest } from "./GetProductQuota/req";
import { GetProductQuotaResponse } from "./GetProductQuota/res";
import { GetProductQuotaDimensionRequest } from "./GetProductQuotaDimension/req";
import { GetProductQuotaDimensionResponse } from "./GetProductQuotaDimension/res";
import { GetQuotaAlarmRequest } from "./GetQuotaAlarm/req";
import { GetQuotaAlarmResponse } from "./GetQuotaAlarm/res";
import { GetQuotaApplicationRequest } from "./GetQuotaApplication/req";
import { GetQuotaApplicationResponse } from "./GetQuotaApplication/res";
import { GetQuotaApplicationApprovalRequest } from "./GetQuotaApplicationApproval/req";
import { GetQuotaApplicationApprovalResponse } from "./GetQuotaApplicationApproval/res";
import { GetQuotaTemplateServiceStatusRequest } from "./GetQuotaTemplateServiceStatus/req";
import { GetQuotaTemplateServiceStatusResponse } from "./GetQuotaTemplateServiceStatus/res";
import { ListAlarmHistoriesRequest } from "./ListAlarmHistories/req";
import { ListAlarmHistoriesResponse } from "./ListAlarmHistories/res";
import { ListDependentQuotasRequest } from "./ListDependentQuotas/req";
import { ListDependentQuotasResponse } from "./ListDependentQuotas/res";
import { ListProductDimensionGroupsRequest } from "./ListProductDimensionGroups/req";
import { ListProductDimensionGroupsResponse } from "./ListProductDimensionGroups/res";
import { ListProductQuotaDimensionsRequest } from "./ListProductQuotaDimensions/req";
import { ListProductQuotaDimensionsResponse } from "./ListProductQuotaDimensions/res";
import { ListProductQuotasRequest } from "./ListProductQuotas/req";
import { ListProductQuotasResponse } from "./ListProductQuotas/res";
import { ListProductsRequest } from "./ListProducts/req";
import { ListProductsResponse } from "./ListProducts/res";
import { ListQuotaAlarmsRequest } from "./ListQuotaAlarms/req";
import { ListQuotaAlarmsResponse } from "./ListQuotaAlarms/res";
import { ListQuotaApplicationsRequest } from "./ListQuotaApplications/req";
import { ListQuotaApplicationsResponse } from "./ListQuotaApplications/res";
import { ListQuotaApplicationsDetailForTemplateRequest } from "./ListQuotaApplicationsDetailForTemplate/req";
import { ListQuotaApplicationsDetailForTemplateResponse } from "./ListQuotaApplicationsDetailForTemplate/res";
import { ListQuotaApplicationsForTemplateRequest } from "./ListQuotaApplicationsForTemplate/req";
import { ListQuotaApplicationsForTemplateResponse } from "./ListQuotaApplicationsForTemplate/res";
import { ListQuotaApplicationTemplatesRequest } from "./ListQuotaApplicationTemplates/req";
import { ListQuotaApplicationTemplatesResponse } from "./ListQuotaApplicationTemplates/res";
import { ModifyQuotaTemplateServiceStatusRequest } from "./ModifyQuotaTemplateServiceStatus/req";
import { ModifyQuotaTemplateServiceStatusResponse } from "./ModifyQuotaTemplateServiceStatus/res";
import { ModifyTemplateQuotaItemRequest } from "./ModifyTemplateQuotaItem/req";
import { ModifyTemplateQuotaItemResponse } from "./ModifyTemplateQuotaItem/res";
import { RemindQuotaApplicationApprovalRequest } from "./RemindQuotaApplicationApproval/req";
import { RemindQuotaApplicationApprovalResponse } from "./RemindQuotaApplicationApproval/res";
import { UpdateQuotaAlarmRequest } from "./UpdateQuotaAlarm/req";
import { UpdateQuotaAlarmResponse } from "./UpdateQuotaAlarm/res";

interface QUOTAS {
    /**
     * 创建配额告警。
     */
    CreateQuotaAlarm(query: CreateQuotaAlarmRequest): Promise<CreateQuotaAlarmResponse>;
    /**
     * 创建配额提升申请。
     */
    CreateQuotaApplication(query: CreateQuotaApplicationRequest): Promise<CreateQuotaApplicationResponse>;
    /**
     * 当您将配额项加入配额模板时，仅资源目录中新增的成员会自动提交配额提升申请，已有成员无变化。如果您需要通过配额模板为已有成员提升配额，则可以批量选择配额模板为资源目录中的多个成员提交配额提升申请。
     */
    CreateQuotaApplicationsForTemplate(query: CreateQuotaApplicationsForTemplateRequest): Promise<CreateQuotaApplicationsForTemplateResponse>;
    /**
     * 管理账号创建配额模板后，如果资源目录新增成员，则配额模板自动为新增的成员提交配额提升申请，已有成员无变化。通过配额模板，您一次可以申请提升多个配额项，提升整个组织的配额管理效率和自动化水平。
     */
    CreateTemplateQuotaItem(query: CreateTemplateQuotaItemRequest): Promise<CreateTemplateQuotaItemResponse>;
    /**
     * 删除配额用量告警。
     */
    DeleteQuotaAlarm(query: DeleteQuotaAlarmRequest): Promise<DeleteQuotaAlarmResponse>;
    /**
     * 管理账号删除配额模板后，如果资源目录新增成员，则配额模板不再自动为新增的成员提交配额提升申请。
     */
    DeleteTemplateQuotaItem(query: DeleteTemplateQuotaItemRequest): Promise<DeleteTemplateQuotaItemResponse>;
    /**
     * 查询目标云产品的配额详情。
     */
    GetProductQuota(query: GetProductQuotaRequest): Promise<GetProductQuotaResponse>;
    /**
     * 查询目标云产品支持的配额维度详情。
     */
    GetProductQuotaDimension(query: GetProductQuotaDimensionRequest): Promise<GetProductQuotaDimensionResponse>;
    /**
     * 查询目标配额告警详情。
     */
    GetQuotaAlarm(query: GetQuotaAlarmRequest): Promise<GetQuotaAlarmResponse>;
    /**
     * 查询配额提升申请详情。
     */
    GetQuotaApplication(query: GetQuotaApplicationRequest): Promise<GetQuotaApplicationResponse>;
    /**
     * 查询配额申请单审批信息。其中包含：平均审批时间、是否支持审批提醒和审批提醒间隔时间等。
     */
    GetQuotaApplicationApproval(query: GetQuotaApplicationApprovalRequest): Promise<GetQuotaApplicationApprovalResponse>;
    /**
     * 查询配额模板的状态。
     */
    GetQuotaTemplateServiceStatus(query: GetQuotaTemplateServiceStatusRequest): Promise<GetQuotaTemplateServiceStatusResponse>;
    /**
     * 查询配额告警历史记录。
     */
    ListAlarmHistories(query: ListAlarmHistoriesRequest): Promise<ListAlarmHistoriesResponse>;
    /**
     * 查询目标配额依赖的配额列表。
     */
    ListDependentQuotas(query: ListDependentQuotasRequest): Promise<ListDependentQuotasResponse>;
    /**
     * 查询目标云产品的维度组。
     */
    ListProductDimensionGroups(query: ListProductDimensionGroupsRequest): Promise<ListProductDimensionGroupsResponse>;
    /**
     * 查询目标云产品支持的配额维度。
     */
    ListProductQuotaDimensions(query: ListProductQuotaDimensionsRequest): Promise<ListProductQuotaDimensionsResponse>;
    /**
     * 查询目标云产品的配额列表。
     */
    ListProductQuotas(query: ListProductQuotasRequest): Promise<ListProductQuotasResponse>;
    /**
     * 查询配额中心支持的云产品列表。
     */
    ListProducts(query: ListProductsRequest): Promise<ListProductsResponse>;
    /**
     * 查询配额用量告警列表。
     */
    ListQuotaAlarms(query: ListQuotaAlarmsRequest): Promise<ListQuotaAlarmsResponse>;
    /**
     * 查询配额提升申请列表。
     */
    ListQuotaApplications(query: ListQuotaApplicationsRequest): Promise<ListQuotaApplicationsResponse>;
    /**
     * 查询资源目录中成员配额提升申请详情。
     */
    ListQuotaApplicationsDetailForTemplate(query: ListQuotaApplicationsDetailForTemplateRequest): Promise<ListQuotaApplicationsDetailForTemplateResponse>;
    /**
     * 查询配额模板批量申请成员配额的申请历史。
     */
    ListQuotaApplicationsForTemplate(query: ListQuotaApplicationsForTemplateRequest): Promise<ListQuotaApplicationsForTemplateResponse>;
    /**
     * 管理账号查询配额模板列表。
     */
    ListQuotaApplicationTemplates(query: ListQuotaApplicationTemplatesRequest): Promise<ListQuotaApplicationTemplatesResponse>;
    /**
     * 配额模板的默认状态为未设置。当资源目录的管理账号初次使用配额模板时，需要开启配额模板。
     */
    ModifyQuotaTemplateServiceStatus(query: ModifyQuotaTemplateServiceStatusRequest): Promise<ModifyQuotaTemplateServiceStatusResponse>;
    /**
     * 管理账号修改配额模板后，修改结果仅对资源目录中管理账号新增的成员生效，已有成员无变化。
     */
    ModifyTemplateQuotaItem(query: ModifyTemplateQuotaItemRequest): Promise<ModifyTemplateQuotaItemResponse>;
    /**
     * 查询支持审批提醒的配额申请单。
     */
    RemindQuotaApplicationApproval(query: RemindQuotaApplicationApprovalRequest): Promise<RemindQuotaApplicationApprovalResponse>;
    /**
     * 修改配额告警信息。
     */
    UpdateQuotaAlarm(query: UpdateQuotaAlarmRequest): Promise<UpdateQuotaAlarmResponse>;
}
export default QUOTAS;
