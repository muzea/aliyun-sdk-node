export interface GetTitleGenerateRequest {
    /**
     * 标题内容
     * @example `10pcs 80ml Kitchen Disposable`
     */
    "Title": string;
    /**
     * 标题语种，<props="china">[语向支持以及语言代码](https://help.aliyun.com/document_detail/182310.html)</props><props="intl">[语向支持以及语言代码](https://www.alibabacloud.com/help/zh/doc-detail/182310.html)</props>
     * @example `en`
     */
    "Language": string;
    /**
     * 商品标题所属平台，支持ae/icbu
     * @example `ae`
     */
    "Platform": string;
    /**
     * 类目ID，如没有类目数据则传入0
     * @example `127896018`
     */
    "CategoryId": string;
    /**
     * 热词
     * @example `None,Plastic`
     */
    "HotWords"?: string;
    /**
     * 商品属性，请如示例传入JSON数据
     * @example `{2:"None",10:"Plastic"}`
     */
    "Attributes"?: string;
    /**
     * - 格式内容：{
     *   "product_id": "1",
     *   "platform": "ae"
     * }
     * - product_id  商品id
     * - platform 商品所属平台
     * @example `{   "product_id": "1",   "platform": "ae" }`
     */
    "Extra"?: string;
}
