export interface GetEnrolledAccountRequest {
    /**
     * 账号ID。
     * @example `19534534552****`
     */
    "AccountUid": number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
