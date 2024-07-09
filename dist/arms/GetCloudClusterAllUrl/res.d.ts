export interface GetCloudClusterAllUrlResponse {
    /**
     * Id of the request
     * @example `99A663CB-8D7B-4B0D-A006-03C8EE38E7BB`
     */
    RequestId: string;
    /**
     * 数组类型
     */
    Data: {
        /**
         * 云产品标识
         * @example `amp`
         */
        ProductCode: string;
        /**
         * 地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 读写对象json结构
         */
        RemoteUrl: {
            /**
             * 内网远程写地址
             * @example `"http://cn-hangzhou-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
            `
             */
            RemoteWriteUrl: string;
            /**
             * 公网远程写地址
             * @example `"http://cn-hangzhou.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
            `
             */
            InternetRemoteWriteUrl: string;
            /**
             * 内网远程读地址
             * @example `"http://cn-hangzhou-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
            `
             */
            RemoteReadUrl: string;
            /**
             * 公网远程读地址
             * @example `"http://cn-hangzhou.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"`
             */
            InternetRemoteReadUrl: string;
            /**
             * 内网grafana数据源地址
             * @example `"http://cn-hangzhou-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
            `
             */
            GrafanaUrl: string;
            /**
             * 公网grafana数据源地址
             * @example `"http://cn-hangzhou.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
            `
             */
            InternetGrafanaUrl: string;
            /**
             * 公网pushgateway 地址
             * @example `"http://cn-hangzhou.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
            `
             */
            InternetPushGatewayUrl: string;
            /**
             * 内网pushgateway 地址
             * @example `"http://cn-hangzhou-intranet.arms.aliyuncs.com:9090/api/v1/prometheus/XXXXXXXXXXXXXXXXX"
            `
             */
            PushGatewayUrl: string;
            /**
             * 是否开启鉴权
             * @example `true`
             */
            AuthToken: boolean;
            /**
             * 如果开启，token的值
             * @example `"eyJhbGciOiJIUzI1NiJ9.DKEIFJSL.KYK6uOtNVxTVHXJbH5MNqlsAuUtKzNlUvmAIiKc-QXw"`
             */
            Token: string;
        };
    }[];
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 详细信息。
     * @example `success`
     */
    Message: string;
    /**
     * 操作是否成功：true：操作成功                                 false：操作失败
     * @example `true`
     */
    Success: boolean;
}
