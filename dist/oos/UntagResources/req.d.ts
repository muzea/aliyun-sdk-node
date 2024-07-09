export interface UntagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要修改资源组的云资源的资源ID列表，资源ID数量限制为1至50。
     * - 当ResourceType为template时，ResourceIds为\["TemplateName1","TemplateName2"\];
     * - 当ResourceType为parameter时，ResourceIds为\["Name1","Name2"\];
     * - 当ResourceType为secretparameter时，ResourceIds为\["Name1","Name2"\];
     * - 当ResourceType为stateconfiguration时，ResourceIds为\["StateConfigurationId1","StateConfigurationId2"\];
     * - 当ResourceType为application时，ResourceIds为\["Name1","Name2"\]。
     * @example `["templateName1","templateName2"]`
     */
    "ResourceIds": any;
    /**
     * 需要修改资源组的云资源类型，取值：
     * - template: 模板。
     * - parameter: 参数。
     * - secretparameter: 加密参数。
     * - stateconfiguration: 终态配置。
     * - application: 应用。
     * @example `template`
     */
    "ResourceType": string;
    /**
     * 标签键列表，键的数量限制为1至20。
     * @example `["k1","k2"]`
     */
    "TagKeys"?: any;
    /**
     * 是否全部删除，仅当TagKeys为空时有效。取值范围：true或false，默认是false。当该参数为false时，TagKeys则是必选参数。
     * @example `false`
     */
    "All"?: boolean;
}
