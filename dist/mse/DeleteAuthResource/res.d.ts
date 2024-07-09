export interface DeleteAuthResourceResponse {
    /**
     * 请求ID。
     * @example `559412D1-BFCE-53CC-B88E-0192C331EF44`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 响应码。
     * @example `1`
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
     * 返回数据。
     */
    Data: {
        /**
         * 主键ID。
         * @example `12`
         */
        Id: number;
        /**
         * 鉴权ID。
         * @example `253`
         */
        AuthId: number;
        /**
         * 网关唯一标识ID。
         * @example `gw-7ea3da97b96543e19f6c597cd4a9****`
         */
        GatewayUniqueId: string;
        /**
         * 网关ID。
         * @example `gw-7ea3da97b96543e19f6c597cd4a9****`
         */
        GatewayId: number;
        /**
         * 域ID。
         * @example `235`
         */
        DomainId: number;
        /**
         * 域名。
         * @example `name`
         */
        DomainName: string;
        /**
         * 路径。
         * @example `/zookeeper`
         */
        Path: string;
        /**
         * 是否为白名单。
         * @example `true`
         */
        IsWhite: boolean;
        /**
         * 创建时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtCreate: string;
        /**
         * 修改日期
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtModified: string;
    };
}
