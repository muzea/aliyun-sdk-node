export interface DescribeRecordingsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 分页查询时每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****`
     */
    "NextToken"?: string;
    /**
     * 策略ID。
     * @example `pg-gx2x1dhsmthe9****`
     */
    "PolicyGroupId"?: string;
    /**
     * 云电脑ID。不指定时，表示查询该地域下所有云电脑。
     * @example `ecd-hlh41mk78dugw****`
     */
    "DesktopId"?: string;
    /**
     * 查询的开始时间。使用UTC+8时间，格式为`YYYYMMDDhhmmss`。
     * @example `20230424000000`
     */
    "StartTime"?: string;
    /**
     * 查询的结束时间。使用UTC+8时间，格式为`YYYYMMDDhhmmss`。
     * @example `20230424004441`
     */
    "EndTime"?: string;
    /**
     * 是否需要返回URL。
     * @example `false`
     */
    "NeedSignedUrl"?: boolean;
    /**
     * 返回URL的有效时间。单位：分钟。
     * @example `10`
     */
    "SignedUrlExpireMinutes"?: number;
}
