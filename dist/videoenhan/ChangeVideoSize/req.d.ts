export interface ChangeVideoSizeRequest {
    /**
     * 视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/ChangeVideoSize/ChangeVideoSize1.mp4`
     */
    "VideoUrl": string;
    /**
     * 输出视频的宽度，单位像素，取值范围32~2160。
     * @example `600`
     */
    "Width": number;
    /**
     * 输出视频的高度，单位像素，取值范围32~2160。
     * @example `1000`
     */
    "Height": number;
    /**
     * 裁剪方式，可选smart、fill、cut。具体含义如下所示。
     * - `smart`（智能裁剪）：根据主体位置智能决定填充还是裁剪，或者填充一部分，裁切一部分。
     * - `fill`（填充）：按最长边进行画幅调整，超出部分填充模糊背景或颜色，或者进行拉伸处理。
     * - `cut`（裁剪）：按最短边进行画幅调整，超出部分裁剪掉。
     * @example `smart`
     */
    "CropType"?: string;
    /**
     * 填充方式。包括image、color、stretch。具体含义如下所示。
     * - image：填充视频中间一帧的内容，填充前进行模糊处理。
     * - color：指定填充颜色，表示RGB值的数组，例如红色`[255,0,0]`。
     * - stretch：通过拉伸进行填充。如果画幅调整比例较大会导致画面扭曲严重，不推荐使用。
     *
     * @example `image`
     */
    "FillType"?: string;
    /**
     * 裁切框的紧凑度，取值范围0~1。值越大裁掉的内容越多。默认值为0.6。
     * @example `0.5`
     */
    "Tightness"?: number;
    /**
     * 当FillType取值为`color`时需要设置。表示RGB值中R的取值。
     * @example `0`
     */
    "R"?: number;
    /**
     * 当FillType取值为`color`时需要设置。表示RGB值中G的取值。
     * @example `0`
     */
    "G"?: number;
    /**
     * 当FillType取值为`color`时需要设置。表示RGB值中B的取值。
     * @example `0`
     */
    "B"?: number;
}
