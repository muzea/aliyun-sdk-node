export interface CreateElasticPlanRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1d8lbdj22rx****`
     */
    "DBClusterId": string;
    /**
     * 弹性计划名称。取值说明：
     * - 长度为2~30字符。
     * - 由大写字母、小写字母、数字或下划线（_）组成。
     * @example `test`
     */
    "ElasticPlanName": string;
    /**
     * 资源组名称。
     * >您可以调用[DescribeDBResourceGroup](~~466685~~)接口查看资源组名称。
     * @example `realtime`
     */
    "ResourcePoolName"?: string;
    /**
     * 弹性计划节点数。
     * - 当ElasticPlanType为**worker**时，该参数可以不填写或者填写0。
     * - 当ElasticPlanType为**executorcombineworker**或**executor**时，该参数必须填写大于0的数字。
     * @example `0`
     */
    "ElasticPlanNodeNum"?: number;
    /**
     * 弹性计划扩容时间，只支持设置整点时间。格式：HH:mm:ss。
     * @example `08:00:00`
     */
    "ElasticPlanTimeStart": string;
    /**
     * 弹性计划还原时间，只支持设置整点时间，与弹性计划扩容时间的间隔不能超过24小时。格式：HH:mm:ss。
     * @example `10:00:00`
     */
    "ElasticPlanTimeEnd": string;
    /**
     * 执行弹性计划的周期。0~6表示周日到周六，多个日期用半角逗号（,）分隔。
     * @example `1,2,3,4,5`
     */
    "ElasticPlanWeeklyRepeat"?: string;
    /**
     * 执行弹性计划的周期。数字表示每个月的几号，多个日期用半角逗号（,）分隔。
     * @example `1,15,25`
     */
    "ElasticPlanMonthlyRepeat"?: string;
    /**
     * 弹性计划起始日期，格式：yyyy-MM-dd。
     * @example `2022-12-02`
     */
    "ElasticPlanStartDay"?: string;
    /**
     * 弹性计划结束日期，格式：yyyy-MM-dd。
     * @example `2022-12-09`
     */
    "ElasticPlanEndDay"?: string;
    /**
     * 弹性计划是否生效，取值说明：
     * - **true**（默认值）：生效。
     * - **false**：不生效。
     * @example `true`
     */
    "ElasticPlanEnable"?: boolean;
    /**
     * 弹性计划资源类型，取值说明：
     * - **worker**：弹性IO资源单独弹性。
     * - **executor**：计算资源单独弹性。
     * - **executorcombineworker**（默认值）：计算，弹性IO资源按默认比例弹性。
     * > - 如果要使用**executorcombineworker**，集群内核版本需为3.1.3.2及以上版本。
     * > - 如果要使用**worker**或**executor**，集群内核版本需为3.1.6.1及以上版本，且需要通过提交工单申请。申请通过后，才能使用**worker**或**executor**。
     * @example `worker`
     */
    "ElasticPlanType"?: string;
    /**
     * 弹性计划支持扩容的资源规格。取值说明：
     * - 8 Core 64 GB（默认规格）
     * - 16 Core 64 GB
     * - 32 Core 64 GB
     * - 64 Core 128 GB
     * - 12 Core 96 GB
     * - 24 Core 96 GB
     * - 52 Core 86 GB
     * @example `32 Core 64 GB`
     */
    "ElasticPlanWorkerSpec"?: string;
}
