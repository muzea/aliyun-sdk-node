export interface InstantiateFabricChaincodeRequest {
    /**
     * 组织ID
     * @example `peers-aaaaaa2-1eqnj5o5w****`
     */
    "OrganizationId": string;
    /**
     * 链码ID
     * @example `cc-198jejf8f8****`
     */
    "ChaincodeId": string;
    /**
     * 背书策略
     * @example `OR (&#39;perf9141MSP.member&#39;)`
     */
    "EndorsePolicy"?: string;
    /**
     * 位置
     * @example `cn-hangzhou`
     */
    "Location"?: string;
    /**
     * 隐私数据集配置：
     * - name：隐私集合名称
     * - maxPeerCount：该隐私集合在背书阶段最多分发到 N 个peer节点
     * - requiredPeerCount：该隐私集合在背书阶段至少需要被分发到N个peer节点上，才认为交易成功
     * - blockToLive：隐私交易上链后，隐私数据需要保留的时间（单位为区块高度），0 表示永久保存
     * - policy：该隐私集合被允许分发到哪些 peer 节点上，格式同背书策略
     * @example `[{"requiredPeerCount":0,"name":"collectionName","maxPeerCount":3,"blockToLive":0,"policy":"OR('Org1MSP.peer')"}]`
     */
    "CollectionConfig"?: string;
}
