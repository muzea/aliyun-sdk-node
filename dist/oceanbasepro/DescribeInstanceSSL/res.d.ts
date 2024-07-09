export interface DescribeInstanceSSLResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-xxxx-xxxx-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 云监控实例详情。
     */
    InstanceSSL: {
        /**
         * OceanBase 集群 ID。
         * @example `ob317v4uif****`
         */
        InstanceId: string;
        /**
         * 是否开启 SSL 链路加密功能。
         * @example `OPEN`
         */
        EnableSSL: string;
        /**
         * 有效期。
         * @example `2024-09-20 07:55:03.0`
         */
        ValidPeriod: string;
        /**
         * ca 节点地址。
         * @example `https://xxxx`
         */
        CaUrl: string;
        /**
         * 开启 SSL 状态。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 是否支持强制开启 SSL。
         * @example `false`
         */
        ForceSSLSupport: boolean;
        /**
         * 强制开启状态。
         * @example `CLOSE`
         */
        ForceSSL: string;
    };
}
