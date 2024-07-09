export interface RebootDesktopsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。可设置1~100个。
     * @example `ecd-gx2x1dhsmucyy****`
     */
    "DesktopId": string[];
}
