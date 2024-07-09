export interface AddTagsRequest {
    /**
     * 文件系统ID。
     * @example `0addcw****`
     */
    "FileSystemId": string;
    /**
     * 标签信息集合。
     */
    "Tag": {
        /**
         * 当前第N组标签键。需要绑定的标签，包括标签键和标签值，单次最多支持传入10组值。标签键不能为空，标签值可以为空。
         * @example `keyN`
         */
        Key: string;
        /**
         * 当前第N组标签值。需要绑定的标签，包括标签键和标签值，单次最多支持传入10组值。标签键不能为空，标签值可以为空。
         * @example `valueN`
         */
        Value: string;
    }[];
}
