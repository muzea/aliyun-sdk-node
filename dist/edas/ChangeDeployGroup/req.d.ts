export interface ChangeDeployGroupRequest {
    /**
     * 应用ID。
     * @example `3616cdca-4f92-**********`
     */
    "AppId": string;
    /**
     * 指定要切换应用实例分组的ECS实例的ECC ID。可以调用ListApplicationEcc来查询应用的ECC ID，具体操作，请参见[ListApplicationEcc](~~199277~~)。
     * > 一次仅支持切换一个ECS实例到其他应用实例分组。
     * @example `0cf49a6c-95a8-4aa8******`
     */
    "EccInfo": string;
    /**
     * 应用分组名称，例如：group_a、group_b。默认分组的GroupName为`_DEFAULT_GROUP`。长度不操作64个字符。
     * @example `test`
     */
    "GroupName": string;
    /**
     * ECC的部署包版本和应用分组的部署包版本不一致时是否强制更换。
     * @example `true`
     */
    "ForceStatus"?: boolean;
}
