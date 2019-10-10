interface DescribeDomainAttackEventsRequest {
    "RegionId"?: string;
    "EndTime": number;
    "Domain": string;
    "Offset": number;
    "PageSize": string;
    "SourceIp"?: string;
    "StartTime": number;
    "ResourceGroupId"?: string;
}
export { DescribeDomainAttackEventsRequest };