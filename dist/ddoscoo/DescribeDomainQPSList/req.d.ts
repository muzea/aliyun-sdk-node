export interface DescribeDomainQPSListRequest {
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
     * 返回数据的步长，单位为秒，即每隔多少秒返回一个结果。
     * @example `1000`
     */
    "Interval": number;
    /**
     * 网站业务的域名。不传入表示查询所有域名的QPS统计信息。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `www.aliyun.com`
     */
    "Domain"?: string;
}
