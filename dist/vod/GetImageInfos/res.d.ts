export interface GetImageInfosResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58*****`
     */
    RequestId: string;
    /**
     * 图片信息列表。
     */
    ImageInfo: {
        /**
         * 图片创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-11-21T02:37:23Z`
         */
        CreationTime: string;
        /**
         * 图片文件的存储地址。
         * @example `outin-****..oss-cn-shanghai.aliyuncs.com`
         */
        StorageLocation: string;
        /**
         * 图片状态。取值：
         * - **Uploading**：初始状态，表示图片正在上传。
         * - **Normal**：图片上传成功。
         * - **UploadFail**：图片上传失败。
         * @example `Uploading`
         */
        Status: string;
        /**
         * 分类ID。
         * @example `254766071`
         */
        CateId: number;
        /**
         * 图片标签。多个标签之间使用半角逗号（,）分隔。
         * @example `tag1,tag2,tag3`
         */
        Tags: string;
        /**
         * 图片类型。取值：
         * - **default**：普通图片
         * - **cover**：视频封面图
         * @example `default`
         */
        ImageType: string;
        /**
         * 分类名称。
         * @example `测试`
         */
        CateName: string;
        /**
         * 图片描述。
         * @example `测试描述`
         */
        Description: string;
        /**
         * 应用ID。
         * @example `app-****`
         */
        AppId: string;
        /**
         * 图片访问地址（如果配置了CDN域名则为CDN地址，否则为OSS地址）。
         * @example `http://example.aliyundoc.com/image/default/****.gif?auth_key=****`
         */
        URL: string;
        /**
         * 图片标题。
         * @example `this is a sample`
         */
        Title: string;
        /**
         * 图片ID。
         * @example `bbc65bba53f9*****ed90de118a7849`
         */
        ImageId: string;
        /**
         * 图片源信息。
         */
        Mezzanine: {
            /**
             * 图片文件的OSS地址。
             * @example `https://outin-bfefbb*****163e1c7426.oss-cn-XXXXXXXX.aliyuncs.com/image/default/5E84CD536*****D4DAD.png?Expires=1590982353&OSSAccessKeyId=*****&Signature=ALPET74o*****c%3D`
             */
            FileURL: string;
            /**
             * 上传的图片源文件地址。
             * @example `****.gif`
             */
            OriginalFileName: string;
            /**
             * 图片宽度。单位：像素。
             * @example `200`
             */
            Width: number;
            /**
             * 图片高度。单位：像素。
             * @example `200`
             */
            Height: number;
            /**
             * 文件大小。单位：字节。
             * @example `8932`
             */
            FileSize: string;
        };
    }[];
    /**
     * 不存在的图片ID列表。
     */
    NonExistImageIds: string[];
}
