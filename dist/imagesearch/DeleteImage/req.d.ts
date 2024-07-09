export interface DeleteImageRequest {
    /**
     * 图搜实例名称。最多支持20个字符。
     * 如果已经购买图搜实例可登录[图像搜索管控台](https://imagesearch.console.aliyun.com)查看。
     * 如果没有购买图搜实例可参考开通服务和创建实例。
     * > 这里的实例名称并非实例ID，使用时请区分。
     * @example `demoinstance1`
     */
    "InstanceName": string;
    /**
     * 商品ID，最多支持512个字符。
     * >一个商品可以有多张图片。
     * @example `179443`
     */
    "ProductId": string;
    /**
     *  图片名称，最多支持512个字符。
     * > - ProductId和PicName唯一确定一张图片。
     * - 如果多次添加图片具有相同的ProductId和PicName，以最后一次添加为准，前面添加的图片将被覆盖。
     * @example `2092061_1.jpg`
     */
    "PicName"?: string;
}
