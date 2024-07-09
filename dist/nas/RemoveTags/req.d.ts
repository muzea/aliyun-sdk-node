export interface RemoveTagsRequest {
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
         * 当前第N组标签键（TagKey）。需要解绑的标签，包括标签键（TagKey）和标签值（TagValue），单次最少传入1组值，最多传入10组值。标签键（TagKey）不能为空，标签值（TagValue）可以为空。
         * @example `keyN`
         */
        Key: string;
        /**
         * 当前第N组标签值（TagValue）。需要解绑的标签，包括标签键（TagKey）和标签值（TagValue），单次最多支持传入5组值。标签键（TagKey）不能为空，标签值（TagValue）可以为空。
         * @example `valueN`
         */
        Value: string;
    }[];
}
