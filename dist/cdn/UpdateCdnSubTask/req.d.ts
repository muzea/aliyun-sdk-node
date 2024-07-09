export interface UpdateCdnSubTaskRequest {
    /**
     * 新定制的报表ID列表，多个用英文逗号（,）分隔。
     * @example `1,2,3`
     */
    "ReportIds"?: string;
    /**
     * 待订阅的域名列表，支持批量查询域名，多个域名用英文逗号（,）分隔
     * 如果不传该参数，默认为账号下的所有域名订阅报表交付任务。
     * @example `www.example.com`
     */
    "DomainName"?: string;
    /**
     * 定制任务的开始时间。使用UTC+0时间表示，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-09-17T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 定制任务的结束时间。使用UTC+0时间表示，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-11-17T00:00:00Z`
     */
    "EndTime"?: string;
}
