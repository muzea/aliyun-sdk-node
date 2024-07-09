export interface CreateCdnDeliverTaskRequest {
    /**
     * 订阅交付任务名称。
     * @example `域名订阅`
     */
    "Name": string;
    /**
     * 待订阅的报表列表，需进行JSON转义。
     * @example `[{\"reportId\":1,\"conditions\":[{\"field\":\"prov\",\"op\":\"in\",\"value\":[\"黑龙江\",\"北京\"]}]}]`
     */
    "Reports": string;
    /**
     * <props="china">待订阅的域名列表，多个域名用半角逗号（,）分隔，订阅域名数量上限为500个，超过500个请[填写信息](https://page.aliyun.com/form/act2017566026/index.htm)申请。</props>
     * <props="intl">待订阅的域名列表，多个域名用半角逗号（,）分隔，订阅域名数量上限为500个，超过500个请[提交工单](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex)申请。</props>
     * > 不传该参数，默认为账号下的所有域名订阅报表交付任务。
     * @example `www.example1.com,www.example2.com`
     */
    "DomainName"?: string;
    /**
     * 报表发送方式，仅支持邮件发送，需进行JSON转义。
     * @example `{"email":{"subject":"主题名称","to":["username@example.com","username@example.org"]}}`
     */
    "Deliver": string;
    /**
     * 订阅周期相关参数，需进行JSON转义。
     * @example `{\"schedName\":\"周期任务名称\",\"description\":\"描述\",\"crontab\":\"000**?\",\"frequency\":\"d\",\"status\":\"enable\",\"effectiveFrom\":\"2020-09-17T00:00:00Z\",\"effectiveEnd\":\"2020-11-17T00:00:00Z\"}`
     */
    "Schedule": string;
}
