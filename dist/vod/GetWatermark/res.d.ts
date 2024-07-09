export interface GetWatermarkResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A*****F6-D7393642CA58`
     */
    RequestId: string;
    /**
     * 图文水印模板信息。
     */
    WatermarkInfo: {
        /**
         * 水印模板的创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-11-06T08:03:17Z`
         */
        CreationTime: string;
        /**
         * 水印模板的类型：
         * - **Image**：图片水印模板。
         * - **Text**：文字水印模板。
         * @example `Image`
         */
        Type: string;
        /**
         * 是否是默认图文水印模板：
         * - **Default**：默认图文水印模板。
         * - **NotDefault**：非默认图文水印模板。
         * @example `NotDefault`
         */
        IsDefault: string;
        /**
         * 水印文件URL（OSS地址或CDN地址）。
         * > 仅图片水印模板会返回此参数。
         * @example `https://outin-32*****f4b3e7.oss-cn-shanghai.aliyuncs.com/image/cover/F85529C8B715E6F8A72EC6B-6-2.png?Expires=1541600583&OSSAccessKeyId=****&Signature=gmf1eYMoDVg%2BHQCb4UGozBW****`
         */
        FileUrl: string;
        /**
         * 应用ID。
         * @example `app-****`
         */
        AppId: string;
        /**
         * 图文水印的配置信息（JSON字符串），包括水印显示位置、水印效果等配置。图片水印和文字水印的配置参数不同，参数结构详情，请参见[WatermarkConfig](~~98618#section-h01-44s-2lr~~) 。
         * @example `{"ReferPos": "BottomRight","Height": "55","Width": "55","Dx": "8","Dy": "8" }`
         */
        WatermarkConfig: string;
        /**
         * 水印模板名称。
         * @example `图片水印测试`
         */
        Name: string;
        /**
         * 水印模板ID。
         * @example `505e2e287ea*****ecfddd386d384`
         */
        WatermarkId: string;
    };
}
