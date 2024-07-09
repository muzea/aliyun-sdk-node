export interface CreateEnvironmentRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 语言环境, 默认为中文。
     * @example `zh`
     */
    "AliyunLang"?: string;
    /**
     * 环境名称。
     * @example `env1`
     */
    "EnvironmentName": string;
    /**
     * 环境类型：
     * - CS：容器服务。
     * - ECS：ECS。
     * - Cloud：云服务。
     * @example `CS`
     */
    "EnvironmentType": string;
    /**
     * 环境的子类型：
     * - CS类型的环境：目前支持ACK、One子类型。
     * - ECS类型的环境：目前支持ECS子类型。
     * - Cloud类型的环境：目前支持Cloud子类型。
     * @example `ECS、ACK等。`
     */
    "EnvironmentSubType": string;
    /**
     * 环境绑定的资源实例ID，包括容器实例ID或VpcId。
     * 对于Cloud类型的环境，当前字段值为RegionId。
     * @example `c6e9dec475dca4a50a188411d8cbxxx`
     */
    "BindResourceId": string;
    /**
     * 托管类型：
     * - none： 非托管。ACK集群的默认值。
     * - agent：托管agent（含ksm）。ASK、ACS、AckOne集群的默认值。
     * - agent-exporter： 托管agent和exporter。云服务类型的默认值。
     * @example `none`
     */
    "ManagedType"?: string;
    /**
     * 付费套餐。
     * * EnvironmentType为CS时：可以指定为CS_Basic（默认值）或CS_Pro。
     * * EnvironmentType为其它值时，请输入空值。
     * @example `CS_Basic`
     */
    "FeePackage"?: string;
    /**
     * 可空，环境绑定的prom实例id。如果未提供，请调用 InitEnvironment 接口完成存储实例的初始化。
     * @example `c6e9dec475dca4a50a188411d8cbxxx`
     */
    "PrometheusInstanceId"?: string;
    /**
     * 环境绑定的grafana工作区id。传空时，表示使用默认的共享grafana。
     */
    "GrafanaWorkspaceId"?: string;
    /**
     * 资源组Id。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 可以传此参数，给实例创建标签进行管理。
     */
    "Tags"?: {
        /**
         * 标签名。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 是否初始化环境
     * @example `false`
     */
    "InitEnvironment"?: boolean;
}
