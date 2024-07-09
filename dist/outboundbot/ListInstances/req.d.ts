export interface ListInstancesRequest {
    /**
     * 资源组id
     * @example `rg-acfm3iugit3uw7a`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例的标签列表
     */
    "Tag"?: {
        /**
         * 资源组标签key
         * @example `name`
         */
        Key: string;
        /**
         * 资源组标签值
         * @example `xxx`
         */
        Value: string;
    }[];
    "Name"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
