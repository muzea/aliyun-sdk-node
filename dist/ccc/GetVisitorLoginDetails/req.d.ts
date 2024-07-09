export interface GetVisitorLoginDetailsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId"?: string;
    /**
     * 访客ID。
     * @example `fcd020fe-d8e4-40e5-8c77-1a272a174a7d`
     */
    "VisitorId": string;
    /**
     * Chat设备ID。
     * @example `4c51c9116c36537cb850dc1081d745df`
     */
    "ChatDeviceId": string;
    /**
     * 网络业务的渠道Token。
     * @example `9XYGTGWtq2wFi_Bpg7aUnIoYi_vG_rO3b***YtsxbHRHrYHlz1LDBLJAyZcLxieRQR4h_6AnWvTjJeNU5jgxzO*****bHwej7WgWrmA`
     */
    "Token"?: string;
}
