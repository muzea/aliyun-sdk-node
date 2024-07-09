export interface ListLayersRequest {
    /**
     * 层名称前缀
     * @example `my-layer`
     */
    "prefix"?: string;
    /**
     * 分页起始标记
     * @example `MTIzNCNhYmM=`
     */
    "nextToken"?: string;
    /**
     * 返回的层数量
     * @example `10`
     */
    "limit"?: number;
    /**
     * 是否公开层。true或者false。
     * @example `true`
     */
    "public"?: string;
    /**
     * 是否官方层。true或者false。
     * @example `true`
     */
    "official"?: string;
}
