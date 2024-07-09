export interface CreateAppEnvRequest {
    /**
     * 环境名称
     * @example `envTest`
     */
    "EnvName"?: string;
    /**
     * 环境描述信息
     * @example `this is an env`
     */
    "EnvDescription"?: string;
    /**
     * 环境使用的技术栈ID，若指定了源环境ID或配置模板ID，此参数将被忽略，否则必须指定此参数
     * @example `ws-6c937c98a9c0296d0c48*****`
     */
    "StackId"?: string;
    /**
     * 应用ID
     * @example `wa-6c937c98a9c0296d0c48*****`
     */
    "AppId"?: string;
    /**
     * 部署包版本ID
     * @example `wp-6c937c98a9c0296d0c48*****`
     */
    "PkgVersionId"?: string;
    /**
     * 自定义配置项数据，JSON数组，包含以下字段：
     * - `path`：配置项路径
     * - `name`：配置项名称
     * - `value`：配置值
     * @example `[{"path":"resources.ecs.autoScaling", "name":"instanceNum","value":"10"},     {"path":"application.option", "name":"port","value":"8081"}]`
     */
    "OptionSettings"?: string;
    /**
     * 初始化配置类型，可选以下值：
     *  - `HighAvailability`：高可用，该配置会将实例数设置为2，同时启用公网SLB
     *  - `StandAlone`：低成本，该配置会将实例数设置为1
     * @example `HighAvailability`
     */
    "ProfileName"?: string;
    /**
     * 源环境ID，新创建的环境将克隆此环境的技术栈，配置项和部署包版本。
     * @example `we-6c937c98a9c0296d0c48*****`
     */
    "SourceEnvId"?: string;
    /**
     * 源模版ID
     * @example `wct-5d1c0a5d913567334af*****`
     */
    "TemplateId"?: string;
    /**
     * 是否模拟变更
     * - 若设定该参数为true，则不会创建变更，而是输出创建环境的操作步骤；否则会创建环境，并输出变更ID
     *  - 默认为false
     * @example `false`
     */
    "DryRun"?: boolean;
    "ExtraProperties"?: string;
    "RegionId"?: string;
}
