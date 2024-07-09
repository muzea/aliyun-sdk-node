export interface CreateConfigTemplateRequest {
    /**
     * 新建模板的名称
     * @example `new-template-name`
     */
    "TemplateName"?: string;
    /**
     * 新建模版的描述
     * @example `this is an new template`
     */
    "TemplateDescription"?: string;
    /**
     * 新建模板所在的应用ID
     * @example `wa-5d1d9d8c85c7f86e2efb****`
     */
    "AppId"?: string;
    /**
     * 技术栈ID
     * @example `ws-6c937c98a9c0296d0c482****`
     */
    "StackId"?: string;
    /**
     * 源配置模板的ID，将会以此模板来创建新的配置模板
     * @example `wct-5d1ec2813c940d1bf45b****`
     */
    "SourceTemplateId"?: string;
    /**
     * 源环境ID，指定用于创建模版配置的源环境
     * @example `we-5d1dac8e08350d1dd948****`
     */
    "SourceEnvId"?: string;
    /**
     * 初始化配置类型，可选以下值：
     *  - `HighAvailability`：高可用，该配置会将实例数设置为2，同时启用公网SLB
     *  - `StandAlone`：低成本，该配置会将实例数设置为1
     * @example `HighAvailability`
     */
    "ProfileName"?: string;
    /**
     * 部署包版本ID
     * @example `wp-5d1daece08350d1dd948****`
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
    "RegionId"?: string;
}
