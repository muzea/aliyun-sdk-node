export interface ListTagResourcesRequest {
    /**
     * 资源类型。
     * @example `ALIYUN::FC:FUNCTION`
     */
    "ResourceType": string;
    /**
     * 资源ID列表。
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     * 一次最多支持查询20个标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签值。
         * 标签值最多支持128个字符，可以为空字符串。
         * @example `v1`
         */
        Value: string;
    }[];
    /**
     * 下一个查询开始Token。
     * @example `MTIzNCNhYmM=`
     */
    "NextToken"?: string;
    /**
     * 返回的资源数量。
     * @example `10`
     */
    "Limit"?: number;
}
