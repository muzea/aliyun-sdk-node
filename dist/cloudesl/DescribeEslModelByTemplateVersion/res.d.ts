export interface DescribeEslModelByTemplateVersionResponse {
    /**
     * TotalCount本次请求条件下的数据总量，此参数为可选参数，默认可不返回
     * @example `7`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `38F85526-14B8-54A8-A0BB-3B200BBC3682`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * 请求状态标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。取值说明如下：请求成功：不返回ErrorCode字段。                                 请求失败：返回ErrorCode字段。具体信息，请参见本文的错误码列表。
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `-1001`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数ErrMessage错误信息中的%s。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
    /**
     * 动态错误码
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页参数：每页显示条数，默认值10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 模板版本信息列表。
     */
    EslModels: {
        /**
         * 模型ID
         * @example `9946366490094af4ab16bfe023ad5f22`
         */
        ModelId: string;
        /**
         * 模型名称。
         * @example `test`
         */
        Name: string;
        /**
         * 商品图片。
         * @example `/9xwqexcdaxasada....`
         */
        Image: string;
        /**
         * 设备类型
         * @example `3`
         */
        DeviceType: string;
        /**
         * 厂商名称
         * @example `ali`
         */
        Vendor: string;
        /**
         * 屏幕宽度。
         */
        ScreenWidth: number;
        /**
         * 屏幕高度。
         */
        ScreenHeight: number;
        /**
         * 价签型号。
         * @example `800X480`
         */
        EslSize: string;
        /**
         * 内存大小。单位：gib
         */
        EslPhysicalSize: string;
    }[];
}
