interface SetFileCacheExpiredConfigRequest {
    "RegionId"?: string;
    "DomainName": string;
    "CacheContent": string;
    "TTL": string;
    "OwnerId"?: number;
    "Weight"?: string;
}
export { SetFileCacheExpiredConfigRequest };