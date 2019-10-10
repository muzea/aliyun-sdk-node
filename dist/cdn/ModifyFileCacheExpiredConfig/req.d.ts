interface ModifyFileCacheExpiredConfigRequest {
    "RegionId"?: string;
    "DomainName": string;
    "ConfigID": string;
    "CacheContent": string;
    "TTL": string;
    "OwnerId"?: number;
    "Weight"?: string;
}
export { ModifyFileCacheExpiredConfigRequest };