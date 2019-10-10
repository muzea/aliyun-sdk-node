interface UpdateGtmAddressPoolRequest {
    "RegionId"?: string;
    "AddrPoolId": string;
    "Type": string;
    "Addr": string[];
    "UserClientIp"?: string;
    "Lang"?: string;
    "Name"?: string;
    "MinAvailableAddrNum"?: number;
}
export { UpdateGtmAddressPoolRequest };