export interface SearchImageRequest {
    /**
     * 商品类目。具体请参见[类目参考](~~179184~~)。
     *  - 对于商品搜索，如果设置类目，则以设置的为准；如果不设置类目，则由系统进行类目预测，预测的类目结果可以在Response中获取 。
     * <props="china">
     *  - 对于布料、商标、通用家具家居和工业五金搜索，不论是否设置类目，系统会将类目设置为88888888。
     * </props>
     * <props="intl">
     *  - 对于通用搜索，不论是否设置类目，系统会将类目设置为88888888。
     * </props>
     * @example `88888888`
     */
    "CategoryId"?: number;
    /**
     * 图搜实例名称。最多支持20个字符。
     * 如果已经购买图搜实例可登录[图像搜索管控台](https://imagesearch.console.aliyun.com/)查看。
     * 如果没有购买图搜实例可参考[开通服务](~~179178~~)和[创建实例](~~66569~~)。
     * >这里的实例名称并非实例ID，使用时请区分。
     * @example `phimagesearch`
     */
    "InstanceName": string;
    /**
     * 商品ID，最多支持512个字符。
     * >一个商品可以有多张图片。
     * @example `pro-goods-25376`
     */
    "ProductId"?: string;
    /**
     *  图片名称，最多支持512个字符。
     * > - ProductId和PicName唯一确定一张图片。
     * - 如果多次添加图片具有相同的ProductId和PicName，以最后一次添加为准，前面添加的图片将被覆盖。
     * @example `goods-23312-1`
     */
    "PicName"?: string;
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
     * @example `iVBORw0KGgoAAAANSUhEUgAAAV8AAADwAQMAAACdRvVNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURQAAAKd6PdoAAAABdFJOUyR85Ty3AAAAIUlEQVRo3u3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAADPBiowAAGR02EbAAAAAElFTkSuQmCC`
     */
    "PicContent"?: string;
    /**
     * 是否需要进行主体识别。默认true。
     *  - 为true时，由系统进行主体识别，以识别的主体进行搜索，主体识别结果可在Response中获取。
     *  - 为false时，则不进行主体识别，以整张图进行搜索。
     * <props="china">
     * - 对于布料图片搜索，此参数会被忽略，系统会以整张图进行搜索。
     * </props>
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
     * @example `32,282,43,256`
     */
    "Region"?: string;
    /**
     * 返回结果的数目。取值范围：1~100。默认值为10。
     * @example `10`
     */
    "Num"?: number;
    /**
     * 返回结果的起始位置。取值范围：0~499。默认值为0。
     * @example `0`
     */
    "Start"?: number;
    /**
     * 搜索类型。包括：
     * - SearchByPic（默认）：根据图片搜索相似图片。
     * - SearchByName：根据已添加的图片搜索相似图片。
     * @example `SearchByPic`
     */
    "Type"?: string;
    /**
     * 过滤条件。int_attr支持的操作符有大于号(>)、大于等于号(>=)、小于号(<)、小于等于号(<=)、等于号(=)。str_attr支持的操作符有等于号(=)和不等号(!=)，多个条件之支持AND和OR进行连接。
     * 例如：
     * - int_attr >= 100。
     * - str_attr != "value1"。
     * - int_attr = 1000 AND str_attr = "value1"。
     * @example `(int_attr >= 100000000 AND int_attr < 200000000 AND int_attr=100000252 AND str_attr=\"87\")`
     */
    "Filter"?: string;
}
