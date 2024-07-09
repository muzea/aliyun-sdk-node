export interface DescribeDomainStatusCodeListRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询开始时间。使用时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1582992000`
     */
    "StartTime": number;
    /**
     * 查询结束时间。使用时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1583683200`
     */
    "EndTime"?: number;
    /**
     * 返回数据的步长，单位为秒，即每隔多少秒返回一个查询结果。
     * @example `1000`
     */
    "Interval": number;
    /**
     * 网站业务的域名。
     * > 您可以调用[DescribeDomains](~~91724~~)查询所有已接入DDoS高防防护的网站业务的域名。
     * @example `www.example.com`
     */
    "Domain"?: string;
    /**
     * 查询数据的来源。取值：
     * - **gf**：表示高防响应数据。
     * - **upstream**：表示源站响应数据。
     * @example `upstream`
     */
    "QueryType": string;
}
