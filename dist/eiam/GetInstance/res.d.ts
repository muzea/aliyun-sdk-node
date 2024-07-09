export interface GetInstanceResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 实例信息。
     */
    Instance: {
        /**
         * 实例ID。
         * @example `idaas_abt3pfwojojcq323si6g5xxxxx`
         */
        InstanceId: string;
        /**
         * 实例创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1550115455000`
         */
        CreateTime: number;
        /**
         * 实例状态，取值可选范围：
         * - creating：创建中。
         * - running：运行中。
         * @example `running`
         */
        Status: string;
        /**
         * 实例描述信息。
         * @example `线上环境使用`
         */
        Description: string;
        /**
         * 实例默认域名，不再维护，请使用DomainConfig相关字段或参考查询域名列表接口。
         */
        DefaultEndpoint: {
            /**
             * 实例域名地址。
             * @example `example-xxx.aliyunidaas.com
            `
             */
            Endpoint: string;
            /**
             * 实例域名状态，取值可选范围：
             * - resolved：已解析。
             * - unresolved：未解析。
             * @example `resolved`
             */
            Status: string;
        };
        /**
         * 实例出口公网地址段。如在AD账户同步中，EIAM实例会通过如下公网地址段访问您的AD服务。
         */
        EgressAddresses: string[];
        /**
         * 实例域名相关配置信息。
         */
        DomainConfig: {
            /**
             * 初始化域名自动跳转状态，取值可选范围：
             * - enabled：开启。
             * - disabled：关闭。
             * @example `disabled`
             */
            InitDomainAutoRedirectStatus: string;
            /**
             * 实例默认域名。
             * @example `login.example.com`
             */
            DefaultDomain: string;
            /**
             * 实例初始化域名。
             * @example `rx72nxxx.example.com`
             */
            InitDomain: string;
        };
    };
}
