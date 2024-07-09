export interface DescribeStoreByTemplateVersionResponse {
    /**
     * 请求ID。
     * @example `E69C8998-1787-4999-8C75-D663FF1173CF`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * 请求成功与否标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的%s。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 与本次请求相关的动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 门店信息列表。
     */
    Stores: {
        /**
         * 门店名称。
         * @example `天猫旗舰店`
         */
        StoreName: string;
        /**
         * 门店ID。
         * @example `s-nxwd8sutd6`
         */
        StoreId: string;
        /**
         * 父门店ID。
         * @example `rm-2zeb2rt850x880j1n`
         */
        ParentId: string;
        /**
         * 用户门店编码
         * @example `s-2zeb2r1t12sq`
         */
        UserStoreCode: string;
        /**
         * 修改时间
         * @example `2020-03-06T02:58:16Z`
         */
        GmtModified: string;
        Phone: string;
        /**
         * 级别。
         * @example `1级`
         */
        Level: string;
        /**
         * 门店模板版本号；
         * @example `1.1.0`
         */
        TemplateVersion: string;
        /**
         * 时区。
         * @example `GMT+08:00`
         */
        TimeZone: string;
    }[];
}
