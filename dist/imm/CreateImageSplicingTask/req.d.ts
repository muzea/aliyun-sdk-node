export interface CreateImageSplicingTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 输入图片列表，拼接顺序为输入列表URI顺序。
     */
    "Sources": {
        /**
         * 源图片的OSS地址。
         * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
         * 支持的图片格式：jpg、png。
         * @example `oss://examplebucket/sampleobject.jpg`
         */
        URI: string;
        /**
         * 图片旋转角度。可取值如下：
         * - 0（默认）
         * - 90
         * - 180
         * - 270
         * @example `90`
         */
        Rotate: number;
    }[];
    /**
     * 输出图片存储的OSS地址。
     * OSS地址规则为oss://${bucketname}/${objectname}，其中${bucketname}为和当前项目处于同一地域的OSS Bucket名称，${objectname}为包含文件名称的文件路径。
     * @example `oss://examplebucket/outputImage.jpg`
     */
    "TargetURI": string;
    /**
     * 输出图片的压缩格式。可取值如下：
     * - jpg（默认）
     * - png
     * - webp
     * @example `jpg`
     */
    "ImageFormat"?: string;
    /**
     * 输出图片压缩质量，仅对jpg和webp图片格式生效。取值范围为0~100，默认值为80。
     * @example `80`
     */
    "Quality"?: number;
    /**
     * 图片拼接方法。可取值如下：
     * - vertical（默认）：垂直方向拓展，所有被拼接图片需要对齐宽度。
     * - horizontal：水平方向拓展，所有被拼接图片需要对齐高度。
     * @example `vertical`
     */
    "Direction"?: string;
    /**
     * 被拼接图片在对齐宽度或高度时的缩放方式。可取值如下：
     * - fit（默认）：缩放并不保留黑边（仅等比缩放）。
     * - stretch：拉伸以填满。
     * - horizon：仅垂直拉伸。
     * - vertical：仅水平拉伸。
     * @example `stretch`
     */
    "ScaleType"?: string;
    /**
     * 被拼接图片宽或高需要对齐的像素值。取值范围为1~4096。
     * - 当参数**Direction**取值为`vertical`时，此参数表示对齐宽度的像素值。
     * - 当参数**Direction**取值为`horizontal`时，此参数表示对齐高度的像素值。
     * > 若不填写此参数（默认），则默认与拼接的第一张图片的宽或高一致。
     * @example `192`
     */
    "Align"?: number;
    /**
     * 拼接后图片中子图的间隔，默认值为0，单位为px。
     * @example `2`
     */
    "Padding"?: number;
    /**
     * 拼接后图片的空白边缘，默认值为0，单位为px。
     * @example `2`
     */
    "Margin"?: number;
    /**
     * 参数`Padding`与`Margin`对应区域的填充颜色，支持`#FFFFFF`形式与预设的`red`、`alpha`等关键字。
     * @example `red`
     */
    "BackgroundColor"?: string;
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，用于方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `test-data`
     */
    "UserData"?: string;
    /**
     * 链式授权配置。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 自定义标签，用于对异步任务进行搜索、过滤。
     * @example `{
          "User": "Jane"
    }`
     */
    "Tags"?: any;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
}
