export interface GetObjectAclResponse {
    /**
     * 存储ACL信息的容器。
     */
    AccessControlPolicy: {
        /**
         * 保存Bucket拥有者信息的容器。
         */
        Owner: any;
        /**
         * 存储ACL信息的容器。
         */
        AccessControlList: {
            /**
             * Object的ACL权限。
             */
            Grant: any;
        };
    };
}
