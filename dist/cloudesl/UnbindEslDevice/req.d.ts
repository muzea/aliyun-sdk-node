export interface UnbindEslDeviceRequest {
    /**
     * 价签条码。
     * @example `18bc5a63****`
     */
    "EslBarCode": string;
    /**
     * 商品条码。
     * @example `690560583****`
     */
    "ItemBarCode"?: string;
    /**
     * 陈列系统的逻辑列。
     * @example `1`
     */
    "Column"?: string;
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 陈列系统的货架号。
     * @example `20200201`
     */
    "Shelf"?: string;
    /**
     * 陈列系统的层号。
     * @example `1`
     */
    "Layer"?: number;
    /**
     * 扩展参数
     * @example `{}`
     */
    "ExtraParams"?: string;
    "ContainerName"?: string;
}
