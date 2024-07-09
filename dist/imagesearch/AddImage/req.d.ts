export interface AddImageRequest {
    /**
     * 图搜实例名称。最多支持20个字符。
     * 如果已经购买图搜实例可登录[图像搜索管控台](https://imagesearch.console.aliyun.com/)查看。
     * 如果没有购买图搜实例可参考[开通服务](~~179178~~)和[创建实例](~~66569~~)。
     * >这里的实例名称并非实例ID，使用时请区分。
     * @example `demoinstance1`
     */
    "InstanceName": string;
    /**
     * 图片类目。具体请参考[类目参考](~~179184~~)。
     * > - 对于商品搜索，若设置类目，则以设置的为准；若不设置类目，将由系统进行类目预测，预测的类目结果可在Response中获取 。
     * <props="china">
     * - 对于布料、商标、通用、家具家居和工业五金搜索，不论是否设置类目，系统会将类目设置为88888888。
     * </props>
     * - 对于通用搜索，不论是否设置类目，系统会将类目设置为88888888。
     * @example `88888888`
     */
    "CategoryId"?: number;
    /**
     * 商品ID，最多支持512个字符。
     * >一个商品可以有多张图片。
     * @example `2092061_1`
     */
    "ProductId": string;
    /**
     *  图片名称，最多支持512个字符。
     * > - ProductId和PicName唯一确定一张图片。
     * - 如果多次添加图片具有相同的ProductId和PicName，以最后一次添加为准，前面添加的图片将被覆盖。
     * @example `2092061_1.jpg`
     */
    "PicName": string;
    /**
     * 图片内容，Base64编码。
     *  - 图片大小要求不超过4 MB。
     *  - 图片格式：PNG、JPG、JPEG、BMP、GIF、WEBP、TIFF、PPM。
     *  - 传输等待时间不超过5秒。
     * <props="china">
     *  - 服务类型为商品图片搜索和通用图片搜索时，图片长和宽像素要求大于等于100且小于等于4096。
     *  - 服务类型为商标图片搜索时，图片长和宽像素要求大于等于200且小于4096。
     *  - 服务类型为布料图片搜索时，图片长和宽像素要求大于等于448且小于等于4096。
     * </props>
     * <props="intl">
     *  - 服务类型为商品图片搜索和通用图片搜索时，图片长和宽像素要求大于等于100且小于等于4096。
     * </props>
     *  - 图片中不能包含旋转信息。
     * @example `AAAANSUhEUgAAAPcAAAEVCAYAAAA8d3NuAAAAAXNSR0IArs......RK5CYII=`
     */
    "PicContent": string;
    /**
     * 是否需要进行主体识别。默认true。
     *  - 为true时，由系统进行主体识别，以识别的主体进行搜索，主体识别结果可在Response中获取。
     * - 为false时，则不进行主体识别，以整张图进行搜索。
     * <props="china">对于布料图片搜索，此参数会被忽略，系统会以整张图进行搜索。</props>
     * @example `true`
     */
    "Crop"?: boolean;
    /**
     * 图片的主体区域，格式为`x1,x2,y1,y2,` 其中`x1,y1` 是左上角的点，`x2,y2`是右下角的点。
     * <props="china">
     * > - 若用户设置了Region，则不论Crop参数为何值，都将以用户输入Region进行搜索。
     * - 对于布料图片搜索，此参数会被忽略，系统会以整张图进行搜索。
     * </props>
     * <props="intl">
     * > 对于布料图片搜索，此参数会被忽略，系统会以整张图进行搜索。
     * </props>
     * @example `280,486,232,351`
     */
    "Region"?: string;
    /**
     * 用户自定义的内容，最多支持4096个字符。
     * >查询时会返回该字段。例如可添加图片的描述等文本。
     * @example `{\"merchant_id\":\"46-718f-da04-4099b2f144ae\",\"category_ids\":[\"1234\"],\"image_index\":0,\"updated\":5678}`
     */
    "CustomContent"?: string;
    /**
     * 整数类型属性，可用于查询时过滤，查询时会返回该字段。
     * @example `22`
     */
    "IntAttr"?: number;
    /**
     * 字符串类型属性，最多支持128个字符。可用于查询时过滤，查询时会返回该字段。
     * @example `ss`
     */
    "StrAttr"?: string;
}
