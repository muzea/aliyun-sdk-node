export interface UpgradeApplicationRequest {
    /**
     * 应用ID。
     * @example `a2bac6f4-75dc-455e-8389-2dc8e47526d3`
     */
    "AppId": string;
    /**
     * 灰度升级信息模版，Json格式的字符串，内容包括：
     * - 待升级版本范围
     * - 目标版本配置信息
     * - 资源灰度选择策略
     * - 智能升级策略（时间窗口、水位等信息）
     * @example `{\"fromAppVersions\":{        \"operator\":\"In\",        \"values\":[            \"v1\",            \"v2\"        ]    },    \"toAppVersion\":\"v3\",    \"descrip\":\"xxx\",    \"workload\":[        {            \"name\":\"nginx\",            \"podSpec\":{            }        }    ],    \"upgradeStrategy\":{        \"name\":\"ScheduleToISP\",        \"parameters\":{            \"operator\":\"In\",            \"values\":[                \"telecom\"            ]        }    },    \"autoUpgradeStrategy\":{        \"name\":\"AdjustToPodUsage\",        \"checkInterval\":600,        \"startTime\":\"2021-02-19 00:00:00\",        \"startHourPoint\":\"0\",        \"endHourPoint\":\"8\",        \"endTime\":\"2021-02-19 08:00:00\",        \"level\":\"RegionId\",        \"rules\":[            {                \"regionCodes\":[                    \"cn-wuxi-telecom_unicom_cmcc\",                    \"cn-shijiazhuang-telecom_unicom_cmcc\"                ],                \"usageRatioLimit\":{                    \"maxPodUsageRatio\":50                },                \"maxUpgradingRatio\":50            },            {                \"regionCodes\":[                    \"cn-wuhan-telecom_unicom_cmcc\"                ],                \"usageRatioLimit\":{                    \"maxPodUsageRatio\":30                },                \"maxUpgradingRatio\":20            },            {                \"regionCodes\":[                    \"All\"                ],                \"usageRatioLimit\":{                    \"maxPodUsageRatio\":20                },                \"maxUpgradingRatio\":50,                \"maxUpgradingCount\":2            }        ]    }}`
     */
    "Template": string;
    /**
     * 应用异步升级的超时时间，单位秒。默认300。
     * @example `1800`
     */
    "Timeout"?: number;
}
