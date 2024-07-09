export interface CreateCustomTemplateRequest {
    /**
     * JSON格式{height:xxx,scale:xxx,gop:xxx,bframes:xxx,cdesc:xxx}，所有字段均必填，缺少其中任意字段会调用失败。
     * > 具体参数请参考下表**CustomTemplate说明**。
     * @example `{"height":"1060","scale":"[16:9]","gop":"60","bframes":"30","cdesc":"h264"}`
     */
    "CustomTemplate": string;
    /**
     * 需要添加的模板名。
     * >请在创建时记录模板名，用于使用、查询和删除操作。
     * @example `TestTemplate`
     */
    "Template": string;
}
