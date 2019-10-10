interface CreateVpcRequest {
    "RegionId": string;
    "OwnerId"?: number;
    "CidrBlock"?: string;
    "VpcName"?: string;
    "Description"?: string;
    "ClientToken"?: string;
    "UserCidr"?: string;
}
export { CreateVpcRequest };