export interface DescribeServiceMeshAdditionalStatusResponse {
    /**
     * 请求ID。
     * @example `11fd0027-c27e-41bb-a565-75583054****`
     */
    RequestId: string;
    /**
     * 集群状态。
     */
    ClusterStatus: {
        /**
         * API Server负载均衡状态检查。
         */
        ApiServerLoadBalancerStatus: {
            /**
             * CLB状态检查结果，取值：
             * - `exist`：存在。
             * - `not_exist`：不存在。
             * - `conflict`：检测存在冲突。
             * - `failed`：检测失败 。
             * - ` time_out`：检测超时。
             * @example `exist`
             */
            SLBExistStatus: string;
            /**
             * CLB数目检测结果，取值：
             * - `too_much`：数量过多。
             * - `num_exact`：数量刚好。
             * - `too_little`：数量过少。
             * @example `num_exact`
             */
            SLBBackEndServerNumStatus: string;
            /**
             * CLB是否被复用，取值：
             * - `true`：CLB被复用。
             * - `false`：CLB未被复用。
             * @example `false`
             */
            Reused: boolean;
            /**
             * CLB是否被锁定，取值：
             * - `true`：CLB被锁定。
             * - `false`：CLB未被锁定。
             * @example `false`
             */
            Locked: boolean;
            /**
             * CLB付费类型，取值：
             * - `PrePay`：包年包月。
             * - `PayOnDemand`：按量付费。
             * @example `PrePay`
             */
            PayType: string;
        };
        /**
         * Pilot负载均衡状态检查。
         */
        PilotLoadBalancerStatus: {
            /**
             * CLB状态检查结果，取值：
             * - `exist`：存在。
             * - `not_exist`：不存在。
             * - `conflict`：检测存在冲突。
             * - `failed`：检测失败 。
             * - ` time_out`：检测超时。
             * @example `exist`
             */
            SLBExistStatus: string;
            /**
             * CLB数目检测结果，取值：
             * - `too_much`：数量过多。
             * - `num_exact`：数量刚好。
             * - `too_little`：数量过少。
             * @example `num_exact`
             */
            SLBBackEndServerNumStatus: string;
            /**
             * CLB是否被复用，取值：
             * - `true`：CLB被复用。
             * - `false`：CLB未被复用。
             * @example `true`
             */
            Reused: boolean;
            /**
             * CLB是否被锁定，取值：
             * - `true`：CLB被锁定。
             *
             * - `false`：CLB未被锁定。
             * @example `false`
             */
            Locked: boolean;
            /**
             * CLB付费类型，取值：
             * - `PrePay`：包年包月。
             * - `PayOnDemand`：按量付费。
             * @example `PayOnDemand`
             */
            PayType: string;
        };
        /**
         * 金丝雀版本Pilot负载均衡状态信息。
         */
        CanaryPilotLoadBalancerStatus: {
            /**
             * CLB是否存在，取值：
             * - `exist`：存在。
             * - `not_exist`：不存在。
             * - `time_out`：获取状态超时。
             * - `failed`：实例已失效。
             * @example `exist`
             */
            SLBExistStatus: string;
            /**
             * CLB后端数量状态，取值：
             * - `num_exact`：符合预期。
             * - `too_much`：后端数量太多。
             * - `too_little`：后端数量太少。
             * @example `num_exact`
             */
            SLBBackEndServerNumStatus: string;
            /**
             * CLB是否被复用，取值：
             * - `true`：被复用，在CLB的监听中检出了非服务网格监听。
             * - `false`：未被复用。
             * @example `false`
             */
            Reused: boolean;
            /**
             * CLB是否欠费锁定，取值：
             * - `true`：已欠费锁定。
             * - `false`：未欠费锁定。
             * @example `false`
             */
            Locked: boolean;
            /**
             * CLB的计费类型，取值：
             * - `PrePay`：包年包月。
             * - `PayOnDemand`（默认值）：按量付费。
             * @example `PayOnDemand`
             */
            PayType: string;
        };
        /**
         * 审计日志存在状态，取值：
         * - `exist`：存在。
         * - `not exist`：不存在。
         * @example `exist`
         */
        AuditProjectStatus: string;
        /**
         * 各个数据面集群的logtail安装状态。
         * @example `{   "ca35eae22013e43758a0e26d04****":{     "accessLogDashboards":[       {         "title":"mesh-access-log_details_cn",         "url":"https://sls.console.aliyun.com/lognext/project/****​/dashboard/mesh-access-log_details_cn"       },       {         "title":"mesh-access-log_monitoring_center_cn",         "url":"https://sls.console.aliyun.com/lognext/project/****​/dashboard/mesh-access-log_monitoring_center_cn"       }     ],     "logtailStatus":"exist",     "clusterId":"ca35eae22013e43758a0e26d04****"   } }`
         */
        LogtailStatusRecord: any;
        /**
         * 控制面日志存在状态，可能取值有：
         * - `exist`：存在。
         * - `not_exist`：不存在。
         * - `failed`：检测失败。
         * - `time_out`：检测超时。
         * @example `exist`
         */
        ControlPlaneProjectStatus: string;
        /**
         * 网格安全组复用状态，取值：
         * - `reused`：被复用。
         * - `not_reused`：未被复用。
         * - `failed`：检测失败。
         * - `time_out`：检测超时。
         * @example `reused`
         */
        SgStatus: string;
        /**
         * ApiServer绑定EIP存在状态，取值：
         * - `exist`：存在。
         * - `not_exist`：不存在。
         * - `failed`：检测失败。
         * - `time_out`：检测超时。
         * - `not_in_use`：EIP未被绑定至API Server。
         * - `locked`：EIP被锁定。
         * @example `exist`
         */
        ApiServerEIPStatus: string;
        /**
         * Pilot绑定EIP存在状态，取值：
         * - `exist`：存在。
         * - `not_exist`：不存在。
         * - `failed`：检测失败。
         * - `time_out`：检测超时。
         * - `not_in_use`：EIP未被绑定至API Server。
         * - `locked`：EIP被锁定。
         * @example `exist`
         */
        PilotEIPStatus: string;
        /**
         * 访问日志存在状态，取值：
         * - `exist`：存在。
         * - `not_exist`：不存在。
         * - `failed`：检测失败。
         * - `time_out`：检测超时。
         * @example `exist`
         */
        AccessLogProjectStatus: string;
        /**
         * 与网格拓扑集成的RAM OAuth应用状态，取值：
         * - `exist`：存在。
         * - `reused`：被复用。
         * - `not_exist`：不存在。
         * - `failed`：检测失败。
         * - `time_out`：检测超时。
         * @example `reused`
         */
        RAMApplicationStatus: string;
    };
}
