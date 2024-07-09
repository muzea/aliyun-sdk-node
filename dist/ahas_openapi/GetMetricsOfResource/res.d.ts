export interface GetMetricsOfResourceResponse {
    /**
     * 错误信息。
     * @example `null`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3FEEAD12-CE22-4EDE-A729-CE94E*****10`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 应用名，若为EDAS应用，则AppName为EDAS中的App ID，可在EDAS控制台“应用管理>基本信息”中查看对应的ID。
         * @example `ahas-demo`
         */
        AppName: string;
        /**
         * 资源名。
         * @example `handleService`
         */
        Resource: string;
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 资源Metric数据。
         */
        InnerMetrics: {
            /**
             * 接口RT 99分位数值。
             * @example `7`
             */
            RtP99: number;
            /**
             * 接口Success QPS平均值。
             * @example `143`
             */
            SuccessQpsAvg: number;
            /**
             * 接口Pass QPS 99分位数值。
             * @example `143`
             */
            PassedQpsP99: number;
            /**
             * 接口RT平均值。
             * @example `6.5`
             */
            RtAvg: number;
            /**
             * 机器数。
             * @example `2`
             */
            Count: number;
            /**
             * 接口并发数标准差值。
             * @example `0`
             */
            ThreadStd: number;
            /**
             * 接口Pass QPS平均值。
             * @example `143`
             */
            PassedQpsAvg: number;
            /**
             * 接口异常QPS 95分位数值。
             * @example `0`
             */
            ExceptionP95: number;
            /**
             * 接口Success QPS最大值。
             * @example `143`
             */
            SuccessQpsMax: number;
            /**
             * 接口RT 95分位数值。
             * @example `7`
             */
            RtP95: number;
            /**
             * 接口限流QPS最小值。
             * @example `86`
             */
            BlockedQpsMin: number;
            /**
             * 接口集群限流QPS。
             * @example `173`
             */
            BlockedQps: number;
            /**
             * 时间戳。
             * @example `1596593014000`
             */
            Timestamp: number;
            /**
             * 接口并发数95分位数值。
             * @example `1`
             */
            ThreadP95: number;
            /**
             * 接口RT标准差值。
             * @example `0.7`
             */
            RtStd: number;
            /**
             * 接口Pass QPS最小值。
             * @example `143`
             */
            PassedQpsMin: number;
            /**
             * 接口限流QPS 99分位数值。
             * @example `86`
             */
            BlockedQpsP99: number;
            /**
             * 接口Pass QPS最大值。
             * @example `143`
             */
            PassedQpsMax: number;
            /**
             * 接口异常QPS最大值。
             * @example `0`
             */
            ExceptionMax: number;
            /**
             * 接口集群Success QPS。
             * @example `286`
             */
            SuccessQps: number;
            /**
             * 接口Success QPS 75分位数值。
             * @example `143`
             */
            SuccessQpsP75: number;
            /**
             * 接口并发数75分位数值。
             * @example `1`
             */
            ThreadP75: number;
            /**
             * 接口Success QPS 标准差值。
             * @example `0`
             */
            SuccessQpsStd: number;
            /**
             * 接口异常QPS最小值。
             * @example `0`
             */
            ExceptionMin: number;
            /**
             * 接口Pass QPS 75分位数值。
             * @example `143`
             */
            PassedQpsP75: number;
            /**
             * 接口集群Pass QPS。
             * @example `286`
             */
            PassedQps: number;
            /**
             * 接口并发数最大值。
             * @example `1`
             */
            ThreadMax: number;
            /**
             * 接口Success QPS 95分位数值。
             * @example `143`
             */
            SuccessQpsP99: number;
            /**
             * 接口Success QPS最小值。
             * @example `143`
             */
            SuccessQpsMin: number;
            /**
             * 接口并发数99分位数值。
             * @example `1`
             */
            ThreadP99: number;
            /**
             * 接口异常QPS标准差值。
             * @example `0`
             */
            ExceptionStd: number;
            /**
             * 接口限流QPS 95分位数值。
             * @example `86`
             */
            BlockedQpsP95: number;
            /**
             * 接口集群并发数。
             * @example `2`
             */
            Thread: number;
            /**
             * 接口并发数最小值。
             * @example `1`
             */
            ThreadMin: number;
            /**
             * 接口RT最小值。
             * @example `6.5`
             */
            RtMin: number;
            /**
             * 接口限流QPS平均值。
             * @example `86`
             */
            BlockedQpsAvg: number;
            /**
             * 接口并发数平均值。
             * @example `1`
             */
            ThreadAvg: number;
            /**
             * 接口限流QPS 75分位数值。
             * @example `86`
             */
            BlockedQpsP75: number;
            /**
             * 接口RT 75分位数值。
             * @example `7`
             */
            RtP75: number;
            /**
             * 接口异常QPS 99分位数值。
             * @example `0`
             */
            ExceptionP99: number;
            /**
             * 接口异常QPS 75分位数值。
             * @example `0`
             */
            ExceptionP75: number;
            /**
             * 接口Success QPS 95分位数值。
             * @example `143`
             */
            SuccessQpsP95: number;
            /**
             * 接口集群平均RT。
             * @example `6.5`
             */
            Rt: number;
            /**
             * 接口Pass QPS 95分位数值。
             * @example `143`
             */
            PassedQpsP95: number;
            /**
             * 接口RT最大值。
             * @example `7`
             */
            RtMax: number;
            /**
             * 接口限流QPS标准差值。
             * @example `0`
             */
            BlockedQpsStd: number;
            /**
             * 接口限流QPS最大值。
             * @example `86`
             */
            BlockedQpsMax: number;
            /**
             * 接口集群异常QPS。
             * @example `0`
             */
            Exception: number;
            /**
             * 接口异常QPS平均值。
             * @example `0`
             */
            ExceptionAvg: number;
            /**
             * 接口Pass QPS标准差值。
             * @example `0`
             */
            PassedQpsStd: number;
        }[];
    };
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
}
