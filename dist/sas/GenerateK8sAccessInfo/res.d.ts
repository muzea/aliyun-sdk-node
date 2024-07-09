export interface GenerateK8sAccessInfoResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `061955B2-BC40-589F-AF63-C40A901EE279`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 集群名称。
         * @example `test`
         */
        ClusterName: string;
        /**
         * 用户aliuid。
         * @example `1766185894104***`
         */
        AliUid: number;
        /**
         * 服务器安装的key。
         * @example `BC66185***`
         */
        InstallKey: string;
        /**
         * 集群ID。
         * @example `c8ca91e0907d94efaba7fb0827eb9****`
         */
        ClusterId: string;
        /**
         * 服务器分组ID。
         * @example `11618788`
         */
        GroupId: string;
        /**
         * 过期时间，单位毫秒。
         * @example `1804230578566`
         */
        ExpireDate: number;
        /**
         * 服务器所在的地域ID。
         * @example `cn-hangzhou`
         */
        AuditRegionId: string;
        /**
         * 审计日志slsproject。
         * @example `k8s-log-custom-your-project-sd89ehaaa`
         */
        AuditProject: string;
        /**
         * 审计日志sls logstore。
         * @example `audit-cf6baf6afa106eca665296fdf68b65bf`
         */
        AuditLogStore: string;
    };
}
