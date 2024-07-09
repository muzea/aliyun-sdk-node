export interface OnsInstanceUpdateRequest {
    /**
     * 更新后的实例描述，传空值则不更新。
     * @example `备注更新`
     */
    "Remark"?: string;
    /**
     * 更新后的实例名称。取值说明如下：
     * - 实例名称在该实例所部署的地域下要唯一，不可重名。
     * - 长度限制为3~64个字符，可以是中文、英文、数字、短划线（-）以及下划线（_）。
     * - 传空值则不更新。
     * @example `名字更新`
     */
    "InstanceName"?: string;
    /**
     * 待更新名称或描述的实例ID。
     * @example `MQ_INST_188077086902****_BXSuW61e`
     */
    "InstanceId": string;
}
