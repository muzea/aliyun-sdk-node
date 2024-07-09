export interface ListClientPluginVersionsResponse {
    /**
     * 客户端插件版本信息
     */
    ClientPluginVersions: {
        /**
         * 版本名称
         * @example `1.1.1.20180103102554-3`
         */
        Version: string;
        /**
         * 下载地址
         * @example `http://xxxxx.oss-cn-shanghai.aliyuncs.com/1046834015363116/xxx/2019-09-17/1568704641998-com.aliyun.aicc-1.2-36-g4e4b62e.apk?spm=5176.11279587.0.0.f7944f48XVfS6a&Expires=1568708242&OSSAccessKeyId=xxxx&Signature=xxx%3D&response-content-disposition=attachment%3Bfilename%3Dcom.aliyun.aicc-1.2-36-g4e4b62e.apk%3Bfilename%2A%3DUTF-8%27%27com.aliyun.aicc-1.2-36-g4e4b62e.apk`
         */
        DownloadUrl: string;
        /**
         * 插件包大小，单位：Byte
         * @example `743503`
         */
        Size: number;
        /**
         * 插件包名
         * @example `com.aliyun.aicc.yundevice`
         */
        PkgName: string;
        /**
         * 版本号
         * @example `201`
         */
        VersionCode: number;
        /**
         * 版本ID
         * @example `40`
         */
        Id: number;
    }[];
    /**
     * 请求ID
     * @example `647D4B28-7646-424E-88DD-61B7969E5C1E`
     */
    RequestId: string;
}
