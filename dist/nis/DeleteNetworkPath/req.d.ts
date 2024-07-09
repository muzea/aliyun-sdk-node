export interface DeleteNetworkPathRequest {
    /**
     * 要删除的网络分析路径的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 网络分析路径集合。
     */
    "NetworkPathIds": string[];
}
