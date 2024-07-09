export interface ImageModerationRequest {
    /**
     * 图片审核增强版支持的检测类型。取值：
     * - baselineCheck：通用基线检测
     * - baselineCheck_pro：通用基线检测_专业版
     * - baselineCheck_cb：通用基线检测_海外版
     * - tonalityImprove：内容治理检测
     * - aigcCheck：AIGC图片检测
     * - profilePhotoCheck：头像图片检测
     * - advertisingCheck：营销素材检测
     * - liveStreamCheck：视频/直播截图检测
     * @example `baselineCheck`
     */
    "Service"?: string;
    /**
     * 内容检测对象的相关参数集。JSON字符串格式。
     * - imageUrl：待检测对象的URL，必填。
     * - dataId：检测对象对应的数据ID，可选。
     * @example `{"imageUrl":"https://img.alicdn.com/tfs/TB1U4r9AeH2gK0jSZJnXXaT1FXa-2880-480.png","dataId":"img1234567"}`
     */
    "ServiceParameters"?: string;
}
