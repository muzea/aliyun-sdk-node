export interface DescribeCasterComponentsResponse {
    Components: {
        /**
         * 组件列表。
         */
        Component: {
            /**
             * Caption元素属性。
             */
            CaptionLayerContent: {
                /**
                 * 文字边框色彩。
                 * 取值范围为**0x000000~0xffffff**。默认：””，表示无效。
                 * @example `0x000000`
                 */
                BorderColor: string;
                /**
                 * 文字边框宽度归一化值。该归一化值是基于文字的size来计算的，即BorderWidth/FontSize。
                 * 如果系统归一化反计算出来的值超过**16**，取**16**。默认值为**0**。
                 * @example `0`
                 */
                BorderWidthNormalized: number;
                /**
                 * 文字色彩。取值范围为**0x000000~0xffffff**。
                 * @example `0x000000`
                 */
                Color: string;
                /**
                 * 字体名字取系统预设值。取值：
                 * - **KaiTi**：楷体。
                 * - **AlibabaPuHuiTi-Regular**：阿里巴巴普惠体-常规。
                 * - **AlibabaPuHuiTi-Bold**：阿里巴巴普惠体-粗体。
                 * - **NAlibabaPuHuiTi-Light**：阿里巴巴普惠体-细体。
                 * - **NotoSansHans-Regular**：思源黑体-常规。
                 * - **NotoSansHans-Bold**：思源黑体-粗体。
                 * - **NotoSansHans-Light**：思源黑体-细体。
                 * 默认为**KaiTi**。
                 * @example `KaiTi`
                 */
                FontName: string;
                /**
                 * 行间距。表示每两行字之间的间隔。默认值为0。
                 * @example `0`
                 */
                LineSpaceNormalized: number;
                /**
                 * 组件类型为caption时，表示引用的视频源Location（通道IChannelId）。
                 * @example `RV01`
                 */
                LocationId: string;
                /**
                 * 纠正当前字幕pts与语音pts偏差值。
                 * 取值范围为**-10000~+10000**。默认值为**0**。
                 * @example `0`
                 */
                PtsOffset: number;
                /**
                 * 是否显示源语言。取值：
                 * - **true**：显示。
                 * - **false**（默认值）：不显示。
                 * @example `false`
                 */
                ShowSourceLan: boolean;
                /**
                 * 字体归一化大小，字体设置大小为`[font_size,output_height]`。
                 * 如果系统根据归一化方式反计算的出来的字体大小大于**1024**，取**1024**。默认值为**-1**，表示无效。
                 * @example `0.1`
                 */
                SizeNormalized: number;
                /**
                 * 视频源的原始音频语言。取值：
                 * - **en**：英文。
                 * - **cn**（默认）：中文。
                 * - **es**：西班牙文。
                 * - **ru**：俄文。
                 * @example `cn`
                 */
                SourceLan: string;
                /**
                 * 视频源的目标音频语言。取值：
                 * - **en**：英文。
                 * - **cn**（默认）：中文。
                 * - **es**：西班牙文。
                 * - **ru**：俄文。
                 * @example `cn`
                 */
                TargetLan: string;
                /**
                 * 每行最大展示字数。
                 * @example `15`
                 */
                WordCountPerLine: number;
                /**
                 * 字间距，表示每两个字之间的间隔。默认值为**0**。
                 * @example `0`
                 */
                WordSpaceNormalized: number;
                /**
                 * 显示字数，可配合字体大小调整。
                 * 取值范围为**10~50**。默认值为**35**。
                 * @example `35`
                 */
                WordsCount: number;
            };
            /**
             * 组件ID。
             * @example `72d2ec7a-4cd7-4a01-974b-7cd53947****`
             */
            ComponentId: string;
            /**
             * 组件Layer的尺寸，布局等信息。
             */
            ComponentLayer: {
                /**
                 * Layer元素的高度归一化比例值，其中元素的宽度会按照该高度来进行等比缩放。
                 * 默认值为**0**，表示按照元素的原始尺寸进行显示。
                 * @example `0.5`
                 */
                HeightNormalized: number;
                PositionNormalizeds: {
                    Position: number[];
                };
                /**
                 * 元素的位置参考坐标值。取值：
                 * - **topLeft**（默认值）：左上。
                 * - **topRight**：右上。
                 * - **bottomLeft**：左下。
                 * - **bottomRight**：右下。
                 * @example `topLeft`
                 */
                PositionRefer: string;
                /**
                 * 该Layer的透明度，取值范围为0~255。
                 * **0**代表完全透明。**255**（默认）代表完全不透明。
                 * @example `200`
                 */
                Transparency: number;
                /**
                 * Layer元素的宽度归一化比例值，其中元素的高度会按照该宽度来进行等比缩放。默认值为**0**，表示按照元素的原始尺寸进行显示。
                 * > 该字段和heightNormalized有冲突。一旦同时设置，只有heightNormalized生效。如果只能设置一个，后面设置的值会影响前面的设置。
                 * @example `0.5`
                 */
                WidthNormalized: number;
            };
            /**
             * 组件名称，默认为组件ID。
             * @example `component_name`
             */
            ComponentName: string;
            /**
             * 组件类型。取值：
             * - **text**：文字组件。
             * - **image**：图像组件。
             * - **caption**：翻译字幕组件。
             * @example `text`
             */
            ComponentType: string;
            /**
             * 组件显示的特效。取值：
             *
             * - **none**：无。
             *
             * - **animateH**：水平滚动。
             *
             * - **animateV**：垂直滚动。
             * @example `animateV`
             */
            Effect: string;
            /**
             * Image元素属性。
             */
            ImageLayerContent: {
                /**
                 * 媒资库素材ID。
                 * @example `6cf724c6ebfd4a59b5b3cec6f10d****`
                 */
                MaterialId: string;
            };
            /**
             * 用于指定组件位置。
             * 每个位置至多设置一个组件，格式需符合“RC01…RC12”。
             * @example `RC01`
             */
            LocationId: string;
            /**
             * Text元素属性。
             */
            TextLayerContent: {
                /**
                 * 文字边框色彩。取值范围为**0x000000~0xffffff**。默认为**””**，表示无效。
                 * @example `0x000000`
                 */
                BorderColor: string;
                /**
                 * 文字边框宽度归一化值是基于文字的size来计算的，即**BorderWidth/FontSize**。
                 * 如果系统归一化反计算出来的值超过**16**，取**16**。默认值为**0**。
                 * @example `0`
                 */
                BorderWidthNormalized: number;
                /**
                 * 文字色彩。取值范围为**0x000000~0xffffff**。
                 * @example `0xff0000`
                 */
                Color: string;
                /**
                 * 字体名字取系统预设值。取值：
                 * - **KaiTi**：楷体。
                 * - **AlibabaPuHuiTi-Regular**：阿里巴巴普惠体-常规。
                 * - **AlibabaPuHuiTi-Bold**：阿里巴巴普惠体-粗体。
                 * - **NAlibabaPuHuiTi-Light**：阿里巴巴普惠体-细体。
                 * - **NotoSansHans-Regular**：思源黑体-常规。
                 * - **NotoSansHans-Bold**：思源黑体-粗体。
                 * - **NotoSansHans-Light**：思源黑体-细体。
                 * 默认为**KaiTi**。
                 * @example `KaiTi`
                 */
                FontName: string;
                /**
                 * 字体归一化大小。
                 * 设置大小为**font_size/output_height**。如果系统根据归一化方式反计算的出来的字体大小大于**1024**, 取**1024**。默认值为**-1**，表示无效。
                 * @example `16`
                 */
                SizeNormalized: number;
                /**
                 * 文本内容。
                 * @example `hello world`
                 */
                Text: string;
            };
        }[];
    };
    /**
     * 请求ID。
     * @example `3be7ade8-d907-483c-b24a-0dad4595beaf`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `3`
     */
    Total: number;
}
