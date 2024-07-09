export interface DescribeUserDevicesResponse {
    RequestId: string;
    List: {
        Status: string;
        Specification: string;
        MacAddress: string;
        MatrixId: string;
        AliUid: string;
        EdgeNodeName: string;
        Server: string;
        InstanceId: string;
    }[];
}
