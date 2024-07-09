export interface ModifySubscriptionRequest {
    /**
     * DTS实例所在地域，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 订阅实例ID，可以调用[DescribeDtsJobs](~~209702~~)查询。
     * @example `dtsboss6pn1w******`
     */
    "DtsInstanceId"?: string;
    /**
     * 修改后的订阅对象，格式为JSON串。详细定义，请参见[迁移、同步或订阅对象说明](~~209545~~)。
     * > - 原DbList会被新传入的DbList覆盖，请确保新传入的DbList数据中包含所有需要订阅的对象，否则可能会导致订阅对象丢失，请谨慎修改。
     * - 原订阅对象，可调用[DescribeDtsJobDetail](~~208925~~)进行查询。
     * @example `{"dtstest":{"name":"dtstest","all":true}}`
     */
    "DbList": string;
    /**
     * 订阅任务ID，可以调用[DescribeDtsJobs](~~209702~~)查询。
     * @example `boss6pn1w******`
     */
    "DtsJobId"?: string;
    /**
     * 修改后任务是否订阅DDL类型的数据，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "SubscriptionDataTypeDDL": boolean;
    /**
     * 修改后任务是否订阅DML类型的数据，取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "SubscriptionDataTypeDML": boolean;
}
