interface UpdateAITemplateRequest {
    "RegionId"?: string;
    /**
    * 模板名称，最大128字节。
    * @example `test`
    */ "TemplateName": string;
    /**
    * 模板详细配置。
    * @example `XXXXX`
    */ "TemplateConfig": string;
    /**
    * 模板ID。
    * @example `XXXXX`
    */ "TemplateId": string;
    "OwnerId"?: number;
}
export { UpdateAITemplateRequest };