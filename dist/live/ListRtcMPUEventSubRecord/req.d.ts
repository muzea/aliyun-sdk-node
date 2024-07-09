export interface ListRtcMPUEventSubRecordRequest {
    /**
     * 订阅的应用ID。
     * > 应用ID由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 订阅的回调ID。
     * @example `yourSubId`
     */
    "SubId"?: string;
    /**
     * 查询记录的开始时间。
     * 格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）
     * @example `1970-01-01T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询记录的结束时间。
     * 格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）
     * @example `1970-01-01T00:00:00Z`
     */
    "EndTime": string;
    /**
     * 单页显示记录的数量，取值范围：1~100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 页码。
     * @example `20`
     */
    "PageNo": number;
}
