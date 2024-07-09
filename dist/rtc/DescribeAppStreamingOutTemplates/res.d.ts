export interface DescribeAppStreamingOutTemplatesResponse {
    /**
     * 请求ID。
     * @example `B0A2FCBC-43A4-428F-BC1D-3F4F85837F76`
     */
    RequestId: string;
    /**
     * 记录数。
     * @example `10`
     */
    TotalNum: number;
    /**
     * 分页数。
     * @example `1`
     */
    TotalPage: number;
    /**
     * 模板列表。
     */
    Templates: {
        /**
         * 模板ID。
         * @example `Bj6D****`
         */
        TemplateId: string;
        /**
         * 模板名称。
         * @example `模板名称`
         */
        Name: string;
        /**
         * 创建时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2020-09-04T06:22:15Z`
         */
        CreateTime: string;
        /**
         * 编码选项。
         * @example `1`
         */
        MediaEncode: number;
        /**
         * 布局ID列表。
         */
        LayoutIds: string[];
    }[];
}
