export interface ListTemplateVersionsResponse {
    /**
     * 版本列表。
     */
    Versions: {
        /**
         * 版本最后更新时间。
         * @example `2020-02-27T07:47:47`
         */
        UpdateTime: string;
        /**
         * 版本相关的模板描述。
         * @example `test`
         */
        Description: string;
        /**
         * 版本创建时间。
         * @example `2020-02-27T07:47:47`
         */
        CreateTime: string;
        /**
         * 版本相关的模板名称。
         * @example `test`
         */
        TemplateName: string;
        /**
         * 模板ID。支持共享模板和私有模板。若为共享模板，取值与模板ARN相同。
         * @example `5ecd1e10-b0e9-4389-a565-e4c15efc****`
         */
        TemplateId: string;
        /**
         * 版本号。
         * 对于共享模板，仅当VersionOption为AllVersions时返回该参数。
         * 取值范围：v1~v100。
         * @example `v1`
         */
        TemplateVersion: string;
    }[];
    /**
     * 本次调用返回的查询凭证值。
     * @example `caeba0bbb2be03f84eb48b699f0****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
}
