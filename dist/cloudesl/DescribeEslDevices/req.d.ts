export interface DescribeEslDevicesRequest {
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 价签类型，可选值：
     * - `ESL_TYPE_E_INK`：电子墨水屏幕
     * - `ESL_TYPE_DM_LCD`：段码屏幕
     * - `ESL_TYPE_FULL_COLOR`：彩色屏幕。
     * @example `ESL_TYPE_E_INK`
     */
    "Type"?: string;
    /**
     * 价签类型，可选值：
     * - `NORMAL`：常规
     * - `LOW_TEMPLATE`：低温
     * - `THREE_COLOR`：三色
     * - `ESL_TYPE_DM_LCD`：段码
     * - `ESL_TYPE_FULL_COLOR`：彩色
     * - `ESL_TYPE_MUTI_MEDIA`：多媒体。
     * @example `LOW_TEMPLATE`
     */
    "TypeEncode"?: string;
    /**
     * 分页参数：每页显示条数，默认值10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 电量区间右偏移，电量大于等于输入值。
     * @example `80`
     */
    "ToBatteryLevel"?: number;
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 价签状态，可选值：
     * - `ESL_STATUS_ONLINE`：在线，已绑定
     * - `ESL_STATUS_OFFLINE`：离线，已绑定
     * - `ESL_STATUS_UNBIND`：未绑定。
     * @example `ESL_STATUS_ONLINE`
     */
    "EslStatus"?: string;
    /**
     * 价签条码。
     * @example `18bc5a63****`
     */
    "EslBarCode"?: string;
    /**
     * 电量区间左偏移，电量小于等于输入值。
     * @example `20`
     */
    "FromBatteryLevel"?: number;
    /**
     * 扩展参数
     * @example `{}`
     */
    "ExtraParams"?: string;
}
