export interface DescribeAppsRequest {
    /**
     * App的唯一标识
     * @example `20112314518278`
     */
    "AppId"?: number;
    /**
     * App拥有者的阿里云账号ID（账号ID请到[账号管理](https://account.console.aliyun.com/?spm=a2c4g.11186623.2.15.3a8c196eVWxvQB#/secure)页面查看）
     * @example `1546564`
     */
    "AppOwner"?: number;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
}
