export interface DescribeNfsAclResponse {
    /**
     * 请求ID。
     * @example `A1098673-1746-505E-A5F1-08527B7EDBDF`
     */
    RequestId: string;
    /**
     * ACL信息。
     */
    Acl: {
        /**
         * 是否启用了NFS ACL功能。
         * - true：启用了NFS ACL功能。
         * - false：未启用NFS ACL功能。
         * @example `true`
         */
        Enabled: boolean;
    };
}
