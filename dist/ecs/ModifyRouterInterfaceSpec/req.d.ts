interface ModifyRouterInterfaceSpecRequest {
    "RegionId": string;
    "RouterInterfaceId": string;
    "Spec": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "UserCidr"?: string;
}
export { ModifyRouterInterfaceSpecRequest };