export interface ListAppsResponse {
    /**
     * 应用数组
     */
    Apps: {
        /**
         * 应用名称
         * @example `TestApp`
         */
        AppName: string;
        /**
         * 创建时间
         * @example `2021-06-10T13:30:20.414557061Z`
         */
        CreateTime: string;
        /**
         * 应用描述
         * @example `This is a test app`
         */
        Description: string;
        /**
         * 应用类型
         * @example `App`
         */
        AppType: string;
        /**
         * 应用描述语言
         * @example `WDL`
         */
        Language: string;
        /**
         * 应用可见范围
         * @example `Public`
         */
        Scope: string;
        /**
         * 应用所在工作空间
         * @example `TestWorkspace`
         */
        Workspace: string;
        /**
         * 应用来源
         * @example `EasyGene`
         */
        Source: string;
        /**
         * 默认版本
         * @example `v1`
         */
        AppDefaultVersion: string;
        /**
         * 标签
         */
        Labels: any;
    }[];
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 最大返回个数
     * @example `5`
     */
    MaxResults: number;
    /**
     * Next Token
     * @example `TestToken`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 返回个数
     * @example `5`
     */
    TotalCount: number;
}
