export interface DescribeUserVpcAuthorizationsRequest {
    /**
     * 授权类型。
     * - NORMAL：普通授权。
     * - CLOUD_PRODUCT：云产品授权。
     * @example `NORMAL`
     */
    "AuthType"?: string;
    /**
     * 当前页码，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页面大小。默认值为20，最大值为100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 授权资源的所属用户主账号ID。
     * @example `111222333`
     */
    "AuthorizedUserId"?: number;
}
