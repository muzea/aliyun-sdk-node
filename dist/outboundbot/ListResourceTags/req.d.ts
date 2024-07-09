export interface ListResourceTagsRequest {
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 个数
     * @example `10`
     */
    "PageSize": number;
    /**
     * 资源类型
     * @example `instance`
     */
    "ResourceType": string;
}
