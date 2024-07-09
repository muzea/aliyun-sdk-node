export interface ModifyInstanceAutoRenewalAttributeRequest {
    /**
     * 实例所属的地域ID。您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `dds-bp15da1923e3****`
     */
    "DBInstanceId": string;
    /**
     * 自动续费时长，单位：月。
     * 取值范围：**1**~**12**（整数）。
     * > 当**AutoRenew**参数传入的值为**true**时，本参数才可用，且必须传入。
     * @example `1`
     */
    "Duration"?: string;
    /**
     * 是否开启自动续费，取值说明：
     * - **true**：开启自动续费。
     * - **false**：不开启自动续费。
     * > 当本参数取值为**true**时，您还需要传入**Duration**参数。
     * @example `true`
     */
    "AutoRenew": string;
}
