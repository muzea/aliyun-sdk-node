interface AddLiveDomainMappingRequest {
    "RegionId"?: string;
    /**
    * 您的播流域名，域名类型为**liveVideo**。
    * @example `play.yourdomain.com`
    */ "PullDomain": string;
    /**
    * 您的推流域名，域名类型为**liveEdge**。
    * @example `push.yourdomain.com`
    */ "PushDomain": string;
    "OwnerId"?: number;
}
export { AddLiveDomainMappingRequest };