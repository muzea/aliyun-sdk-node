export interface GetRumAppInfoResponse {
    /**
     * Id of the request
     * @example `A5EC8221-08F2-4C95-9AF1-49FD998C****`
     */
    RequestId: string;
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 查询是否成功。
     * - `true`：成功。
     * - `false`：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时返回的信息。
     * @example `内部错误，请联系管理员。`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 应用详情。
     */
    Data: {
        /**
         * 创建时间，单位是毫秒时间戳。
         * @example `1683353594000`
         */
        CreateTime: string;
        /**
         * 应用名称。
         * @example `tomcat-demo-test`
         */
        Name: string;
        /**
         * 应用ID。
         * @example `avccccefy0@24cccccbf384dc6`
         */
        Pid: string;
        /**
         * 应用类型，此字段为固定值RUM。
         * @example `RUM`
         */
        Type: string;
        /**
         * 应用别名。
         * @example `nickname`
         */
        NickName: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 应用类型，Web&H5：web，小程序：miniapp，iOS：ios，Android：android。
         * @example `web`
         */
        AppType: string;
        /**
         * 应用状态，created：已创建，running：运行中，stopped：停止数据上报。
         * @example `running`
         */
        Status: string;
        /**
         * 资源组ID。
         * @example `rg-aek2vezare****`
         */
        ResourceGroupId: string;
        /**
         * 是否收藏，true：收藏，false：未收藏。
         * @example `true`
         */
        IsSubscription: string;
        /**
         * 应用描述信息。
         * @example `门户首页。`
         */
        Description: string;
        /**
         * 应用程序包名
         * @example `com.alibaba.rum`
         */
        PackageName: string;
        /**
         * 应用数据的上报endpoint。
         * @example `xxxxxxxx-default-cn.rum.aliyuncs.com`
         */
        Endpoint: string;
        /**
         * 存储应用数据的SLS Project名称。
         * @example `proj-xtrace-xxxxxxxxxxxxxxxxxxxxxxx-cn-hangzhou`
         */
        SlsProject: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * Tag的键。
             * @example `Label`
             */
            Key: string;
            /**
             * Tag的值
             * @example `Value`
             */
            Value: string;
        }[];
        /**
         * 存储应用数据的SLS Logstore名称。
         * @example `logstore-rum`
         */
        SlsLogstore: string;
        /**
         * 服务域名配置列表（当前仅支持移动端应用）
         */
        ServiceDomainConfigs: {
            /**
             * 域名或IP
             * @example `example.com`
             */
            Domain: string;
            /**
             * 描述
             * @example `测试`
             */
            Description: string;
            /**
             * 是否启用链路追踪（需要开通可观测链路OpenTelemetry版），取值：
             * - `true`：启用链路追踪（开启后，将会在该域名请求中插入相关Header）。
             * - `false`：不启用链路追踪。
             * @example `true`
             */
            Tracing: boolean;
            /**
             * Trace透传协议列表，开启链路追踪时必传
             */
            PropagatorTypes: string[];
        }[];
        /**
         * SDK域名。
         * @example `b59xxxxxxxx-sdk.rum.aliyuncs.com/v2/browser-sdk.js`
         */
        CdnDomain: string;
        BonreeSDKConfig: {
            enable: boolean;
            moduleConfig: any;
        };
    };
}
