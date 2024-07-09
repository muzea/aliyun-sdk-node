export interface GenerateTextTextureRequest {
    /**
     * 用户输入的文字图像URL。输入限制如下：
     * - 图像大小小于5 MB，黑底白字。
     * - 图像格式：JPG、PNG、JPEG、BMP。
     * - 宽高比不超过2:1，图像最长边不超过2048像素。
     * > - 当图像分辨率超过最大限制时，请先将图片进行缩放，调整图片大小，具体请参见[图片缩放](~~44688~~)。
     * - 若输入**ImageUrl**字段，则不能使用与文字输入相关的字段：**TextContent**、**TtfUrl**、**FontName**和**OutputImageRatio**。
     * - URL地址中不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/aigen/xxx01.png`
     */
    "ImageUrl"?: string;
    /**
     * 用户输入的文字内容。输入限制如下：
     * - 小于6个字符，且不能为空。
     * - 支持中文、阿拉伯数字、英文字母。若提供ttf文件，字符的支持范围由ttf文件决定。
     * > **TtfUrl**和**FontName**参数二选一即可。
     * @example `文字创意`
     */
    "TextContent"?: string;
    /**
     * 用户传入的ttf格式字体文件。标准的ttf文件，文件大小小于30 MB。
     * > **TtfUrl**和**FontName**参数二选一即可。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/aigen/xxx02.png`
     */
    "TtfUrl"?: string;
    /**
     * 使用预置字体的名称。取值范围如下：
     * - **dongfangdakai**（默认）：阿里妈妈东方大楷
     * - **puhuiti_m**：阿里巴巴普惠体
     * - **shuheiti**：阿里妈妈数黑体
     * - **jinbuti**：钉钉进步体
     * - **kuheiti**：站酷酷黑体
     * - **kuaileti**：站酷快乐体
     * - **wenyiti**：站酷文艺体
     * - **logoti**：站酷小薇LOGO体
     * - **cangeryuyangti_m**：站酷仓耳渔阳体
     * - **siyuansongti_b**：思源宋体
     * - **siyuanheiti_m**：思源黑体
     * - **fangzhengkaiti**：方正楷体
     * > **TtfUrl**和**FontName**参数任选其一即可。
     * @example `dongfangdakai`
     */
    "FontName"?: string;
    /**
     * 文字输入的图片的宽高比。取值范围如下：
     * - 1:1（默认）
     * - 16:9
     * - 9:16
     * @example `1:1`
     */
    "OutputImageRatio"?: string;
    /**
     * 期望文字纹理创意样式的描述提示词。长度小于200，且不能为空。
     * @example `水果，蔬菜`
     */
    "Prompt": string;
    /**
     * 纹理风格的类型。取值范围如下：
     * - material（默认）：立体材质
     * - scene：场景融合
     * @example `material`
     */
    "TextureStyle"?: string;
    /**
     * 生成的图片短边的长度。取值范围为[512, 1024]， 若输入数值非64的整数倍数，则最终取值为不大于该数值的能被64整除的最大数。默认为704。
     * @example `512`
     */
    "ImageShortSize"?: number;
    /**
     * 生成的图片数量。取值范围为\[1, 4]，默认为1。
     * @example `1`
     */
    "N"?: number;
    /**
     * 是否返回带alpha通道的图片。取值范围如下：
     * - true：带回。
     * - false（默认）：不带回。
     * @example `false`
     */
    "AlphaChannel"?: boolean;
}
