export interface RecognizeIdcardRequest {
    /**
     * * 本字段和body字段二选一，不可同时传或同时为空。
     * * 图片链接（长度不超2048，不支持base64）。
     * @example `https://img.alicdn.com/tfs/TB1q5IeXAvoK1RjSZFNXXcxMVXa-483-307.jpg`
     */
    "Url"?: string;
    /**
     * * 本字段和URL字段二选一，不可同时传或同时为空。
     * * 图片二进制文件，最大10MB。
     * * 使用HTTP方式调用，把图片二进制文件放到HTTP body中上传即可。
     * * 使用SDK的方式调用，把图片放到SDK的body中即可。
     * @example `图片二进制文件`
     */
    "body"?: string;
    /**
     * * 是否需要图案检测功能，默认不需要。
     * * true：需要；false：不需要。
     * @example `false`
     */
    "OutputFigure"?: boolean;
    /**
     * * 是否需要身份证质量检测功能，默认不需要。
     * * 身份证质量检测功能包含：是否翻拍，是否是复印件，完整度评分，整体质量分数、篡改指数。
     * * 注意：如果需要设置此参数，请使用最新版本SDK。如果不需要设置此参数，您无需更新SDK。
     * @example `false`
     */
    "OutputQualityInfo"?: boolean;
}
