export interface GetGlobalAppResponse {
    /**
     * 请求ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    RequestId: string;
    /**
     * 主机ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    HostId: string;
    /**
     * 更新时间
     * @example `yyyy/MM/dd HH:mm:ss`
     */
    LastModified: string;
    /**
     * 命名空间名称
     * @example `sentieon`
     */
    NamespaceName: string;
    /**
     * 应用权限
     * @example `OpenAccess / Protected`
     */
    AppScope: string;
    /**
     * 应用名称
     * @example `joint-calling`
     */
    AppName: string;
    /**
     * 应用支持的区域
     */
    Locations: string[];
    /**
     * 应用版本
     * @example `1.2a-3`
     */
    AppVersion: string;
    /**
     * 应用类型
     * @example `workflow`
     */
    AppType: string;
    /**
     * 应用计费说明
     * @example `实际使用时，计算该应用消耗的资源费用`
     */
    AppFee: string;
    /**
     * 应用描述
     * @example `使用Sentieon进行大规模样本的群体变异检测。`
     */
    AppDescription: string;
    /**
     * 应用所属分类列表
     */
    Categories: string[];
    /**
     * 应用所属工具合集
     * @example `Sentieon`
     */
    Toolkit: string;
    /**
     * 应用联系人信息
     * @example `support@sentieon.com`
     */
    Contact: string;
    /**
     * 应用的参考页面
     */
    Links: string[];
    /**
     * 应用的版本列表
     */
    AppVersions: {
        /**
         * 应用版本
         * @example `1.0`
         */
        AppVersion: string;
        /**
         * 版本描述
         * @example `初始版本`
         */
        Comment: string;
        /**
         * 更新时间
         * @example `yyyy/MM/dd HH:mm:ss`
         */
        LastModified: string;
    }[];
    /**
     * 默认版本
     * @example `1.0`
     */
    AppDefaultVersion: string;
    /**
     * 应用描述语言标准
     * @example `WDL / CWL`
     */
    AppDescriptorType: string;
    /**
     * 应用文件列表
     */
    AppDescriptorFiles: {
        /**
         * 应用文件的类型
         * @example `PRIMARY_DESCRIPTOR（主WDL） SECONDARY_DESCRIPTOR（依赖WDL）  CONFIG（推荐的输入参数）  CONTAINERFILE（镜像制作文件）  DATA（输入参数中引用的参考文件）  OTHER（其他）`
         */
        FileType: string;
        /**
         * 应用文件的路径，除PRIMARY_DESCRIPTOR外，其他均为相对于PRIMARY_DESCRIPTOR的相对路径
         * @example `./main.wdl`
         */
        Path: string;
        /**
         * 应用文件内容
         * @example `文件内容`
         */
        Content: string;
        /**
         * 应用文件链接
         * @example `文件URL`
         */
        Url: string;
        /**
         * 应用文件内容的完整性校验码，如MD5值
         * @example `文件MD5`
         */
        Checksum: string;
    }[];
    /**
     * 应用的帮助文档
     * @example `应用的帮助文档`
     */
    Document: string;
    /**
     * 应用的备注信息
     * @example `初始版本`
     */
    Comment: string;
    /**
     * 应用的DAG信息
     * @example `DAG`
     */
    DAG: string;
    /**
     * 应用收藏置顶标记
     * @example `true`
     */
    Pinned: boolean;
}
