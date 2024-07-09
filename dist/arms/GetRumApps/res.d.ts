export interface GetRumAppsResponse {
    /**
     * Id of the request
     * @example `70675725-8F11-4817-8106-CFE0AD71****`
     */
    RequestId: string;
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时返回的信息。
     * @example `内部错误，请联系客服。`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 应用列表。
     */
    AppList: {
        /**
         * 创建时间的时间戳
         * @example `1685686960872`
         */
        CreateTime: any;
        /**
         * 应用名称。
         * @example `门户首页。`
         */
        Name: string;
        /**
         * 应用ID。
         * @example `xxxxx@cc08bdxxxx20b15`
         */
        Pid: string;
        /**
         * 应用类型，此字段为固定值RUM。
         * @example `RUM`
         */
        Type: string;
        /**
         * 应用别名。
         * @example `Williamtag`
         */
        NickName: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 应用类型，web：Web&H5，miniapp：小程序，ios：iOS，android：Android。
         * @example `web`
         */
        AppType: string;
        /**
         * 应用状态，created：已创建，running：运行中，stopped：停止数据上报。
         * @example `running`
         */
        Status: string;
        /**
         * 资源组 ID。
         * @example `rg-acfmzaq3ypaqkdy`
         */
        ResourceGroupId: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
             * @example `tag1`
             */
            Key: string;
            /**
             * 标签值。
             * @example `ok`
             */
            Value: string;
        }[];
        /**
         * 是否收藏，true：收藏，false：未收藏。
         * @example `true`
         */
        IsSubscription: boolean;
        /**
         * 应用描述信息。
         * @example `测试`
         */
        Description: string;
        /**
         * Android应用的包名。
         * @example `com.zy.yxws`
         */
        PackageName: string;
        /**
         * 应用数据的上报endpoint。
         * @example `xxxxxxxx-default-cn.rum.aliyuncs.com`
         */
        Endpoint: string;
        /**
         * 存储应用数据的SLS Project名称。
         * @example `proj-xtrace-xxxxxxxba6ef5466b5debf9e2f951-cn-hangzhou`
         */
        SlsProject: string;
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
            Tracing: string;
            /**
             * Trace透传协议列表，开启链路追踪时必传
             */
            PropagatorTypes: string[];
        }[];
    }[];
}
