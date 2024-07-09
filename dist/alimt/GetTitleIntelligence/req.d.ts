export interface GetTitleIntelligenceRequest {
    /**
     * 商品所在平台 ae、icbu、lazada
     * @example `ae`
     */
    "Platform": string;
    /**
     * 扩展信息，json数据格式，可选字段
     * @example `{"product_id":"1212"}`
     */
    "Extra"?: string;
    /**
     * 三级类目Id，如没有类目数据则传入0
     * @example `111`
     */
    "CatLevelThreeId": number;
    /**
     * 二级类目Id，如没有类目数据则传入0
     * @example `222`
     */
    "CatLevelTwoId": number;
    /**
     * 关键词，多个词英文逗号分隔比如：hello,apple
     * @example `hello,apple`
     */
    "Keywords"?: string;
}
