export interface QueryWaterMarkTemplateListRequest {
    /**
     * 需要查询的水印模板ID，可以通过**MPS控制台**>**全局设置**>**水印模板**获取。最多一次查10个，半角逗号（,）分隔。
     * @example `3780bd69b2b74540bc7b1096f564****`
     */
    "WaterMarkTemplateIds": string;
}
