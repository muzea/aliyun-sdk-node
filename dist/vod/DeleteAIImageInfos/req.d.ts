export interface DeleteAIImageInfosRequest {
    /**
     * AI图片数据信息ID。由一个或多个AIImageInfoId组成，AIImageInfoId为调用[ListAIImageInfo](~~186924~~)接口返回参数AIImageInfoId的值。
     * - 最多支持10个ID。
     * - 多个ID之间使用半角逗号（,）分隔。
     * @example `b89a6aabf144*****6197ebd6fe6cf29`
     */
    "AIImageInfoIds": string;
}
