export interface ListPermissionsRequest {
    /**
     * 请求对象。
     */
    "Body"?: {
        /**
         * 基于Principal对权限信息进行过滤
         */
        Principal: any;
        /**
         * 分页Token
         * @example `token!`
         */
        NextPageToken: string;
        /**
         * 分页大小
         * @example `100`
         */
        PageSize: number;
        /**
         * 获取权限信息的类型，目前仅支持Hive
         * @example `Hive`
         */
        Type: string;
        /**
         * 基于资源对权限信息进行过滤
         */
        MetaResource: any;
        /**
         * 是否获取用户所属角色的权限，仅在指定具体资源对象时生效
         * @example `false`
         */
        IsListUserRolePermissions: boolean;
        /**
         * 基于Resource Type进行过滤，DATABASE/TABLE，不指定则两者都包含
         * @example `DATABASE`
         */
        MetaResourceType: string;
        /**
         * CatalogId
         * @example `1344371`
         */
        CatalogId: string;
    };
}
