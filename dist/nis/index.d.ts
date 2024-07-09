import { GetNetworkReachableAnalysisRequest } from "./GetNetworkReachableAnalysis/req";
import { GetNetworkReachableAnalysisResponse } from "./GetNetworkReachableAnalysis/res";
import { DeleteNetworkPathRequest } from "./DeleteNetworkPath/req";
import { DeleteNetworkPathResponse } from "./DeleteNetworkPath/res";
import { DeleteNetworkReachableAnalysisRequest } from "./DeleteNetworkReachableAnalysis/req";
import { DeleteNetworkReachableAnalysisResponse } from "./DeleteNetworkReachableAnalysis/res";
import { GetNatTopNRequest } from "./GetNatTopN/req";
import { GetNatTopNResponse } from "./GetNatTopN/res";
import { CreateNetworkReachableAnalysisRequest } from "./CreateNetworkReachableAnalysis/req";
import { CreateNetworkReachableAnalysisResponse } from "./CreateNetworkReachableAnalysis/res";
import { CreateNetworkPathRequest } from "./CreateNetworkPath/req";
import { CreateNetworkPathResponse } from "./CreateNetworkPath/res";
import { GetInternetTupleRequest } from "./GetInternetTuple/req";
import { GetInternetTupleResponse } from "./GetInternetTuple/res";
import { GetVbrFlowTopNRequest } from "./GetVbrFlowTopN/req";
import { GetVbrFlowTopNResponse } from "./GetVbrFlowTopN/res";
import { GetTransitRouterFlowTopNRequest } from "./GetTransitRouterFlowTopN/req";
import { GetTransitRouterFlowTopNResponse } from "./GetTransitRouterFlowTopN/res";
import { CreateAndAnalyzeNetworkPathRequest } from "./CreateAndAnalyzeNetworkPath/req";
import { CreateAndAnalyzeNetworkPathResponse } from "./CreateAndAnalyzeNetworkPath/res";
import { GetNisNetworkRankingRequest } from "./GetNisNetworkRanking/req";
import { GetNisNetworkRankingResponse } from "./GetNisNetworkRanking/res";
import { GetNisNetworkMetricsRequest } from "./GetNisNetworkMetrics/req";
import { GetNisNetworkMetricsResponse } from "./GetNisNetworkMetrics/res";

interface NIS {
    /**
     * 调用GetNetworkReachableAnalysis接口，获取网络可达性分析结果。
     */
    GetNetworkReachableAnalysis(query: GetNetworkReachableAnalysisRequest): Promise<GetNetworkReachableAnalysisResponse>;
    /**
     * 删除网络分析路径。
     */
    DeleteNetworkPath(query: DeleteNetworkPathRequest): Promise<DeleteNetworkPathResponse>;
    /**
     * 调用DeleteNetworkReachableAnalysis接口，删除网络可达性分析任务。
     */
    DeleteNetworkReachableAnalysis(query: DeleteNetworkReachableAnalysisRequest): Promise<DeleteNetworkReachableAnalysisResponse>;
    /**
     * 调用GetNatTopN接口，获取NAT网关的SNAT转发实时数据排名。
     */
    GetNatTopN(query: GetNatTopNRequest): Promise<GetNatTopNResponse>;
    /**
     * 调用CreateNetworkReachableAnalysis接口，创建网络可达性分析任务。
     */
    CreateNetworkReachableAnalysis(query: CreateNetworkReachableAnalysisRequest): Promise<CreateNetworkReachableAnalysisResponse>;
    /**
     * 调用CreateNetworkPath接口，创建网络分析路径，用于云上网络路径可达性分析。
     */
    CreateNetworkPath(query: CreateNetworkPathRequest): Promise<CreateNetworkPathResponse>;
    /**
     * 调用GetInternetTuple接口，获取公网流量详情数据排名，覆盖一元组、二元组、五元组粒度，支持按流量、包数等指标排序。
     */
    GetInternetTuple(query: GetInternetTupleRequest): Promise<GetInternetTupleResponse>;
    /**
     * 调用GetVbrFlowTopN接口，获取混合云流量详情数据排名，覆盖一元组、二元组、五元组粒度，支持按流量、包数等指标排序。
     */
    GetVbrFlowTopN(query: GetVbrFlowTopNRequest): Promise<GetVbrFlowTopNResponse>;
    /**
     * 调用GetTransitRouterFlowTopN接口，获取跨域流量详情数据排名，覆盖一元组、二元组、五元组粒度，支持按流量、包数等指标排序。
     */
    GetTransitRouterFlowTopN(query: GetTransitRouterFlowTopNRequest): Promise<GetTransitRouterFlowTopNResponse>;
    /**
     * 调用CreateAndAnalyzeNetworkPath接口，发起网络可达性分析任务。
     */
    CreateAndAnalyzeNetworkPath(query: CreateAndAnalyzeNetworkPathRequest): Promise<CreateAndAnalyzeNetworkPathResponse>;
    /**
     * 支持通过排序算法和数据处理能力，对流经不同云网络资源的流量进行排名分析，以及对阿里云性能观测的探测指标进行排序，帮助您快速识别网络瓶颈、优化资源配置和提升整体网络效能。
     */
    GetNisNetworkRanking(query: GetNisNetworkRankingRequest): Promise<GetNisNetworkRankingResponse>;
    /**
     * 获取云网络指标趋势。
     */
    GetNisNetworkMetrics(query: GetNisNetworkMetricsRequest): Promise<GetNisNetworkMetricsResponse>;
}
export default NIS;
