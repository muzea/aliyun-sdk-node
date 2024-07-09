export interface DescribeImageModifiedRecordsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。
     * @example `ecd-bd53sfmysz8ir****`
     */
    "DesktopId": string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6l3d+SWeOobbIlDLjwhjkTk`
     */
    "NextToken"?: string;
}
