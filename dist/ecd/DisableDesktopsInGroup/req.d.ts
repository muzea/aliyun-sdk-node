export interface DisableDesktopsInGroupRequest {
    /**
     * 地域 ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 桌面组 ID。
     * @example `dg-2i8qxpv6t1a03****`
     */
    "DesktopGroupId": string;
    /**
     * 云桌面 ID 列表。
     */
    "DesktopIds": string[];
}
