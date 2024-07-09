export interface ListTemplateVersionsResponse {
    /**
     * 翻向下一页的Token字符串。
     * @example `NJSNDKLJS-SJKJDO090k30-JSDK232`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `E6CD612B-5889-4F1A-823F-8A4029E46`
     */
    RequestId: string;
    /**
     * 最大结果数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 模版的多个版本对象。
     */
    TemplateVersions: {
        /**
         * 该版本描述。
         * @example `Detach the eip from the special instance.`
         */
        Description: string;
        /**
         * 该版本模版最近更新时间。
         * @example `2020-05-19T06:05:41Z`
         */
        UpdatedDate: string;
        /**
         * 该版本模版最近更新人。
         * @example `foo`
         */
        UpdatedBy: string;
        /**
         * 版本名称
         * @example `baz`
         */
        VersionName: string;
        /**
         * 该版本号。
         * @example `v2`
         */
        TemplateVersion: string;
        /**
         * 模版内容格式。YAML或JSON。
         * @example `YAML`
         */
        TemplateFormat: string;
    }[];
}
