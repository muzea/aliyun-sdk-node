export interface DescribeBruteForceRecordsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的数据的最大条数。默认值为**20**。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `263`
         */
        TotalCount: number;
        /**
         * 当前页的数据量。
         * @example `10`
         */
        Count: number;
    };
    /**
     * 防暴力破解记录的列表信息。
     */
    MachineList: {
        /**
         * 暴力破解防御规则的状态。
         * 取值：
         * - **0**：失效
         * - **1**：启用
         * - **2**：失败
         * @example `2`
         */
        Status: number;
        /**
         * 防暴力破解IP拦截到期的时间戳。
         * @example `1671506882063`
         */
        BlockExpireDate: number;
        /**
         * 该记录生效的服务器UUID。
         * @example `6d5b361f-958d-48a8-a9d2-d6e82c1****
        `
         */
        Uuid: string;
        /**
         * 公网IP。
         * @example `120.79.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器实例的名称。
         * @example `record-test-***`
         */
        InstanceName: string;
        /**
         * 防暴力破解拦截的IP地址。
         * @example `10.12.XX.XX`
         */
        BlockIp: string;
        /**
         * 防暴力破解端口。
         * @example `22/22`
         */
        Port: string;
        /**
         * 此次规则下发的来源。
         * -  **userRule**：用户规则
         * - **blinkRule**：系统规则
         * @example `userRule`
         */
        Source: string;
        /**
         * 内网IP。
         * @example `192.168.XX.XX`
         */
        IntranetIp: string;
        /**
         * 防暴力破解拦截规则记录主键ID。
         * @example `112XX`
         */
        Id: number;
        /**
         * 规则名称。
         * @example `AntiRuleName`
         */
        RuleName: string;
        /**
         * 拦截IP失败返回错误的Code信息。
         * @example `InstanceSecurityGroupLimitExceeded`
         */
        ErrorCode: string;
        /**
         * 拦截类型。取值：
         * - **group**：安全组拦截
         * - **alinet**：主机网络插件拦截
         * @example `alinet`
         */
        BlockType: string;
        /**
         * 主机网络插件在线状态。取值：
         * - **true**：在线
         * - **false**：离线
         * @example `false`
         */
        AliNetOnline: boolean;
    }[];
}
