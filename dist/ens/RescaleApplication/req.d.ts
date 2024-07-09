export interface RescaleApplicationRequest {
    /**
     * 应用ID，您可通过查询ListApplications接口获取。
     * @example `474bdef0-d149-4695-abfb-52912d9143f0`
     */
    "AppId": string;
    /**
     * 扩缩容资源动作。枚举类型，取值：
     * - Add：生产新资源。
     * - Del：释放资源。
     * @example `Add`
     */
    "RescaleType": string;
    /**
     * 扩缩容区域级别。枚举类型，取值范围：
     * - AreaIspCode：区域运营商
     * - RegionId：边缘节点
     * - InstanceId：实例，扩容代表资源托管 / 缩容代表资源释放
     * 默认值AreaIspCode。
     * @example `RegionId`
     */
    "RescaleLevel"?: string;
    /**
     * 扩缩容资源需求，Json数组格式的字符串。
     * @example `[{\"regionCode\": \"cn-wuxi-telecom_unicom_cmcc-3\",    \"ispCode\": \"telecom\",    \"count\": 2	},{    \"regionCode\": \"cn-shanghai-cmcc\",    \"count\": 4	}]`
     */
    "ResourceSelector": string;
    /**
     * 仅新增资源时有效，新增资源的应用部署版本号，默认为应用的稳定版版本号。
     * @example `v2`
     */
    "ToAppVersion"?: string;
    /**
     * 异步扩缩容的超时时间，单位秒。默认300。
     * @example `1800`
     */
    "Timeout"?: number;
}
