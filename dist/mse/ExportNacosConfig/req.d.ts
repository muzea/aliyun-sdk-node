export interface ExportNacosConfigRequest {
    /**
     * 实例ID。
     * @example `mse-cn-2r42ddc****`
     */
    "InstanceId": string;
    /**
     * 命名空间ID。
     * @example `ae77c258-4d4f-478f-baaa-084aee0****`
     */
    "NamespaceId"?: string;
    /**
     * 配置项主键ID。
     * ><notice>
     * - 支持多种导出方式。当选择导出多个配置时，此参数必填。
     * - 此参数可通过ListNacosConfigs接口获取。
     * - 当配置此参数时，表示选择导出多个配置，DataId和Group参数无效。
     * ></notice>
     * @example `1709,1710`
     */
    "Ids"?: string;
    /**
     * 待导出的数据ID。
     * <notice>
     * - 支持多种导出方式。
     * - 当选择导出单个配置时，参数Ids必须为空，DataID以及Group必填。></notice>
     * @example `demo-develop`
     */
    "DataId"?: string;
    /**
     * 配置组名称。
     * @example `COMMON_GROUP`
     */
    "Group"?: string;
    /**
     * 应用标签。
     * @example `gateway-openapi`
     */
    "AppName"?: string;
    /**
     * 需要导出的数据的 dataId+groupName， 多个配置使用 "," 分隔
     * @example `testDataId1+testGroup1,testDataId2+testGroup`
     */
    "DataIds": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
