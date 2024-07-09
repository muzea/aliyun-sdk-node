export interface DescribeImageStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D`
     */
    RequestId: string;
    /**
     * 您资产中的容器镜像数量（仅统计企业版容器镜像实例）。
     * @example `5`
     */
    InstanceCount: number;
    /**
     * 您资产中存在安全风险的容器镜像数量（仅统计企业版容器镜像实例）。
     * @example `2`
     */
    RiskInstanceCount: number;
}
