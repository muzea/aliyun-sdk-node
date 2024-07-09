export interface DescribeDomainAttackEventsRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询开始时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1582992000`
     */
    "StartTime": number;
    /**
     * 查询结束时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1583683200`
     */
    "EndTime": number;
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `www.aliyun.com`
     */
    "Domain"?: string;
    /**
     * 分页查询请求时返回的页码。例如，查询第一页的返回结果，则填写**1**。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 页面显示的记录数量。
     * @example `10`
     */
    "PageSize": number;
}
