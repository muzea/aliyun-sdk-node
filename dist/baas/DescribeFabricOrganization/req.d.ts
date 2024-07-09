export interface DescribeFabricOrganizationRequest {
    /**
     * 组织ID
     * @example `peers-aaaaaa2-1eqnj5o5w****`
     */
    "OrganizationId": string;
    /**
     * 位置
     * @example `cn-hangzhou`
     */
    "Location"?: string;
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `key1`
         */
        Key: string;
        /**
         * 标签值
         * @example `value1`
         */
        Value: string;
    }[];
}
