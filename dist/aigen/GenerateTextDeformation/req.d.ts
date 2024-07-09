export interface GenerateTextDeformationRequest {
    /**
     * 用户输入的文字内容。输入限制如下：
     * - 小于6个字符。
     * - 支持中文、阿拉伯数字、英文字母。若提供ttf文件，字符的支持范围由ttf文件决定。
     * > **TtfUrl**和**FontName**参数二选一即可。
     * @example `文字创意`
     */
    "TextContent": string;
    /**
     * 用户传入的ttf格式字体文件。标准的ttf文件，文件大小小于30 MB。
     * > **TtfUrl**和**FontName**参数二选一即可。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/synthesis/GenerateTextDeformation/xxx01.ttf`
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
     * 生成的图片数量。取值范围为\[1, 4]，默认为1。
     * @example `1`
     */
    "N"?: number;
    /**
     * 1
     * @example `1`
     */
    "Async"?: boolean;
}
