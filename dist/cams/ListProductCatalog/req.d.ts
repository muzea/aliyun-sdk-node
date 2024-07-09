export interface ListProductCatalogRequest {
    /**
     * WABA所在的商业平台ID。可在Chat App消息服务控制台WABA注册完成后查看商业平台ID。
     * @example `105048970863****`
     */
    "BusinessId": number;
    /**
     * 翻页的前一页结束位置。
     * @example `wiidkd939kek93`
     */
    "Before"?: string;
    /**
     * 翻页时下一页开始位置。
     * @example `kdkii48jfjjei3`
     */
    "After"?: string;
    /**
     * 字段列表，多个字段用半角逗号（,）隔开。
     * 具体字段请参考 [目录字段](~~2579419~~)。
     * @example `id,name`
     */
    "Fields"?: string;
    /**
     * 查询数量。取值范围[1,1000]。
     * @example `73`
     */
    "Limit"?: number;
    /**
     * ISV子客户的SpaceId。
     * @example `C29398882929`
     */
    "CustSpaceId"?: string;
}
