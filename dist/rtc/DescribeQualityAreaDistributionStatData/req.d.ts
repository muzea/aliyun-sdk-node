export interface DescribeQualityAreaDistributionStatDataRequest {
    /**
     * 查询的开始时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615824000`
     */
    "StartDate": number;
    /**
     * 查询的结束时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615910399`
     */
    "EndDate": number;
    /**
     * 父级地区名称，例如：杭州市的父级为浙江省，参数设为中国_浙江省。参数为空表示世界范围（国家维度）的统计，例如：中国、英国。
     * @example `中国_浙江省
    `
     */
    "ParentArea"?: string;
    /**
     * APP ID。
     * @example `0rbd****
    `
     */
    "AppId": string;
}
