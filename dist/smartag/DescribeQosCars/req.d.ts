interface DescribeQosCarsRequest {
    "RegionId": string;
    "QosId": string;
    "OwnerId"?: number;
    "QosCarId"?: string;
    "Order"?: string;
    "Description"?: string;
    "PageSize"?: number;
    "PageNumber"?: number;
}
export { DescribeQosCarsRequest };