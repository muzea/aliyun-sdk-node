export interface GetBlackWhiteListResponse {
    /**
     * 请求ID。
     * @example `89CBC928-4F57-51FA-A413-EE0F4CD87200`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `You are not authorized to perform this operation. `
     */
    Message: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 节点数据。
     */
    Data: {
        /**
         * ID。
         * @example `275`
         */
        Id: number;
        /**
         * 资源ID。
         * @example `1`
         */
        ResourceId: number;
        /**
         * 资源类型。
         * @example `GATEWAY`
         */
        ResourceType: string;
        /**
         * 黑名单内容。
         * @example `text`
         */
        Content: string;
        /**
         * 类型。
         * @example `IP`
         */
        Type: string;
        /**
         * 是否为白名单。
         * @example `true`
         */
        IsWhite: boolean;
        /**
         * 黑白名单状态。
         * @example `on`
         */
        Status: string;
        /**
         * 网关id。
         * @example `1`
         */
        GatewayId: number;
        /**
         * 网关唯一标识ID。
         * @example `gw-7ea3da97b96543e19f6c597c****`
         */
        GatewayUniqueId: string;
        /**
         * 创建时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtCreate: string;
        /**
         * 更新时间
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtModified: string;
    };
}
