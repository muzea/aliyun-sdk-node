export interface ListInterceptionHistoryResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D81DD78E-E006-5C65-A171-C8CB0904****`
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
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `45`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `10`
         */
        Count: number;
    };
    /**
     * 微隔离拦截记录。
     */
    InterceptionHistoryList: {
        /**
         * 源实例的命名空间。
         * @example `service****`
         */
        SrcNamespace: string;
        /**
         * 规则的源目标对象名。
         * @example `sas-web****`
         */
        SrcRuleTargetName: string;
        /**
         * 风险等级。取值：
         * - **-1**：未知
         * - **0**：无
         * - **1**：低危
         * - **2**：中危
         * - **3**：高危
         * @example `1`
         */
        RiskLevel: number;
        /**
         * 处理状态。取值：
         * - **0**：未处理
         * - **1**：已处理
         * - **2**：手动处理
         * - **3**：忽略
         * @example `1`
         */
        Status: number;
        /**
         * 规则配置的目的端口号。
         * @example `33`
         */
        DstPort: number;
        /**
         * 当日首次时间戳。
         * @example `1639718858000`
         */
        FirstTime: number;
        /**
         * 规则配置的源应用名称。
         * @example `sas-web****`
         */
        SrcAppName: string;
        /**
         * 对应的规则ID。
         * @example `136`
         */
        RuleId: number;
        /**
         * 规则名称。
         * @example `all****`
         */
        RuleName: string;
        /**
         * 告警名称。
         * @example `异常访问。`
         */
        InterceptionName: number;
        /**
         * 规则配置的目的命名空间。
         * @example `service****`
         */
        DstNamespace: string;
        /**
         * 当日最新时间戳。
         * @example `1639731078000`
         */
        LastTime: number;
        /**
         * 规则配置的目的应用名称。
         * @example `sas-web****`
         */
        DstAppName: string;
        /**
         * 规则的目的目标对象名。
         * @example `sas-web****`
         */
        DstRuleTargetName: string;
        /**
         * 集群名称。
         * @example `opa-terway-nonet****`
         */
        ClusterName: string;
        /**
         * 尝试次数。
         * @example `34`
         */
        TryCount: number;
        /**
         * 处理类型。取值：
         * - **0**：观察
         * - **1**：拦截
         * - **2**：告警
         * - **3**：放行
         * @example `0`
         */
        InterceptionType: number;
        /**
         * 实际命中的处理类型。取值：
         * - **0**：观察
         * - **1**：拦截
         * - **2**：告警
         * - **3**：放行
         * @example `0`
         */
        RealInterceptionType: number;
        /**
         * 告警的ID。
         * @example `1126`
         */
        Id: number;
        /**
         * 容器集群的ID。
         * @example `c556c8133b5ad4378b7fc533ddbda****`
         */
        ClusterId: string;
        /**
         * 源应用名称。
         * @example `sas-service****`
         */
        RealSrcAppName: string;
        /**
         * 源容器组。
         * @example `sas-service-757b9d****`
         */
        RealSrcPodName: string;
        /**
         * 目的应用名称。
         * @example `sas-service****`
         */
        RealDstAppName: string;
        /**
         * 目的容器组。
         * @example `sas-web-84cc7dd9****`
         */
        RealDstPodName: string;
        /**
         * 目的命名空间。
         * @example `service****`
         */
        RealDstNamespace: string;
        /**
         * 目的镜像名称。
         * @example `sas-servi****`
         */
        RealDstImageName: string;
        /**
         * 源命名空间。
         * @example `service****`
         */
        RealSrcNamespace: string;
        /**
         * 源镜像名称。
         * @example `sas-servi****
        `
         */
        RealSrcImageName: string;
    }[];
}
