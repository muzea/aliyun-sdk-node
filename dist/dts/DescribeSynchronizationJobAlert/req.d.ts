export interface DescribeSynchronizationJobAlertRequest {
    /**
     * 地域ID，传入本参数来指定订阅通道所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据同步实例ID，可以通过调用**DescribeSynchronizationJobs**接口查询。
     * @example `dtskxz1170c10p****`
     */
    "SynchronizationJobId": string;
    /**
     * 同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > 默认取值为**Forward**。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
