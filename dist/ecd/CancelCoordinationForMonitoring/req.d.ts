export interface CancelCoordinationForMonitoringRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~436773~~)获取无影云桌面支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 流协同ID。
     */
    "CoIds": string[];
    /**
     * 用户类型。
     * @example `TENANT_ADMIN`
     */
    "UserType"?: string;
    /**
     * 发起流协同的终端用户ID。若管理员发起，则不需要填写。
     * @example `alice`
     */
    "EndUserId"?: string;
}
