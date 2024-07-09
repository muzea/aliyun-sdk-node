export interface GetOpsItemResponse {
    /**
     * 请求ID。
     * @example `8BED4C16-BD30-5E27-94D4-7EBCCECF70C1`
     */
    RequestId: string;
    /**
     * 运维项
     */
    OpsItem: {
        /**
         * 运维项ID。
         * @example `oi-d52b08695e2b46ae8413
        `
         */
        OpsItemId: string;
        /**
         * 创建时间。
         * @example `2023-04-10T06:15Z`
         */
        CreateDate: string;
        /**
         * 更新时间。
         * @example `2023-04-10T06:15Z
        `
         */
        UpdateDate: string;
        /**
         * 运维项标题。
         * @example `test`
         */
        Title: string;
        /**
         * 状态。
         * @example `Open`
         */
        Status: string;
        /**
         * 严重性级别。
         * @example `Medium`
         */
        Severity: string;
        /**
         * 分类。
         * @example `Security`
         */
        Category: string;
        /**
         * 来源业务。
         * @example `/aliyun/appManager`
         */
        Source: string;
        /**
         * 优先级。
         * @example `1`
         */
        Priority: number;
        /**
         * 标签。
         * @example `{"K1":"V1"}`
         */
        Tags: any;
        /**
         * 解决方案列表。
         */
        Solutions: any[];
        /**
         * 关联资源ARN列表。
         */
        Resources: string[];
        /**
         * 资源组ID。
         * @example `rg-aekzxkofnlxtn2i`
         */
        ResourceGroupId: string;
        /**
         * 描述内容。
         * @example `test-update`
         */
        Description: string;
        /**
         * 创建者信息。
         * @example `root(130900000)
        `
         */
        CreateBy: string;
        /**
         * 运维项修改者。
         * @example `modifiedBy`
         */
        LastModifiedBy: string;
        /**
         * 运维项属性信息。
         */
        Attributes: any;
    };
}
