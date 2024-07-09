import { CreateSlrRoleRequest } from "./CreateSlrRole/req";
import { CreateSlrRoleResponse } from "./CreateSlrRole/res";
import { CreateConfigRequest } from "./CreateConfig/req";
import { CreateConfigResponse } from "./CreateConfig/res";
import { CreateRuleRequest } from "./CreateRule/req";
import { CreateRuleResponse } from "./CreateRule/res";
import { CreateDataLimitRequest } from "./CreateDataLimit/req";
import { CreateDataLimitResponse } from "./CreateDataLimit/res";
import { DeleteDataLimitRequest } from "./DeleteDataLimit/req";
import { DeleteDataLimitResponse } from "./DeleteDataLimit/res";
import { DeleteRuleRequest } from "./DeleteRule/req";
import { DeleteRuleResponse } from "./DeleteRule/res";
import { DescribeConfigsRequest } from "./DescribeConfigs/req";
import { DescribeConfigsResponse } from "./DescribeConfigs/res";
import { DescribeDataLimitsRequest } from "./DescribeDataLimits/req";
import { DescribeDataLimitsResponse } from "./DescribeDataLimits/res";
import { DescribeDataLimitDetailRequest } from "./DescribeDataLimitDetail/req";
import { DescribeDataLimitDetailResponse } from "./DescribeDataLimitDetail/res";
import { DescribeRulesRequest } from "./DescribeRules/req";
import { DescribeRulesResponse } from "./DescribeRules/res";
import { DescribeCategoryTemplateRuleListRequest } from "./DescribeCategoryTemplateRuleList/req";
import { DescribeCategoryTemplateRuleListResponse } from "./DescribeCategoryTemplateRuleList/res";
import { DescribeRiskLevelsRequest } from "./DescribeRiskLevels/req";
import { DescribeRiskLevelsResponse } from "./DescribeRiskLevels/res";
import { DescribeUserStatusRequest } from "./DescribeUserStatus/req";
import { DescribeUserStatusResponse } from "./DescribeUserStatus/res";
import { DisableUserConfigRequest } from "./DisableUserConfig/req";
import { DisableUserConfigResponse } from "./DisableUserConfig/res";
import { ModifyDataLimitRequest } from "./ModifyDataLimit/req";
import { ModifyDataLimitResponse } from "./ModifyDataLimit/res";
import { ModifyDefaultLevelRequest } from "./ModifyDefaultLevel/req";
import { ModifyDefaultLevelResponse } from "./ModifyDefaultLevel/res";
import { ModifyRuleRequest } from "./ModifyRule/req";
import { ModifyRuleResponse } from "./ModifyRule/res";
import { ModifyRuleStatusRequest } from "./ModifyRuleStatus/req";
import { ModifyRuleStatusResponse } from "./ModifyRuleStatus/res";
import { ModifyReportTaskStatusRequest } from "./ModifyReportTaskStatus/req";
import { ModifyReportTaskStatusResponse } from "./ModifyReportTaskStatus/res";
import { CreateScanTaskRequest } from "./CreateScanTask/req";
import { CreateScanTaskResponse } from "./CreateScanTask/res";
import { DescribeDataAssetsRequest } from "./DescribeDataAssets/req";
import { DescribeDataAssetsResponse } from "./DescribeDataAssets/res";
import { DescribeColumnsRequest } from "./DescribeColumns/req";
import { DescribeColumnsResponse } from "./DescribeColumns/res";
import { DescribeInstancesRequest } from "./DescribeInstances/req";
import { DescribeInstancesResponse } from "./DescribeInstances/res";
import { DescribeTablesRequest } from "./DescribeTables/req";
import { DescribeTablesResponse } from "./DescribeTables/res";
import { DescribeOssObjectsRequest } from "./DescribeOssObjects/req";
import { DescribeOssObjectsResponse } from "./DescribeOssObjects/res";
import { DescribeOssObjectDetailRequest } from "./DescribeOssObjectDetail/req";
import { DescribeOssObjectDetailResponse } from "./DescribeOssObjectDetail/res";
import { DescribePackagesRequest } from "./DescribePackages/req";
import { DescribePackagesResponse } from "./DescribePackages/res";
import { DescribeEventDetailRequest } from "./DescribeEventDetail/req";
import { DescribeEventDetailResponse } from "./DescribeEventDetail/res";
import { ModifyEventTypeStatusRequest } from "./ModifyEventTypeStatus/req";
import { ModifyEventTypeStatusResponse } from "./ModifyEventTypeStatus/res";
import { DescribeEventsRequest } from "./DescribeEvents/req";
import { DescribeEventsResponse } from "./DescribeEvents/res";
import { ModifyEventStatusRequest } from "./ModifyEventStatus/req";
import { ModifyEventStatusResponse } from "./ModifyEventStatus/res";
import { DescribeEventTypesRequest } from "./DescribeEventTypes/req";
import { DescribeEventTypesResponse } from "./DescribeEventTypes/res";
import { ExecDatamaskRequest } from "./ExecDatamask/req";
import { ExecDatamaskResponse } from "./ExecDatamask/res";
import { DescribeDataMaskingTasksRequest } from "./DescribeDataMaskingTasks/req";
import { DescribeDataMaskingTasksResponse } from "./DescribeDataMaskingTasks/res";
import { DescribeDataMaskingRunHistoryRequest } from "./DescribeDataMaskingRunHistory/req";
import { DescribeDataMaskingRunHistoryResponse } from "./DescribeDataMaskingRunHistory/res";
import { ManualTriggerMaskingProcessRequest } from "./ManualTriggerMaskingProcess/req";
import { ManualTriggerMaskingProcessResponse } from "./ManualTriggerMaskingProcess/res";
import { StopMaskingProcessRequest } from "./StopMaskingProcess/req";
import { StopMaskingProcessResponse } from "./StopMaskingProcess/res";
import { DescribeDataLimitSetRequest } from "./DescribeDataLimitSet/req";
import { DescribeDataLimitSetResponse } from "./DescribeDataLimitSet/res";
import { DescribeInstanceSourcesRequest } from "./DescribeInstanceSources/req";
import { DescribeInstanceSourcesResponse } from "./DescribeInstanceSources/res";
import { DescribeCategoryTemplateListRequest } from "./DescribeCategoryTemplateList/req";
import { DescribeCategoryTemplateListResponse } from "./DescribeCategoryTemplateList/res";
import { DescribeDocTypesRequest } from "./DescribeDocTypes/req";
import { DescribeDocTypesResponse } from "./DescribeDocTypes/res";
import { DescribeTemplateAllRulesRequest } from "./DescribeTemplateAllRules/req";
import { DescribeTemplateAllRulesResponse } from "./DescribeTemplateAllRules/res";
import { DescribeParentInstanceRequest } from "./DescribeParentInstance/req";
import { DescribeParentInstanceResponse } from "./DescribeParentInstance/res";
import { DescribeDataObjectsRequest } from "./DescribeDataObjects/req";
import { DescribeDataObjectsResponse } from "./DescribeDataObjects/res";
import { DescribeDataObjectColumnDetailRequest } from "./DescribeDataObjectColumnDetail/req";
import { DescribeDataObjectColumnDetailResponse } from "./DescribeDataObjectColumnDetail/res";
import { DescribeOssObjectDetailV2Request } from "./DescribeOssObjectDetailV2/req";
import { DescribeOssObjectDetailV2Response } from "./DescribeOssObjectDetailV2/res";
import { DescribeDataObjectColumnDetailV2Request } from "./DescribeDataObjectColumnDetailV2/req";
import { DescribeDataObjectColumnDetailV2Response } from "./DescribeDataObjectColumnDetailV2/res";
import { DescribeColumnsV2Request } from "./DescribeColumnsV2/req";
import { DescribeColumnsV2Response } from "./DescribeColumnsV2/res";

interface SDDP {
    /**
     * 调用CreateSlrRole创建数据安全中心DSC（Data Security Center）的服务关联角色，授权DSC访问云资源。
     */
    CreateSlrRole(query: CreateSlrRoleRequest): Promise<CreateSlrRoleResponse>;
    /**
     * 调用CreateConfig接口修改异常告警通用配置模块的参数。
     */
    CreateConfig(query: CreateConfigRequest): Promise<CreateConfigResponse>;
    /**
     * 调用CreateRule创建自定义的敏感数据识别规则。
     */
    CreateRule(query: CreateRuleRequest): Promise<CreateRuleResponse>;
    /**
     * 调用CreateDataLimit创建对数据库、项目、存储空间（Bucket）进行扫描的授权。
     */
    CreateDataLimit(query: CreateDataLimitRequest): Promise<CreateDataLimitResponse>;
    /**
     * 调用本接口删除连接授权的库、实例、Bucket数据资产。
     */
    DeleteDataLimit(query: DeleteDataLimitRequest): Promise<DeleteDataLimitResponse>;
    /**
     * 调用本接口删除自定义的敏感数据识别规则。
     */
    DeleteRule(query: DeleteRuleRequest): Promise<DeleteRuleResponse>;
    /**
     * 查询异常告警通用配置模块中配置项的列表。
     */
    DescribeConfigs(query: DescribeConfigsRequest): Promise<DescribeConfigsResponse>;
    /**
     * 调用本接口查询连接授权的实例、库、Bucket数据资产列表。
     */
    DescribeDataLimits(query: DescribeDataLimitsRequest): Promise<DescribeDataLimitsResponse>;
    /**
     * 查询连接授权的单个实例、库、Bucket的详情。
     */
    DescribeDataLimitDetail(query: DescribeDataLimitDetailRequest): Promise<DescribeDataLimitDetailResponse>;
    /**
     * 调用本接口查询敏感数据识别规则的列表。
     */
    DescribeRules(query: DescribeRulesRequest): Promise<DescribeRulesResponse>;
    /**
     * 分页获取分类分级模板的规则列表。
     */
    DescribeCategoryTemplateRuleList(query: DescribeCategoryTemplateRuleListRequest): Promise<DescribeCategoryTemplateRuleListResponse>;
    /**
     * 调用DescribeRiskLevels接口获取数据识别的风险等级列表。
     */
    DescribeRiskLevels(query: DescribeRiskLevelsRequest): Promise<DescribeRiskLevelsResponse>;
    /**
     * 调用DescribeUserStatus查询用户账号状态。
     */
    DescribeUserStatus(query: DescribeUserStatusRequest): Promise<DescribeUserStatusResponse>;
    /**
     * 调用DisableUserConfig接口停用用户配置。停用用户配置后，可以通过调用CreateConfig接口输入相同的请求参数Code，恢复该配置项编码的异常告警通用配置。
     */
    DisableUserConfig(query: DisableUserConfigRequest): Promise<DisableUserConfigResponse>;
    /**
     * 调用ModifyDataLimit修改DSC连接授权的配置项。
     */
    ModifyDataLimit(query: ModifyDataLimitRequest): Promise<ModifyDataLimitResponse>;
    /**
     * 调用本接口修改敏感数据的风险等级定义规则，包括未能识别数据的默认风险等级、归类为“敏感”的数据风险等级。
     */
    ModifyDefaultLevel(query: ModifyDefaultLevelRequest): Promise<ModifyDefaultLevelResponse>;
    /**
     * 调用ModifyRule接口修改数据安全中心DSC（Data Security Center）中自定义的敏感数据识别规则。
     */
    ModifyRule(query: ModifyRuleRequest): Promise<ModifyRuleResponse>;
    /**
     * 调用本接口开启或关闭敏感数据识别规则的检测功能。
     */
    ModifyRuleStatus(query: ModifyRuleStatusRequest): Promise<ModifyRuleStatusResponse>;
    /**
     * 调用ModifyReportTaskStatus开启或关闭报表任务。
     */
    ModifyReportTaskStatus(query: ModifyReportTaskStatusRequest): Promise<ModifyReportTaskStatusResponse>;
    /**
     * 调用CreateScanTask接口为识别权限授权成功的资产创建识别敏感数据的定制化扫描任务。
     */
    CreateScanTask(query: CreateScanTaskRequest): Promise<CreateScanTaskResponse>;
    /**
     * 执行敏感数据保护概览页面的数据资产搜索。
     */
    DescribeDataAssets(query: DescribeDataAssetsRequest): Promise<DescribeDataAssetsResponse>;
    /**
     * 调用DescribeColumns接口查询数据安全中心连接授权的MaxCompute、RDS等数据资产表中列的数据。
     */
    DescribeColumns(query: DescribeColumnsRequest): Promise<DescribeColumnsResponse>;
    /**
     * 获取连接授权的MaxCompute、RDS、OSS数据资产实例列表。
     */
    DescribeInstances(query: DescribeInstancesRequest): Promise<DescribeInstancesResponse>;
    /**
     * 查询数据安全中心连接授权的MaxCompute、RDS等数据资产的表数据。
     */
    DescribeTables(query: DescribeTablesRequest): Promise<DescribeTablesResponse>;
    /**
     * 调用本接口查询连接授权的OSS的存储对象列表。
     */
    DescribeOssObjects(query: DescribeOssObjectsRequest): Promise<DescribeOssObjectsResponse>;
    /**
     * 调用本接口查询数据安全中心连接授权的OSS的单个存储对象的详细信息。
     */
    DescribeOssObjectDetail(query: DescribeOssObjectDetailRequest): Promise<DescribeOssObjectDetailResponse>;
    /**
     * 调用本接口查询已完成扫描授权的MaxCompute数据包的信息，例如数据包的名称、数据包所属者的账号、数据包的风险等级等。
     */
    DescribePackages(query: DescribePackagesRequest): Promise<DescribePackagesResponse>;
    /**
     * 调用本接口查询单个异常事件详情，包括异常事件发生时间、异常描述及处理状态等。
     */
    DescribeEventDetail(query: DescribeEventDetailRequest): Promise<DescribeEventDetailResponse>;
    /**
     * 调用本接口开启检测子类型异常事件的功能。
     */
    ModifyEventTypeStatus(query: ModifyEventTypeStatusRequest): Promise<ModifyEventTypeStatusResponse>;
    /**
     * 调用本接口查询异常事件列表。
     */
    DescribeEvents(query: DescribeEventsRequest): Promise<DescribeEventsResponse>;
    /**
     * 调用本接口处理异常事件。
     */
    ModifyEventStatus(query: ModifyEventStatusRequest): Promise<ModifyEventStatusResponse>;
    /**
     * 调用本接口查询异常事件类型的列表。
     */
    DescribeEventTypes(query: DescribeEventTypesRequest): Promise<DescribeEventTypesResponse>;
    /**
     * 调用ExecDatamask接口对数据进行动态脱敏。
     */
    ExecDatamask(query: ExecDatamaskRequest): Promise<ExecDatamaskResponse>;
    /**
     * 调用DescribeDataMaskingTasks获取脱敏任务列表。
     */
    DescribeDataMaskingTasks(query: DescribeDataMaskingTasksRequest): Promise<DescribeDataMaskingTasksResponse>;
    /**
     * 调用DescribeDataMaskingRunHistory查询脱敏任务执行情况。
     */
    DescribeDataMaskingRunHistory(query: DescribeDataMaskingRunHistoryRequest): Promise<DescribeDataMaskingRunHistoryResponse>;
    /**
     * 调用ManualTriggerMaskingProcess触发一次脱敏任务。
     */
    ManualTriggerMaskingProcess(query: ManualTriggerMaskingProcessRequest): Promise<ManualTriggerMaskingProcessResponse>;
    /**
     * 调用StopMaskingProcess接口终止脱敏任务。终止的脱敏任务，根据唯一资源ID，可通过ManualTriggerMaskingProcess重新开启脱敏任务。
     */
    StopMaskingProcess(query: StopMaskingProcessRequest): Promise<StopMaskingProcessResponse>;
    /**
     * 调用DescribeDataLimitSet接口查询指定产品的已授权扫描的实例、库、Bucket等列表。
     */
    DescribeDataLimitSet(query: DescribeDataLimitSetRequest): Promise<DescribeDataLimitSetResponse>;
    /**
     * 获取数据资产列表。
     */
    DescribeInstanceSources(query: DescribeInstanceSourcesRequest): Promise<DescribeInstanceSourcesResponse>;
    /**
     * 调用本接口查询行业模板列表。
     */
    DescribeCategoryTemplateList(query: DescribeCategoryTemplateListRequest): Promise<DescribeCategoryTemplateListResponse>;
    /**
     * 调用本接口查询支持识别的OSS文件类型列表。
     */
    DescribeDocTypes(query: DescribeDocTypesRequest): Promise<DescribeDocTypesResponse>;
    /**
     * 调用本接口查询行业模板所有模型列表。
     */
    DescribeTemplateAllRules(query: DescribeTemplateAllRulesRequest): Promise<DescribeTemplateAllRulesResponse>;
    /**
     * 调用本接口查询未授权或已授权资产列表。
     */
    DescribeParentInstance(query: DescribeParentInstanceRequest): Promise<DescribeParentInstanceResponse>;
    /**
     * 调用本接口查询数据表、文件的数据识别结果。
     */
    DescribeDataObjects(query: DescribeDataObjectsRequest): Promise<DescribeDataObjectsResponse>;
    /**
     * 调用本接口查询数据表的列识别结果。
     */
    DescribeDataObjectColumnDetail(query: DescribeDataObjectColumnDetailRequest): Promise<DescribeDataObjectColumnDetailResponse>;
    /**
     * 调用本接口查询数据安全中心连接授权的OSS的单个存储对象的详细信息。
     */
    DescribeOssObjectDetailV2(query: DescribeOssObjectDetailV2Request): Promise<DescribeOssObjectDetailV2Response>;
    /**
     * 调用本接口查询数据表的列识别结果。
     */
    DescribeDataObjectColumnDetailV2(query: DescribeDataObjectColumnDetailV2Request): Promise<DescribeDataObjectColumnDetailV2Response>;
    /**
     * 调用DescribeColumns接口查询数据安全中心连接授权的MaxCompute、RDS等数据资产表中列的数据。
     */
    DescribeColumnsV2(query: DescribeColumnsV2Request): Promise<DescribeColumnsV2Response>;
}
export default SDDP;
