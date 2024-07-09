export interface AddFaceVideoTemplateRequest {
    /**
     * 视频模板的URL地址。当前仅支持上海地域的OSS链接，如何生成URL请参见[文件URL处理](~~155645~~)。
     * @example `http://invi-label.oss-cn-shanghai.aliyuncs.com/labl/temp/faceswap/test_for_api/xxxx.mp4`
     */
    "VideoURL": string;
    /**
     * 判断视频换脸场景。取值如下：
     * - single（默认）：单人视频换脸。
     * - multi：多人视频换脸。
     * > - 如果输入视频为单人物视频，**VideoScene**参数可以选择不输入或者传入`single`。
     * - 如果输入视频为多人视频，**VideoScene**参数必须传入`multi`，后续可通过模板换脸接口进行多人一对一指定人脸融合。
     * - 如果输入视频为多人视频，但用户只想替换其中某一个ID人物，则按照多人视频场景进行模板添加，即**VideoScene**参数传入`multi`值，后续可通过模板换脸接口指定想融合的具体人物。
     * @example `single`
     */
    "VideoScene"?: string;
}
