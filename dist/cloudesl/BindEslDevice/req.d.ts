export interface BindEslDeviceRequest {
    /**
     * 商品条码。
     * @example `690560583****`
     */
    "ItemBarCode"?: string;
    /**
     * 价签条码。
     * @example `18bc5a63****`
     */
    "EslBarCode": string;
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 陈列系统中的货架号。
     * @example `20200201`
     */
    "Shelf"?: string;
    /**
     * 陈列系统中的层号。
     * @example `1`
     */
    "Layer"?: number;
    /**
     * 陈列系统中的逻辑列。
     * @example `1`
     */
    "Column"?: string;
    /**
     * 扩展参数
     * @example `{}`
     */
    "ExtraParams"?: string;
    /**
     * 布局ID。仅支持传单个ID。
     * @example `7`
     */
    "LayoutId"?: string;
    /**
     * 容器id
     * @example `20`
     */
    "ContainerId"?: string;
    /**
     * 容器名称。
     * @example `区域4号`
     */
    "ContainerName"?: string;
    /**
     * 布局名称。
     * @example `布局2号`
     */
    "LayoutName"?: string;
}
