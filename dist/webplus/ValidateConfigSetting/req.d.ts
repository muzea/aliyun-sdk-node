interface ValidateConfigSettingRequest {
    "RegionId"?: string;
    /**
    * 环境ID
    * @example `we-5d3eaaea2977ca5251e*****`
    */ "EnvId"?: string;
    /**
    * 配置模板ID
    * @example `wct-5d3e9d2a2977ca5251e*****`
    */ "TemplateId"?: string;
    /**
    * 栈ID
    * @example `ws-6c937c98a9c0296d0c48*****`
    */ "StackId"?: string;
    /**
    * 自定义配置项数据，JSON数组，包含以下字段：
    * - `path`：配置项路径
    * - `name`：配置项名称
    * - `value`：配置值
    * @example `[{"path":"resources.ecs.autoScaling", "name":"instanceNum","value":"10"},     {"path":"application.option", "name":"port","value":"100"}]`
    */ "OptionSettings"?: string;
}
export { ValidateConfigSettingRequest };