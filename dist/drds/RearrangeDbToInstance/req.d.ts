interface RearrangeDbToInstanceRequest {
    "RegionId"?: string;
    "DbName": string;
    "DrdsInstanceId": string;
    "ChooseSubDb"?: string;
    "ChooseRds"?: string;
    "InstanceList"?: string[];
    "OrderId"?: string;
}
export { RearrangeDbToInstanceRequest };