interface QosSpeedupRequest {
    "RegionId"?: string;
    "AppId": string;
    "Operator": string;
    "ServiceMode": number;
    "ServiceType": number;
    "SourcePrivateIpAddress": string;
    "SourcePublicIpAddress": string;
    "DestinationIpAddress": string;
    "Duration": number;
    "UrlResponseBody": string;
    "UrlResponseStatusCode": number;
    "Msisdn"?: string;
    "Imsi"?: string;
    "Longitude"?: string;
    "Latitude"?: string;
    "SourcePort"?: number;
    "DestinationPort"?: number;
}
export { QosSpeedupRequest };