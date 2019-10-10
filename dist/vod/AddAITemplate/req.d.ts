interface AddAITemplateRequest {
    "RegionId"?: string;
    /**
    * 模板类型，取值范围：**AIMediaAudit(智能审核)**。
    * @example `AIMediaAudit`
    */ "TemplateType": string;
    /**
    * 模板详细配置，JSON字符串，具体值详见[AITemplateConfig](https://help.aliyun.com/document_detail/89863.html?spm=a2c4g.11186623.2.15.286a5046RmMdjh#AITemplateConfig)。
    * @example `XXXXX`
    */ "TemplateConfig": string;
    /**
    * 模板名称，最大128字节。
    * @example `AI-media-test`
    */ "TemplateName": string;
    "OwnerId"?: number;
}
export { AddAITemplateRequest };