export interface CreateApplicationRequest {
    /**
     * 边缘应用模版，Json格式的字符串，包含：
     * - 应用名等基本信息；
     * - 资源规格、网络安全配置等信息；
     * - 业务配置
     * - 资源需求量
     * @example `{\"appMetaData\":{        \"appName\":\"nginx\",        \"clusterName\":\"poc\",        \"appType\":\"Common\",        \"description\":\"测试服务\"    },    \"resourceAttribute\":{        \"resourceType\":\"\",        \"instanceSpec\":\"ens.sn1.tiny\",        \"systemDiskSize\":20,        \"dataDiskSize\":0,        \"bandwithOut\":10,        \"areaLevel\":\"National\",        \"netSecurityStrategy\":null,        \"initConfig\":null    },    \"resourceSelector\":[        {            \"count\":1        }    ],    \"workload\":[        {            \"podCount\":1,            \"serviceConfig\":null,            \"name\":\"nginx\",            \"podSpec\":{                \"containers\":[                    {                        \"name\":\"android\",                        \"image\":\"edge-registry.alicdn.com/test/nginx\"                    }                ]            },            \"count\":1        }    ]}`
     */
    "Template": string;
    /**
     * 异步处理的超时时间。单位秒，默认1800。
     * @example `1800`
     */
    "Timeout"?: number;
}
