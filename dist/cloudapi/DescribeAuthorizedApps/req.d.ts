export interface DescribeAuthorizedAppsRequest {
    /**
     * API分组ID，系统生成，全局唯一
     * @example `523e8dc7bbe04613b5b1d726c2a7889d`
     */
    "GroupId"?: string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName"?: string;
    /**
     * API编号，系统生成，全局唯一
     * @example `baacc592e63a4cb6a41920d9d3f91f38`
     */
    "ApiId": string;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * App编号
     * @example `20112314518278`
     */
    "AppId"?: number;
    /**
     * App名称
     * @example `CreateApptest`
     */
    "AppName"?: string;
    /**
     * App拥有者的阿里云账号ID
     * @example `1546564`
     */
    "AppOwnerId"?: number;
}
