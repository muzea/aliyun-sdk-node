export interface DescribeEslDevicesResponse {
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
     * @example `MandatoryParameters `
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
     * 价签信息列表。
     */
    EslDevices: {
        /**
         * 价签类型，返回值对应关系：
         * - `ESL_TYPE_E_INK`：电子墨水屏幕
         * - `ESL_TYPE_DM_LCD`：段码屏幕
         * - `ESL_TYPE_FULL_COLOR`：彩色屏幕。
         * @example `ESL_TYPE_E_INK`
         */
        Type: string;
        /**
         * 门店ID。
         * @example `s-dxsxx****`
         */
        StoreId: string;
        /**
         * 价签条码。
         * @example `18bc5a63****`
         */
        EslBarCode: string;
        /**
         * 价签型号。
         * @example `AESL0213`
         */
        Model: string;
        /**
         * 最后通讯时间。
         * @example `2020-03-16T07:04:16Z`
         */
        LastCommunicateTime: string;
        /**
         * 屏幕高度，单位为px。
         * @example `200`
         */
        ScreenHeight: number;
        /**
         * 屏幕宽度，单位为px。
         * @example `200`
         */
        ScreenWidth: number;
        /**
         * 价签信号
         * @example `54`
         */
        EslSignal: number;
        /**
         * 电量。
         * @example `100`
         */
        BatteryLevel: number;
        /**
         * 价签状态，返回值对应关系：
         * - `ESL_STATUS_ONLINE`：在线，已绑定
         * - `ESL_STATUS_OFFLINE`：离线，已绑定
         * - `ESL_STATUS_UNBIND`：未绑定。
         * @example `ESL_STATUS_ONLINE`
         */
        EslStatus: string;
        /**
         * 价签Mac地址。
         * @example `18:bc:5a:63:**:**`
         */
        Mac: string;
        /**
         * 类型编码
         * 取值范围如下：
         * NORMAL 常规
         * LOW_TEMPLATE 低温价签
         * THREE_COLOR 三色价签
         * ESL_TYPE_DM_LCD  段码屏幕
         * ESL_TYPE_FULL_COLOR 彩色屏幕
         * ESL_TYPE_MUTIMEDIA 多媒体
         * @example `THREE_COLOR`
         */
        TypeEncode: string;
        /**
         * 布局ID。仅支持传单个ID。
         * @example `7`
         */
        LayoutId: string;
        /**
         * 布局名称。
         * @example `新增布局`
         */
        LayoutName: string;
    }[];
}
