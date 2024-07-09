export interface CreateConfigurationOrderRequest {
    /**
     * popAction
     * @example `QuerySmsBaseScreen`
     */
    "PopAction"?: string;
    /**
     * aliyunKp
     * @example `123`
     */
    "AliyunKp"?: string;
    /**
     * userBid
     * @example `123`
     */
    "UserBid"?: string;
    /**
     * userSecurityToken
     * @example `123`
     */
    "UserSecurityToken"?: string;
    /**
     * stsTokenCallerBid
     * @example `123`
     */
    "StsTokenCallerBid"?: number;
    /**
     * userMfaPresent
     * @example `123`
     */
    "UserMfaPresent"?: boolean;
    /**
     * callerSecurityTransport
     * @example `123`
     */
    "CallerSecurityTransport"?: boolean;
    /**
     * userCallerParentId
     * @example `123`
     */
    "UserCallerParentId"?: number;
    /**
     * originalRequest
     * @example `123`
     */
    "OriginalRequest"?: string;
    /**
     * proxyCallerSecurityTransport
     * @example `123`
     */
    "ProxyCallerSecurityTransport"?: boolean;
    /**
     * proxyCallerIp
     * @example `123`
     */
    "ProxyCallerIp"?: string;
    /**
     * requestId
     * @example `22DEBAC0-C46E-52C1-87F8-0378AE238063`
     */
    "RequestId"?: string;
    /**
     * callerType
     * @example `acl`
     */
    "CallerType"?: string;
    /**
     * userCallerSecurityTransport
     * @example `123`
     */
    "UserCallerSecurityTransport"?: boolean;
    /**
     * lang
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * stsTokenCallerUid
     * @example `123`
     */
    "StsTokenCallerUid"?: number;
    /**
     * callerParentId
     * @example `1703411985821693`
     */
    "CallerParentId"?: number;
    /**
     * userClientIp
     * @example `123`
     */
    "UserClientIp"?: string;
    /**
     * systemCall
     * @example `true`
     */
    "SystemCall"?: boolean;
    /**
     * proxyTrustTransportInfo
     * @example `123`
     */
    "ProxyTrustTransportInfo"?: boolean;
    /**
     * userCallerType
     * @example `123`
     */
    "UserCallerType"?: string;
    /**
     * packageId
     * @example `1008349`
     */
    "PackageId"?: number;
    /**
     * mfaPresent
     * @example `false`
     */
    "MfaPresent"?: boolean;
    /**
     * aliyunKpLong
     * @example `123`
     */
    "AliyunKpLong"?: number;
    /**
     * clientIp
     * @example `100.104.16.254:51166`
     */
    "ClientIp"?: string;
    /**
     * userKp
     * @example `123`
     */
    "UserKp"?: string;
    /**
     * bid
     * @example `26888`
     */
    "Bid"?: string;
    /**
     * items
     * @example `{'Backup': []}`
     */
    "Items"?: string;
    /**
     * userAccessKeyId
     * @example `123`
     */
    "UserAccessKeyId"?: string;
}
