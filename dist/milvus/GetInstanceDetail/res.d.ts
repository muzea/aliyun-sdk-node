export interface GetInstanceDetailResponse {
    /**
     * HTTP请求状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `ABCD-1234-5678-EFGH`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Instance.NotFound`
     */
    ErrCode: string;
    /**
     * 错误信息。
     * @example `Failed to find instance c-123xxx`
     */
    ErrMessage: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `c-123xxx`
         */
        InstanceId: string;
        /**
         * 开始时间。
         * @example `1716863508000`
         */
        BeginTime: number;
        /**
         * 运行时间。
         * @example `1743679`
         */
        RunningTime: number;
        /**
         * 过期时间。
         * @example `1721664000000`
         */
        ExpireTime: number;
        /**
         * 地域。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 可用区。
         * @example `cn-beijing-g`
         */
        ZoneId: string;
        /**
         * 实例状态。取值范围：
         * - creating：创建中。
         * - running：运行中。
         * - updating：升级中。集群升降配、配置变更和开关公网等。
         * - disable：不可用。集群已经过期，需要续费激活。
         * - deleting：删除中。
         * - deleted：已删除。
         * @example `running`
         */
        InstanceStatus: string;
        /**
         * 规格详情。取值范围：
         * - trial：入门版。
         * - standard：标准版。
         * @example `standard`
         */
        PackageType: string;
        /**
         * 实例详情。
         */
        ClusterInfo: {
            /**
             * 资源详情。
             */
            MilvusResourceInfoList: {
                /**
                 * 组件类型。取值范围：
                 * - standalone
                 * - proxy
                 * - mix_coordinator
                 * - query
                 * - index
                 * - data
                 * @example `standalone`
                 */
                ComponentType: string;
                /**
                 * CU数量。
                 * @example `8`
                 */
                CuNum: number;
                /**
                 * 副本数量。
                 * @example `2`
                 */
                Replica: number;
                /**
                 * 磁盘大小。
                 * @example `100`
                 */
                DiskSize: number;
                /**
                 * 磁盘类型。
                 * @example `essd`
                 */
                DiskType: string;
            }[];
            /**
             * 内网地址。
             * @example `c-123xxx-internal.milvus.aliyuncs.com`
             */
            IntranetUrl: string;
            /**
             * 公网地址。
             * @example `c-123xxx-.milvus.aliyuncs.com`
             */
            InternetUrl: string;
            /**
             * 总CU数量。
             * @example `24`
             */
            TotalCuNum: number;
            /**
             * 总磁盘数量。
             * @example `500`
             */
            TotalDiskSize: number;
            /**
             * Proxy端口。
             * @example `19530`
             */
            ProxyPort: number;
            /**
             * Attu组件端口。
             * @example `3000`
             */
            AttuPort: number;
            /**
             * OSS存储指标时间。
             * @example `1718604000000`
             */
            OssStorageTimestamp: number;
            /**
             * OSS存储数据大小。
             * @example `125.15 GB`
             */
            OssStorageSize: string;
        };
        /**
         * 专有网络ID。
         * @example `vpc-123xxx`
         */
        VpcId: string;
        /**
         * 交换机ID。
         * @example `vsw-123xxx`
         */
        VswId: string;
        /**
         * 安全组ID。
         * @example `sg-123xxx`
         */
        SgId: string;
        /**
         * 是否开启公网。
         * @example `true`
         */
        OpenPublicNet: boolean;
        /**
         * 实例名称。
         * @example `aliyun-test`
         */
        ClusterName: string;
        /**
         * 付费类型。取值范围：
         * - 0：按量付费。
         * - 1：包年包月。
         * @example `1`
         */
        PayType: number;
        /**
         * Bucket名称。
         * @example `milvus-test`
         */
        BucketName: string;
        /**
         * Bucket地址。
         * @example `https://oss.console.aliyun.com/bucket/oss-cn-beijing/xxxx/object?spm=a2cug.25127996.0.0.577990370Ebsqt&path=milvus-c-123xxxx`
         */
        BucketPath: string;
        /**
         * 内核版本。
         * @example `2.4`
         */
        Version: string;
        /**
         * 公网访问控制AclId。
         * @example `acl-123xxx`
         */
        AclId: string;
        /**
         * 用户自定义配置。
         * @example `dataCoord:\n  segment:\n    maxSize: 1024`
         */
        UserConfig: string;
        /**
         * 软件栈版本。
         * @example `2.4.1-1.0-0.0.1`
         */
        TemplateVersion: string;
        /**
         * 商品Code。
         * @example `milvus_milvuspre_public_cn`
         */
        ProductCode: string;
    };
    /**
     * 权限校验失败详情。
     * @example `{     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }`
     */
    AccessDeniedDetail: string;
}
