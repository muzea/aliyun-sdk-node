export interface TagResourcesRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 资源类型。
     * @example `ZONE`
     */
    "ResourceType": string;
    /**
     * 修改Tag列表。
     * - True：全量覆盖原有Tag列表。
     * - False|Null：在原有的Tag列表追加Tag，若Key相同Value不同，则覆盖Value。
     * @example `true`
     */
    "OverWrite"?: boolean;
    /**
     * 资源ID列表，即ZoneID列表。可传入内容数量的取值范围为 **[1, 50]**
     * @example `97fe9321a476d0861f624d3f738dcc38`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 资源标签键。
         * @example `env`
         */
        Key: string;
        /**
         * 资源标签值。
         * @example `daily`
         */
        Value: string;
    }[];
}
