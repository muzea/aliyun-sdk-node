export interface ModifyDynamicConfigRequest {
    /**
     * 同步或迁移任务的ID。
     * > 可调用[DescribeDtsJobs](~~209702~~)获取任务ID。
     * @example `ta7w132u12h****`
     */
    "DtsJobId": string;
    /**
     * 任务码，取值为：
     * - **03** : 全量同步或迁移任务。
     * - **04** : 增量迁移任务。
     * - **07** : 增量同步任务。
     * @example `07`
     */
    "JobCode": string;
    /**
     * DTS实例所在地域的ID，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 具体限速配置。
     * - **dts.datamove.blaster.qps.max**：每秒查询源库的速率。
     * - **dts.datamove.source.rps.max**：每秒全量同步或迁移的行数RPS。
     * - **dts.datamove.source.bps.max**：每秒全量同步或迁移的数据量，单位为Byte/s。
     * > - 当**JobCode**取值为**03**时，您需将**EnableLimit**配置为**true**，三个参数的配置才会生效。
     * - 当**JobCode**取值为**04**或**07**时，您只需配置**dts.datamove.source.rps.max**和**dts.datamove.source.bps.max**。
     * - 取值为**-1**时表示不限速。
     * @example `{
          "dts.datamove.source.rps.max": 5000,
          "dts.datamove.source.bps.max": 10485760
    }`
     */
    "ConfigList"?: string;
    /**
     * 是否限制全量同步或迁移任务的迁移速率，取值为**true**或**false**。
     * > 仅当**JobCode**为**03**时需要配置。
     * @example `true`
     */
    "EnableLimit"?: boolean;
    "ResourceGroupId"?: string;
}
