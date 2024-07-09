export interface GenerateVideoRequest {
    /**
     * 生成视频场景类型。取值如下：
     * - costume：服饰场景（默认）
     * - general：通用场景
     * - keeporder：强制按输入素材顺序合成视频场景
     * @example `costume`
     */
    "Scene"?: string;
    /**
     * 输出视频的width，取值范围32~2160。
     * @example `640`
     */
    "Width"?: number;
    /**
     * 输出视频的height，取值范围32~2160。若width和height均没有设置，则按照750×750输出。如果设置了其中一个，则按照1:1输出。
     * @example `640`
     */
    "Height"?: number;
    /**
     * 输出视频节奏。可选normal、fast、slow。默认为normal。
     * @example `fast`
     */
    "Style"?: string;
    /**
     * 输出视频时长，单位为秒。默认为20秒。
     * 视频输出最短为5秒，最长为60秒。
     * @example `10`
     */
    "Duration"?: number;
    /**
     * 输出视频时长自适应。取值true或false，为true时`Duration`设置不生效。
     * @example `true`
     */
    "DurationAdaption"?: boolean;
    /**
     * 镜头转场风格。共计15种风格。如果没有设置则按照`Style`随机。
     * 目前支持的镜头转场风格包括：basic（无）、slow（舒缓）、fast（动感）、normal（自然）、ink（水墨）、glitch（机械故障）、shift（切换）、mosaic（马赛克）、shutter（百叶窗）、zoom（缩放）、mask（遮罩）、brush（笔刷）、wind（风舞）、smog（烟雾）。
     * @example `brush`
     */
    "TransitionStyle"?: string;
    /**
     * 是否添加智能特效，默认为true。当前支持音画联动和静转动特效。
     * @example `true`
     */
    "SmartEffect"?: boolean;
    /**
     * 是否动态拼图特效，支持在单镜头中通过拼图展示多个视频图像素材。默认为false。
     * @example `true`
     */
    "PuzzleEffect"?: boolean;
    /**
     * 生成视频是否静音。默认为false。
     * > 如果没有音乐素材或视频素材无声时生成的视频没有音乐。
     * @example `true`
     */
    "Mute"?: boolean;
    /**
     * 1
     */
    "FileList": {
        /**
         * 输入文件类型。包括video、audio、image。
         * 可以同时输入多种素材（video+image+audio或video+image或video+audio或image+audio）。
         * @example `video`
         */
        Type: string;
        /**
         * 输入文件URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * 输入限制：
         * - 图片格式：JPG、PNG。
         * - 图片大小：每张图片大于30 KB，小于100 MB。
         * - 视频格式：MP4、AVI、MKV、MOV、JPG、PNG、BMP、MP3、WAV。
         * - 视频大小：不超过1 GB。
         * - 视频素材最多5个，且总时长不超过3分钟，超过部分会被自动截断丢弃（按输入视频顺序保留前3分钟）。图像素材最多40个。音频素材最多1个。
         * - URL地址中不能包含中文字符。
         * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/GenerateVideo/1-video1.mp4`
         */
        FileUrl: string;
        /**
         * 输入文件名称。视频音频文件格式为MP4或MP3时，可以忽略文件后缀。其他格式必须包含后缀。
         * @example `1-video1.mp4`
         */
        FileName: string;
    }[];
}
