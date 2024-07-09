export interface ActivateLicenseRequest {
    /**
     * 授权码。
     * @example `APSEDH8TA5CSGK-********_6CNTACBH9EQPOATFXJQL4B2COE7M43VVQ7GUGKAA`
     */
    "LicenseCode": string;
    /**
     * 激活的身份信息，用户的 aliyunUid。
     * @example `129****1111`
     */
    "Identification"?: string;
}
