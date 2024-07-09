export interface UpdateCdnDeliverTaskRequest {
    /**
     * 待更新的订阅任务ID。
     * @example `3`
     */
    "DeliverId": number;
    /**
     * 订阅任务名称。
     * @example `域名订阅`
     */
    "Name"?: string;
    /**
     * 待订阅的报表列表，需进行JSON转义。
     * @example `[{\"reportId\":1,\"conditions\":[{\"field\":\"prov\",\"op\":\"in\",\"value\":[\"黑龙江\",\"北京\"]}]}]`
     */
    "Reports"?: string;
    /**
     * 待订阅的域名列表，支持批量查询域名，多个域名用英文逗号（,）分隔，一次最多支持500个域名查询。
     * 如果不传该参数，默认为账号下的所有域名订阅报表交付任务。
     * @example `www.example.com`
     */
    "DomainName"?: string;
    /**
     * 报表发送方式，仅支持邮件发送，需进行JSON转义。
     * @example `{\"email\":{\"subject\":\"主题名称\",\"to\":[\"songmingyuan@alibaba-inc.com\",\"songmingyuan@alibaba-inc.com\"]}}"`
     */
    "Deliver"?: string;
    /**
     * 订阅周期相关参数，需进行JSON转义。
     * @example `"{\"schedName\":\"周期任务名称\",\"description\":\"描述\",\"crontab\":\"000**?\",\"frequency\":\"d\",\"status\":\"enable\",\"effectiveFrom\":\"2020-09-17T00:00:00Z\",\"effectiveEnd\":\"2020-11-17T00:00:00Z\"}"`
     */
    "Schedule"?: string;
}
