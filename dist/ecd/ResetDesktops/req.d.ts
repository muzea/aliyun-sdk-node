export interface ResetDesktopsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池ID。
     * - 如果传入了`DesktopId`，则忽略该`DesktopGroupId`。
     * - 如果`DesktopId`为空，则会根据`DesktopGroupId`去获取该云电脑池内所有云电脑的`DesktopId`。
     * @example `dg-07if7qsxoxkb6****`
     */
    "DesktopGroupId"?: string;
    /**
     * 付费类型。
     * > 仅对重置云电脑池有效，为空则重置云电脑池下所有付费类型的云电脑。
     * @example `PrePaid`
     */
    "PayType"?: string;
    /**
     * 重置类型，决定是否重置，以及要重置的磁盘范围。
     * @example `1`
     */
    "ResetType": string;
    /**
     * 镜像ID。
     * @example `m-4zfb6zj728hhr****`
     */
    "ImageId"?: string;
    /**
     * 云电脑 ID 列表。可设置 1~100 个。
     */
    "DesktopId"?: string[];
    /**
     * 云电脑池 ID 列表。
     */
    "DesktopGroupIds"?: string[];
    /**
     * 重置范围，可以通过配置参数来设置是重置镜像还是重置云电脑。
     * @example `ALL`
     */
    "ResetScope"?: string;
}
