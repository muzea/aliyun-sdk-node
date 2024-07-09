export interface ListDashboardsResponse {
    /**
     * 请求ID。
     * @example `2A0CEDF1-06FE-44AC-8E21-21A5BE65****`
     */
    RequestId: string;
    /**
     * Grafana大盘信息。
     */
    DashboardVos: {
        /**
         * Grafana大盘类型，包括：
         * - `dash-db`：大盘
         * - `dash-folder`：文件夹（可包含大盘）
         * @example `dash-db`
         */
        Type: string;
        /**
         * Grafana大盘创建时间的时间戳。单位 ：秒
         * @example `1590136924`
         */
        Time: string;
        /**
         * 大盘是否有新版本可以升级。
         * @example `false`
         */
        NeedUpdate: boolean;
        /**
         * 大盘种类，为BASIC（基础类型）、THIRD（第三方）、LIMIT（限时免费）、CUSTOM（自定义）的其中一种。
         * @example `BASIC`
         */
        Kind: string;
        /**
         * Grafana大盘使用的语言。
         * @example `en`
         */
        Language: string;
        /**
         * Grafana大盘的完整URL。
         * @example `http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s`
         */
        Url: string;
        /**
         * Grafana大盘URL。
         * @example `http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s`
         */
        HttpsUrl: string;
        /**
         * 大盘类型，作用与Exporter一致，但是字段含义更明确。
         * @example `Node`
         */
        DashboardType: string;
        /**
         * Exporter接入源的类型，包括：
         * - Prometheus
         * - Node
         * - GPU
         * - Redis
         * - MySQL
         * - Kafka
         * - Nginx（v2）
         * - Nginx
         * - ZooKeeper
         * - MongoDB
         * - RabbitMQ
         * - PostgreSQL
         * - Kubernetes
         * - Client Library
         * - Elasticsearch
         * - RocketMQ
         * @example `Nginx`
         */
        Exporter: string;
        /**
         * 大盘版本，与Name形成唯一键，确定一个大盘。
         * @example `v2`
         */
        Version: string;
        /**
         * 是否属于ARMS提供的Exporter：
         * - `true`：是ARMS提供的Exporter。
         * - `false`：不是ARMS提供的Exporter。
         * @example `false`
         */
        IsArmsExporter: boolean;
        /**
         * Grafana大盘的URL。
         * @example `http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s`
         */
        HttpUrl: string;
        /**
         * Grafana大盘标题。
         * @example `ApiServer`
         */
        Title: string;
        /**
         * 大盘名称，与**Title**不同，不会修改。
         * @example `k8s-node-overview`
         */
        Name: string;
        /**
         * Grafana大盘ID，仅在安装Grafana大盘时是唯一的。
         * @example `1100**`
         */
        Id: string;
        /**
         * 安装多个Grafana大盘时的大盘唯一标识符，是展示在页面上的唯一业务ID。
         * @example `1131971649496228-*****-59`
         */
        Uid: string;
        /**
         * Grafana大盘标签。
         */
        Tags: string[];
        /**
         * Grafana大盘信息。
         */
        I18nChild: {
            /**
             * Grafana大盘类型，包括：
             * - `dash-db`：大盘
             * - `dash-folder`：文件夹（可包含大盘）
             * @example `dash-db`
             */
            Type: string;
            /**
             * Grafana大盘创建时间的时间戳。
             * @example `1590136924`
             */
            Time: string;
            /**
             * 大盘是否有新版本可以升级。
             * @example `false`
             */
            NeedUpdate: boolean;
            /**
             * 大盘种类，为basic、third、limit、custom的其中一种。
             * @example `BASIC`
             */
            Kind: string;
            /**
             * Grafana大盘使用的语言。
             * @example `zh`
             */
            Language: string;
            /**
             * Grafana大盘的完整URL。
             * @example `http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s`
             */
            Url: string;
            /**
             * Grafana大盘的URL。
             * @example `http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s`
             */
            HttpsUrl: string;
            /**
             * 大盘类型，作用与Exporter一致，但是字段含义更明确。
             * @example `Node`
             */
            DashboardType: string;
            /**
             * Exporter接入源的类型，包括：
             * - Prometheus
             * - Node
             * - GPU
             * - Redis
             * - MySQL
             * - Kafka
             * - Nginx（v2）
             * - Nginx
             * - ZooKeeper
             * - MongoDB
             * - RabbitMQ
             * - PostgreSQL
             * - Kubernetes
             * - Client Library
             * - Elasticsearch
             * - RocketMQ
             * @example `Nginx`
             */
            Exporter: string;
            /**
             * 大盘版本，与Name形成唯一键，确定一个大盘。
             * @example `v2`
             */
            Version: string;
            /**
             * 是否属于ARMS提供的Exporter：
             * - `true`：是ARMS提供的Exporter。
             * - `false`：不是ARMS提供的Exporter。
             * @example `false`
             */
            IsArmsExporter: boolean;
            /**
             * Grafana大盘的URL。
             * @example `http://g.console.aliyun.com/d/1131971649496228-*****-59/ApiServer?orgId=3**&refresh=60s`
             */
            HttpUrl: string;
            /**
             * Grafana大盘标题。
             * @example `ApiServer`
             */
            Title: string;
            /**
             * 大盘名称，与**Title**不同，不会修改。
             * @example `k8s-node-overview`
             */
            Name: string;
            /**
             * Grafana大盘ID，仅在安装Grafana大盘时是唯一的。
             * @example `1100**`
             */
            Id: string;
            /**
             * 安装多个Grafana大盘时的大盘唯一标识符，是展示在页面上的唯一业务ID。
             * @example `1131971649496228-*****-59`
             */
            Uid: string;
            /**
             * Grafana大盘标签。
             */
            Tags: string[];
        };
    }[];
    /**
     * 是否开通Prometheus服务。
     * @example `true`
     */
    PrometheusServiceOpened: string;
    /**
     * 环境ID。
     * @example `env-ebd54733482581fc8c4237******`
     */
    EnvironmentId: string;
    /**
     * 是否开通Grafana服务。
     * @example `true`
     */
    GrafanaServiceOpened: string;
}
