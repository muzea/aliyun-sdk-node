export interface DeleteProductResponse {
    /**
     * 删除失败错误码。
     * @example `PRODUCT_NOT_ALONE`
     */
    Message: string;
    /**
     * 请求的ID。
     * @example `126D4DDD-05A5-49B1-B18C-39C4A929BFB2`
     */
    RequestId: string;
}
