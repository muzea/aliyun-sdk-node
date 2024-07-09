export interface ListTagResourcesRequest {
    /**
     * 标签所属阿里云账号ID。
     * @example `123xxxx`
     */
    "TagOwnerUid"?: string;
    /**
     * 标签拥有者Bid。
     * @example `26842`
     */
    "TagOwnerBid"?: string;
    /**
     * 资源类型。固定值：**DOMAIN**。
     * @example `DOMAIN`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始Token。
     * @example `QpgBAAAAAABsb2dzL2RzLw==`
     */
    "NextToken"?: string;
    /**
     * 资源ID。
     */
    "ResourceId"?: string[];
    /**
     * 标签组合。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `testKey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `testValue`
         */
        Value: string;
    }[];
}
