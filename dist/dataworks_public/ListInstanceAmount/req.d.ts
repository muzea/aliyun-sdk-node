export interface ListInstanceAmountRequest {
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks管控台，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 开始业务日期，精确到天。该参数需要配置为yyyy-MM-dd'T'HH:mm:ssZ的UTC格式。
     * @example `2021-06-13T00:00:00+0800`
     */
    "BeginDate": string;
    /**
     * 结束业务日期，精确到天。该参数需要配置为yyyy-MM-dd'T'HH:mm:ssZ的UTC格式。
     * @example `2021-06-16T00:00:00+0800`
     */
    "EndDate": string;
}
