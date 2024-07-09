export interface SubmitFabricChaincodeDefinitionRequest {
    /**
     * 组织ID
     * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
     */
    "OrganizationId": string;
    /**
     * 链码包ID
     * @example `sacc_v1.0:698d4e73c5f1d0239fbf0313ac79ddfaf44d5a803ecb02a4d1983cca4a706860`
     */
    "ChaincodePackageId": string;
    /**
     * 背书规则
     * @example `OR ("perf9141MSP.member")`
     */
    "EndorsePolicy": string;
    /**
     * 位置
     * @example `cn-hangzhou`
     */
    "Location"?: string;
    /**
     * collection配置
     * @example `collectionconfig`
     */
    "CollectionConfig"?: string;
    /**
     * 链码包名称
     * @example `sacc`
     */
    "Name": string;
    /**
     * 是否需要初始化
     * @example `false`
     */
    "InitRequired"?: boolean;
    /**
     * 通道ID
     * @example `chan-channelx-1l1hmckuuisxo`
     */
    "ChannelId": string;
    /**
     * 链码版本
     * @example `1.0`
     */
    "ChaincodeVersion": string;
}
