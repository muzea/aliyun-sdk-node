export interface AddWaterMarkTemplateRequest {
    /**
     * 水印模板名称。支持中英文，数字等，最大长度128字节。
     * @example `example-watermark-****`
     */
    "Name": string;
    /**
     * 水印模板配置。JSON对象。更多信息请参见[水印模板配置详情](~~29253~~)。
     * > 如果水印文字不需要与分辨率变化正相关，可配置自适应，即在文字水印的text中添加选项`['adaptive']=true`。
     * @example `{"Width":"10","Height":"30","Dx":"10","Dy":"5","ReferPos":"TopRight","Type":"Image","Timeline":{"Start":"0","Duration":"10"}}`
     */
    "Config": string;
}
