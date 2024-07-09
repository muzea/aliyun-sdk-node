export interface DeleteNetworkReachableAnalysisRequest {
    /**
     * 网络可达性分析任务的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 网络可达性分析任务ID集合。
     */
    "NetworkReachableAnalysisIds": string[];
}
