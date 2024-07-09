export interface ListCmsInstancesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `n9p9o9o3se`
     */
    "ClusterId": string;
    /**
     * 集成的云服务类型。包括：
     * - direct: 云产品自监控集成
     * - cms: 企业云监控集成
     * @example `direct`
     */
    "TypeFilter"?: string;
}
