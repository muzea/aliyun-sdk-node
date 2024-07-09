export interface OnsInstanceCreateRequest {
    /**
     * 实例的描述信息。
     * @example `备注说明`
     */
    "Remark"?: string;
    /**
     * 实例名称。取值说明如下：
     * - 实例名称在该实例所部署的地域下要唯一，不可重名。
     * - 长度限制为3~64个字符，可以是中文、英文、数字、短划线（-）以及下划线（_）。
     * @example `测试实例`
     */
    "InstanceName": string;
}
