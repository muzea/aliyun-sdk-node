export interface DescribeDBInstanceHAResponse {
    Message: string;
    RequestId: string;
    Success: boolean;
    Data: {
        TopologyType: string;
        PrimaryRegionId: string;
        PrimaryAzoneId: string;
        SecondaryRegionId: string;
        SecondaryAzoneId: string;
    };
}
