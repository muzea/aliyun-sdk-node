export interface GetTitleDiagnoseRequest {
    /**
     * 标题内容
     * @example `Amroe Japan Comic Theme Uzumaki Naruto Namikaze Minato 3D Visual Cartoon 7 Color USB Touch`
     */
    "Title": string;
    /**
     * 标题文字的语种，<props="china">[语向支持以及语言代码](https://help.aliyun.com/document_detail/182310.html?spm=a2c4g.11186623.6.543.106340eblV3QUo)</props><props="intl">[语向支持以及语言代码](https://www.alibabacloud.com/help/zh/doc-detail/182310.html)</props>
     * @example `zh`
     */
    "Language": string;
    /**
     * 商品标题所属平台，支持ae/icbu/lazada
     * @example `ae`
     */
    "Platform": string;
    /**
     * 类目id，如没有类目数据则传入0
     * @example `123`
     */
    "CategoryId": string;
    /**
     * - 可选字段
     * - 格式内容：{
     *   "product_id": "1",
     *   "platform": "ae"
     * }
     * - product_id  商品id
     * - platform 商品所属平台，支持ae/icbu/lazada
     * @example `{   "product_id": "1",   "platform": "ae" }`
     */
    "Extra"?: string;
}
