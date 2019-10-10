interface SynchronizeFabricChaincodeRequest {
    /**
    * 地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 链码ID
    * @example `code-sacc-1pr09q7jm****`
    */ "ChaincodeId": string;
    /**
    * 组织ID
    * @example `peers-aaaaaa2-1eqnj5o5w****`
    */ "OrganizationId": string;
}
export { SynchronizeFabricChaincodeRequest };