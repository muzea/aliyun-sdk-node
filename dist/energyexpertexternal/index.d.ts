import { GetDeviceListRequest } from "./GetDeviceList/req";
import { GetDeviceListResponse } from "./GetDeviceList/res";
import { GetDeviceInfoRequest } from "./GetDeviceInfo/req";
import { GetDeviceInfoResponse } from "./GetDeviceInfo/res";
import { GetOrgAndFactoryRequest } from "./GetOrgAndFactory/req";
import { GetOrgAndFactoryResponse } from "./GetOrgAndFactory/res";
import { GetGwpInventoryConstituteRequest } from "./GetGwpInventoryConstitute/req";
import { GetGwpInventoryConstituteResponse } from "./GetGwpInventoryConstitute/res";
import { GetEpdInventoryConstituteRequest } from "./GetEpdInventoryConstitute/req";
import { GetEpdInventoryConstituteResponse } from "./GetEpdInventoryConstitute/res";
import { GetEmissionSourceConstituteRequest } from "./GetEmissionSourceConstitute/req";
import { GetEmissionSourceConstituteResponse } from "./GetEmissionSourceConstitute/res";
import { GetOrgConstituteRequest } from "./GetOrgConstitute/req";
import { GetOrgConstituteResponse } from "./GetOrgConstitute/res";
import { GetAreaElecConstituteRequest } from "./GetAreaElecConstitute/req";
import { GetAreaElecConstituteResponse } from "./GetAreaElecConstitute/res";
import { GetEmissionSummaryRequest } from "./GetEmissionSummary/req";
import { GetEmissionSummaryResponse } from "./GetEmissionSummary/res";
import { GetGwpInventorySummaryRequest } from "./GetGwpInventorySummary/req";
import { GetGwpInventorySummaryResponse } from "./GetGwpInventorySummary/res";
import { RecalculateCarbonEmissionRequest } from "./RecalculateCarbonEmission/req";
import { RecalculateCarbonEmissionResponse } from "./RecalculateCarbonEmission/res";
import { GetElecConstituteRequest } from "./GetElecConstitute/req";
import { GetElecConstituteResponse } from "./GetElecConstitute/res";
import { GetCarbonEmissionTrendRequest } from "./GetCarbonEmissionTrend/req";
import { GetCarbonEmissionTrendResponse } from "./GetCarbonEmissionTrend/res";
import { GetDataItemListRequest } from "./GetDataItemList/req";
import { GetDataItemListResponse } from "./GetDataItemList/res";
import { GetInventoryListRequest } from "./GetInventoryList/req";
import { GetInventoryListResponse } from "./GetInventoryList/res";
import { GetPcrInfoRequest } from "./GetPcrInfo/req";
import { GetPcrInfoResponse } from "./GetPcrInfo/res";
import { PushItemDataRequest } from "./PushItemData/req";
import { PushItemDataResponse } from "./PushItemData/res";
import { PushDeviceDataRequest } from "./PushDeviceData/req";
import { PushDeviceDataResponse } from "./PushDeviceData/res";
import { IsCompletedRequest } from "./IsCompleted/req";
import { IsCompletedResponse } from "./IsCompleted/res";
import { GetGwpBenchmarkListRequest } from "./GetGwpBenchmarkList/req";
import { GetGwpBenchmarkListResponse } from "./GetGwpBenchmarkList/res";
import { GetElecTrendRequest } from "./GetElecTrend/req";
import { GetElecTrendResponse } from "./GetElecTrend/res";
import { GetGwpBenchmarkSummaryRequest } from "./GetGwpBenchmarkSummary/req";
import { GetGwpBenchmarkSummaryResponse } from "./GetGwpBenchmarkSummary/res";
import { GetEpdSummaryRequest } from "./GetEpdSummary/req";
import { GetEpdSummaryResponse } from "./GetEpdSummary/res";
import { GetDataQualityAnalysisRequest } from "./GetDataQualityAnalysis/req";
import { GetDataQualityAnalysisResponse } from "./GetDataQualityAnalysis/res";
import { GenerateResultRequest } from "./GenerateResult/req";
import { GenerateResultResponse } from "./GenerateResult/res";
import { GetFootprintListRequest } from "./GetFootprintList/req";
import { GetFootprintListResponse } from "./GetFootprintList/res";
import { GetGasConstituteRequest } from "./GetGasConstitute/req";
import { GetGasConstituteResponse } from "./GetGasConstitute/res";
import { GetReductionProposalRequest } from "./GetReductionProposal/req";
import { GetReductionProposalResponse } from "./GetReductionProposal/res";
import { GetDocumentAnalyzeResultRequest } from "./GetDocumentAnalyzeResult/req";
import { GetDocumentAnalyzeResultResponse } from "./GetDocumentAnalyzeResult/res";
import { SubmitDocumentAnalyzeJobRequest } from "./SubmitDocumentAnalyzeJob/req";
import { SubmitDocumentAnalyzeJobResponse } from "./SubmitDocumentAnalyzeJob/res";
import { SendDocumentAskQuestionRequest } from "./SendDocumentAskQuestion/req";
import { SendDocumentAskQuestionResponse } from "./SendDocumentAskQuestion/res";

interface ENERGYEXPERTEXTERNAL {
    /**
     * 查询账号激活场站的设备列表。
     */
    GetDeviceList(query: GetDeviceListRequest): Promise<GetDeviceListResponse>;
    /**
     * 查询账号激活场站的设备信息。
     */
    GetDeviceInfo(query: GetDeviceInfoRequest): Promise<GetDeviceInfoResponse>;
    /**
     *  查询账号激活的相关组织和场站。需注意的是未在控制台进行激活的场站不会被查询到。
     */
    GetOrgAndFactory(query: GetOrgAndFactoryRequest): Promise<GetOrgAndFactoryResponse>;
    /**
     * 用于获取指定产品的碳排放构成分析。碳排放构成分析包括按清单、按类型两种分析维度。在呈现效果上，包括一个层级列表和饼状图。
     */
    GetGwpInventoryConstitute(query: GetGwpInventoryConstituteRequest): Promise<GetGwpInventoryConstituteResponse>;
    /**
     * 获取环境影响类别的结果明细。
     */
    GetEpdInventoryConstitute(query: GetEpdInventoryConstituteRequest): Promise<GetEpdInventoryConstituteResponse>;
    /**
     * 获取排放源构成。
     */
    GetEmissionSourceConstitute(query: GetEmissionSourceConstituteRequest): Promise<GetEmissionSourceConstituteResponse>;
    /**
     * 本接口用于获取碳盘查组织分析数据。
     */
    GetOrgConstitute(query: GetOrgConstituteRequest): Promise<GetOrgConstituteResponse>;
    /**
     * 本接口用于获取电力场站分析数据。
     */
    GetAreaElecConstitute(query: GetAreaElecConstituteRequest): Promise<GetAreaElecConstituteResponse>;
    /**
     * 获取碳排汇总。
     */
    GetEmissionSummary(query: GetEmissionSummaryRequest): Promise<GetEmissionSummaryResponse>;
    /**
     * 本接口用于获得产品碳足迹总量，以及碳足迹贡献占比的Top4类型详情。
     */
    GetGwpInventorySummary(query: GetGwpInventorySummaryRequest): Promise<GetGwpInventorySummaryResponse>;
    /**
     * 重新计算碳排放。
     */
    RecalculateCarbonEmission(query: RecalculateCarbonEmissionRequest): Promise<RecalculateCarbonEmissionResponse>;
    /**
     * 本接口用于获取电力构成分析数据。
     */
    GetElecConstitute(query: GetElecConstituteRequest): Promise<GetElecConstituteResponse>;
    /**
     * 获取碳排放趋势。
     */
    GetCarbonEmissionTrend(query: GetCarbonEmissionTrendRequest): Promise<GetCarbonEmissionTrendResponse>;
    /**
     * 本接口用于获取数据项详情列表。
     */
    GetDataItemList(query: GetDataItemListRequest): Promise<GetDataItemListResponse>;
    /**
     * 用于获取指定环境影响（methodType）、指定分组汇总级别（group）、指定计算方式下（emissionType）的降序排放列表。
     */
    GetInventoryList(query: GetInventoryListRequest): Promise<GetInventoryListResponse>;
    /**
     * 获取产品碳足迹PCR报告oss地址。
     */
    GetPcrInfo(query: GetPcrInfoRequest): Promise<GetPcrInfoResponse>;
    /**
     * 推送数据项数据。
     */
    PushItemData(query: PushItemDataRequest): Promise<PushItemDataResponse>;
    /**
     * 本接口用于推送设备测点数据，例如推送电能表电压等数据。
     */
    PushDeviceData(query: PushDeviceDataRequest): Promise<PushDeviceDataResponse>;
    /**
     * 生成报告完成状态查询。
     */
    IsCompleted(query: IsCompletedRequest): Promise<IsCompletedResponse>;
    /**
     * 获取主动减碳排行列表。
     */
    GetGwpBenchmarkList(query: GetGwpBenchmarkListRequest): Promise<GetGwpBenchmarkListResponse>;
    /**
     * 本接口用于获取电力趋势分析数据。
     */
    GetElecTrend(query: GetElecTrendRequest): Promise<GetElecTrendResponse>;
    /**
     * 获取主动减碳量总量。
     */
    GetGwpBenchmarkSummary(query: GetGwpBenchmarkSummaryRequest): Promise<GetGwpBenchmarkSummaryResponse>;
    /**
     * 获取各种环境影响排放总量。
     */
    GetEpdSummary(query: GetEpdSummaryRequest): Promise<GetEpdSummaryResponse>;
    /**
     * 获取数据质量评价结果DQR、DQI。
     */
    GetDataQualityAnalysis(query: GetDataQualityAnalysisRequest): Promise<GetDataQualityAnalysisResponse>;
    /**
     * 生成指定碳足迹的报告。
     */
    GenerateResult(query: GenerateResultRequest): Promise<GenerateResultResponse>;
    /**
     * 获取产品碳足迹列表。
     */
    GetFootprintList(query: GetFootprintListRequest): Promise<GetFootprintListResponse>;
    /**
     * 本接口用于获取气体构成分析。
     */
    GetGasConstitute(query: GetGasConstituteRequest): Promise<GetGasConstituteResponse>;
    /**
     * 获取减碳建议。
     */
    GetReductionProposal(query: GetReductionProposalRequest): Promise<GetReductionProposalResponse>;
    /**
     * 文档解析的key-Value结果需要调用文档智能解析结果查询服务GetDocumentAnalyzeResult接口查询。
     * 调用结果查询接口的入参jobId就是前面异步任务提交接口返回的出参jobId，查询结果有处理中、处理成功、处理失败三种情况。
     */
    GetDocumentAnalyzeResult(query: GetDocumentAnalyzeResultRequest): Promise<GetDocumentAnalyzeResultResponse>;
    /**
     * 文档解析接口用于文档关键内容抽取，根据用户预设的Key-Value模板从文档中提取出Key-Value信息。
     * 文档解析接口为异步接口，需要先调用文档解析异步提交服务，然后调用文档智能解析结果查询服务GetDocumentAnalyzeResult接口进行结果轮询。
     * 异步提交服务支持本地文件和URL文件两种方式：
     * URL上传的异步提交服务接口为：SubmitDocumentAnalyzeJob接口。
     * 本地文件上传的异步提交服务接口为：SubmitDocumentAnalyzeJobAdvance接口。
     */
    SubmitDocumentAnalyzeJob(query: SubmitDocumentAnalyzeJobRequest): Promise<SubmitDocumentAnalyzeJobResponse>;
    /**
     * 在线知识文档问答接口，支持用户使用自然语言对已有的知识文档内容进行提问。问答范围默认是当前账号权限下已解析完成的所有文档，可根据文件夹限制问答范围。
     */
    SendDocumentAskQuestion(query: SendDocumentAskQuestionRequest): Promise<SendDocumentAskQuestionResponse>;
}
export default ENERGYEXPERTEXTERNAL;
