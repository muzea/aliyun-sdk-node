export interface ListInstancesResponse {
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
         * @example `1718608505000`
         */
        BeginTime: number;
        /**
         * 运行时间。
         * @example `536611`
         */
        RunningTime: number;
        /**
         * 过期时间。
         * @example `1721232000000`
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
         * 实例名称。
         * @example `milvus-test`
         */
        ClusterName: string;
        /**
         * 规格详情。取值范围：
         * - trial：入门版。
         * - standard：标准版。
         * @example `trial`
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
                 * @example `16`
                 */
                CuNum: number;
                /**
                 * 副本数量。
                 * @example `1`
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
             * @example `c-123xxx.milvus.aliyuncs.com`
             */
            InternetUrl: string;
            /**
             * CU数量。
             * @example `24`
             */
            TotalCuNum: number;
            /**
             * 磁盘总量。
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
         * 付费类型。取值范围：
         * - 0：按量付费。
         * - 1：包年包月。
         * @example `1`
         */
        PayType: number;
        /**
         * 商品Code
         * @example `milvus_milvuspre_public_cn`
         */
        ProductCode: string;
    }[];
    /**
     * 总数。
     * @example `15`
     */
    Total: number;
    /**
     * 权限校验失败详情。
     * @example `{     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxxx",     "EncodedDiagnosticMessage": "xxxx",     "AuthPrincipalType": "SubUser",     "AuthPrincipalDisplayName": "xxxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "milvus:xxxx" }`
     */
    AccessDeniedDetail: string;
}
