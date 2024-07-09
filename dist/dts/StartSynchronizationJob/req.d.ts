export interface StartSynchronizationJobRequest {
    /**
     * 数据同步实例所在地域的id，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据同步实例ID，可以通过调用**DescribeSynchronizationJobs**接口查询。
     * @example `dtsf19100l2186****`
     */
    "SynchronizationJobId": string;
    /**
     * 同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * > - 当数据同步实例的拓扑类型为双向时，才可以传入**Reverse**以启动反向同步链路。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `1689726061829****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
