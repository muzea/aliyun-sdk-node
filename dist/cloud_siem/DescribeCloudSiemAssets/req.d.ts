export interface DescribeCloudSiemAssetsRequest {
    /**
     * 事件UUID。
     * @example `85ea4241-798f-4684-a876-65d4f0c3****`
     */
    "IncidentUuid"?: string;
    /**
     * 资产类型。取值：
     * - ip：ip
     * - domain：域名
     * - url：url
     * - process：进程
     * - file：文件
     * - host：主机
     * @example `ip`
     */
    "AssetType"?: string;
    /**
     * 列表当前页号， 大于等于1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 列表每页条数， 最大不超过100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
