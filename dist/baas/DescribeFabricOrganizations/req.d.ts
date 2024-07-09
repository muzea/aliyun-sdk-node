export interface DescribeFabricOrganizationsRequest {
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
