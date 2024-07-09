export interface RemoveTagsRequest {
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 标签键。
         * > 标签键（`Tag.N.Key`）和标签值（`Tag.N.Value`）需要同时设置。
         * @example `Key1`
         */
        Key: string;
        /**
         * 标签值。
         * > 标签键（`Tag.N.Key`）和标签值（`Tag.N.Value`）需要同时设置。
         * @example `Value1`
         */
        Value: string;
    }[];
    /**
     * 应用分组ID。
     * @example `12345`
     */
    "GroupIds": string[];
}
