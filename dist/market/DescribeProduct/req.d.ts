export interface DescribeProductRequest {
    /**
     * AliUid
     * @example `190********569`
     */
    "AliUid"?: string;
    /**
     * 商品对应商品码
     * @example `cmjj01**45`
     */
    "Code": string;
    /**
     * 是否查询商品草稿，通常不需要查询商品草稿，商品草稿适用于在商品正式上架售卖之前查询。
     * @example `false`
     */
    "QueryDraft"?: boolean;
}
