export interface DescribeStudioLayoutsResponse {
    /**
     * 请求ID。
     * @example `5c6a2a0d-f228-4a64-af62-20e91b9676b3`
     */
    RequestId: string;
    /**
     * 布局信息。
     */
    StudioLayouts: {
        /**
         * 背景资源配置。
         */
        BgImageConfig: {
            /**
             * 该背景素材唯一ID。
             * @example `k12kj31****`
             */
            Id: string;
            /**
             * 素材地址URL。
             * @example ` http://example.org`
             */
            ImageUrl: string;
            /**
             * 位置id
             * @example `RV01`
             */
            LocationId: string;
            /**
             * 点播素材ID。
             * @example `asdfas9df89asd8f9****`
             */
            MaterialId: string;
        };
        /**
         * 通用布局信息。此布局为通用布局时，返回此字段。
         */
        CommonConfig: {
            /**
             * 视频资源绑定的通道位置ID。
             * @example `RV01`
             */
            ChannelId: string;
            /**
             * 视频资源ID。
             * @example `asdfasdfasdfasdfa****`
             */
            VideoResourceId: string;
        };
        /**
         * 图层顺序配置。
         */
        LayerOrderConfigList: {
            /**
             * 该资源的唯一ID。
             * @example `k12kj31****`
             */
            Id: string;
            /**
             * 资源配置的类型。取值：
             * - **background**：背景素材。
             * - **media**：多媒体素材。
             * @example `media`
             */
            Type: string;
        }[];
        /**
         * 演播厅布局ID。
         * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
         */
        LayoutId: string;
        /**
         * 演播厅布局名称。
         * @example `测试布局`
         */
        LayoutName: string;
        /**
         * 演播厅布局类型。取值：
         * - **common**：通用布局。
         * - **studio**：演播厅布局。
         * @example `studio`
         */
        LayoutType: string;
        /**
         * 多媒体输入资源配置。
         */
        MediaInputConfigList: {
            /**
             * 视频资源绑定的通道位置ID。
             * @example `RV01`
             */
            ChannelId: string;
            /**
             * 填充类型。默认为none。
             * @example `none`
             */
            FillMode: string;
            /**
             * 素材的高度归一化值。即素材与背景的高度比。取值：**0~1**。
             * @example `0.4`
             */
            HeightNormalized: number;
            /**
             * 该多媒体素材唯一ID。
             * @example `k12kj31****`
             */
            Id: string;
            /**
             * 点播图片素材ID。
             * @example `lkajsdfsa8fd89asd8****`
             */
            ImageMaterialId: string;
            /**
             * 多媒体素材编号。前端展示使用，无逻辑作用。
             * @example `1`
             */
            Index: number;
            /**
             * 素材的填充区位置归一化值[unk][x,y][unk]。x、y的取值范围分别为**0~1**。例如[unk][0.1,0.2][unk]代表左上角水平偏移10%，垂直偏移20%。
             */
            PositionNormalized: number[];
            /**
             * 素材的位置参考坐标值。默认为topLeft，表示位置设置以左上角为基准点。
             * @example `topLeft`
             */
            PositionRefer: string;
            /**
             * 视频资源ID。
             * @example `asdfasdfasdfasdfa****`
             */
            VideoResourceId: string;
            /**
             * 素材的宽度归一化值。即素材与背景的宽度比。取值：**0~1**。
             * @example `0.4`
             */
            WidthNormalized: number;
        }[];
        /**
         * 抠像输入配置。
         */
        ScreenInputConfigList: {
            /**
             * 音频配置信息。
             */
            AudioConfig: {
                /**
                 * 对应通道。
                 * @example `1`
                 */
                ValidChannel: string;
                /**
                 * 音量。
                 * @example `1.0`
                 */
                VolumeRate: number;
            };
            /**
             * 视频资源绑定的通道位置ID。
             * @example `RV01`
             */
            ChannelId: string;
            /**
             * 抠像色域。取值：
             * - **blue**：蓝幕背景。
             * - **green**：绿幕背景。
             * - **auto**：自动识别。
             * - **complex**：实景抠像。
             * @example `green`
             */
            Color: string;
            /**
             * 高度归一化值。即抠出的人像与背景的高度比。取值：**0~1**。
             * @example `0.4`
             */
            HeightNormalized: number;
            /**
             * 该抠像源素材唯一ID。
             * @example `k12kj31****`
             */
            Id: string;
            /**
             * 抠像源编号。前端展示使用，无逻辑作用。
             * @example `1`
             */
            Index: number;
            /**
             * 仅音频
             * @example `true`
             */
            OnlyAudio: boolean;
            /**
             * 人像类型。取值：
             * - **0**：半身。
             * - **1**：全身。
             * @example `0`
             */
            PortraitType: number;
            /**
             * 位置参数，坐标x。取值：**0~1**。素材位置以左上角为基准点。
             * @example `0.1`
             */
            PositionX: string;
            /**
             * 位置参数，坐标y。取值：**0~1**。素材位置以左上角为基准点。
             * @example `0.2`
             */
            PositionY: string;
            /**
             * 视频资源ID。
             * @example `asdfasdfasdfasdfa****`
             */
            VideoResourceId: string;
        }[];
    }[];
    /**
     * 布局数量。
     * @example `1`
     */
    Total: number;
}
