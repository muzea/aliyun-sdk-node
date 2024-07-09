export interface ListSaasPermissionGroupInfosResponse {
    /**
     * Id of the request
     * @example `8AD9FA10-7780-5E12-B701-13C928524F32`
     */
    RequestId: string;
    /**
     * SaaS各集成页面权限列表
     */
    Data: {
        /**
         * SaaS原子化页面唯一标识
         * @example `FAQ`
         */
        SaasCode: string;
        /**
         * 原子页面的中文名称
         * @example `发布中心`
         */
        Name: string;
        /**
         * 原子页面的英文名称
         * @example `Release Center`
         */
        EnName: string;
        /**
         * SaaS权限组列表
         */
        PgInfos: {
            /**
             * SaaS权限组Code
             * @example `FAQ`
             */
            PgCode: string;
            /**
             * SaaS权限组中文名
             * @example `FAQ管理`
             */
            PgName: string;
            /**
             * SaaS权限组英文名
             * @example `FAQ`
             */
            PgEnName: string;
        }[];
    }[];
}
