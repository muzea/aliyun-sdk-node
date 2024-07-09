export interface DescribeRecordTemplatesRequest {
    /**
     * 查询模板ID列表，格式如下所示：
     * ```
     * TemplateIds.1=****
     * TemplateIds.2=****
     * ......
     * ```
     * 获取模板ID，请参见[AddRecordTemplate](~~193625~~)。
     * @example `76dasgb****`
     */
    "TemplateIds"?: string[];
    /**
     * 应用ID。通过控制台创建和查询，仅支持传单个ID。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 每页显示个数，默认取值**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 第几页，默认查询第**1**页。
     * @example `1`
     */
    "PageNum"?: number;
}
