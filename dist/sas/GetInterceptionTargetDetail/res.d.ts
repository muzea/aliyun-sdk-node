export interface GetInterceptionTargetDetailResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D65AADFC-1D20-5A6A-8F6A-9FA53C0DC1F8`
     */
    RequestId: string;
    /**
     * 接口调用返回的详细信息。
     */
    RuleTarget: {
        /**
         * 指定网络对象包含的应用名称。
         * @example `netperf-client`
         */
        AppName: string;
        /**
         * 指定网络对象包含的镜像列表。
         */
        ImageList: string[];
        /**
         * 指定网络对象包含的标签列表。
         */
        TagList: string[];
        /**
         * 网络对象ID。
         * @example `400723`
         */
        TargetId: number;
        /**
         * 网络对象名称。
         * @example `destination-test-obj-Na3cF`
         */
        TargetName: string;
        /**
         * 命名空间。
         * @example `secondary`
         */
        Namespace: string;
        /**
         * 对象类型。取值：
         * - **IMAGE**：镜像
         * @example `IMAGE`
         */
        TargetType: string;
        /**
         * 容器集群名称。
         * @example `sas-test-cnnf
        `
         */
        ClusterName: string;
        /**
         * 容器集群的ID。
         * @example `ca6e6594def8d4be8b2795fd12c32****`
         */
        ClusterId: string;
    };
}
