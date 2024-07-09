export interface GetWorkspaceResponse {
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 工作空间简要描述
     * @example `This is a test workspace`
     */
    Description: string;
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 工作空间内作业生命周期
     * @example `30`
     */
    JobLifecycle: number;
    /**
     * 工作空间标签
     */
    Labels: any;
    /**
     * 工作空间内OSS上的工作路径
     * @example `oss://my-bucket/my-path/`
     */
    Storage: string;
    /**
     * 工作空间Bucket
     * @example `my-bucket`
     */
    BucketName: string;
    /**
     * 工作空间内默认的RAM服务角色
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
}
