export interface ListDesignRequest {
    /**
     * 类型
     * @example `business_card`
     */
    "DesignType"?: string;
    /**
     * 版本
     * @example `47c2f5ff-6c7c-4ef0-b48c-b12e1e996ed6`
     */
    "DesignVersion"?: string;
    /**
     * 分页查询的每页行数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 扩展信息。
     * @example `{\"designFileUrl\":\"https:\\/\\/oss.smalld.cn\\/zip\\/svg\\/20220110\\/5990f7b0-5cc3-4f9e-8bda-6be44cd82d9c.zip\"}`
     */
    "ExtInfo"?: string;
}
