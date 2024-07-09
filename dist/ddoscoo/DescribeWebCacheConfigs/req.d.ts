export interface DescribeWebCacheConfigsRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询静态页面缓配置的域名列表。
     * @example `www.aliyun.com`
     */
    "Domains": string[];
}
