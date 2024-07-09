export interface ModifyOfficeSiteCrossDesktopAccessRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-068266****`
     */
    "OfficeSiteId": string;
    /**
     * 是否开启办公网络内云电脑互通。开启后，同一个办公网络内的云电脑之间可以实现相互访问彼此的网络。
     * @example `false`
     */
    "EnableCrossDesktopAccess": boolean;
}
