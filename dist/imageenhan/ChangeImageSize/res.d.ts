export interface ChangeImageSizeResponse {
    /**
     * 请求ID。
     * @example `2833446F-A431-40EB-A502-6EC9DFEEEEB0`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 尺寸变换后的图像URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://ivpd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/upload/result_filter/2019-11-21/invi_filter_015743271470661000112_NVKmET.png?Expires=1574586347&OSSAccessKeyId=LTAI4FeJ8qKkYn6SrHhQ****&Signature=QqRAiqvyXsVlZ77M8yFc5QKJDE****`
         */
        Url: string;
        /**
         * 原图数据在生成图像中的坐标信息。
         */
        RetainLocation: {
            /**
             * 输出根据指定宽度等比缩放后的原图宽度。单位：像素。
             * @example `298`
             */
            Width: number;
            /**
             * 输出根据指定高度等比缩放后的原图高度。单位：像素。
             * @example `224`
             */
            Height: number;
            /**
             * 原图左上角y坐标。
             * @example `0`
             */
            Y: number;
            /**
             * 原图左上角x坐标。
             * @example `0`
             */
            X: number;
        };
    };
}
