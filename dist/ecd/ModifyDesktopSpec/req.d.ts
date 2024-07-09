export interface ModifyDesktopSpecRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。
     * @example `ecd-4543qyik164a4****`
     */
    "DesktopId"?: string;
    /**
     * 目标规格。您可以调用[DescribeDesktopTypes](~~188882~~)查询云电脑支持的规格。
     * @example `eds.general.2c4g`
     */
    "DesktopType": string;
    /**
     * 目标系统盘容量，单位为GiB。取值范围：80~500 GiB，且必须为10的倍数。
     * @example `80`
     */
    "RootDiskSizeGib"?: number;
    /**
     * 目标数据盘容量，单位为GiB。
     * - 对于非图形型规格，取值范围为20\~1020 GiB，且必须为10的倍数。
     * - 对于图形型规格，取值范围为40\~1020 GiB，且必须为10的倍数。
     * @example `40`
     */
    "UserDiskSizeGib"?: number;
    /**
     * 是否自动支付。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 数据盘性能等级。默认值：PL0。
     * @example `PL0`
     */
    "UserDiskPerformanceLevel"?: string;
    /**
     * 优惠活动ID。
     * @example `50003308011****`
     */
    "PromotionId"?: string;
    "ResourceSpecs"?: {
        DesktopId: string;
        RootDiskSizeGib: number;
        UserDiskSizeGib: number;
    }[];
    "ResourceType"?: string;
}
