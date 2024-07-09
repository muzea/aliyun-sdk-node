export interface DetectImageElementsResponse {
    /**
     * 请求ID。
     * @example `7EE82437-AEC4-5AAF-819F-AB28C23EE0FC`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 元素列表。
         */
        Elements: {
            /**
             * 元素类型。包括：
             * UnType（未定义类型）、AllType（所有类型）、RootType（根类型）、Synthesis（组合元素图）、Embedded（所有嵌套类型）、Format（元素格式）、MajorObject（主体）、Character（文案）、Identifier（标识）、Background（背景）、Decoration（修饰）、MajorHuman（人物模特）、MajorAuction（商品）、MajorThing（物体）、MajorOther（其他主体）、CharMain（主文案）、CharSub（副文案）、CharAction（行动点文案）、CharContent（内容文案）、CharNumber（数字文案）、CharOther（其他文案）、IdentLogo（logo标识）、IdentLight（高亮标识）、IdentCode（码标识）、IdentOther（其他标识）、BackBitmap（位图背景）、BackVector（矢量图背景）、BackOther（其他背景）、DecoTile（平铺修饰）、DecoRegion（区域修饰）、DecoPieces（碎片修饰）、DecoEdge（贴边修饰）、DecoLine（线性修饰）、DecoBox（框型修饰）、DecoChar（行动点文案修饰）、DecoOther（其他修饰）、SynthMajor（主体组团）、SynthChar（文案组团）、SynthIdent（标识组团）、SynthBack（背景组团）、SynthDeco（修饰组团）、SynthOther（其他组团）、EmbedSvg（svg嵌套格式）、EmbedJson（JSON嵌套格式）、EmbedHtml（html嵌套格式）。
             * @example `majorhuman`
             */
            Type: string;
            /**
             * 元素宽度。
             * @example `285`
             */
            Width: number;
            /**
             * 元素高度。
             * @example `354`
             */
            Height: number;
            /**
             * 元素左上角Y轴坐标。
             * @example `78`
             */
            Y: number;
            /**
             * 置信度，取值范围`[0.0, 1.0]`。
             * @example `0.997097373008728`
             */
            Score: number;
            /**
             * 元素左上角X轴坐标。
             * @example `287`
             */
            X: number;
        }[];
    };
}
