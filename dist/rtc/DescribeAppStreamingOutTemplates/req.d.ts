export interface DescribeAppStreamingOutTemplatesRequest {
    /**
     * 应用ID，通过控制台创建和查询，仅支持传单个ID。
     * @example `ioeh****`
     */
    "AppId": string;
    /**
     * 第几页，默认查询第1页。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示个数，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 搜索条件。
     */
    "Condition"?: {
        /**
         * 模板ID。
         * @example `Bj6D****`
         */
        TemplateId: string;
        /**
         * 模板名称。
         * @example `测试`
         */
        Name: string;
    };
}
