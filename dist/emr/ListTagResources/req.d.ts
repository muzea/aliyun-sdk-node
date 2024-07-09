export interface ListTagResourcesRequest {
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标记当前开始读取的位置。为空时表示从头开始读。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 资源类型。 取值：cluster。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 资源ID列表。数组元素个数N取值范围：1~1
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "ResourceIds": string[];
    /**
     * 标签数组。数组元素个数N取值范围：1~20。
     * @example `20`
     */
    "Tags"?: any[];
}
