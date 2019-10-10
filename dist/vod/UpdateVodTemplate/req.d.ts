interface UpdateVodTemplateRequest {
    "RegionId"?: string;
    /**
    * 截图模板ID。
    * @example `ddddddddddddd`
    */ "VodTemplateId": string;
    "OwnerId"?: number;
    /**
    * 模板名称。长度不超过128个字节，UTF-8编码。
    * @example `test`
    */ "Name"?: string;
    /**
    * 截图模板配置数据。
    * @example `{"SnapshotConfig":{"Count":10,"SpecifiedOffsetTime":0,"Interval":1}`
    */ "TemplateConfig"?: string;
}
export { UpdateVodTemplateRequest };