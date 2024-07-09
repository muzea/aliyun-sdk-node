export interface ListGlobalAppsResponse {
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 公共应用列表
     */
    GlobalApps: {
        /**
         * 命名空间名称
         * @example `sentieon`
         */
        NamespaceName: string;
        /**
         * 应用权限
         * @example `OpenAccess`
         */
        AppScope: string;
        /**
         * 应用名称
         * @example `joint-calling`
         */
        AppName: string;
        /**
         * 应用描述
         * @example `使用Sentieon进行大规模样本的群体变异检测。`
         */
        AppDescription: string;
        /**
         * 应用工具合集
         * @example `Sentieon`
         */
        Toolkit: string;
        /**
         * 应用计费说明
         * @example `实际使用时，计算该应用消耗的资源费用。`
         */
        AppFee: string;
        /**
         * 应用默认版本
         * @example `1.0`
         */
        AppDefaultVersion: string;
        /**
         * 应用收藏置顶标记
         * @example `true`
         */
        Pinned: boolean;
        /**
         * 更新时间
         * @example `yyyy/MM/dd HH:mm:ss`
         */
        LastModified: string;
        /**
         * 应用支持的区域ids
         */
        Locations: string[];
        /**
         * 应用所属分类列表
         */
        Categories: string[];
    }[];
    /**
     * 翻页Token用来表示当前调用返回读取到的位置，空代表数据已经读取完毕
     * @example `ba6d88e2-a6f2-4d2c-a2ae-68b76b078445`
     */
    NextToken: string;
    /**
     * 分页数
     * @example `10`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量
     * @example `100`
     */
    TotalCount: number;
}
