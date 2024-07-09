export interface ListTemplatesResponse {
    /**
     * 模板总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `C3A8413B-1F16-4DED-AC3E-61A00718DE8A`
     */
    RequestId: string;
    /**
     * 模板列表的页码。
     * 起始值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 模板列表。
     */
    Templates: {
        /**
         * 模板的ARN。
         * @example `acs:ros:*:151266687691****:template/a52f81be-496f-4e1c-a286-8852ab54****`
         */
        TemplateARN: string;
        /**
         * 模板最后更新时间。
         * @example `2019-10-15T08:17:14.000000`
         */
        UpdateTime: string;
        /**
         * 模板描述。
         * @example `test-description`
         */
        Description: string;
        /**
         * 创建时间。
         * @example `2019-10-15T08:17:14.000000`
         */
        CreateTime: string;
        /**
         * 模板名称。
         * @example `demo`
         */
        TemplateName: string;
        /**
         * 模板最新版本名。
         * @example `v1`
         */
        TemplateVersion: string;
        /**
         * 模板ID。
         * @example `4d4f5aa2-3260-4e47-863b-763fbb12****`
         */
        TemplateId: string;
        /**
         * 模板所属阿里云账号ID。
         * @example `151266687691****`
         */
        OwnerId: string;
        /**
         * 模板的共享类型。
         * 取值：
         * - Private：模板为用户自己所拥有。
         * - Shared：模板由其他用户所共享。
         * @example `Private`
         */
        ShareType: string;
        /**
         * 资源组ID。
         * @example `rg-acfmxazb4ph6aiy****`
         */
        ResourceGroupId: string;
        /**
         * 模板的标签。
         */
        Tags: {
            /**
             * 模板的标签键。
             * @example `usage`
             */
            Key: string;
            /**
             * 模板的标签值。
             * @example `test`
             */
            Value: string;
        }[];
    }[];
}
