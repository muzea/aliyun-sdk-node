export interface DescribeFotaPendingDesktopsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时，每页最大行数。
     * - 最大值：100
     * - 默认值：20
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 镜像升级任务的信息。可调用[DescribeFotaTasks](~~437001~~)获取该参数。
     * @example `aot-c4khwrp9ocml4****`
     */
    "TaskUid": string;
    /**
     * 云电脑ID。
     * @example `ecd-gx2x1dhsmucyy****`
     */
    "DesktopId"?: string;
    /**
     * 办公网络ID。可调用[DescribeOfficeSites](~~216071~~)获取该参数。
     * @example `cn-shanghai+dir-428216****`
     */
    "OfficeSiteId"?: string;
    /**
     * 云电脑名称。
     * @example `demo-computer`
     */
    "DesktopName"?: string;
}
