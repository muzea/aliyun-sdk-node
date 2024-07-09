export interface DescribeApplicationResourceSummaryResponse {
    /**
     * 资源配额与使用情况分区统计信息。
     * @example `{
        "Level":"RegionId",
        "Summary":[
            {
                "InstanceType":"ens.a6e.large",
                "SystemDiskMaxSize":20480,
                "DataDiskMaxSize":0,
                "BandwidthOutLimit":100,
                "InstanceTotalMaxCount":0,
                "InstanceTotalCount":4,
                "InstanceCountStat":[
                    {
                        "AreaCode":"330100",
                        "AreaName":"",
                        "IspCode":"cmcc",
                        "RegionIds":[
                            "cn-hangzhou-cmcc-7"
                        ],
                        "InstanceMaxCount":0,
                        "InstanceCount":4
                    }
                ]
            }
        ]
    }`
     */
    ApplicationResource: string;
    /**
     * 请求ID。
     * @example `50373E71-7710-4620-8AAB-133CCE49451C`
     */
    RequestId: string;
}
