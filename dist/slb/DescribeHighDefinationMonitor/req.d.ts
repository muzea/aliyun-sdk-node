export interface DescribeHighDefinationMonitorRequest {
    /**
     * 日志标签。其结构是一个JSON dictionary，包含标签键和标签值。
     * @example `[{"tagKey":"Key1","tagValue":"Value1"}]`
     */
    "Tags"?: string;
    /**
     * 需要查询秒级监控信息的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
