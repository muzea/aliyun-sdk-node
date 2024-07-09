export interface ListScriptsResponse {
    /**
     * 脚本列表。
     */
    Scripts: {
        /**
         * API名称。
         * @example `ListScripts`
         */
        Action: string;
        /**
         * 区域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 脚本ID。
         * @example `cs-bf25219d103043a0820613e32781****`
         */
        ScriptId: string;
        /**
         * 脚本名称。
         * @example `check_env`
         */
        ScriptName: string;
        /**
         * 脚本路径。
         * @example `oss://bucket1/check_evn.sh`
         */
        ScriptPath: string;
        /**
         * 脚本执行参数。
         * @example `--mode=client -h -p`
         */
        ScriptArgs: string;
        /**
         * 最近一次修改时间。
         * @example `1639714634819`
         */
        LastUpdateTime: number;
        /**
         * 执行失败策略。取值范围：
         * - FAILED_CONTINUE：失败后继续执行。
         * - FAILED_BLOCK：失败后阻塞。
         * @example `FAILED_CONTINUE`
         */
        ExecutionFailStrategy: string;
        /**
         * 执行时机。取值范围：
         * - BEFORE_INSTALL：应用安装之前。
         * - AFTER_STARTED： 应用启动后。
         * @example `BEFORE_INSTALL`
         */
        ExecutionMoment: string;
        /**
         * 节点选择器。
         */
        NodeSelector: any;
        /**
         * 开始执行时间。只有当ScriptType取值为NORMAL，才有该返回值。
         * @example `1639714634000`
         */
        StartTime: number;
        /**
         * 结束执行时间。只有当ScriptType取值为NORMAL，才有该返回值。
         * @example `1639715635819`
         */
        EndTime: number;
        /**
         * 脚本执行的状态，只有当`ScriptType`取值为`NORMAL`，才有该返回值 。取值范围：
         * - SCRIPT_COMPLETED：脚本执行成功。
         * - SCRIPT_SUBMISSION_FAILED：脚本执行失败。
         * - SCRIPT_RUNNING：脚本执行中。
         * @example `SCRIPT_COMPLETED`
         */
        ExecutionState: string;
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
    /**
     * 返回读取到的数据位置。
     * @example `dd6b1b2a-5837-5237-abe4-ff0c89568982`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    TotalCount: number;
}
