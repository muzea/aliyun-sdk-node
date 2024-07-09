export interface DescribeImageResultExtRequest {
    /**
     * 图片审核增强版API返回的requestId字段
     * @example `638EDDC65C82AB39319A9F60`
     */
    "ReqId"?: string;
    /**
     * 需要获取的信息内容，多个值使用英文逗号隔开，取值：
     * - customImage：自定义图库命中信息
     * - textInImage：图片中文字信息
     * @example `customImage,textInImage`
     */
    "InfoType"?: string;
}
