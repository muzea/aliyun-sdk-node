import { DescribeStorageRequest } from "./DescribeStorage/req";
import { DescribeStorageResponse } from "./DescribeStorage/res";
import { DescribeAppEnvStatusRequest } from "./DescribeAppEnvStatus/req";
import { DescribeAppEnvStatusResponse } from "./DescribeAppEnvStatus/res";
import { RestartAppEnvRequest } from "./RestartAppEnv/req";
import { RestartAppEnvResponse } from "./RestartAppEnv/res";
import { DeleteAppEnvRequest } from "./DeleteAppEnv/req";
import { DeleteAppEnvResponse } from "./DeleteAppEnv/res";
import { DescribeAppEnvInstanceHealthRequest } from "./DescribeAppEnvInstanceHealth/req";
import { DescribeAppEnvInstanceHealthResponse } from "./DescribeAppEnvInstanceHealth/res";
import { DescribeGatherLogResultRequest } from "./DescribeGatherLogResult/req";
import { DescribeGatherLogResultResponse } from "./DescribeGatherLogResult/res";
import { DescribeConfigTemplatesRequest } from "./DescribeConfigTemplates/req";
import { DescribeConfigTemplatesResponse } from "./DescribeConfigTemplates/res";
import { DescribeInstanceHealthRequest } from "./DescribeInstanceHealth/req";
import { DescribeInstanceHealthResponse } from "./DescribeInstanceHealth/res";
import { CreateStorageRequest } from "./CreateStorage/req";
import { CreateStorageResponse } from "./CreateStorage/res";
import { DescribeAppEnvsRequest } from "./DescribeAppEnvs/req";
import { DescribeAppEnvsResponse } from "./DescribeAppEnvs/res";
import { DeleteChangeRequest } from "./DeleteChange/req";
import { DeleteChangeResponse } from "./DeleteChange/res";
import { DeletePkgVersionRequest } from "./DeletePkgVersion/req";
import { DeletePkgVersionResponse } from "./DeletePkgVersion/res";
import { DescribeGatherStatsResultRequest } from "./DescribeGatherStatsResult/req";
import { DescribeGatherStatsResultResponse } from "./DescribeGatherStatsResult/res";
import { DescribeApplicationsRequest } from "./DescribeApplications/req";
import { DescribeApplicationsResponse } from "./DescribeApplications/res";
import { StartAppEnvRequest } from "./StartAppEnv/req";
import { StartAppEnvResponse } from "./StartAppEnv/res";
import { DeleteApplicationRequest } from "./DeleteApplication/req";
import { DeleteApplicationResponse } from "./DeleteApplication/res";
import { UpdateAppEnvRequest } from "./UpdateAppEnv/req";
import { UpdateAppEnvResponse } from "./UpdateAppEnv/res";
import { DescribeEnvResourceRequest } from "./DescribeEnvResource/req";
import { DescribeEnvResourceResponse } from "./DescribeEnvResource/res";
import { DryRunTerminateAppEnvRequest } from "./DryRunTerminateAppEnv/req";
import { DryRunTerminateAppEnvResponse } from "./DryRunTerminateAppEnv/res";
import { DeleteConfigTemplateRequest } from "./DeleteConfigTemplate/req";
import { DeleteConfigTemplateResponse } from "./DeleteConfigTemplate/res";
import { CreateConfigTemplateRequest } from "./CreateConfigTemplate/req";
import { CreateConfigTemplateResponse } from "./CreateConfigTemplate/res";
import { CreatePkgVersionRequest } from "./CreatePkgVersion/req";
import { CreatePkgVersionResponse } from "./CreatePkgVersion/res";
import { ResumeChangeRequest } from "./ResumeChange/req";
import { ResumeChangeResponse } from "./ResumeChange/res";
import { DescribeChangeRequest } from "./DescribeChange/req";
import { DescribeChangeResponse } from "./DescribeChange/res";
import { PauseChangeRequest } from "./PauseChange/req";
import { PauseChangeResponse } from "./PauseChange/res";
import { ValidateConfigSettingRequest } from "./ValidateConfigSetting/req";
import { ValidateConfigSettingResponse } from "./ValidateConfigSetting/res";
import { TerminateAppEnvRequest } from "./TerminateAppEnv/req";
import { TerminateAppEnvResponse } from "./TerminateAppEnv/res";
import { DescribePkgVersionsRequest } from "./DescribePkgVersions/req";
import { DescribePkgVersionsResponse } from "./DescribePkgVersions/res";
import { DescribeConfigSettingsRequest } from "./DescribeConfigSettings/req";
import { DescribeConfigSettingsResponse } from "./DescribeConfigSettings/res";
import { DryRunCreateAppEnvRequest } from "./DryRunCreateAppEnv/req";
import { DryRunCreateAppEnvResponse } from "./DryRunCreateAppEnv/res";
import { UpdateApplicationRequest } from "./UpdateApplication/req";
import { UpdateApplicationResponse } from "./UpdateApplication/res";
import { GatherAppEnvLogRequest } from "./GatherAppEnvLog/req";
import { GatherAppEnvLogResponse } from "./GatherAppEnvLog/res";
import { RebuildAppEnvRequest } from "./RebuildAppEnv/req";
import { RebuildAppEnvResponse } from "./RebuildAppEnv/res";
import { CreateApplicationRequest } from "./CreateApplication/req";
import { CreateApplicationResponse } from "./CreateApplication/res";
import { DescribeChangesRequest } from "./DescribeChanges/req";
import { DescribeChangesResponse } from "./DescribeChanges/res";
import { DescribeStacksRequest } from "./DescribeStacks/req";
import { DescribeStacksResponse } from "./DescribeStacks/res";
import { GatherAppEnvStatsRequest } from "./GatherAppEnvStats/req";
import { GatherAppEnvStatsResponse } from "./GatherAppEnvStats/res";
import { DescribeCategoriesRequest } from "./DescribeCategories/req";
import { DescribeCategoriesResponse } from "./DescribeCategories/res";
import { UpdateConfigTemplateRequest } from "./UpdateConfigTemplate/req";
import { UpdateConfigTemplateResponse } from "./UpdateConfigTemplate/res";
import { StopAppEnvRequest } from "./StopAppEnv/req";
import { StopAppEnvResponse } from "./StopAppEnv/res";
import { CreateAppEnvRequest } from "./CreateAppEnv/req";
import { CreateAppEnvResponse } from "./CreateAppEnv/res";
import { DescribeEventsRequest } from "./DescribeEvents/req";
import { DescribeEventsResponse } from "./DescribeEvents/res";
import { DescribeConfigOptionsRequest } from "./DescribeConfigOptions/req";
import { DescribeConfigOptionsResponse } from "./DescribeConfigOptions/res";
import { AbortChangeRequest } from "./AbortChange/req";
import { AbortChangeResponse } from "./AbortChange/res";
import { DescribeConfigIndexRequest } from "./DescribeConfigIndex/req";
import { DescribeConfigIndexResponse } from "./DescribeConfigIndex/res";
import { DryRunRebuildAppEnvRequest } from "./DryRunRebuildAppEnv/req";
import { DryRunRebuildAppEnvResponse } from "./DryRunRebuildAppEnv/res";
import { CheckInstancesImportStatusRequest } from "./CheckInstancesImportStatus/req";
import { CheckInstancesImportStatusResponse } from "./CheckInstancesImportStatus/res";

interface WEBPLUS {
    /**
    * 调用DescribeStorage查询存储。
    */ DescribeStorage(query: DescribeStorageRequest): Promise<DescribeStorageResponse>;
    /**
    * 调用DescribeAppEnvStatus查询给定环境的状态。
    */ DescribeAppEnvStatus(query: DescribeAppEnvStatusRequest): Promise<DescribeAppEnvStatusResponse>;
    /**
    * 调用RestartAppEnv重启一个部署环境。
    */ RestartAppEnv(query: RestartAppEnvRequest): Promise<RestartAppEnvResponse>;
    /**
    * 调用DeleteAppEnv删除一个环境。
    */ DeleteAppEnv(query: DeleteAppEnvRequest): Promise<DeleteAppEnvResponse>;
    /**
    * 调用DescribeAppEnvInstanceHealth查询一个环境内所有ECS实例的健康状态。
    */ DescribeAppEnvInstanceHealth(query: DescribeAppEnvInstanceHealthRequest): Promise<DescribeAppEnvInstanceHealthResponse>;
    /**
    * 调用DescribeGatherLogResult查询一个收集日志的变更信息。
    */ DescribeGatherLogResult(query: DescribeGatherLogResultRequest): Promise<DescribeGatherLogResultResponse>;
    /**
    * 调用DescribeConfigTemplates查询配置模板。
    */ DescribeConfigTemplates(query: DescribeConfigTemplatesRequest): Promise<DescribeConfigTemplatesResponse>;
    /**
    * 调用DescribeInstanceHealth查询一个给定ECS实例的健康状态。
    */ DescribeInstanceHealth(query: DescribeInstanceHealthRequest): Promise<DescribeInstanceHealthResponse>;
    /**
    * 调用CreateStorage创建一个存储桶。
    */ CreateStorage(query: CreateStorageRequest): Promise<CreateStorageResponse>;
    /**
    * 调用DescribeAppEnvs查询符合条件的部署环境。
    */ DescribeAppEnvs(query: DescribeAppEnvsRequest): Promise<DescribeAppEnvsResponse>;
    /**
    * 调用DeleteChange删除一个变更。
    */ DeleteChange(query: DeleteChangeRequest): Promise<DeleteChangeResponse>;
    /**
    * 调用DeletePkgVersion删除一个部署包版本。
    */ DeletePkgVersion(query: DeletePkgVersionRequest): Promise<DeletePkgVersionResponse>;
    /**
    * 调用DescribeGatherStatsResult查询一个收集诊断的变更信息。
    */ DescribeGatherStatsResult(query: DescribeGatherStatsResultRequest): Promise<DescribeGatherStatsResultResponse>;
    /**
    * 调用DescribeApplications查询应用信息。
    */ DescribeApplications(query: DescribeApplicationsRequest): Promise<DescribeApplicationsResponse>;
    /**
    * 调用StartAppEnv启动一个部署环境。
    */ StartAppEnv(query: StartAppEnvRequest): Promise<StartAppEnvResponse>;
    /**
    * 调用DeleteApplication删除一个应用。
    */ DeleteApplication(query: DeleteApplicationRequest): Promise<DeleteApplicationResponse>;
    /**
    * 调用此API更新一个部署环境。
    */ UpdateAppEnv(query: UpdateAppEnvRequest): Promise<UpdateAppEnvResponse>;
    /**
    * 调用DescribeEnvResource查询一个环境内的所有资源。
    */ DescribeEnvResource(query: DescribeEnvResourceRequest): Promise<DescribeEnvResourceResponse>;
    /**
    * 调用DryRunTerminateAppEnv来模拟运行终止给定的部署环境。
    */ DryRunTerminateAppEnv(query: DryRunTerminateAppEnvRequest): Promise<DryRunTerminateAppEnvResponse>;
    /**
    * 调用DeleteConfigTemplate删除一个配置模板。
    */ DeleteConfigTemplate(query: DeleteConfigTemplateRequest): Promise<DeleteConfigTemplateResponse>;
    /**
    * 调用CreateConfigTemplate从一个原有环境来创建一个配置模板。
    */ CreateConfigTemplate(query: CreateConfigTemplateRequest): Promise<CreateConfigTemplateResponse>;
    /**
    * 调用CreatePkgVersion创建一个部署包版本。
    */ CreatePkgVersion(query: CreatePkgVersionRequest): Promise<CreatePkgVersionResponse>;
    /**
    * 调用ResumeChange来恢复一个被暂停的变更操作。
    */ ResumeChange(query: ResumeChangeRequest): Promise<ResumeChangeResponse>;
    /**
    * 调用DescribeChanges查询给定环境内所有变更信息或给定变更ID的变更信息。
    */ DescribeChange(query: DescribeChangeRequest): Promise<DescribeChangeResponse>;
    /**
    * 调用PauseChange来暂停一个未完成的变更操作。
    */ PauseChange(query: PauseChangeRequest): Promise<PauseChangeResponse>;
    /**
    * 调用ValidateConfigSetting来验证一个配置的设置有效性。
    */ ValidateConfigSetting(query: ValidateConfigSettingRequest): Promise<ValidateConfigSettingResponse>;
    /**
    * 调用TerminateAppEnv来终止一个环境。
    */ TerminateAppEnv(query: TerminateAppEnvRequest): Promise<TerminateAppEnvResponse>;
    /**
    * 调用DescribePkgVersions查询部署包版本。
    */ DescribePkgVersions(query: DescribePkgVersionsRequest): Promise<DescribePkgVersionsResponse>;
    /**
    * 调用DescribeConfigSettings查询配置设置。
    */ DescribeConfigSettings(query: DescribeConfigSettingsRequest): Promise<DescribeConfigSettingsResponse>;
    /**
    * 调用DryRunCreateAppEnv来模拟创建应用部署环境。
    */ DryRunCreateAppEnv(query: DryRunCreateAppEnvRequest): Promise<DryRunCreateAppEnvResponse>;
    /**
    * 调用UpdateApplication更新应用。
    */ UpdateApplication(query: UpdateApplicationRequest): Promise<UpdateApplicationResponse>;
    /**
    * 调用GatherAppEnvLog来收集一个部署环境中指定实例的日志信息。
    */ GatherAppEnvLog(query: GatherAppEnvLogRequest): Promise<GatherAppEnvLogResponse>;
    /**
    * 调用RebuildAppEnv重建一个部署环境。
    */ RebuildAppEnv(query: RebuildAppEnvRequest): Promise<RebuildAppEnvResponse>;
    /**
    * 使用CreateApplication创建一个新应用。
    */ CreateApplication(query: CreateApplicationRequest): Promise<CreateApplicationResponse>;
    /**
    * 调用DescribeChanges查询所有变更信息或给定环境内所有变更信息。
    */ DescribeChanges(query: DescribeChangesRequest): Promise<DescribeChangesResponse>;
    /**
    * 调用DescribeStacks查询技术栈。
    */ DescribeStacks(query: DescribeStacksRequest): Promise<DescribeStacksResponse>;
    /**
    * 调用GatherAppEnvStats来收集一个部署环境中的诊断信息。
    */ GatherAppEnvStats(query: GatherAppEnvStatsRequest): Promise<GatherAppEnvStatsResponse>;
    /**
    * 调用DescribeCategories查询平台类型。
    */ DescribeCategories(query: DescribeCategoriesRequest): Promise<DescribeCategoriesResponse>;
    /**
    * 调用UpdateConfigTemplate来更新配置模板。
    */ UpdateConfigTemplate(query: UpdateConfigTemplateRequest): Promise<UpdateConfigTemplateResponse>;
    /**
    * 调用StopAppEnv停止一个部署环境。
    */ StopAppEnv(query: StopAppEnvRequest): Promise<StopAppEnvResponse>;
    /**
    * 调用CreateAppEnv创建一个部署环境。
    */ CreateAppEnv(query: CreateAppEnvRequest): Promise<CreateAppEnvResponse>;
    /**
    * 调用DescribeEvents查询事件。
    */ DescribeEvents(query: DescribeEventsRequest): Promise<DescribeEventsResponse>;
    /**
    * 调用DescribeConfigOptions查询配置选项信息。
    */ DescribeConfigOptions(query: DescribeConfigOptionsRequest): Promise<DescribeConfigOptionsResponse>;
    /**
    * 使用AbortChange可以中止一次变更。
    */ AbortChange(query: AbortChangeRequest): Promise<AbortChangeResponse>;
    /**
    * 调用DescribeConfigIndex查询配置索引。
    */ DescribeConfigIndex(query: DescribeConfigIndexRequest): Promise<DescribeConfigIndexResponse>;
    DryRunRebuildAppEnv(query: DryRunRebuildAppEnvRequest): Promise<DryRunRebuildAppEnvResponse>;
    CheckInstancesImportStatus(query: CheckInstancesImportStatusRequest): Promise<CheckInstancesImportStatusResponse>;
}
export default WEBPLUS;
