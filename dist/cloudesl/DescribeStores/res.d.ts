export interface DescribeStoresResponse {
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
     * 后端错误码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 消息。
     * @example `success`
     */
    Message: string;
    /**
     * 动态消息。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 门店信息列表。
     */
    Stores: {
        /**
         * 门店ID。
         * @example `s-dxsxx**** `
         */
        StoreId: string;
        /**
         * 父门店ID。
         * @example `s-aasx****`
         */
        ParentId: string;
        /**
         * 门店时区配置
         * @example `GMT+08:00`
         */
        TimeZone: string;
        /**
         * 创建时间。
         * @example `2020-03-06T02:58:16Z`
         */
        GmtCreate: string;
        /**
         * 门店名称。
         * @example `天猫旗舰店`
         */
        StoreName: string;
        /**
         * 修改时间。
         * @example `2020-03-06T02:58:16Z`
         */
        GmtModified: string;
        /**
         * 门店模板版本号；
         * @example `1.1.0`
         */
        TemplateVersion: string;
        /**
         * 级别。
         * @example `1级`
         */
        Level: string;
        /**
         * 门店所在监督工商局的监督电话。
         * @example `0571-5666888`
         */
        Phone: string;
        /**
         * 商家自定义门店ID。
         * @example `20200201`
         */
        UserStoreCode: string;
        /**
         * 条形码编码方式：0：Code128 ，1：EAN13（默认0）
         * @example `0`
         */
        BarCodeEncode: number;
        /**
         * 是否启用自动解绑离线价签
         * @example `true`
         */
        AutoUnbindOfflineEsl: boolean;
        /**
         * 自动解绑离线价签条件-价签离线天数
         * @example `1`
         */
        AutoUnbindDays: number;
    }[];
}
