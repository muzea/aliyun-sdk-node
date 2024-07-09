export interface StartStreamingOutRequest {
    /**
     * 单元格设置。
     */
    "Panes"?: {
        /**
         * 单元格媒体类型。取值：
         * - **video**：用户摄像头或者屏幕共享流（默认值）。
         * - **camera**：摄像头流。
         * - **screen**：共享屏幕流。
         * @example `video`
         */
        SourceType: string;
        /**
         * 窗格ID，从0开始。
         * @example `0`
         */
        PaneId: string;
        /**
         * 单元格媒体源。可指定userId，如需指定特定用户类型。可使用通配符配置，支持以下类型。
         * -    **$ActiveSpeaker**：当前频道发言人
         * -    **$ScreenShare**： 屏幕共享用户，当频道中有多个屏幕共享时，将按照先后顺序依次填充
         */
        Source: string;
        /**
         * 裁剪方式。取值：
         * - **1**：保持比例裁剪。
         * - **2**：保持比例留边。
         * - **3**：拉伸铺满。
         * @example `2`
         */
        PaneCropMode: number;
        /**
         * 窗格局部图片水印。
         */
        Images: {
            /**
             * 对应的图片内容在推流期间不支持更新。
             * @example `https://aliyun.com/123xxx.jpg`
             */
            Url: string;
            /**
             * 透明度。
             * @example `0.9`
             */
            Alpha: number;
            /**
             * 裁剪方式。取值：
             * - **1**：保持比例裁剪。
             * - **2**：保持比例留边。
             * - **3**：拉伸铺满。
             * @example `2`
             */
            PaneImageCropMode: number;
            /**
             *
             * @example `0.2`
             */
            X: number;
            /**
             *
             * @example `0.3`
             */
            Y: number;
            /**
             *
             * @example `0.2`
             */
            Width: number;
            /**
             *
             * @example `0.2`
             */
            Height: number;
            /**
             * z轴层级。
             * @example `0`
             */
            Layer: number;
        }[];
        /**
         * 窗格局部文字水印。
         */
        Texts: {
            /**
             * 水印内容。
             * @example `文字水印`
             */
            Texture: string;
            /**
             * 字体大小。
             * @example `36`
             */
            FontSize: number;
            /**
             * 水印透明度。
             * @example `0.9`
             */
            Alpha: number;
            /**
             * 字体颜色。
             */
            FontColor: {
                /**
                 *
                 * @example `255`
                 */
                R: number;
                /**
                 *
                 * @example `255`
                 */
                G: number;
                /**
                 *
                 * @example `255`
                 */
                B: number;
            };
            /**
             * 字体。
             * - **0**：阿里巴巴普惠体 Regular
             * - **1**：阿里巴巴普惠体 Light
             * - **2**：阿里巴巴普惠体Medium
             * - **3**：阿里巴巴普惠体 Bold
             * - **4**：阿里巴巴普惠体 Heavy
             * - **5**：阿里妈妈数黑体
             * - **6**：钉钉进步体
             * - **7**：阿里妈妈刀隶体
             * - **8**：阿里妈妈东方大楷
             * - **9**：阿里妈妈方圆体
             * @example `0`
             */
            Font: number;
            /**
             *
             * @example `0.2`
             */
            X: number;
            /**
             *
             * @example `0.2`
             */
            Y: number;
            /**
             * z轴层级。
             * @example `0`
             */
            Layer: number;
            /**
             * 是否需要矩形框。
             */
            HasBox: boolean;
            /**
             * 矩形框颜色。
             */
            BoxColor: {
                /**
                 *
                 * @example `255`
                 */
                R: number;
                /**
                 *
                 * @example `255`
                 */
                G: number;
                /**
                 *
                 * @example `255`
                 */
                B: number;
            };
            /**
             * 矩形框透明度。
             * @example `0.6`
             */
            BoxAlpha: number;
            /**
             * 矩形框线宽。
             * @example `5`
             */
            BoxBorderw: number;
        }[];
    }[];
    /**
     * 应用ID，通过控制台创建和查询，仅支持传单个ID。
     * @example `eo85****`
     */
    "AppId": string;
    /**
     * 已存在的频道ID，仅支持传单个ID。
     * @example `testid`
     */
    "ChannelId": string;
    /**
     * 模版ID。
     * @example `567`
     */
    "TemplateId": string;
    /**
     * 直播推流地址，仅支持传单个地址。
     * @example `rtmp://example.com/live/stream`
     */
    "Url": string;
    /**
     * 本次旁路推流的任务ID，仅支持传单个ID。由大小写字母、数字、下划线、短划线（-）组成，最大55字节，不填，则由系统自动生成。
     * @example `123`
     */
    "TaskId"?: string;
    /**
     * 裁剪方式。取值：
     * - **1**：保持比例裁剪。
     * - **2**：保持比例留边（默认值）。
     * - **3**：拉伸铺满。
     * @example `2`
     */
    "CropMode"?: number;
    /**
     * 全局图片水印。
     */
    "Images"?: {
        /**
         * 图片地址。对应的图片内容在推流期间不支持更新
         * @example `https://aliyun.com/123xxx.jpg`
         */
        Url: string;
        /**
         * 透明度。
         * @example `0.9`
         */
        Alpha: number;
        /**
         * 裁剪方式。取值：
         * - **1**：保持比例裁剪。
         * - **2**：保持比例留边。
         * - **3**：拉伸铺满。
         * @example `2`
         */
        ImageCropMode: number;
        /**
         *
         * @example `0.2`
         */
        X: number;
        /**
         *
         * @example `0.2`
         */
        Y: number;
        /**
         *
         * @example `0.2`
         */
        Width: number;
        /**
         *
         * @example `0.2`
         */
        Height: number;
        /**
         * z轴层级。
         * @example `0`
         */
        Layer: number;
    }[];
    /**
     * 全局文字水印。
     */
    "Texts"?: {
        /**
         * 水印内容。
         * @example `文字水印`
         */
        Texture: string;
        /**
         * 字体大小。
         * @example `36`
         */
        FontSize: number;
        /**
         * 水印透明度。
         * @example `0.1`
         */
        Alpha: number;
        /**
         * 字体颜色。
         */
        FontColor: {
            /**
             *
             * @example `255`
             */
            R: number;
            /**
             *
             * @example `255`
             */
            G: number;
            /**
             *
             * @example `255`
             */
            B: number;
        };
        /**
         * 字体。
         * - **0**：阿里巴巴普惠体 Regular
         * - **1**：阿里巴巴普惠体 Light
         * - **2**：阿里巴巴普惠体Medium
         * - **3**：阿里巴巴普惠体 Bold
         * - **4**：阿里巴巴普惠体 Heavy
         * - **5**：阿里妈妈数黑体
         * - **6**：钉钉进步体
         * - **7**：阿里妈妈刀隶体
         * - **8**：阿里妈妈东方大楷
         * - **9**：阿里妈妈方圆体
         * @example `0`
         */
        Font: number;
        /**
         *
         * @example `0.2`
         */
        X: number;
        /**
         *
         * @example `0.2`
         */
        Y: number;
        /**
         * z轴层级。
         * @example `0`
         */
        Layer: number;
        /**
         * 是否需要矩形框。
         */
        HasBox: boolean;
        /**
         * 矩形框颜色。
         */
        BoxColor: {
            /**
             *
             * @example `255`
             */
            R: number;
            /**
             *
             * @example `255`
             */
            G: number;
            /**
             *
             * @example `255`
             */
            B: number;
        };
        /**
         * 矩形框透明度。
         * @example `0.6`
         */
        BoxAlpha: number;
        /**
         * 矩形框线宽。
         * @example `5`
         */
        BoxBorderw: number;
    }[];
    /**
     * 全局时钟水印。
     */
    "ClockWidgets"?: {
        /**
         * 时区。
         * @example `8`
         */
        Zone: number;
        /**
         * 时钟字体大小。
         * @example `30`
         */
        FontSize: number;
        /**
         * 透明度。
         * @example `0.9`
         */
        Alpha: number;
        /**
         * 字体颜色。
         */
        FontColor: {
            /**
             *
             * @example `255`
             */
            R: number;
            /**
             *
             * @example `255`
             */
            G: number;
            /**
             *
             * @example `255`
             */
            B: number;
        };
        /**
         * 字体。
         * - **0**：阿里巴巴普惠体 Regular
         * - **1**：阿里巴巴普惠体 Light
         * - **2**：阿里巴巴普惠体Medium
         * - **3**：阿里巴巴普惠体 Bold
         * - **4**：阿里巴巴普惠体 Heavy
         * - **5**：阿里妈妈数黑体
         * - **6**：钉钉进步体
         * - **7**：阿里妈妈刀隶体
         * - **8**：阿里妈妈东方大楷
         * - **9**：阿里妈妈方圆体
         * @example `0`
         */
        Font: number;
        /**
         *
         * @example `0.2`
         */
        X: number;
        /**
         *
         * @example `0.2`
         */
        Y: number;
        /**
         * z轴层级。
         * @example `0`
         */
        Layer: number;
        /**
         * 是否需要矩形框。
         */
        HasBox: boolean;
        /**
         * 矩形框颜色。
         */
        BoxColor: {
            /**
             *
             * @example `255`
             */
            R: number;
            /**
             *
             * @example `255`
             */
            G: number;
            /**
             *
             * @example `255`
             */
            B: number;
        };
        /**
         * 矩形框透明度。
         * @example `0.6`
         */
        BoxAlpha: number;
        /**
         * 矩形框线宽。
         * @example `5`
         */
        BoxBorderw: number;
    }[];
}
