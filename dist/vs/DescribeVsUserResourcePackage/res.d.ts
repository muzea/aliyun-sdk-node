export interface DescribeVsUserResourcePackageResponse {
    RequestId: string;
    ResourcePackageInfos: {
        ResourcePackageInfo: {
            DisplayName: string;
            Status: string;
            CommodityCode: string;
            CurrCapacity: string;
            InitCapacity: string;
            InstanceId: string;
        }[];
    };
}
