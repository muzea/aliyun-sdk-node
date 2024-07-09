export interface DescribeQualityOsSdkVersionDistributionStatDataRequest {
    /**
     * 查询的开始时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615824000`
     */
    "StartDate": number;
    /**
     * 查询的结束时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615910399`
     */
    "EndDate": number;
    /**
     * APP ID。
     * @example `0rbd****
    `
     */
    "AppId": string;
}
