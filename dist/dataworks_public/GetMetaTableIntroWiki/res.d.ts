export interface GetMetaTableIntroWikiResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `0bc1ec92159376`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 业务数据。
     */
    Data: {
        /**
         * 修改表的时间。
         * @example `1584444247000`
         */
        ModifiedTime: number;
        /**
         * 版本号。
         * @example `1`
         */
        Version: number;
        /**
         * 表的创建时间。
         * @example `1584444247000`
         */
        CreateTime: number;
        /**
         * 表的创建者的名称。
         * @example `abc`
         */
        CreatorName: string;
        /**
         * 表的描述信息。
         * @example `# 业务需求\n\n&lt;a name=&quot;xiw5n&quot;`
         */
        Content: string;
        /**
         * 表的创建者。
         * @example `abc`
         */
        Creator: string;
    };
}
