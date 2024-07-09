export interface GetGovernanceKubernetesClusterRequest {
    /**
     * 集群所在地域，MSE支持的地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `cd23228b3c80c4d4f9ad7af1d87cc****`
     */
    "ClusterId": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
