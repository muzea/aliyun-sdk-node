interface CreateSubscriptionRequest {
    "RegionId"?: string;
    "SubscriptionType": string;
    "SourceInstanceId": string;
    "SourceInstanceRegionId": string;
    "DestinationInstanceId": string;
    "DestinationInstanceRegionId": string;
    "Mapping": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
    "SlbServer"?: string;
    "SubscriptionDescription"?: string;
    "ExtraContext"?: string;
}
export { CreateSubscriptionRequest };