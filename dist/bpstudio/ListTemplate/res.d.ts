export interface ListTemplateResponse {
    /**
     * 总数量
     * @example `100`
     */
    TotalCount: number;
    /**
     * 错误信息
     * @example `Success`
     */
    Message: string;
    /**
     * 页码
     * @example `1`
     */
    NextToken: number;
    /**
     * 请求ID
     * @example `A07FFDF2-78FA-1B48-9E38-88E833A93187`
     */
    RequestId: string;
    /**
     * 模板列表
     */
    Data: {
        /**
         * 模板的图片链接
         * @example `bp-studio-template/sr-U37UD2YQCRJ75X5V.png`
         */
        ImageURL: string;
        /**
         * 模板的标签的ID
         * @example `1`
         */
        TagId: number;
        /**
         * 模板标签的名称
         * @example `官方模板`
         */
        TagName: string;
        /**
         * 模板的名称
         * @example `cadt-name`
         */
        Name: string;
        /**
         * 模板的ID
         * @example `CJQ6H0XUEQ20IYJQ`
         */
        TemplateId: string;
        /**
         * 创建时间
         * @example `2021-03-18 16:41:31`
         */
        CreateTime: string;
        /**
         * 资源组ID
         * @example `rg-acfmyjt3c5om3hi`
         */
        ResourceGroupId: string;
    }[];
    /**
     * 状态码
     * @example `200`
     */
    Code: number;
}
