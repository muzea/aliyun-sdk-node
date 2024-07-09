export interface ListK8sAccessInfoResponse {
    /**
     * 阿里云为该请求生成的唯一ID。
     * @example `0B48AB3C-84FC-424D-A01D-B9270EF46038`
     */
    RequestId: string;
    /**
     * k8s接入信息列表。
     */
    K8sAccessInfos: {
        /**
         * 集群名称。
         * @example `test`
         */
        ClusterName: string;
        /**
         * 用户aliuid。
         * @example `1960721413485****`
         */
        AliUid: number;
        /**
         * k8s安装密钥。
         * @example `xxx`
         */
        InstallKey: string;
        /**
         * 接入信息唯一标识 ID。
         * @example `67070`
         */
        Id: number;
        /**
         * 集群ID。
         * @example `c0da5e4cb82a848c4a57c4dc9f49a****`
         */
        ClusterId: string;
        /**
         * 服务器分组ID。
         * @example `11088522`
         */
        GroupId: string;
        /**
         * 过期时间。
         * @example `1690596321613`
         */
        ExpireDate: number;
        /**
         * 服务器组名称。
         * @example `test`
         */
        GroupName: string;
        /**
         * 厂商。
         * @example `ALIYUN`
         */
        Vendor: string;
        /**
         * 服务器所在的地域ID。
         * @example `cn-hangzhou`
         */
        AuditRegionId: string;
        /**
         * 审计日志slsproject。
         * @example `k8s-log-custom-your-project-sd89eh****`
         */
        AuditProject: string;
        /**
         * 审计日志sls logstore。
         * @example `audit-cf6baf6afa106eca665296fdf68b****`
         */
        AuditLogStore: string;
    }[];
}
