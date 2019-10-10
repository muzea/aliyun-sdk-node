interface DryRunCreateAppEnvRequest {
    "RegionId"?: string;
    /**
    * 技术栈ID
    * @example `ws-6c937c98a9c0296d0c48*****`
    */ "StackId"?: string;
    /**
    * 自定义配置项数据，JSON数组，包含以下字段：
    * - `path`：配置项路径
    * - `name`：配置项名称
    * - `value`：配置值
    * @example `[{"path":"resources.ecs.autoScaling", "name":"instanceNum","value":"10"},     {"path":"application.option", "name":"port","value":"8081"}]`
    */ "OptionSettings"?: string;
    /**
    * 初始化配置类型，可选以下值：
    *  - `HighAvailability`：高可用，该配置会将实例数设置为2，同时启用公网SLB
    *  - `StandAlone`：低成本，该配置会将实例数设置为1
    * @example `HighAvailability`
    */ "ProfileName"?: string;
    /**
    * 源环境ID
    * @example `we-5d3eaaea2977ca5251e*****`
    */ "SourceEnvId"?: string;
    /**
    * 模板ID，从此配置模板创建环境
    * @example `wct-5d1eca8dd56beb722b7*****`
    */ "TemplateId"?: string;
    "ExtraProperties"?: string;
}
export { DryRunCreateAppEnvRequest };