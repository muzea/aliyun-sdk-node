export interface GetMetricsOfAppResponse {
    /**
     * 错误信息
     * @example `null`
     */
    Message: string;
    /**
     * 请求ID
     * @example `3FEEAD12-CE22-4EDE-A729-CE94EC070610`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 应用名，若为EDAS应用，则AppName为EDAS中的App ID。
         * @example `ahas-demo`
         */
        AppName: string;
        /**
         * 命名空间
         * @example `default`
         */
        Namespace: string;
        /**
         * 应用监控metrics数据
         */
        InnerMetrics: {
            /**
             * 应用RT 99分位数值
             * @example `7`
             */
            RtP99: number;
            /**
             * 应用success QPS平均值
             * @example `143`
             */
            SuccessQpsAvg: number;
            /**
             * 应用paas QPS 99分位数值
             * @example `143`
             */
            PassedQpsP99: number;
            /**
             * 应用RT平均值
             * @example `6.5`
             */
            RtAvg: number;
            /**
             * 集群机器数
             * @example `0`
             */
            Count: number;
            /**
             * 应用并发数标准差值
             * @example `1`
             */
            ThreadStd: number;
            /**
             * 应用paas QPS 平均值
             * @example `143`
             */
            PassedQpsAvg: number;
            /**
             * 应用异常QPS 95分位数值
             * @example `0`
             */
            ExceptionP95: number;
            /**
             * 应用success QPS最大值
             * @example `143`
             */
            SuccessQpsMax: number;
            /**
             * 应用RT 95分位数值
             * @example `7`
             */
            RtP95: number;
            /**
             * 接口限流QPS最小值
             * @example `86`
             */
            BlockedQpsMin: number;
            /**
             * 集群接口限流QPS
             * @example `173`
             */
            BlockedQps: number;
            /**
             * 时间戳
             * @example `1596593014000`
             */
            Timestamp: number;
            /**
             * 应用并发数95分位数值
             * @example `1`
             */
            ThreadP95: number;
            /**
             * 应用RT 标准差值
             * @example `0.7`
             */
            RtStd: number;
            /**
             * 应用paas QPS 最小值
             * @example `143`
             */
            PassedQpsMin: number;
            /**
             * 接口限流QPS 99分位数值
             * @example `86`
             */
            BlockedQpsP99: number;
            /**
             * 应用paas QPS 最大值
             * @example `143`
             */
            PassedQpsMax: number;
            /**
             * 应用异常QPS最大值
             * @example `0`
             */
            ExceptionMax: number;
            /**
             * 应用集群success QPS
             * @example `286`
             */
            SuccessQps: number;
            /**
             * 应用success QPS 75分位数值
             * @example `143`
             */
            SuccessQpsP75: number;
            /**
             * 应用并发数75分位数值
             * @example `1`
             */
            ThreadP75: number;
            /**
             * 应用success QPS 标准差值
             * @example `0`
             */
            SuccessQpsStd: number;
            /**
             * 应用异常QPS最小值
             * @example `0`
             */
            ExceptionMin: number;
            /**
             * 应用paas QPS 75分位数值
             * @example `143`
             */
            PassedQpsP75: number;
            /**
             * 集群paas QPS
             * @example `286`
             */
            PassedQps: number;
            /**
             * 应用并发数最大值
             * @example `1`
             */
            ThreadMax: number;
            /**
             * 应用success QPS 99分位数值
             * @example `143`
             */
            SuccessQpsP99: number;
            /**
             * 应用success QPS最小值
             * @example `143`
             */
            SuccessQpsMin: number;
            /**
             * 应用并发数99分位数值
             * @example `1`
             */
            ThreadP99: number;
            /**
             * 应用异常QPS 标准差值
             * @example `0`
             */
            ExceptionStd: number;
            /**
             * 接口限流QPS 95分位数值
             * @example `86`
             */
            BlockedQpsP95: number;
            /**
             * 应用集群并发数
             * @example `2`
             */
            Thread: number;
            /**
             * 应用并发数最小值
             * @example `1`
             */
            ThreadMin: number;
            /**
             * 应用RT最小值
             * @example `7`
             */
            RtMin: number;
            /**
             * 接口限流QPS平均值
             * @example `86`
             */
            BlockedQpsAvg: number;
            /**
             * 应用并发数平均值
             * @example `1`
             */
            ThreadAvg: number;
            /**
             * 接口限流QPS 75分位数值
             * @example `86`
             */
            BlockedQpsP75: number;
            /**
             * 应用RT 75分位数值
             * @example `7`
             */
            RtP75: number;
            /**
             * 应用异常QPS 99分位数值
             * @example `0`
             */
            ExceptionP99: number;
            /**
             * 应用异常QPS 75分位数值
             * @example `0`
             */
            ExceptionP75: number;
            /**
             * 应用success QPS 95分位数值
             * @example `143`
             */
            SuccessQpsP95: number;
            /**
             * 应用集群平均RT
             * @example `6.5`
             */
            Rt: number;
            /**
             * 应用paas QPS 95分位数值
             * @example `143`
             */
            PassedQpsP95: number;
            /**
             * 应用RT最大值
             * @example `7`
             */
            RtMax: number;
            /**
             * 接口限流QPS 标准差值
             * @example `0`
             */
            BlockedQpsStd: number;
            /**
             * 接口限流QPS最大值
             * @example `86`
             */
            BlockedQpsMax: number;
            /**
             * 集群异常QPS
             * @example `0`
             */
            Exception: number;
            /**
             * 应用异常QPS平均值
             * @example `0`
             */
            ExceptionAvg: number;
            /**
             * 应用paas QPS 标准差值
             * @example `143`
             */
            PassedQpsStd: number;
        }[];
    };
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
