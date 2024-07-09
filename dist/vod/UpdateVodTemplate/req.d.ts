export interface UpdateVodTemplateRequest {
    /**
     * 截图模板ID。
     * @example `8c75a02e339b*****0b0d2c48171a22`
     */
    "VodTemplateId": string;
    /**
     * 模板名称。
     * - 长度不超过128个字节。
     * - UTF-8编码。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 截图模板配置数据。（JSON格式）参数结构详情，请参见[SnapshotTemplateConfig](~~98618~~)。
     * @example `{"SnapshotConfig":{"Count":10,"SpecifiedOffsetTime":0,"Interval":1}`
     */
    "TemplateConfig"?: string;
}
