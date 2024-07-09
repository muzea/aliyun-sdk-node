export interface ListEventBusesRequest {
    /**
     * 检索的事件总线名称前缀。
     * @example `My`
     */
    "NamePrefix"?: string;
    /**
     * 限定每次返回的最大条数，可以和NextToken搭配使用实现翻页能力。
     * ><notice>每次返回的最大条数不超过100。></notice>
     * @example `10`
     */
    "Limit"?: number;
    /**
     * 当指定Limit时，如果还有多余的返回值则会返回NextToken。用户可以使用返回的NextToken配合Limit实现分页效果。
     * @example `10`
     */
    "NextToken"?: string;
}
