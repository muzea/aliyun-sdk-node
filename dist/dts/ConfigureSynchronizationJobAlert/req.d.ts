export interface ConfigureSynchronizationJobAlertRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据同步实例ID，可以通过调用DescribeSynchronizationJobs接口查询。
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
     * 是否监控延迟状态，取值：
     * - **enable**：是。
     * - **disable**：否。
     * > - 默认取值为**enable**。
     * - 本参数和**ErrorAlertStatus**参数两者中至少传入一个。
     * @example `enable`
     */
    "DelayAlertStatus"?: string;
    /**
     * 延迟报警的联系人手机号码，多个手机号码以英文逗号（,）分隔。
     * >-  本参数目前只支持中国站，仅支持大陆手机号码，且最多传入10个手机号码。
     * - 国际站不支持手机告警，仅支持[通过云监控平台为DTS任务设置报警规则](~~175876~~)。
     * @example `1361234****,1371234****`
     */
    "DelayAlertPhone"?: string;
    /**
     * 是否监控异常状态，取值：
     * - **enable**：是。
     * - **disable**：否。
     * > - 默认取值为**enable**。
     * - 本参数和**DelayAlertStatus**参数两者中至少传入一个。
     * - 开启监控异常状态功能后，如果检测到异常，将触发报警。
     * @example `enable`
     */
    "ErrorAlertStatus"?: string;
    /**
     * 异常报警的联系人手机号码，多个手机号码以英文逗号（,）分隔。
     * >-  本参数目前只支持中国站，仅支持大陆手机号码，且最多传入10个手机号码。
     * - 国际站不支持手机告警，仅支持[通过云监控平台为DTS任务设置报警规则](~~175876~~)。
     * @example `1361234****,1371234****`
     */
    "ErrorAlertPhone"?: string;
    /**
     * 触发延迟报警的阈值，单位为秒且需为整数，可根据业务需要设置阈值，建议设置10秒以上，避免因网络、数据库负载等原因导致的延迟波动。
     * > 当**DelayAlertStatus**取值为**enable**时，本参数必须传入。
     * @example `10`
     */
    "DelayOverSeconds"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
}
