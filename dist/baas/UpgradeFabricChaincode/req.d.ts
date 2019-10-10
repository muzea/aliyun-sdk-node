interface UpgradeFabricChaincodeRequest {
    /**
    * 地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 链码ID
    * @example `code-sacc-fk9z4r97****`
    */ "ChaincodeId": string;
    /**
    * 组织ID
    * @example `peers-wholesaler-15ix77tof****`
    */ "OrganizationId": string;
    /**
    * 背书策略
    * @example `OR ("wholesalerMSP.peer")`
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
export { UpgradeFabricChaincodeRequest };