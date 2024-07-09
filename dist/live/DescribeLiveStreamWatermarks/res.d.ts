export interface DescribeLiveStreamWatermarksResponse {
    /**
     * 符合条件的总个数。
     * @example `100`
     */
    Total: number;
    /**
     * 请求ID。
     * @example `5c6a2a0df228-4a64- af62-20e91b9676b3`
     */
    RequestId: string;
    WatermarkList: {
        /**
         * 水印模板列表。
         */
        Watermark: {
            /**
             * 水印类型。
             * - 0：图片（目前只支持图片）。
             * - 1：文字。
             * @example `0`
             */
            Type: number;
            /**
             * ⽔印X轴偏移，单位：px。
             * >相对于参考背景宽RefWidth， 如果选择的是TopLeft，那么XOffset是指⽔印图⽚的左上⻆和背景视频的左上⻆的相对位置X。其中坐标指向背景视频中⼼的⽅向为正⽅向，即X轴的正⽅向是向右。
             * @example `50.0`
             */
            XOffset: number;
            /**
             * 参考背景视频宽，单位：px。
             * @example `1920`
             */
            RefWidth: number;
            /**
             * ⽔印Y轴偏移，单位：px。
             * >相对于参考背景⾼RefHeight，如果选择的是TopLeft，那么YOffset是指⽔印图⽚的左上⻆和背景视频的左上⻆的相对位置Y。其中坐标指向背景视频中⼼的⽅向为正⽅向，即Y轴的正⽅向是向下。
             * @example `100.0`
             */
            YOffset: number;
            /**
             * 水印图片高度，单位：px。
             * @example `200`
             */
            Height: number;
            /**
             * 参考背景视频高，单位：px。
             * @example `1080`
             */
            RefHeight: number;
            /**
             * 水印图片链接。
             * @example `http://example.com`
             */
            PictureUrl: string;
            /**
             * 水印透明度，数值越小越透明。取值：0~255。
             * @example `255`
             */
            Transparency: number;
            /**
             * 自定义水印描述信息。
             * @example `my watermark`
             */
            Description: string;
            /**
             * 水印位置。
             * - TopLeft：左上。
             * - TopRight：右上。
             * - BottomLeft：左下。
             * - BottomRight：右下。
             * @example `TopRight`
             */
            OffsetCorner: string;
            /**
             * Domain下配置的水印规则数量
             * @example `12`
             */
            RuleCount: number;
            /**
             * 水印名称。
             * @example `livewatermark****`
             */
            Name: string;
            /**
             * 水印模板ID。
             * @example `445409ec-7eaa-4 61d-8f29-4bec2eb9 ****`
             */
            TemplateId: string;
        }[];
    };
}
