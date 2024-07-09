export interface UpgradeMeshEditionPartiallyRequest {
    /**
     * ASM实例ID
     * @example `ca04bc38979214bf2882be79d39b4****`
     */
    "ServiceMeshId": string;
    /**
     * 是否切换为商业版（专业版），取值：
     * - `true`：切换为商业版（专业版）
     * - `false`：不切换为商业版（专业版）
     * @example `true`
     */
    "SwitchToPro"?: boolean;
    /**
     * 此次操作是否为ASM网关继续升级，取值：
     * - `true`：升级ASM网关
     * - `false`：不升级ASM网关
     * @example `true`
     */
    "ASMGatewayContinue"?: boolean;
    /**
     * 选择升级的ASM网关列表。用逗号分隔。
     * @example `ingressgateway1,ingressgateway2`
     */
    "UpgradeGatewayRecords"?: string;
    /**
     * 期望升级到的版本，如果填写该字段，后端会检查计算出的目标升级版本是否和期望版本一致，如果一致才进行升级流程，如果不一致则会返回`UpgradedVersion.NotExpected`错误。
     * @example `v1.15.3.118-g4712daf0-aliyun`
     */
    "ExpectedVersion"?: string;
    /**
     * 执行升级检查。如果该值设置为true，则只会执行升级检查，并不会实际升级。
     * @example `false`
     */
    "PreCheck"?: boolean;
}
