export interface BatchGrantPermissionsRequest {
    /**
     * HTTP 请求体（HTTP BODY）内容，均采用JSON格式
     */
    "Body"?: {
        /**
         * 授权的类型，目前仅支持Hive
         * @example `Hive`
         */
        Type: string;
        /**
         * 待授权列表
         */
        GrantRevokeEntries: any[];
        /**
         * catalogId
         * @example `1344371`
         */
        CatalogId: string;
    };
}
