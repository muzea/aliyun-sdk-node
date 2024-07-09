export interface QueryRMSUnifiedAlarmHistoryResponse {
    /**
     * 当前页
     * @example `5`
     */
    CurrentPage: number;
    /**
     * 请求id
     * @example `CB2B427A-E370-5599-8872-A249F8EFD859`
     */
    RequestId: string;
    /**
     * 结果描述
     * @example `workspace not found with name TWCProd, tenant_id 0008528286`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 分页参数，分页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 总条数
     * @example `120`
     */
    TotalCount: number;
    /**
     * 报警历史对象列表
     */
    AlarmHistories: {
        /**
         * 告警对象类型
         * @example `APP`
         */
        AlarmTargetType: string;
        /**
         * 报警状态
         * @example `1`
         */
        Status: number;
        /**
         * 数据源名称
         * @example `ant_intel_hz`
         */
        DataSourceName: string;
        /**
         *
         * 告警类型
         * @example `APP`
         */
        AlarmType: string;
        /**
         * 最后修改时间
         * @example `2020-04-02 21:53:24`
         */
        GmtModified: string;
        /**
         * 告警事件id
         * @example `355402_1670998540000_598877597`
         */
        EventId: string;
        /**
         * 工作空间ID
         * @example `1`
         */
        WorkspaceId: number;
        /**
         * 告警规则唯一标识
         * @example `174851af-6c56-4d8b-8cc7-9f998e752f09`
         */
        UniqueIdentity: string;
        /**
         * 告警时间
         * @example `1671088115000`
         */
        AlarmTime: number;
        /**
         * 报警规则id
         * @example `860`
         */
        AlarmRuleId: number;
        /**
         * 创建时间
         * @example `2020-04-02 21:53:24`
         */
        GmtCreate: string;
        /**
         * 告警详情
         * @example `[{"datasource":"basic@@machinePortCheck","tags":[{"key":"cluster","value":"default-kernel"},{"key":"hostname","value":"100.83.13.115"},{"key":"port","value":"22"}],"conditionValues":[{"condition":{"metric":"total","metricDisplayName":"总量","type":"Current","compareOperation":"LT","N":0,"threshold":10000.0,"conditionDesc":"total 当前时间 > 10000.0"},"value":1.0}]}]`
         */
        AlarmDetail: string;
        /**
         * 告警数据源跳转url
         * @example `/rms/sofacloud/sofa_app/view/a?workspaceName=b&tenantName=c`
         */
        AlarmUrl: string;
        /**
         * 报警内容
         * @example `[测试实例] [cluster:default-kernel hostname:100.83.13.115 port:22 cluster:antcloud-middlewaredev-import-cluster-38742336 namespace:kube-system] 物理机端口探测/总量 当前时间的值 1.000 < 10000.00`
         */
        AlarmContent: string;
        /**
         *
         * 网页的绝对路径，包含域名
         * @example `http://www.alipay.com/rms/sofacloud/sofa_app/view/a?workspaceName=b&tenantName=c`
         */
        AlarmUrlWithDomain: string;
        /**
         *
         * 目标对象是否删除
         * @example `false`
         */
        AlarmTargetDeleted: boolean;
        /**
         * 告警级别
         * @example `1`
         */
        AlarmLevel: number;
        /**
         * 属性 ID
         * @example `3376`
         */
        Id: number;
        /**
         * 租户id
         * @example `1`
         */
        TenantId: number;
        /**
         * 告警对象
         * @example `sibei_1229_1`
         */
        AlarmTarget: string;
        /**
         *
         * 告警规则名
         * @example `bvtcase测试`
         */
        AlarmRuleName: string;
    }[];
}
