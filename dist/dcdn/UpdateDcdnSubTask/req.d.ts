export interface UpdateDcdnSubTaskRequest {
    /**
     * 待定制的报表ID列表，多个用英文逗号（,）分隔。您可以调用[DescribeDcdnSubList](~~270075~~)接口查询报表ID。
     * @example `2,4,6`
     */
    "ReportIds"?: string;
    /**
     * 需要定制的域名列表。如果不传该参数，默认为账号下的所有域名定制运营报表。
     * @example `www.example.com`
     */
    "DomainName"?: string;
    /**
     * 定制任务的开始时间。使用UTC+0时间表示，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2021-04-17T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 定制任务的结束时间。使用UTC+0时间表示，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2021-06-17T00:00:00Z`
     */
    "EndTime"?: string;
}
