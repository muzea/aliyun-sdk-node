interface InstallFabricChaincodeRequest {
    /**
    * 地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 链码ID
    * @example `chan-channelx-1l1hmckuuisxo`
    */ "ChaincodeId": string;
    /**
    * 组织ID
    * @example `peers-aaaaaa2-1eqnj5o5w9dt3`
    */ "OrganizationId": string;
    /**
    * 位置
    * @example `cn-hangzhou`
    */ "Location"?: string;
}
export { InstallFabricChaincodeRequest };