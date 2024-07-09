export interface ModifySynchronizationObjectRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据同步实例ID，可以通过调用[DescribeSynchronizationJobs](~~49454~~)接口查询。
     * @example `dtskfq1149w254****`
     */
    "SynchronizationJobId": string;
    /**
     * 修改后的同步对象，格式为JSON串且支持一定的正则表达式，详细说明请参见[同步对象配置说明](~~141901~~)。
     * @example `[{"DBName": "dtstestdata"}]`
     */
    "SynchronizationObjects": string;
    /**
     * 指定同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > - 默认取值为**Forward**。
     * - 只有当数据同步实例的同步拓扑为双向同步时，才需要传入本参数。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
