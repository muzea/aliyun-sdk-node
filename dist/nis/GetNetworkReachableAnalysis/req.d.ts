export interface GetNetworkReachableAnalysisRequest {
    /**
     * 网络可达性分析任务的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 网络可达性分析任务ID。 您可以通过调用**CreateNetworkRearchableAnalysis**接口获取网络可达性分析ID。
     * @example `nra-90eef36a9e6e4662****`
     */
    "NetworkReachableAnalysisId": string;
}
