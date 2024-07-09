export interface DescribeOperatorPermissionResponse {
    /**
     * 授权生效时间。
     * @example `2019-05-20T05:41:19Z`
     */
    CreatedTime: string;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 已获得的授权类型：Control|Data。
     * @example `Control,Data`
     */
    Privileges: string;
    /**
     * 授权过期时间。
     * @example `2019-05-20T07:41:19Z`
     */
    ExpiredTime: string;
    /**
     * 实例ID。
     * @example `am-uf6wjk5xxxxxxxxxx`
     */
    DBClusterId: string;
}
