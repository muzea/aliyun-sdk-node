export interface ImAuditRequest {
    /**
     * 图片URL的JSON数组，默认最多处理5张。可以通过**MPS控制台** > **媒体管理** > **媒体列表**获取。图片和文本至少填写一个。待审核图片文件需要符合下述限制，否则可能导致任务失败：
     * - 图片大小不超过20 MB，高度或宽度不超过30000px，且图片总像素不超过2.5亿px。
     * - （建议）图片像素不低于256×256px，像素过低可能会影响审核效果。
     * @example `["http://127.66.**.**​/image.jpeg","http://127.66.**.**​/photo.jpeg"]`
     */
    "Images"?: string;
    /**
     * 文本JSON数组，用户自定义数组，默认最多处理5段文本，每段文本最长10,000个字符（包含标点）。图片和文本至少填写一个。
     * @example `["你好呀","你是谁","我在哪里"]`
     */
    "Contents"?: string;
    /**
     * 场景说明，用于指定审核场景。支持指定多个场景，用半角逗号（,）分隔。例如，{"porn","terrorism"}表示对图片同时进行智能鉴黄和暴恐涉政检测。取值：
     * - porn：图片智能鉴黄。
     * - terrorism：图片暴恐涉政。
     * - ad：图文违规。
     * - qrcode：图片二维码。
     * - live：图片不良场景。
     * - logo：图片logo。
     * - antispam：文本反垃圾（仅对文本生效）。
     * @example `["porn","terrorism","ad"]`
     */
    "Scenes": string;
    /**
     * 默认为公共配置。
     * @example `139440480445****`
     */
    "BizType"?: string;
}
