export interface DescribeBindersResponse {
    /**
     * 请求ID。
     * @example `6E0FF7FA-3F89-598F-9BF2-57DF480FE111`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。取值说明如下：请求成功：不返回ErrorCode字段。                                 请求失败：返回ErrorCode字段。具体信息，请参见本文的错误码目录。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * 后端错误码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `null`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的%s。
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
     * @example `20`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `24`
     */
    TotalCount: number;
    /**
     * 错误代码
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 绑定信息列表。
     */
    EslItemBindInfos: {
        /**
         * 价签条码，使用门店ID+价签条码查询时，不用填写货架号和层号。
         * @example `18bc5a63****`
         */
        EslBarCode: string;
        /**
         * 自定义模板ID
         * @example `123456`
         */
        TemplateSceneId: string;
        /**
         * 实际销售价格（单位：分）。
         * @example `690`
         */
        ActionPrice: string;
        /**
         * 商品名称。
         * @example `麦麸吐司`
         */
        ItemTitle: string;
        /**
         * 促销开始时间 UTC格式 "yyyy-MM-dd'T'HH:mm:ss'Z'"。
         * @example `2020-03-16T07:05:34Z`
         */
        PromotionStart: string;
        /**
         * 计价单位，最长64个字符；
         * @example `187`
         */
        PriceUnit: string;
        /**
         * 原价（单位：分）。
         * @example `500`
         */
        OriginalPrice: string;
        /**
         * 自定义商品条码。
         * @example `1234567`
         */
        ItemId: string;
        /**
         * 修改时间。
         * @example `1656469716000`
         */
        GmtModified: string;
        /**
         * 价签显示图片，请使用Base64解码工具解码成图片。
         * @example `kUzlfuzgayDo5uTXW3D66Q`
         */
        EslPic: string;
        /**
         * 门店ID。
         * @example `s-pdwrrnkufn`
         */
        StoreId: string;
        /**
         * 商品简称，不输入则从商品全称中截取，最长64字符；
         * @example `牛奶`
         */
        ItemShortTitle: string;
        /**
         * 绑定ID。
         * @example `b4adf048-f36d-4da5-a8bb-ab4adbd5eb04`
         */
        BindId: string;
        /**
         * 促销文案，最长64个字符；
         * @example `买一送一`
         */
        PromotionText: string;
        /**
         * 价签型号。
         * @example `AESL0213`
         */
        EslModel: string;
        /**
         * 是否匹配促销模板显示，默认值为false；
         * @example `true`
         */
        BePromotion: boolean;
        /**
         * 商品ID(SKU)。
         * @example `124`
         */
        SkuId: string;
        /**
         * 价签链接基站Mac。
         * @example `11:22:33:44:55:66`
         */
        EslConnectAp: string;
        /**
         * 价签状态，返回值对应关系：
         * - `ESL_STATUS_ONLINE`：在线，已绑定
         * - `ESL_STATUS_OFFLINE`：离线，已绑定
         * - `ESL_STATUS_UNBIND`：未绑定。
         * @example `ESL_STATUS_ONLINE`
         */
        EslStatus: string;
        /**
         * 模板ID
         * @example `123456`
         */
        TemplateId: string;
        /**
         * 促销结束时间 UTC格式 "yyyy-MM-dd'T'HH:mm:ss'Z'"。
         * @example `2020-03-17T07:05:34Z`
         */
        PromotionEnd: string;
        /**
         * 商品条码。
         * @example `690560583****`
         */
        ItemBarCode: string;
        /**
         * 绑定的模板区域名称
         * @example `2`
         */
        ContainerName: string;
    }[];
}
