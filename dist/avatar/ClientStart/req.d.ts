export interface ClientStartRequest {
    /**
     * 租户id。客户端SDK通过证书可获得
     * @example `9185`
     */
    "TenantId": number;
    /**
     * App ID。客户端SDK通过证书可获得
     * @example `dsdsf1`
     */
    "AppId": string;
}
