export interface DescribeAvailableEslModelsResponse {
    /**
     * 总数。
     * @example `436`
     */
    TotalCount: number;
    /**
     * 分页参数：每页显示条数，默认值10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 价签信息列表。
     */
    EslModels: {
        /**
         * 模型id
         * @example `201167`
         */
        ModelId: string;
        /**
         * 名称
         * @example `中文名测试`
         */
        Name: string;
        /**
         * 设备类型
         * @example `3`
         */
        DeviceType: string;
        /**
         * 厂商
         * @example `ali`
         */
        Vendor: string;
        /**
         * 屏幕宽度
         */
        ScreenWidth: number;
        /**
         * 屏幕高度
         */
        ScreenHeight: number;
        /**
         * 屏幕尺寸
         * @example `800X480`
         */
        EslSize: string;
    }[];
    /**
     * 请求ID。
     * @example `E69C8998-1787-4999-8C75-D663FF1173CF`
     */
    RequestId: string;
    /**
     * 请求状态标识。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 错误码
     * @example `MandatoryParameters`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `The specified resource type is invalid.`
     */
    ErrorMessage: string;
    /**
     * 状态码。返回200代表成功。
     * @example `-1001`
     */
    Code: string;
    /**
     * 动态错误码。
     * @example `PlatformResponseError.%s`
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数ErrMessage错误信息中的%s。
     * @example `The specified store %s does not exist.`
     */
    DynamicMessage: string;
}
