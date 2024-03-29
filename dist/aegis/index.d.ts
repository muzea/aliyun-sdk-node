import { DescribeSuspEventsRequest } from "./DescribeSuspEvents/req";
import { DescribeSuspEventsResponse } from "./DescribeSuspEvents/res";
import { DescribeAlarmEventListRequest } from "./DescribeAlarmEventList/req";
import { DescribeAlarmEventListResponse } from "./DescribeAlarmEventList/res";
import { DescribeSuspEventDetailRequest } from "./DescribeSuspEventDetail/req";
import { DescribeSuspEventDetailResponse } from "./DescribeSuspEventDetail/res";
import { DescribeAlarmEventDetailRequest } from "./DescribeAlarmEventDetail/req";
import { DescribeAlarmEventDetailResponse } from "./DescribeAlarmEventDetail/res";
import { CreatScreenSettingRequest } from "./CreatScreenSetting/req";
import { CreatScreenSettingResponse } from "./CreatScreenSetting/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { DeleteRuleRequest } from "./DeleteRule/req";
import { DeleteRuleResponse } from "./DeleteRule/res";
import { DescribeAutoDelConfigRequest } from "./DescribeAutoDelConfig/req";
import { DescribeAutoDelConfigResponse } from "./DescribeAutoDelConfig/res";
import { DescribeCheckWarningDetailRequest } from "./DescribeCheckWarningDetail/req";
import { DescribeCheckWarningDetailResponse } from "./DescribeCheckWarningDetail/res";
import { DescribeCheckWarningSummaryRequest } from "./DescribeCheckWarningSummary/req";
import { DescribeCheckWarningSummaryResponse } from "./DescribeCheckWarningSummary/res";
import { DescribeCheckWarningsRequest } from "./DescribeCheckWarnings/req";
import { DescribeCheckWarningsResponse } from "./DescribeCheckWarnings/res";
import { DescribeConcernNecessityRequest } from "./DescribeConcernNecessity/req";
import { DescribeConcernNecessityResponse } from "./DescribeConcernNecessity/res";
import { DescribeDataSourceRequest } from "./DescribeDataSource/req";
import { DescribeDataSourceResponse } from "./DescribeDataSource/res";
import { DescribeEmgVulGroupRequest } from "./DescribeEmgVulGroup/req";
import { DescribeEmgVulGroupResponse } from "./DescribeEmgVulGroup/res";
import { DescribeGroupedVulRequest } from "./DescribeGroupedVul/req";
import { DescribeGroupedVulResponse } from "./DescribeGroupedVul/res";
import { DescribeInstanceStatisticsRequest } from "./DescribeInstanceStatistics/req";
import { DescribeInstanceStatisticsResponse } from "./DescribeInstanceStatistics/res";
import { DescribeMacConfigRequest } from "./DescribeMacConfig/req";
import { DescribeMacConfigResponse } from "./DescribeMacConfig/res";
import { DescribeMachineConfigRequest } from "./DescribeMachineConfig/req";
import { DescribeMachineConfigResponse } from "./DescribeMachineConfig/res";
import { DescribeScreenScoreThreadRequest } from "./DescribeScreenScoreThread/req";
import { DescribeScreenScoreThreadResponse } from "./DescribeScreenScoreThread/res";
import { DescribeScreenSettingsRequest } from "./DescribeScreenSettings/req";
import { DescribeScreenSettingsResponse } from "./DescribeScreenSettings/res";
import { DescribeStrategyExecDetailRequest } from "./DescribeStrategyExecDetail/req";
import { DescribeStrategyExecDetailResponse } from "./DescribeStrategyExecDetail/res";
import { DescribeStratetyRequest } from "./DescribeStratety/req";
import { DescribeStratetyResponse } from "./DescribeStratety/res";
import { DescribeVulListRequest } from "./DescribeVulList/req";
import { DescribeVulListResponse } from "./DescribeVulList/res";
import { DescribeVulWhitelistRequest } from "./DescribeVulWhitelist/req";
import { DescribeVulWhitelistResponse } from "./DescribeVulWhitelist/res";
import { DescribeWarningMachinesRequest } from "./DescribeWarningMachines/req";
import { DescribeWarningMachinesResponse } from "./DescribeWarningMachines/res";
import { DownloadLogRequest } from "./DownloadLog/req";
import { DownloadLogResponse } from "./DownloadLog/res";
import { GetAccountStatisticsRequest } from "./GetAccountStatistics/req";
import { GetAccountStatisticsResponse } from "./GetAccountStatistics/res";
import { GetCrackStatisticsRequest } from "./GetCrackStatistics/req";
import { GetCrackStatisticsResponse } from "./GetCrackStatistics/res";
import { GetEntityListRequest } from "./GetEntityList/req";
import { GetEntityListResponse } from "./GetEntityList/res";
import { GetStatisticsRequest } from "./GetStatistics/req";
import { GetStatisticsResponse } from "./GetStatistics/res";
import { GetStatisticsByUuidRequest } from "./GetStatisticsByUuid/req";
import { GetStatisticsByUuidResponse } from "./GetStatisticsByUuid/res";
import { ModifyScreenSettingRequest } from "./ModifyScreenSetting/req";
import { ModifyScreenSettingResponse } from "./ModifyScreenSetting/res";
import { OperateResultRequest } from "./OperateResult/req";
import { OperateResultResponse } from "./OperateResult/res";
import { QueryCrackEventRequest } from "./QueryCrackEvent/req";
import { QueryCrackEventResponse } from "./QueryCrackEvent/res";
import { QueryLoginEventRequest } from "./QueryLoginEvent/req";
import { QueryLoginEventResponse } from "./QueryLoginEvent/res";
import { ReleaseInstanceRequest } from "./ReleaseInstance/req";
import { ReleaseInstanceResponse } from "./ReleaseInstance/res";
import { RenewInstanceRequest } from "./RenewInstance/req";
import { RenewInstanceResponse } from "./RenewInstance/res";
import { UpgradeInstanceRequest } from "./UpgradeInstance/req";
import { UpgradeInstanceResponse } from "./UpgradeInstance/res";
import { ModifyProcessWhiteListRequest } from "./ModifyProcessWhiteList/req";
import { ModifyProcessWhiteListResponse } from "./ModifyProcessWhiteList/res";

interface AEGIS {
    /**
    * 查询异常事件列表。
    */ DescribeSuspEvents(query: DescribeSuspEventsRequest): Promise<DescribeSuspEventsResponse>;
    /**
    * 获取态势感知安全告警模块的安全事件的列表。
    */ DescribeAlarmEventList(query: DescribeAlarmEventListRequest): Promise<DescribeAlarmEventListResponse>;
    /**
    * 异常事件详情。
    */ DescribeSuspEventDetail(query: DescribeSuspEventDetailRequest): Promise<DescribeSuspEventDetailResponse>;
    /**
    * 获取告警事件的详细信息。
    */ DescribeAlarmEventDetail(query: DescribeAlarmEventDetailRequest): Promise<DescribeAlarmEventDetailResponse>;
    CreatScreenSetting(query: CreatScreenSettingRequest): Promise<CreatScreenSettingResponse>;
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    DeleteRule(query: DeleteRuleRequest): Promise<DeleteRuleResponse>;
    DescribeAutoDelConfig(query: DescribeAutoDelConfigRequest): Promise<DescribeAutoDelConfigResponse>;
    DescribeCheckWarningDetail(query: DescribeCheckWarningDetailRequest): Promise<DescribeCheckWarningDetailResponse>;
    DescribeCheckWarningSummary(query: DescribeCheckWarningSummaryRequest): Promise<DescribeCheckWarningSummaryResponse>;
    DescribeCheckWarnings(query: DescribeCheckWarningsRequest): Promise<DescribeCheckWarningsResponse>;
    DescribeConcernNecessity(query: DescribeConcernNecessityRequest): Promise<DescribeConcernNecessityResponse>;
    DescribeDataSource(query: DescribeDataSourceRequest): Promise<DescribeDataSourceResponse>;
    DescribeEmgVulGroup(query: DescribeEmgVulGroupRequest): Promise<DescribeEmgVulGroupResponse>;
    DescribeGroupedVul(query: DescribeGroupedVulRequest): Promise<DescribeGroupedVulResponse>;
    DescribeInstanceStatistics(query: DescribeInstanceStatisticsRequest): Promise<DescribeInstanceStatisticsResponse>;
    DescribeMacConfig(query: DescribeMacConfigRequest): Promise<DescribeMacConfigResponse>;
    DescribeMachineConfig(query: DescribeMachineConfigRequest): Promise<DescribeMachineConfigResponse>;
    DescribeScreenScoreThread(query: DescribeScreenScoreThreadRequest): Promise<DescribeScreenScoreThreadResponse>;
    DescribeScreenSettings(query: DescribeScreenSettingsRequest): Promise<DescribeScreenSettingsResponse>;
    DescribeStrategyExecDetail(query: DescribeStrategyExecDetailRequest): Promise<DescribeStrategyExecDetailResponse>;
    DescribeStratety(query: DescribeStratetyRequest): Promise<DescribeStratetyResponse>;
    DescribeVulList(query: DescribeVulListRequest): Promise<DescribeVulListResponse>;
    DescribeVulWhitelist(query: DescribeVulWhitelistRequest): Promise<DescribeVulWhitelistResponse>;
    DescribeWarningMachines(query: DescribeWarningMachinesRequest): Promise<DescribeWarningMachinesResponse>;
    DownloadLog(query: DownloadLogRequest): Promise<DownloadLogResponse>;
    GetAccountStatistics(query: GetAccountStatisticsRequest): Promise<GetAccountStatisticsResponse>;
    GetCrackStatistics(query: GetCrackStatisticsRequest): Promise<GetCrackStatisticsResponse>;
    GetEntityList(query: GetEntityListRequest): Promise<GetEntityListResponse>;
    GetStatistics(query: GetStatisticsRequest): Promise<GetStatisticsResponse>;
    GetStatisticsByUuid(query: GetStatisticsByUuidRequest): Promise<GetStatisticsByUuidResponse>;
    ModifyScreenSetting(query: ModifyScreenSettingRequest): Promise<ModifyScreenSettingResponse>;
    OperateResult(query: OperateResultRequest): Promise<OperateResultResponse>;
    QueryCrackEvent(query: QueryCrackEventRequest): Promise<QueryCrackEventResponse>;
    QueryLoginEvent(query: QueryLoginEventRequest): Promise<QueryLoginEventResponse>;
    ReleaseInstance(query: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse>;
    RenewInstance(query: RenewInstanceRequest): Promise<RenewInstanceResponse>;
    UpgradeInstance(query: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse>;
    ModifyProcessWhiteList(query: ModifyProcessWhiteListRequest): Promise<ModifyProcessWhiteListResponse>;
}
export default AEGIS;
