export interface UpdateLiveStreamWatermarkRequest {
    /**
     * 水印模板ID。
     * >可查看[AddLiveStreamWatermark](~~410759~~)接口返回参数值获取TemplateId。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "TemplateId": string;
    /**
     * 水印名称。
     * @example `livewatermark****`
     */
    "Name"?: string;
    /**
     * 自定义水印描述信息。
     * @example `my watermark`
     */
    "Description"?: string;
    /**
     * 参考背景视频宽，单位：px。
     * @example `1920`
     */
    "RefWidth"?: number;
    /**
     * 参考背景视频高，单位：px。
     * @example `1080`
     */
    "RefHeight"?: number;
    /**
     * ⽔印X轴偏移，单位：px。
     * >相对于参考背景宽RefWidth， 如果选择的是TopLeft，那么XOffset是指⽔印图⽚的左上⻆和背景视频的左上⻆的相对位置X。其中坐标指向背景视频中⼼的⽅向为正⽅向，即X轴的正⽅向是向右。
     * @example `50.0`
     */
    "XOffset"?: number;
    /**
     * ⽔印Y轴偏移，单位：px。
     * >相对于参考背景⾼RefHeight，如果选择的是TopLeft，那么YOffset是指⽔印图⽚的左上⻆和背景视频的左上⻆的相对位置Y。其中坐标指向背景视频中⼼的⽅向为正⽅向，即Y轴的正⽅向是向下。
     * @example `100.0`
     */
    "YOffset"?: number;
    /**
     * 水印图片高度，单位：px。对比参考背景RefHeight，最终按照⽐例进⾏⾃适应缩放为准。
     * @example `200`
     */
    "Height"?: number;
    /**
     * 水印透明度，数值越小越透明。取值：0~255。
     * @example `255`
     */
    "Transparency"?: number;
    /**
     * 位置。取值：
     * - TopLeft：左上。
     * - TopRight：右上。
     * - BottomLeft：左下。
     * - BottomRight：右下。
     * @example `TopRight`
     */
    "OffsetCorner"?: string;
    /**
     * 水印图片链接。
     * @example `http://example.com`
     */
    "PictureUrl"?: string;
}
