export interface MigrateImageProtocolRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目标镜像协议，当前仅支持填入ASP。
     * @example `ASP`
     */
    "TargetProtocolType"?: string;
    /**
     * 镜像ID。
     */
    "ImageId": string[];
}
