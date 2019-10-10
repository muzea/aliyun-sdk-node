interface ListEmailVerificationRequest {
    "RegionId"?: string;
    "Lang"?: string;
    "BeginCreateTime"?: number;
    "EndCreateTime"?: number;
    "Email"?: string;
    "VerificationStatus"?: number;
    "PageNum"?: number;
    "PageSize"?: number;
    "UserClientIp"?: string;
}
export { ListEmailVerificationRequest };