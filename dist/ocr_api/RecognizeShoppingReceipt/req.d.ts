export interface RecognizeShoppingReceiptRequest {
    /**
     * 图片链接（长度不超 2048，不支持 base64）
     * @example `http://duguang-database-public.oss-cn-hangzhou.aliyuncs.com/multi_receipt_shopping_receipt/shop_receipt__ticket_2020-05-14-11-59-30.540668_01_List.jpg`
     */
    "Url"?: string;
    /**
     * 图片二进制字节流，最大10MB
     * @example `图片二进制`
     */
    "body"?: string;
}
