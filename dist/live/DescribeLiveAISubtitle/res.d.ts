export interface DescribeLiveAISubtitleResponse {
    /**
     * 请求ID。
     * @example `5c6a2a0df228-4a64- af62-20e91b96****`
     */
    RequestId: string;
    SubtitleConfigs: {
        /**
         * 字幕模板信息列表。
         */
        SubtitleConfig: {
            /**
             * 翻译目标语言
             * @example `zh-CN`
             */
            DstLanguage: string;
            /**
             * 源语言
             * @example `zh-CN`
             */
            SrcLanguage: string;
            /**
             * 字体颜色
             * @example `0xFFFFFF`
             */
            FontColor: string;
            /**
             * 字体
             * @example `AlibabaPuHuiTi-Regular`
             */
            FontName: string;
            /**
             * 是否显示源语言
             * @example `true`
             */
            ShowSourceLan: number;
            /**
             * 显示行数
             * @example `2`
             */
            MaxLines: number;
            /**
             * 每行显示字数
             * @example `20`
             */
            WordPerline: number;
            PositionNormalized: {
                /**
                 * 字幕位置信息
                 */
                Position: number[];
            };
            /**
             * 字幕背景颜色
             * @example `0xFF0000`
             */
            BgColor: string;
            /**
             * 字幕背景尺寸
             * @example `0.09`
             */
            BgWidthNormalized: number;
            /**
             * 字体粗细
             * @example `0.05`
             */
            BorderWidthNormalized: number;
            /**
             * 预览画面宽度
             * @example `1280`
             */
            Width: string;
            /**
             * 预览画面高度
             * @example `720`
             */
            Height: string;
            /**
             * 字幕模板名称
             * @example `sub1`
             */
            SubtitleName: string;
            /**
             * 字幕模板ID
             * @example `597991f3-6ef9-4100-9238-82951de1****`
             */
            SubtitleId: string;
            RulesRefer: {
                /**
                 * 字幕规则信息
                 */
                RulesId: string[];
            };
            /**
             * 字体尺寸
             * @example `0.037`
             */
            FontSizeNormalized: string;
            /**
             * 描述信息
             * @example `live AI subtitle template`
             */
            Description: string;
        }[];
    };
}
