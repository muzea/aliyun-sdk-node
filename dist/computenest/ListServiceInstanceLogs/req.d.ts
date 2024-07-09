export interface ListServiceInstanceLogsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `BBBAAfu+XtuBE55iRLHEYYuojI4=`
     */
    "NextToken"?: string;
    /**
     * 服务实例ID。
     * @example `si-70a3b15bb626435b****`
     */
    "ServiceInstanceId": string;
    /**
     * 选择日志源。可选值：
     * - computeNest（默认值）：服务实例部署、升级的日志。
     * - application：应用产生的日志。
     * @example `computeNest`
     */
    "LogSource"?: string;
    /**
     * Logstore信息。
     * 查询应用日志时，需要指定Logstore。
     * @example `logabc`
     */
    "Logstore"?: string;
}
