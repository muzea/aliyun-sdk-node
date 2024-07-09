export interface ListApplicationsForUserResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 列表总条数目。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 被授权访问的应用列表。
     */
    Applications: {
        /**
         * 应用ID。
         * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
         */
        ApplicationId: string;
        /**
         * 是否存在直属授权，取值范围：
         * - true： 应用与账户存在直接的赋权关系记录。
         * - false： 应用与账户不存在直接的赋权关系记录。
         * @example `true`
         */
        HasDirectAuthorization: boolean;
        /**
         * 是否存在继承授权，取值范围：
         * - true：应用与账户的任意一个父级组织（或者账户隶属的组）存在直接的赋权关系记录。
         * - false：应用与账户的所有父级组织（或者账户隶属的组）都不存在直接的赋权关系记录。
         * @example `false`
         */
        HasInheritAuthorization: boolean;
    }[];
}
