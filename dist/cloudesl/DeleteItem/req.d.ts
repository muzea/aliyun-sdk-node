export interface DeleteItemRequest {
    /**
     * 门店ID或商家自定义门店ID。
     * @example `s-dxsxx****`
     */
    "StoreId": string;
    /**
     * 商品条码。
     * @example `693737264225`
     */
    "ItemBarCode": string;
    /**
     * 是否解绑该商品已绑定的价签设备，默认值false
     * @example `false`
     */
    "UnbindEslDevice"?: boolean;
}
