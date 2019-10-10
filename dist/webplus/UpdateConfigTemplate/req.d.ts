interface UpdateConfigTemplateRequest {
    "RegionId"?: string;
    /**
    * 模板ID
    * @example `wct-5d1eca8dd56beb2b7*****`
    */ "TemplateId"?: string;
    /**
    * 模板描述信息
    * @example `This is a template`
    */ "TemplateDescription"?: string;
    /**
    * 自定义配置项数据，JSON数组，包含以下字段：
    * - `path`：配置项路径
    * - `name`：配置项名称
    * - `value`：配置值
    * @example `[{"path":"resources.ecs.autoScaling", "name":"instanceNum","value":"10"},     {"path":"application.option", "name":"port","value":"8081"}]`
    */ "OptionSettings"?: string;
}
export { UpdateConfigTemplateRequest };