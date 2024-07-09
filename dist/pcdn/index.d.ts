import { AddDomainRequest } from "./AddDomain/req";
import { AddDomainResponse } from "./AddDomain/res";
import { AddConsumerRequest } from "./AddConsumer/req";
import { AddConsumerResponse } from "./AddConsumer/res";
import { AddPcdnControlRuleRequest } from "./AddPcdnControlRule/req";
import { AddPcdnControlRuleResponse } from "./AddPcdnControlRule/res";
import { DeleteDomainRequest } from "./DeleteDomain/req";
import { DeleteDomainResponse } from "./DeleteDomain/res";
import { DeletePcdnControlRuleRequest } from "./DeletePcdnControlRule/req";
import { DeletePcdnControlRuleResponse } from "./DeletePcdnControlRule/res";
import { DisablePcdnControlRuleRequest } from "./DisablePcdnControlRule/req";
import { DisablePcdnControlRuleResponse } from "./DisablePcdnControlRule/res";
import { EditPcdnControlRuleRequest } from "./EditPcdnControlRule/req";
import { EditPcdnControlRuleResponse } from "./EditPcdnControlRule/res";
import { EnablePcdnControlRuleRequest } from "./EnablePcdnControlRule/req";
import { EnablePcdnControlRuleResponse } from "./EnablePcdnControlRule/res";
import { GetAccessDataRequest } from "./GetAccessData/req";
import { GetAccessDataResponse } from "./GetAccessData/res";
import { GetAllAppVersionsRequest } from "./GetAllAppVersions/req";
import { GetAllAppVersionsResponse } from "./GetAllAppVersions/res";
import { GetAllIspRequest } from "./GetAllIsp/req";
import { GetAllIspResponse } from "./GetAllIsp/res";
import { GetAllMarketsRequest } from "./GetAllMarkets/req";
import { GetAllMarketsResponse } from "./GetAllMarkets/res";
import { GetAllPlatformTypesRequest } from "./GetAllPlatformTypes/req";
import { GetAllPlatformTypesResponse } from "./GetAllPlatformTypes/res";
import { GetAllRegionsRequest } from "./GetAllRegions/req";
import { GetAllRegionsResponse } from "./GetAllRegions/res";
import { GetBalanceBandwidthDataRequest } from "./GetBalanceBandwidthData/req";
import { GetBalanceBandwidthDataResponse } from "./GetBalanceBandwidthData/res";
import { GetBalanceTrafficDataRequest } from "./GetBalanceTrafficData/req";
import { GetBalanceTrafficDataResponse } from "./GetBalanceTrafficData/res";
import { GetBandwidthDataRequest } from "./GetBandwidthData/req";
import { GetBandwidthDataResponse } from "./GetBandwidthData/res";
import { GetClientsRatioRequest } from "./GetClientsRatio/req";
import { GetClientsRatioResponse } from "./GetClientsRatio/res";
import { GetConsumerStatusRequest } from "./GetConsumerStatus/req";
import { GetConsumerStatusResponse } from "./GetConsumerStatus/res";
import { GetControlRulesRequest } from "./GetControlRules/req";
import { GetControlRulesResponse } from "./GetControlRules/res";
import { GetCoverRateDataRequest } from "./GetCoverRateData/req";
import { GetCoverRateDataResponse } from "./GetCoverRateData/res";
import { GetCurrentModeRequest } from "./GetCurrentMode/req";
import { GetCurrentModeResponse } from "./GetCurrentMode/res";
import { GetDomainCountRequest } from "./GetDomainCount/req";
import { GetDomainCountResponse } from "./GetDomainCount/res";
import { GetDomainsRequest } from "./GetDomains/req";
import { GetDomainsResponse } from "./GetDomains/res";
import { GetExpenseSummaryRequest } from "./GetExpenseSummary/req";
import { GetExpenseSummaryResponse } from "./GetExpenseSummary/res";
import { GetFeeHistoryRequest } from "./GetFeeHistory/req";
import { GetFeeHistoryResponse } from "./GetFeeHistory/res";
import { GetFirstFrameDelayDataRequest } from "./GetFirstFrameDelayData/req";
import { GetFirstFrameDelayDataResponse } from "./GetFirstFrameDelayData/res";
import { GetFluencyDataRequest } from "./GetFluencyData/req";
import { GetFluencyDataResponse } from "./GetFluencyData/res";
import { GetLogsListRequest } from "./GetLogsList/req";
import { GetLogsListResponse } from "./GetLogsList/res";
import { GetShareRateDataRequest } from "./GetShareRateData/req";
import { GetShareRateDataResponse } from "./GetShareRateData/res";
import { GetTokenListRequest } from "./GetTokenList/req";
import { GetTokenListResponse } from "./GetTokenList/res";
import { GetTrafficByRegionRequest } from "./GetTrafficByRegion/req";
import { GetTrafficByRegionResponse } from "./GetTrafficByRegion/res";
import { GetTrafficDataRequest } from "./GetTrafficData/req";
import { GetTrafficDataResponse } from "./GetTrafficData/res";
import { StartDomainRequest } from "./StartDomain/req";
import { StartDomainResponse } from "./StartDomain/res";
import { StopDomainRequest } from "./StopDomain/req";
import { StopDomainResponse } from "./StopDomain/res";

interface PCDN {
    /**
     * 调用AddDomain添加域名。
     */
    AddDomain(query: AddDomainRequest): Promise<AddDomainResponse>;
    /**
     * 调用AddConsumer申请开通PCDN服务。
     */
    AddConsumer(query: AddConsumerRequest): Promise<AddConsumerResponse>;
    /**
     * 调用AddPcdnControlRule添加启停设置。
     */
    AddPcdnControlRule(query: AddPcdnControlRuleRequest): Promise<AddPcdnControlRuleResponse>;
    /**
     * 调用DeleteDomain删除域名。
     */
    DeleteDomain(query: DeleteDomainRequest): Promise<DeleteDomainResponse>;
    /**
     * 调用DeletePcdnControlRule删除启停设置。
     */
    DeletePcdnControlRule(query: DeletePcdnControlRuleRequest): Promise<DeletePcdnControlRuleResponse>;
    /**
     * 调用DisablePcdnControlRule停用启停设置。
     */
    DisablePcdnControlRule(query: DisablePcdnControlRuleRequest): Promise<DisablePcdnControlRuleResponse>;
    /**
     * 调用EditPcdnControlRule修改启停设置。
     */
    EditPcdnControlRule(query: EditPcdnControlRuleRequest): Promise<EditPcdnControlRuleResponse>;
    /**
     * 调用EnablePcdnControlRule启用启停设置。
     */
    EnablePcdnControlRule(query: EnablePcdnControlRuleRequest): Promise<EnablePcdnControlRuleResponse>;
    /**
     * 获取加速域名最小1天粒度的访客统计数据。
     */
    GetAccessData(query: GetAccessDataRequest): Promise<GetAccessDataResponse>;
    /**
     * 调用GetAllAppVersions获取所有支持的地区列表。
     */
    GetAllAppVersions(query: GetAllAppVersionsRequest): Promise<GetAllAppVersionsResponse>;
    /**
     * 调用GetAllIsp获取所有支持的运营商列表。
     */
    GetAllIsp(query: GetAllIspRequest): Promise<GetAllIspResponse>;
    /**
     * 调用GetAllMarkets获取当前用户的所有市场列表。
     */
    GetAllMarkets(query: GetAllMarketsRequest): Promise<GetAllMarketsResponse>;
    /**
     * 调用GetAllPlatformTypes获取所有支持的终端类型列表。
     */
    GetAllPlatformTypes(query: GetAllPlatformTypesRequest): Promise<GetAllPlatformTypesResponse>;
    /**
     * 调用GetAllRegions获取所有支持的地区列表。
     */
    GetAllRegions(query: GetAllRegionsRequest): Promise<GetAllRegionsResponse>;
    /**
     * 获取用户已出账单的消费周期、消费时间、计量峰值数值、业务类型等信息。
     */
    GetBalanceBandwidthData(query: GetBalanceBandwidthDataRequest): Promise<GetBalanceBandwidthDataResponse>;
    /**
     * 调用GetBalanceTrafficData获取账单带宽详情。
     */
    GetBalanceTrafficData(query: GetBalanceTrafficDataRequest): Promise<GetBalanceTrafficDataResponse>;
    /**
     * 调用GetBandwidthData获取加速域名的网络带宽监控数据，支持获取最近90天的数据。
     */
    GetBandwidthData(query: GetBandwidthDataRequest): Promise<GetBandwidthDataResponse>;
    /**
     * 调用GetClientsRatio获取当前自然月所有终端分布比例。
     */
    GetClientsRatio(query: GetClientsRatioRequest): Promise<GetClientsRatioResponse>;
    /**
     * 调用GetConsumerStatus获取客户状态信息。
     */
    GetConsumerStatus(query: GetConsumerStatusRequest): Promise<GetConsumerStatusResponse>;
    /**
     * 调用GetControlRules获取启停设置列表。
     */
    GetControlRules(query: GetControlRulesRequest): Promise<GetControlRulesResponse>;
    /**
     * 查询加速域名的最小1天粒度的PCDN覆盖率数据，单位：%。
     */
    GetCoverRateData(query: GetCoverRateDataRequest): Promise<GetCoverRateDataResponse>;
    /**
     * 调用GetCurrentMode查询当前计费方式。
     */
    GetCurrentMode(query: GetCurrentModeRequest): Promise<GetCurrentModeResponse>;
    /**
     * 调用GetDomainCount获取用户域名总数目。
     */
    GetDomainCount(query: GetDomainCountRequest): Promise<GetDomainCountResponse>;
    /**
     * 查询用户名下所有的域名与状态。域名状态包括：正常、停用。
     */
    GetDomains(query: GetDomainsRequest): Promise<GetDomainsResponse>;
    /**
     * 调用GetExpenseSummary获取消费数据概况。
     */
    GetExpenseSummary(query: GetExpenseSummaryRequest): Promise<GetExpenseSummaryResponse>;
    /**
     * 调用GetFeeHistory获取计费数据历史记录。
     */
    GetFeeHistory(query: GetFeeHistoryRequest): Promise<GetFeeHistoryResponse>;
    /**
     * 获取加速域名的首帧延时数据，单位：ms。
     */
    GetFirstFrameDelayData(query: GetFirstFrameDelayDataRequest): Promise<GetFirstFrameDelayDataResponse>;
    /**
     * 获取加速域名的参考流畅率数据，单位：%。
     */
    GetFluencyData(query: GetFluencyDataRequest): Promise<GetFluencyDataResponse>;
    /**
     * 获取当前用户选定时间的日志列表，供用户查看与下载。
     */
    GetLogsList(query: GetLogsListRequest): Promise<GetLogsListResponse>;
    /**
     * 调用GetShareRateData获取PCDN分享率信息。
     */
    GetShareRateData(query: GetShareRateDataRequest): Promise<GetShareRateDataResponse>;
    /**
     * 获取终端Token列表。
     */
    GetTokenList(query: GetTokenListRequest): Promise<GetTokenListResponse>;
    /**
     * 调用GetTrafficByRegion获取用户当前自然月内每个地区的流量数据。
     */
    GetTrafficByRegion(query: GetTrafficByRegionRequest): Promise<GetTrafficByRegionResponse>;
    /**
     * 获取加速域名的网络流量监控数据，单位：byte。
     */
    GetTrafficData(query: GetTrafficDataRequest): Promise<GetTrafficDataResponse>;
    /**
     * 调用StartDomain启用域名。
     */
    StartDomain(query: StartDomainRequest): Promise<StartDomainResponse>;
    /**
     * 调用StopDomain停用域名。
     */
    StopDomain(query: StopDomainRequest): Promise<StopDomainResponse>;
}
export default PCDN;
