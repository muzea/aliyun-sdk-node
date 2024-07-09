export interface UpdateEslDeviceLightRequest {
    /**
     * 亮灯颜色，可选值：
     * - `GREEN`：绿色
     * - `RED`：红色
     * - `BLUE`：蓝色
     * - `OFF`：关闭。
     * @example `GREEN`
     */
    "LedColor": string;
    /**
     * 亮灯频率，可选值：
     * - `ALWAYS`：持续亮灯
     * - `HEIGHT`：高频率亮灯
     * - `MIDDLE`：中频率亮灯
     * - `NORMAL`：正常频率亮灯。
     * @example `NORMAL`
     */
    "Frequency": string;
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 商品条码。
     * @example `6905605836648`
     */
    "ItemBarCode"?: string;
    /**
     * 亮灯时长，单位：s，取值大于1。
     * @example `30`
     */
    "LightUpTime": number;
    /**
     * 价签条码。
     * @example `18bc5a631ak9`
     */
    "EslBarCode"?: string;
    /**
     * 扩展参数
     * @example `{}`
     */
    "ExtraParams"?: string;
}
