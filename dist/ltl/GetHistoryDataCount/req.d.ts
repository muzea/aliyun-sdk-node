export interface GetHistoryDataCountRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 数据Key唯一标识。
     * @example `0001_HB5jyvZWzwcM****_0X**_80aa976ac4d64a97bd45c71a509d****`
     */
    "Key": string;
    /**
     * 业务链编码。
     * @example `HB5jyvZWzwcM****`
     */
    "ProductKey": string;
    /**
     * 起始时间戳。毫秒级时间戳。
     * @example `1608010000000`
     */
    "StartTime"?: number;
    /**
     * 结束时间戳。毫秒级时间戳。
     * @example `1608019800000`
     */
    "EndTime"?: number;
}
