export interface ListEnvironmentFeaturesResponse {
    /**
     * Id of the request
     * @example `40B10E04-81E8-4643-970D-F1B38F2E****`
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
     * 操作是否成功：true：操作成功                                 false：操作失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结构体。
     */
    Data: {
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
         * 语言。
         * - zh 中文
         * - en 英文
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
         * Feature状态。
         * - Installing 正在安装
         * - Success 安装成功
         * - Failed 安装失败
         * - UnInstall 已卸载
         * - UnInstalling 正在卸载
         * - UnInstallFailed 卸载失败
         * @example `Success`
         */
        Status: string;
        /**
         * Feature版本。
         * @example `1.1.17`
         */
        Version: string;
        /**
         * Feature别名。
         * @example `Prometheus 探针`
         */
        Alias: string;
        /**
         * 图标地址。
         * @example `http://xxx`
         */
        Icon: string;
        Managed: boolean;
    }[];
}
