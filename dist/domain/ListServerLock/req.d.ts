interface ListServerLockRequest {
    "RegionId"?: string;
    "DomainName"?: string;
    "EndStartDate"?: number;
    "BeginStartDate"?: number;
    "PageNum"?: number;
    "PageSize"?: number;
    "Lang"?: string;
    "LockProductId"?: string;
    "ServerLockStatus"?: number;
    "StartExpireDate"?: number;
    "EndExpireDate"?: number;
    "UserClientIp"?: string;
}
export { ListServerLockRequest };