export interface GetBucketAclResponse {
    /**
     * 存储ACL信息的容器。
     */
    AccessControlPolicy: {
        /**
         * 保存Bucket拥有者信息的容器。
         */
        Owner: any;
        /**
         * 存储ACL信息的容器类。
         */
        AccessControlList: {
            /**
             * Bucket的ACL权限。
             */
            Grant: any;
        };
    };
}
