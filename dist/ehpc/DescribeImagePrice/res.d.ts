export interface DescribeImagePriceResponse {
    /**
     * 购买数量。
     * @example `1`
     */
    Amount: number;
    /**
     * 请求ID。
     * @example `47ca3ac4-2a03-48f1-8bf2-ba6de0f3****`
     */
    RequestId: string;
    /**
     * 折扣。
     * @example `0`
     */
    DiscountPrice: number;
    /**
     * 交易价格。
     * @example `0.8`
     */
    TradePrice: number;
    /**
     * 原价。
     * @example `0.8`
     */
    OriginalPrice: number;
    /**
     * 镜像ID。
     * @example `m-bp198jigq7l1ga11****`
     */
    ImageId: string;
}
