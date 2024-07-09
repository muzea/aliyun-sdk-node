export interface ListBuildPackResponse {
    /**
     * code
     * @example `200`
     */
    Code: number;
    /**
     * 信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `4FD4-*************`
     */
    RequestId: string;
    BuildPackList: {
        /**
         * 容器版本列表
         */
        BuildPack: {
            /**
             * Pandora版本号
             * @example `edas.public.sar.V3.5.6`
             */
            PandoraVersion: string;
            /**
             * 容器版本ID
             * @example `57`
             */
            ConfigId: number;
            /**
             * 公测特性
             * @example `“”`
             */
            Feature: string;
            /**
             * Pandora描述
             * @example `test`
             */
            PandoraDesc: string;
            /**
             * 插件描述
             * @example `1`
             */
            PluginInfo: string;
            /**
             * 是否被禁用，禁用的不能够设置使用。
             * @example `false`
             */
            Disabled: boolean;
            /**
             * Tengine安装程序的下载地址
             * @example `http://edas.oss-cn-hangzhou.aliyuncs.com/components/tengine/3.4.7/tengine.sh`
             */
            TengineDownloadUrl: string;
            /**
             * Tomcat目录名称
             * @example `taobao-tomcat-production-7.0.59.3`
             */
            TomcatPath: string;
            /**
             * Tomcat描述
             * @example `1.更新config-client插件，修复多租户场景未读缓存的问题；2.更新hsf插件，修复pandora qos命令不能执行、hsf订阅服务数多的情况下可能会遇到服务地址找不到的问题；3.升级所有用到fastjson的插件到sec06安全版本。`
             */
            TomcatDesc: string;
            /**
             * 支持的特性
             * @example `tengine,fatjar,restful,eip_nodeport,dpath`
             */
            SupportFeatures: string;
            /**
             * Tomcat安装程序的下载地址
             * @example `http://edas.oss-cn-hangzhou.aliyuncs.com/edas-container/7.0.92/taobao-tomcat-production-7.0.92.tar.gz`
             */
            TomcatDownloadUrl: string;
            /**
             * Tomcat版本号
             * @example `8.5.63`
             */
            TomcatVersion: string;
            /**
             * Pandora下载地址
             * @example `http://edas.oss-cn-hangzhou.aliyuncs.com/edas-plugins/edas.sar.V3.5.6/taobao-hsf.tgz`
             */
            PandoraDownloadUrl: string;
            /**
             * 应用版本号
             * @example `3.5.6`
             */
            PackVersion: string;
            /**
             * 是否支持多租户
             * @example `true`
             */
            MultipleTenant: boolean;
            /**
             * 容器对应的Tengine镜像ID
             * @example `registry.aliyuncs.com/edas/****-*********-*****:*.*.*`
             */
            TengineImageId: string;
            /**
             * 是否支持流量管理
             * @example `true`
             */
            WithTengine: boolean;
            /**
             * 容器对应的基础镜像ID
             * @example `registry.aliyuncs.com/ed**​/****-*********:*.*.*`
             */
            ImageId: string;
            /**
             * Shell脚本名称
             * @example `default`
             */
            ScriptName: string;
            /**
             * Shell脚本版本
             * @example `1.0.3`
             */
            ScriptVersion: string;
        }[];
    };
}
