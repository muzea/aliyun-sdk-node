export interface DescribeCasComputersResponse {
    /**
     * 返回结果的当前页码。
     * @example `16`
     */
    CurrentPage: number;
    /**
     * 请求ID。
     * @example `DB5EB9EB-8690-570B-8A7F-41FF1C89C02E`
     */
    RequestId: string;
    ResultMessage: string;
    ResultCode: string;
    PageSize: number;
    /**
     * 总数
     * @example `75`
     */
    TotalCount: number;
    Data: {
        CreationTime: string;
        SerialNumber: string;
        VpcId: string;
        PrivateIp: string;
        UtcCreate: string;
        ProviderId: string;
        ImageIaasId: string;
        ImageId: string;
        SpecIaasId: string;
        DeployMode: string;
        IaasId: string;
        /**
         * 是否已初始化。
         * @example `true`
         */
        Initialized: boolean;
        AutoRenewPeriod: number;
        PaasStatus: string;
        InstanceChargeType: string;
        VSwitchIaasId: string;
        WorkspaceId: string;
        ImageName: string;
        PublicIp: string;
        ZoneId: string;
        CpuShared: boolean;
        IaasType: string;
        Status: string;
        OsBit: number;
        IaasStatus: string;
        NetworkType: string;
        Password: string;
        Bandwidth: number;
        Description: string;
        UtcModified: string;
        AppId: string;
        OsVersion: string;
        LastOpsType: string;
        Memory: number;
        Name: string;
        CommonImage: boolean;
        AutoRenew: boolean;
        TenantId2: string;
        Os: string;
        RegionId: string;
        IoOptimized: boolean;
        Cpu: number;
        ElasticIp: string;
        ExpiredTime: string;
        ThreadsPerCore: number;
        Id: string;
        LastOpsOrderId: string;
        TenantId: string;
        DataDisks: {
            Type: string;
            Status: string;
            EnableAutoSnapshot: boolean;
            UtcCreate: string;
            IaasId: string;
            ProviderId: string;
            DeleteAutoSnapshot: boolean;
            RegionId: string;
            WorkspaceId: string;
            UtcModified: string;
            Size: number;
            Device: string;
            ZoneId: string;
            Portable: boolean;
            Category: string;
            Name: string;
            ImageId: string;
            DeleteWithComputer: boolean;
            Id: string;
            TenantId: string;
            Computer: {
                Status: string;
                IaasId: string;
                Name: string;
                Id: string;
            };
        }[];
        Options: {
            Key: string;
            Value: string;
        }[];
        Tags: {
            Key: string;
            Value: string;
        }[];
        AssignedAppServiceIds: string[];
        AppServiceIds: string[];
        SystemDisk: {
            Type: string;
            Status: string;
            EnableAutoSnapshot: boolean;
            UtcCreate: string;
            IaasId: string;
            ProviderId: string;
            DeleteAutoSnapshot: boolean;
            RegionId: string;
            WorkspaceId: string;
            UtcModified: string;
            Size: number;
            Device: string;
            ZoneId: string;
            Portable: boolean;
            Category: string;
            Name: string;
            ImageId: string;
            DeleteWithComputer: boolean;
            Id: string;
            TenantId: string;
            Computer: {
                Status: string;
                IaasId: string;
                Name: string;
                Id: string;
            };
        };
    }[];
}
