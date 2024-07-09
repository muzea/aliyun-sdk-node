export interface GeneratePictureUploadSignRequest {
    /**
     * 参数说明
     */
    "body"?: {
        /**
         * 资源ID
         * @example `123123`
         */
        instanceId: number;
        /**
         * 资源类型：
         * - INCIDENT：事件图片
         * - ALERT：告警图片
         * - PROBLEM：故障图片
         * @example `INCIDENT`
         */
        instanceType: string;
        /**
         * 图片文件列表
         */
        files: {
            /**
             * 图片名称
             * @example `文件`
             */
            fileName: string;
            /**
             * 图片类型
             * 支持以下图片类型：
             * - JPEG
             * - PNG
             * - GIF
             * @example `JPG`
             */
            fileType: string;
            /**
             * 文件大小（byte）
             * @example `100`
             */
            fileSize: number;
        }[];
    };
}
