export interface ListProductRequest {
    /**
     * 目录ID，可在Meta平台获取目录ID。
     * @example `29398389292`
     */
    "CatalogId": string;
    /**
     * 字段列表，多个字段用半角逗号（,）隔开。
     * 具体字段请参考 [商品字段](~~2579419~~)
     * @example `id,name`
     */
    "Fields"?: string;
    /**
     * 查询前一页消息的结束位置。
     * @example `wiidkd939kek93`
     */
    "Before"?: string;
    /**
     * 查询下一页消息的起始位置。
     * @example `kdkii48jfjjei3`
     */
    "After"?: string;
    /**
     * 查询数量。取值范围[1,1000]。
     * @example `73`
     */
    "Limit"?: number;
    /**
     * ISV子客户的SpaceId。
     * @example `C29398388383`
     */
    "CustSpaceId"?: string;
    /**
     * WABA账号ID。
     * @example `38487474747`
     */
    "WabaId": string;
}
