interface InstantiateFabricChaincodeRequest {
    /**
    * 地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 链码ID
    * @example `cc-198jejf8f8****`
    */ "ChaincodeId": string;
    /**
    * 组织ID
    * @example `peers-aaaaaa2-1eqnj5o5w****`
    */ "OrganizationId": string;
    /**
    * 背书策略
    * @example `OR (&#39;perf9141MSP.member&#39;)`
    */ "EndorsePolicy"?: string;
    /**
    * 位置
    * @example `cn-hangzhou`
    */ "Location"?: string;
    /**
    * 隐私数据集配置
    * @example `[{"requiredPeerCount":0,"name":"collectionName","maxPeerCount":3,"blockToLive":0,"policy":"OR('Org1MSP.peer')"}]`
    */ "CollectionConfig"?: string;
}
export { InstantiateFabricChaincodeRequest };