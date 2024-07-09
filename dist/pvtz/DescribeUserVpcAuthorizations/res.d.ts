export interface DescribeUserVpcAuthorizationsResponse {
    /**
     * 页面大小。默认值为20，最大值为100。
     * @example `20`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `46973D4C-E3E4-4ABA-9190-9A9DE406C7E`
     */
    RequestId: string;
    /**
     * 当前页码，默认为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 授权页数。
     * @example `5`
     */
    TotalPages: number;
    /**
     * 授权资源的所属用户主账号信息。
     */
    Users: {
        /**
         * 授权类型：
         * - NORMAL：普通授权
         * @example `NORMAL`
         */
        AuthType: string;
        /**
         * 授权资源的所属用户主账号ID。
         * @example `111222333`
         */
        AuthorizedUserId: number;
        /**
         * 授权资源的所属用户主账号名称。
         * @example `alidns***@test.com`
         */
        AuthorizedAliyunId: string;
        /**
         * 创建时间。
         * @example `2023-05-08T02:31Z
        `
         */
        CreateTime: string;
        /**
         * 创建时间（时间戳）。
         * @example `1672740294000`
         */
        CreateTimestamp: number;
    }[];
    /**
     * 授权总数。
     * @example `100`
     */
    TotalItems: number;
}
