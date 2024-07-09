export interface GetInstanceResponse {
    /**
     * 修改时间
     * @example `1571926560000`
     */
    ModifiedTime: number;
    /**
     * 请求ID
     * @example `6EF34B18-4228-470C-860C-D28597CF010E`
     */
    RequestId: string;
    /**
     * 创建时间
     * @example `1571926439000`
     */
    CreateTime: number;
    /**
     * 实例名称
     * @example `shanghai-instance1`
     */
    InstanceName: string;
    /**
     * 实例规格。取值：
     * Enterprise\_Basic：基础实例
     * Enterprise\_Standard：标准版实例
     * Enterprise\_Advanced：高级版实例
     * @example `Enterprise_Basic`
     */
    InstanceSpecification: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 实例状态，取值：
     * - `PENDING`：初始化中
     * - `INIT_ERROR`：初始化失败
     * - `STARTING`：启动中
     * - `RUNNING`：运行中
     * - `STOPPING`：停止中
     * - `STOPPED`：已停止
     * - `DELETING`：删除中
     * - `DELETED`：已删除
     * @example `RUNNING`
     */
    InstanceStatus: string;
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    InstanceId: string;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 资源组ID
     * @example `rg-acfmv36i4isx****`
     */
    ResourceGroupId: string;
    /**
     * 实例问题。
     * @example `实例问题，取值：
    OSS_TOO_MANY_BUCKETS：OSS Bucket 数量超限
    
    OSS_BUCKET_ALREADY_EXISTS：同名 OSS Bucket 已存在
    
    OSS_SERVICE_ROLE_UNAUTHORIZED：OSS 权限未授权
    
    USER_NOT_REGISTERED_BY_REAL_NAME：阿里云账号未实名`
     */
    InstanceIssue: string;
    /**
     * 实例的标签集合。
     */
    Tags: {
        /**
         * 标签键
         * @example `test_key`
         */
        TagKey: string;
        /**
         * 标签值
         * @example `test_value`
         */
        TagValue: string;
    }[];
}
