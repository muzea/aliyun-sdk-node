export interface ListEventSubEventRequest {
    /**
     * 订阅的应用ID。
     * @example `9qb1****`
     */
    "AppId": string;
    /**
     * 订阅ID。
     * @example `ad53276431c****`
     */
    "SubscribeId"?: string;
    /**
     * 起始时间，用UNIX时间戳表示，单位：秒。
     * @example `1698195600`
     */
    "StartTime": number;
    /**
     * 结束时间，用UNIX时间戳表示，单位：秒。
     * @example `1698201013`
     */
    "EndTime": number;
    /**
     * 单页显示记录的数量，取值范围：1~100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 页码。取值范围：大于等于1。
     * @example `20`
     */
    "PageNo": number;
}
