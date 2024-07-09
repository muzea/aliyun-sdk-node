export interface DescribeApplicationRequest {
    /**
     * 应用ID，可通过调用ListApplications接口获取。
     * @example `a2bac6f4-75dc-455e-8389-2dc8e47526d3`
     */
    "AppId": string;
    /**
     * 应用的业务服务版本号。支持多选，以","分割；输入All，输出所有版本数据。默认只输出稳定版版本号的关联数据。
     * @example `v1,v2`
     */
    "AppVersions"?: string;
    /**
     * 应用边缘资源的区域统计级别。枚举类型，取值范围：
     * - National：全国
     * - Big：大区
     * - Middle：省级
     * - Small：城市
     * - RegionId：边缘节点
     * 默认National。
     * @example `National`
     */
    "Level"?: string;
    /**
     * 是否输出统计资源实例/容器Pod等维度的信息。Json的字符串格式。默认输出所有信息。
     * @example `{\"appInfo\":true,\"detailStat\": true, \"appVersionStat\": true, \"districtStat\":true ,\"instanceStat\": true, \"podCountStat\": true}`
     */
    "OutDetailStatParams"?: string;
    /**
     * 资源筛选条件。
     * @example `[{\"regionCode\": \"cn-wuxi-telecom_unicom_cmcc-3\",    \"ispCode\": \"telecom\",    \"count\": 2	},{    \"regionCode\": \"cn-shanghai-cmcc\",    \"count\": 4	}]`
     */
    "ResourceSelector"?: string;
}
