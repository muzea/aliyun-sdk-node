export interface GetInstanceCountTrendRequest {
    /**
     * DataWorks工作空间的ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 起始业务日期，精确到天。您需要使用yyyy-MM-dd'T'HH:mm:ssZ的UTC格式。
     * @example `2020-04-02T00:00:00+0800`
     */
    "BeginDate": string;
    /**
     * 截止业务日期，精确到天。您需要使用yyyy-MM-dd'T'HH:mm:ssZ的UTC格式。
     * @example `2020-09-10T00:00:00+0800`
     */
    "EndDate": string;
}
