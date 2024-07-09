export interface GetTemplateResponse {
    /**
     * 错误信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `A07FFDF2-78FA-1B48-9E38-88E833A93187`
     */
    RequestId: string;
    /**
     * 模板详情
     */
    Data: {
        /**
         * 模板描述
         * @example `无`
         */
        Description: string;
        /**
         * 模板架构图片文件路径
         * @example `bp-studio-template/sr-U37UD2YQCRJ75X5V.png`
         */
        ImageURL: string;
        /**
         * 模板名称
         * @example `cadt-template`
         */
        Name: string;
        /**
         * 模板ID
         * @example `XFKR6WYRVS24S07R`
         */
        TemplateId: string;
        /**
         * 创建时间
         * @example `2020-09-22 17:08:31`
         */
        CreateTime: string;
        /**
         * 资源组ID
         * @example `rg-aekzhfgmw4e6fwq`
         */
        ResourceGroupId: string;
        /**
         * 模板变量详情
         */
        Variables: {
            /**
             * 变量名
             * @example `instance_name`
             */
            Attribute: string;
            /**
             * 变量类型
             * @example `String`
             */
            DataType: string;
            /**
             * 默认值
             * @example `cadt-app-01`
             */
            DefaultValue: string;
            /**
             * 变量值
             * @example `${name}`
             */
            Variable: string;
        }[];
    };
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
}
