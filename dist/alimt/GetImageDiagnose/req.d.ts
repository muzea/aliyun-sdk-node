export interface GetImageDiagnoseRequest {
    /**
     * 图片链接
     * @example `http://xxxxx.oss-cn-shenzhen.aliyuncs.com/jd/41209/xxxxx.jpg`
     */
    "Url": string;
    /**
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
