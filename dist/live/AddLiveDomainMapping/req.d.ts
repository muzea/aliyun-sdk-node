export interface AddLiveDomainMappingRequest {
    /**
     * 您的推流域名。域名类型为：**liveEdge**。
     * @example `demo.aliyundoc.com`
     */
    "PushDomain": string;
    /**
     * 您的播流域名。域名类型为：**liveVideo**。
     * @example `example.com`
     */
    "PullDomain": string;
}
