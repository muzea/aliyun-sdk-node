export interface ListApplicationsResponse {
    Applications: {
        /**
         * 应用列表。
         */
        Application: {
            AppList: {
                /**
                 * 应用列表。
                 */
                App: {
                    /**
                     * 应用ID。
                     * @example `e76f8985-7965-41fc-925b-9648bb6bf650`
                     */
                    AppId: string;
                    /**
                     * 应用信息。包括资源规格、业务服务参数配置、当前资源列表等信息。
                     * @example `{
                        "AppStatus":{
                            "Phase":"RUNNING",
                            "StatusDescrip":"{\"status\":\"UPDATE_SUCCESS\",\"step\":\"DONE\",\"descrip\":\"update to version:1022 success\",\"start_time\":\"2022-03-01 16:18:22\"}",
                            "UpdateTime":"2022-03-01 16:18:22",
                            "OrderStatus":null
                        },
                        "ResourceAttribute":{
                            "NetSecurityInfo":null,
                            "InitConfig":null,
                            "InventoryType":"Ens",
                            "InstanceSpec":"ens.gi6s-c12g1.large",
                            "SystemDiskSize":100,
                            "DataDiskSize":0,
                            "BandwithOut":5000,
                            "SchedulingStrategy":"Disperse",
                            "ImageId":"m-5or73kzkuxytv7hh6wxr6yc5q",
                            "ResourceType":"Linux",
                            "AreaLevel":"National",
                            "IpType":"PublicIP"
                        },
                        "WorkloadAttribute":[
                            {
                                "Name":"andorid",
                                "Count":15,
                                "ServiceConfig":{
                                    "PortsBindConfig":{
                                        "NetServiceContainer":"uravi-service",
                                        "Ports":[
                                            {
                                                "Protocol":"TCP",
                                                "BindType":"Mapping",
                                                "StartNodePorts":"31000-31009",
                                                "ContainerPorts":"4440-4449"
                                            },
                                            {
                                                "Protocol":"TCP",
                                                "BindType":"PassThrough",
                                                "StartNodePorts":"59000-59000",
                                                "ContainerPorts":"59000-59000"
                                            },
                                            {
                                                "Protocol":"UDP",
                                                "BindType":"PassThrough",
                                                "StartNodePorts":"40001-40010",
                                                "ContainerPorts":"40001-40010"
                                            }
                                        ]
                                    },
                                    "ServiceContainerName":"android"
                                }
                            },
                            {
                                "Name":"coturn",
                                "Count":1,
                                "ServiceConfig":{
                                    "PortsBindConfig":{
                                        "NetServiceContainer":"coturn",
                                        "Ports":[
                                            {
                                                "Protocol":"TCP",
                                                "BindType":"PassThrough",
                                                "StartNodePorts":"3478-3478",
                                                "ContainerPorts":"3478-3478"
                                            },
                                            {
                                                "Protocol":"UDP",
                                                "BindType":"PassThrough",
                                                "StartNodePorts":"3478-3478",
                                                "ContainerPorts":"3478-3478"
                                            }
                                        ]
                                    },
                                    "ServiceContainerName":"coturn"
                                }
                            },
                            {
                                "Name":"aic-manager",
                                "Count":1,
                                "ServiceConfig":null
                            }
                        ]
                    }`
                     */
                    AppInfo: string;
                }[];
            };
            /**
             * 集群名称。
             * @example `ay-ads-hz-h`
             */
            ClusterName: string;
        }[];
    };
    /**
     * 分页查询的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `50373E71-7710-4620-8AAB-133CCE49451C`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `49`
     */
    TotalCount: number;
}
