export interface GetTokenRequest {
    /**
     * 实例ID。
     * @example `dsw-730xxxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 过期时间，单位为秒。
     * @example `60`
     */
    "ExpireTime"?: number;
}
