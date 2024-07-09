export interface DescribeDomainOverviewRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询开始时间。使用时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1619798400`
     */
    "StartTime": number;
    /**
     * 查询结束时间。使用时间戳格式，单位：秒。不设置该参数表示使用当前时间作为查询结束时间。
     * > 必须为整点分钟。
     * @example `1623427200`
     */
    "EndTime"?: number;
    /**
     * 要查询的网站业务的域名。不设置该参数表示查询所有域名的数据。
     * > 域名必须已接入DDoS高防进行防护。您可以调用[DescribeDomains](~~91724~~)查询所有已接入DDoS高防的域名。
     * @example `example.aliyundoc.com`
     */
    "Domain"?: string;
}
