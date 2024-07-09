export interface GetCustomTemplateResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 模板信息
     */
    CustomTemplate: {
        /**
         * 模板Id
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        TemplateId: string;
        /**
         * 模板名称
         * @example `测试截图模板`
         */
        TemplateName: string;
        /**
         * 模板类型ID
         * @example `2`
         */
        Type: number;
        /**
         * 模板类型名称
         * @example `SnapshotTemplate`
         */
        TypeName: string;
        /**
         * 模板子类型ID
         * @example `1`
         */
        Subtype: number;
        /**
         * 模板子类型名称
         * @example `Normal`
         */
        SubtypeName: string;
        /**
         * 模板状态
         * @example `Normal`
         */
        Status: string;
        /**
         * 是否默认模板
         * @example `true`
         */
        IsDefault: boolean;
        /**
         * 模板参数
         * @example `{"Type":"Normal","FrameType":"normal","Time":0,"Count":10}`
         */
        TemplateConfig: string;
        /**
         * 模板创建时间
         * @example `2022-01-01T10:00:00Z`
         */
        CreateTime: string;
        /**
         * 模板修改时间
         * @example `2022-01-01T11:00:00Z
        `
         */
        ModifiedTime: string;
    };
}
