export interface DescribeEnvironmentFeatureResponse {
    /**
     * Id of the request
     * @example `01FF8DD9-A09C-47A1-895A-B6E321BE77B6`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 查询是否成功：true：成功。                                 false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * Feature安装信息。
         */
        Feature: {
            /**
             * Feature别名。
             * @example `Prometheus 探针`
             */
            Alias: string;
            /**
             * Feature配置。
             */
            Config: any;
            /**
             * Feature描述。
             * @example `以 Prometheus 采集规范采集 Metric 数据。`
             */
            Description: string;
            /**
             * 环境ID。
             * @example `env-xxxxx`
             */
            EnvironmentId: string;
            /**
             * 图标地址。
             * @example `http://xxx`
             */
            Icon: string;
            /**
             * 语言。
             * @example `zh`
             */
            Language: string;
            /**
             * 最新版本号。
             * @example `1.1.17`
             */
            LatestVersion: string;
            /**
             * Feature名称。
             * @example `metric-agent`
             */
            Name: string;
            /**
             * 安装状态。
             * - Installing 正在安装
             * - Success 安装成功
             * - Failed 安装失败
             * - UnInstall 已卸载或未安装
             * - UnInstalling 正在卸载
             * - UnInstallFailed 卸载失败
             * @example `Success`
             */
            Status: string;
            /**
             * 版本。
             * @example `1.1.17`
             */
            Version: string;
            /**
             * 是否为托管组件。
             */
            Managed: boolean;
        };
        /**
         * Feature的运行状态。
         */
        FeatureStatus: {
            /**
             * Feature的容器列表。
             */
            FeatureContainers: {
                /**
                 * 容器参数。
                 */
                Args: string[];
                /**
                 * 容器镜像。
                 * @example `registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/arms-prometheus-agent:v4.0.0`
                 */
                Image: string;
                /**
                 * 容器名称。
                 * @example `arms-prometheus-operator`
                 */
                Name: string;
            }[];
            /**
             * Feature的K8s资源名称。
             * @example `arms-prometheus-ack-arms-prometheus`
             */
            Name: string;
            /**
             * 命名空间。
             * @example `arms-prom`
             */
            Namespace: string;
            /**
             * 运行状态。
             * - Success 运行正常
             * - Failed 运行异常
             * - Not Found 未安装
             * @example `Success`
             */
            Status: string;
            SecurityGroupId: string;
            VSwitchId: string;
            BindResourceId: string;
            Ips: string[];
        };
    };
}
