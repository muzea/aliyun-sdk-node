export interface RevokePermissionsRequest {
    /**
     * HTTP 请求体（HTTP BODY）内容，均采用JSON格式
     */
    "Body"?: {
        /**
         * 取消授权的类型，目前仅支持Hive
         * @example `Hive`
         */
        Type: string;
        /**
         * 取消授权meta资源
         */
        MetaResource: any;
        /**
         * 取消授权的accesses列表
         */
        Accesses: any;
        /**
         * 取消授权的grantable accesses列表，目前暂不支持
         */
        DelegateAccesses: any;
        /**
         * ram user/ram role principal，格式为acs:ram::[accountId]:user/userName, acs:ram::[accountId]:role/roleName，数据湖角色的principal为acs:dlf::[accountId]:role/roleName
         */
        Principal: any;
        /**
         * CatalogId
         * @example `1344371`
         */
        CatalogId: string;
    };
}
