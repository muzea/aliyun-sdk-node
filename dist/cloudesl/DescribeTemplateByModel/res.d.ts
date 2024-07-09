export interface DescribeTemplateByModelResponse {
    /**
     * 请求ID。
     * @example `B9E230F7-8BC6-5E4B-B540-14142DD94E3B`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * 当前商品插入成功与否标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。取值说明如下：请求成功：不返回ErrorCode字段。                                 请求失败：返回ErrorCode字段。具体信息，请参见本文的错误码列表。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * 后端错误码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 响应消息
     * @example `null`
     */
    Message: string;
    /**
     * 动态消息。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 模板总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 商品信息列表。
     */
    Items: {
        /**
         * 图片。
         */
        BasePicture: string;
        /**
         * 模板ID
         * @example `772629024140898304`
         */
        TemplateId: string;
        /**
         * 模板名称
         * @example `常规`
         */
        TemplateName: string;
        /**
         * 价签尺寸
         * @example `250X122`
         */
        EslSize: string;
        /**
         * 价签类型，返回值对应关系：-[unk]esl_type_e_ink[unk]：电子墨水屏幕-[unk]px_type_dm_lcd[unk]：段码屏幕-[unk]x-ddl_type_full_color[unk]：彩色屏幕。
         */
        EslType: string;
        /**
         * 宽。单位：px。
         * @example `400`
         */
        Width: number;
        /**
         * 视频高。
         * @example `200`
         */
        Height: number;
        /**
         * 门店模板版本号；
         * @example `15.15.15`
         */
        TemplateVersion: string;
        /**
         * 布局信息。
         * @example `1`
         */
        Layout: string;
        /**
         * 使用场景，选择合适的使用场景
         * @example `MEMBER`
         */
        Scene: string;
        /**
         * 品牌。
         * @example `ZTE`
         */
        Brand: string;
        /**
         * 匹配自定义模板ID显示
         * @example `大甩卖`
         */
        TemplateSceneId: string;
    }[];
}
