export interface ListCheckItemWarningMachineResponse {
    /**
     * 告警机器列表。
     */
    List: {
        /**
         * 检查项状态。取值：
         * - 1：未通过
         * - 2：验证中
         * - 3：已通过
         * - 6：已忽略
         * - 7：修复中
         * @example `1`
         */
        Status: number;
        /**
         * 资产是否已绑定授权。取值：
         * - **true**：已绑定授权
         * - **false**：未绑定授权
         * @example `true`
         */
        Bind: boolean;
        /**
         * 资产的授权版本。取值：
         * - **1**：免费版
         * - **6**：防病毒版
         * - **5**：高级版
         * - **3**：企业版
         * - **7**：旗舰版
         * - **10**：仅采购增值服务版
         * @example `3`
         */
        AuthVersion: number;
        /**
         * 该服务器是否有端口对公网开放。取值：
         * - **true**：服务器有端口对公网开放
         * - **false**：服务器无端口对公网开放
         * @example `true`
         */
        PortOpen: boolean;
        /**
         * 服务器实例ID。
         * @example `i-bp1a69mvjujbakxu****`
         */
        InstanceId: string;
        /**
         * 受影响资产实例的私网IP地址。
         * @example `172.25.XX.XX`
         */
        IntranetIp: string;
        /**
         * 受影响资产实例的公网IP地址。
         * @example `8.210.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器实例名称。
         * @example `sql-test-0****`
         */
        InstanceName: string;
        /**
         * 服务器的uuid。
         * @example `49e25e0f-bb51-4a5a-a1b3-13a4ddaa****`
         */
        Uuid: string;
        /**
         * 资产所在的地域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 基线检查风险项的检查提示。
         * @example `There is a weak password (username/password): root/he*****34`
         */
        Prompt: string;
        /**
         * 检出此检查项风险的基线列表。
         */
        WarningRiskList: {
            /**
             * 基线ID。
             * @example `72`
             */
            RiskId: number;
            /**
             * 基线的名称。
             * @example `Alibaba Cloud Linux/Aliyun Linux 2 Baseline for China classified protection of cybersecurity-Level II`
             */
            RiskName: string;
        }[];
        /**
         * 检出此检查项风险的可修复基线列表。
         */
        FixList: {
            /**
             * 基线ID。
             * @example `72`
             */
            RiskId: number;
            /**
             * 基线的名称。
             * @example `Alibaba Cloud Linux/Aliyun Linux 2 Baseline for China classified protection of cybersecurity-Level II`
             */
            RiskName: string;
        }[];
        /**
         * 容器ID。
         * @example `48a6d9a92435a13ad573372c3f3c63b7e04d106458141df9f9215570********`
         */
        ContainerId: string;
        /**
         * 容器名称。
         * @example `step-build-ui-build`
         */
        ContainerName: string;
        /**
         * 扫描对象名称。
         * @example `jenkins****`
         */
        TargetName: string;
        /**
         * 扫描对象ID。
         * @example `30****`
         */
        TargetId: string;
        /**
         * 对象类型。取值：
         * - **ECS_SNAPSHOT**：快照
         * - **ECS_IMAGE**：镜像
         * @example `ECS_IMAGE`
         */
        TargetType: string;
        /**
         * 最新扫描的时间戳，单位为毫秒。
         * @example `1694692471000`
         */
        LastScanTime: number;
        /**
         * 该机器的检查项风险的最新处理的时间戳，单位为毫秒。
         * @example `1694692471000`
         */
        LastHandleTime: number;
        /**
         * 是否支持修复。取值：
         * - **0**：不支持
         * - **1**：支持
         * @example `1`
         */
        FixStatus: number;
    }[];
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的受影响资产的总数量。
         * @example `107`
         */
        TotalCount: number;
        /**
         * 查询到的受影响资产的当前页显示数据条数。
         * @example `4`
         */
        Count: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `22B5615F-700E-575A-A6D5-DC8D7741****`
     */
    RequestId: string;
}
