export interface ScanImageRequest {
    /**
     * 1
     */
    "Task": {
        /**
         * 图片创建或编辑时间，单位为毫秒。
         * @example `1`
         */
        ImageTimeMillisecond: number;
        /**
         * 截帧频率，GIF图或者长图检测专用。GIF图可理解为图片数组，每**interval**张图片抽取一张进行检测。只有该值存在时，才会对GIF进行截帧。长图同时支持长竖图和长横图。
         * - 长竖图（高大于400像素，高宽比大于2.5），会按照`高/宽`取整来计算总图数，并进行切割。
         * - 长横图（宽大于400像素，宽高比大于2.5），会按照`宽/高`取整来计算总图数，并进行切割。
         * > 默认只会检测GIF图或长图的第一帧，interval参数用于指示后台在检测时可按照该间隔跳着检测，以节省检测成本。需要与maxFrames参数组合使用。例如，设置interval为2，maxFrames为100，检测长图或GIF图时，将每间隔1帧检测一次，最多检测100帧，计费则按照实际检测的数量计算。
         * @example `1`
         */
        Interval: number;
        /**
         * 待检测图像的URL地址。支持HTTP和HTTPS协议。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * > 如果使用上海地域的OSS链接，系统会自动将OSS链接地址转成内网地址然后再下载文件，所以调用该接口并不会产生OSS流量计费。
         * @example `http://xxx.xxx.com/xxx.jpg`
         */
        ImageURL: string;
        /**
         * 最大截帧数量，GIF图或长图检测专用，默认值为1。
         * 当interval*maxFrames小于该图片所包含的图片数量时，截帧间隔会自动修改为`该图片所包含的图片数/maxFrames`，以提高整体检测效果。
         * @example `1`
         */
        MaxFrames: number;
        /**
         * 数据ID。需要保证在一次请求中所有的ID不重复。
         * @example `uuid-xxxx-xxxx-1234`
         */
        DataId: string;
    }[];
    /**
     * 1
     * @example `porn`
     */
    "Scene": string[];
}
