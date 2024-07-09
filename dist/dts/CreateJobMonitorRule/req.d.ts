export interface CreateJobMonitorRuleRequest {
    /**
     * 迁移、同步或订阅任务ID，可通过调用[DescribeDtsJobs](~~209702~~)获取。
     * @example `i03e3zty16i****`
     */
    "DtsJobId": string;
    /**
     * 监控项的类型，取值：
     * - **delay**：**延迟**监控项。
     * - **error**：**迁移状态**监控项。
     * - **full_timeout**：**全量运行耗时**监控项。
     * 默认值：**error**；需手动填入。
     * @example `delay`
     */
    "Type"?: string;
    /**
     * 是否启用告警规则，取值：
     * - **Y**：启用。
     * - **N**：不启用。
     * 默认值：**Y**
     * @example `Y`
     */
    "State"?: string;
    /**
     * 告警的联系人手机号码，多个手机号码以英文逗号（,）分隔。
     * >-  本参数目前只支持中国站，仅支持大陆手机号码，且最多传入10个手机号码。
     * - 国际站不支持手机告警，仅支持[通过云监控平台为DTS任务设置报警规则](~~175876~~)。
     * @example `1361234****,1371234****`
     */
    "Phone"?: string;
    /**
     * 触发告警的阈值。
     * - 当**Type**取值为**delay**时，单位为秒且需为整数，可根据业务需要设置阈值，建议设置10秒以上，避免因网络、数据库负载等原因导致的延迟波动。
     * - 当**Type**取值为**full_timeout**时，单位为小时且需为整数。
     * > 当**Type**取值为**delay**或**full_timeout**且**State**取值为**Y**时，本参数必须传入。
     * @example `11`
     */
    "DelayRuleTime"?: number;
    /**
     * DTS实例所属的地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 增量校验任务的统计周期，单位为分钟。
     * > 当前支持取值为1分钟、3分钟、5分钟和30分钟。
     * @example `5`
     */
    "Period"?: number;
    /**
     * 增量校验任务的周期数。
     * @example `2`
     */
    "Times"?: number;
    /**
     * 告警阈值。
     * @example `2`
     */
    "NoticeValue"?: number;
}
