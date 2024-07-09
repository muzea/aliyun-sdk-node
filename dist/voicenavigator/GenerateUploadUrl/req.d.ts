export interface GenerateUploadUrlRequest {
    "Key"?: string;
    "FileName"?: string;
    "Environment"?: number;
    "RequestId"?: string;
    "CallerUid"?: number;
    "CallerBid"?: string;
    "CallerType"?: string;
    "CallerParentId"?: number;
    "CallerIp"?: string;
    "ClientIp"?: string;
    "MfaPresent"?: boolean;
    "SecurityTransport"?: boolean;
    "ProxyTrustTransportInfo"?: boolean;
    "ProxyOriginalSecurityTransport"?: boolean;
    "ProxyOriginalSourceIp"?: string;
    "InstanceId"?: string;
    "InstanceOwnerId"?: number;
    "TenantId"?: number;
    "UserId"?: number;
    "TenantName"?: string;
    "UserName"?: string;
    "XspaceServicerId"?: number;
    "XspaceTenantBuId"?: number;
}
