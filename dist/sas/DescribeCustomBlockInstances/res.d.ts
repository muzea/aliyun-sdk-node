export interface DescribeCustomBlockInstancesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D81DD78E-E006-5C65-A171-C8CB09XXXXX`
     */
    RequestId: string;
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页包含的客户端任务的数量。默认值为**20**。
         * @example `20`
         */
        PageSize: number;
        /**
         * 暴力破解防御规则生效服务器总数量。
         * @example `83`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `10`
         */
        Count: number;
    };
    /**
     * 实例ID
     */
    InstanceList: {
        /**
         * 对应实例的规则开启状态。
         * - **2**：开启异常
         * - **1**：已启用
         * - **0**：未启用
         * @example `1`
         */
        Status: number;
        /**
         * 设备UUID
         * @example `f2d6e901-1004-4ca8-9dae-53ec04a9****`
         */
        Uuid: string;
        /**
         * 服务器外网IP。
         * @example `116.62.121.1xx`
         */
        InternetIp: string;
        /**
         * 服务器的私网IP。
         * @example `192.168.1.xx`
         */
        IntranetIp: string;
        /**
         * 资产实例名称。
         * @example `myInstance`
         */
        InstanceName: string;
        /**
         * 拦截类型。取值：
         * - **group**：安全组拦截
         * - **alinet**：主机网络插件拦截
         * @example `group`
         */
        BlockType: string;
        /**
         * 异常状态返回的错误码。
         * @example `AliNetNotOnline`
         */
        ErrorCode: string;
        /**
         * 拦截成功的事件返回的拦截信息。
         * @example `{"aliUid":*******,"groupId":"sg-xxxx","groupName":"Sas_Malicious_Ip_Security_Group","groupType":"normal","instanceId":"i-xxxx","regionId":"cn-shenzhen","vpcId":"vpc-xxxxxxxx"}`
         */
        SuccessInfo: string;
        /**
         * 主机网络插件在线状态。取值：
         * - **true**：在线
         * - **false**：离线
         * @example `true`
         */
        AliNetOnline: boolean;
    }[];
}
