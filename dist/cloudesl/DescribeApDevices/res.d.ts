export interface DescribeApDevicesResponse {
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
     * 内部错误码。
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
     * 基站设备列表。
     */
    ApDevices: {
        /**
         * 在线状态：离线。
         * @example `false`
         */
        Status: boolean;
        /**
         * 门店ID。
         * @example `s-cxsds****`
         */
        StoreId: string;
        /**
         * 设备型号。
         * @example `aliyun`
         */
        Model: string;
        /**
         * 备注。
         * @example `测试数据`
         */
        Remark: string;
        /**
         * 是否激活。
         * @example `true`
         */
        BeActivate: boolean;
        /**
         * 设备的mac地址。
         * @example `112233445566`
         */
        Mac: string;
    }[];
}
