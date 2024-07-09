export interface AddWatermarkRequest {
    /**
     * 水印模板类型：
     * - **Image**（默认）：图片水印模板。
     * - **Text**：文字水印模板。
     * @example `Image`
     */
    "Type": string;
    /**
     * 水印模板名称。
     * - 仅支持中英文、数字。
     * - 长度不超过128个字节。
     * - UTF-8编码。
     * @example `图片水印模板`
     */
    "Name": string;
    /**
     * 图文水印的配置信息（JSON字符串），包括水印显示位置、水印效果等配置。图片水印和文字水印的配置参数不同，参数结构详情，请参见[WatermarkConfig](~~98618#section-h01-44s-2lr~~) 。
     * @example `{
          "Width": "55",
          "Height": "55",
          "Dx": "9",
          "Dy": "9",
          "ReferPos": "BottomLeft"
    }`
     */
    "WatermarkConfig": string;
    /**
     * 水印图片文件的OSS地址（不带鉴权）。
     * >- 设置图片水印模板（`Type`为`Image`）时，本参数必传。
     * >- 您可以调用[CreateUploadAttachedMedia](~~CreateUploadAttachedMedia~~)接口将水印图片上传到视频点播中，上传后返回参数`FileURL`的值可作为本参数的请求参数。
     * @example `http://outin-326268*****63e1403e7.oss-cn-shanghai.aliyuncs.com/image/cover/C99345*****E7FDEC-6-2.png`
     */
    "FileUrl"?: string;
    /**
     * 应用ID。默认取值：**app-1000000**。若已开通多应用体系，传入应用ID，可将水印模板添加到指定应用下。使用说明，请参见[多应用体系](~~113600~~)。
     * @example `app-****`
     */
    "AppId"?: string;
}
