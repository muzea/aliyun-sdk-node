export interface ListPolicyVersionsResponse {
    /**
     * 请求ID。
     * @example `7B8A4E7D-6CFF-471D-84DF-195A7A241ECB`
     */
    RequestId: string;
    PolicyVersions: {
        /**
         * 权限策略版本信息。
         */
        PolicyVersion: {
            /**
             * 是否为权限策略默认版本。
             * @example `false`
             */
            IsDefaultVersion: boolean;
            /**
             * 权限策略版本标识。
             * @example `v3`
             */
            VersionId: string;
            /**
             * 权限策略版本创建时间。
             * @example `2015-01-23T12:33:18Z`
             */
            CreateDate: string;
        }[];
    };
}
