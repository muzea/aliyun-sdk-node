export interface TagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为**cluster**。
     * @example `cluster`
     */
    "ResourceType": string;
    /**
     * 目标集群ID。
     * @example `pc-*****************`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 标签键。若您需要为目标集群一次性添加多个标签，请单击**添加**来添加标签键。
         * >每次最多添加20对标签，`Tag.n.Key`对应的值为`Tag.n.Value`。
         * @example `type`
         */
        Key: string;
        /**
         * 标签值。若您需要为目标集群一次性添加多个标签，请单击**添加**来添加标签值。
         * >每次最多添加20对标签，`Tag.n.Value`对应的值为`Tag.n.Key`。
         * @example `test`
         */
        Value: string;
    }[];
}
