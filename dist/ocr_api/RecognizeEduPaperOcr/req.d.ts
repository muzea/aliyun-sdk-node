export interface RecognizeEduPaperOcrRequest {
    /**
     * * 本字段和body字段二选一，不可同时透传或同时为空。
     * * 图片链接（长度不超2048，不支持base64）。
     * @example `https://img.alicdn.com/tfs/TB1Wo7eXAvoK1RjSZFDXXXY3pXa-2512-3509.jpg`
     */
    "Url"?: string;
    /**
     * * 本字段和URL字段二选一，不可同时透传或同时为空。
     * * 图片二进制文件，最大10MB。
     * * 使用HTTP方式调用，把图片二进制文件放到HTTP body中上传即可。
     * * 使用SDK的方式调用，把图片放到SDK的body中即可。
     * @example `图片二进制文件`
     */
    "body"?: string;
    /**
     * * 图片类型。
     * * scan：扫描图， photo：实拍图。
     * @example `scan：扫描图， photo：实拍图`
     */
    "ImageType": string;
    /**
     * * 年级学科。
     * * default:默认, Math:数学, PrimarySchool_Math:小学数学, JHighSchool_Math: 初中数学, Chinese:语文, PrimarySchool_Chinese:小学语文, JHighSchool_Chinese:初中语文, English:英语, PrimarySchool_English:小学英语, JHighSchool_English:初中英语, Physics:物理, JHighSchool_Physics:初中物理, Chemistry: 化学, JHighSchool_Chemistry:初中化学, Biology:生物, JHighSchool_Biology:初中生物, History:历史, JHighSchool_History:初中历史, Geography:地理, JHighSchool_Geography:初中地理, Politics:政治, JHighSchool_Politics:初中政治。
     * @example `default:默认, Math:数学, PrimarySchool_Math:小学数学, JHighSchool_Math: 初中数学, Chinese:语文, PrimarySchool_Chinese:小学语文, JHighSchool_Chinese:初中语文, English:英语, PrimarySchool_English:小学英语, JHighSchool_English:初中英语, Physics:物理, JHighSchool_Physics:初中物理, Chemistry: 化学, JHighSchool_Chemistry:初中化学, Biology:生物, JHighSchool_Biology:初中生物, History:历史, JHighSchool_History:初中历史, Geography:地理, JHighSchool_Geography:初中地理, Politics:政治, JHighSchool_Politics:初中政治`
     */
    "Subject"?: string;
    /**
     * * 是否输出原图坐标信息（如果图片被做过旋转，图片校正等处理），默认不需要。
     * * true：需要；false：不需要。
     * @example `false`
     */
    "OutputOricoord"?: boolean;
}
