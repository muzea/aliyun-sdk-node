export interface UpdateWaterMarkTemplateRequest {
    /**
     * 需要更新的水印模板ID，可以通过**MPS控制台**>**全局设置**>**水印模板**获取。
     * @example `3780bd69b2b74540bc7b1096f564****`
     */
    "WaterMarkTemplateId": string;
    /**
     * 更新后的模板名称。支持中英文、数字等，最大长度128字节。
     * @example `example-watermark-****`
     */
    "Name": string;
    /**
     * 更新后的水印模板配置。JSON对象，更多信息请参见[水印模板配置详情](~~29253~~)。
     * @example `{"Width":"10","Height":"30","Dx":"10","Dy":"5","Type":"Image","Timeline":{"Start":"0","Duration":"10"}}`
     */
    "Config": string;
}
