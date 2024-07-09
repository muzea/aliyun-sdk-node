export interface ListImagesResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F`
     */
    RequestId: string;
    /**
     * 镜像信息组成的数组。
     */
    Images: {
        /**
         * 镜像类型。可能值：
         * - system：系统镜像
         * - app：应用镜像
         * - custom：自定义镜像
         * @example `app`
         */
        ImageType: string;
        /**
         * 描述信息。
         * @example `WordPress是博客和内容管理网站的工具平台，借助第三方开发的模板、插件，用户可实现多样化的个性化功能。该镜像基于CentOS 7.3 64位操作系统。`
         */
        Description: string;
        /**
         * 镜像名称。
         * @example `WordPress-4.8.1`
         */
        ImageName: string;
        /**
         * 镜像ID。
         * @example `794c230fd3e64ea19f83f4d7a0ad****`
         */
        ImageId: string;
        /**
         * 镜像所使用的操作系统类型。可能值：
         * - Linux：Linux系统
         * - Windows：Windows系统
         * @example `Linux`
         */
        Platform: string;
    }[];
}
