export interface AddImageMosaicRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 源图片的OSS地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * 支持的图片格式：jpg，png，tiff，jp2，bmp。
     * @example `oss://examplebucket/sampleobject.jpg`
     */
    "SourceURI": string;
    /**
     * 输出图片存储的OSS地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://examplebucket/outputImage.jpg`
     */
    "TargetURI": string;
    /**
     * 图片保存时的编码格式。可取值为jpg、png、webp，默认与输入图片编码格式相同。
     * @example `jpg`
     */
    "ImageFormat"?: string;
    /**
     * 输出图片的压缩质量，仅限jpg和webp图片格式。设置范围为0~100，默认为80。
     * @example `80`
     */
    "Quality"?: number;
    /**
     * 处理框及操作类别参数数组。
     */
    "Targets": {
        /**
         * 添加的马赛克类型。可取值如下：
         * - square：方形的马赛克
         * - diamond：菱形的马赛克
         * - hexagon：正六边形的马赛克
         * - blur：高斯模糊
         * - pure：纯色块
         * @example `square`
         */
        Type: string;
        /**
         * 处理框位置信息。
         */
        Boundary: {
            /**
             * 处理框在图片上的基准位置。可取值如下：
             * - topright：右上方
             * - topleft（默认）：左上方
             * - bottomright：右下方
             * - bottomleft：左下方
             * @example `topleft`
             */
            ReferPos: string;
            /**
             * 处理框相较于基准点的水平偏移，不同取值的含义如下：
             * - 取值为大于等于0的整数：表示距离基准位置的横向距离，单位为px。
             * - 取值为小数：表示横向距离像素值与图片整体宽度的比值，取值范围为\[0,1)。
             * @example `0`
             */
            X: number;
            /**
             * 处理框相较于基准点的垂直偏移，不同取值的含义如下：
             * - 取值为大于等于0的整数：表示距离基准位置的纵向距离，单位为px。
             * - 取值为小数：表示纵向距离像素值与图片整体高度的比值，取值范围为\[0,1)。
             * @example `0`
             */
            Y: number;
            /**
             * 处理框的高，不同取值的含义如下：
             * - 取值为大于等于0的整数：表示处理框高度，单位为px。
             * - 取值为小数：表示框纵向长度像素值与图片整体高度的比值，取值范围为\[0,1)。
             * @example `200`
             */
            Height: number;
            /**
             * 处理框的宽，不同取值的含义如下：
             * - 取值为大于等于0的整数：表示处理框宽度，单位为px。
             * - 取值为小数：表示框横向长度像素值与图片整体宽度的比值，取值范围为\[0,1)。
             * @example `200`
             */
            Width: number;
        };
        /**
         * 马赛克小块的半径大小。默认值为5，单位为px。
         * > 该参数对于添加高斯模糊与纯色块不生效。
         * @example `5`
         */
        MosaicRadius: number;
        /**
         * 高斯模糊的模糊半径，取值范围为1~50，默认值为3，单位为px。
         * > 该参数仅在添加高斯模糊时生效。
         * @example `3`
         */
        BlurRadius: number;
        /**
         * 高斯模糊的标准差，取值必须大于0，默认值为5。
         * > 该参数仅在添加高斯模糊时生效。
         * @example `5`
         */
        Sigma: number;
        /**
         * 纯色块的颜色，支持`#FFFFFF`形式与预设的`red`、`white`等关键字。默认值为#FFFFFF，即白色。
         * > 该参数仅在添加纯色块时生效。
         * @example `#FFFFFF`
         */
        Color: string;
    }[];
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
}
