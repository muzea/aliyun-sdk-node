export interface ListWorkspacesResponse {
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 最大结果数
     * @example `5`
     */
    MaxResults: number;
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 下次查询的起始Token
     * @example `TestToken`
     */
    NextToken: string;
    /**
     * 返回总个数
     * @example `5`
     */
    TotalCount: number;
    /**
     * 工作空间数组
     */
    Workspaces: {
        /**
         * 工作空间描述
         * @example `This is a test workspace`
         */
        Description: string;
        /**
         * 任务生命周期
         * @example `30`
         */
        JobLifecycle: number;
        /**
         * 工作空间标签
         */
        Labels: any;
        /**
         * OSS工作路径
         * @example `oss://my-bucket/my-path/`
         */
        Storage: string;
        /**
         * 工作空间Bucket名字
         * @example `my-bucket`
         */
        BucketName: string;
        /**
         * RAM Role
         * @example `TestRole`
         */
        Role: string;
        /**
         * 创建时间
         * @example `2021-06-16T15:09:14.378297+08:00`
         */
        CreateTime: string;
        /**
         * 最后修改时间
         * @example `2021-06-16T15:09:14.378297+08:00`
         */
        LastModifiedTime: string;
        /**
         * 工作空间名称
         * @example `TestWorkspace`
         */
        Workspace: string;
        /**
         * 工作空间状态
         * @example `Active`
         */
        Status: string;
        /**
         * 地域ID
         * @example `cn-beijing`
         */
        Location: string;
    }[];
}
