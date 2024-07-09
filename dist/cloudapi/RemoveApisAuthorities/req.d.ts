export interface RemoveApisAuthoritiesRequest {
    /**
     * API分组ID，系统生成，全局唯一
     * @example `523e8dc7bbe04613b5b1d726c2a7889d`
     */
    "GroupId"?: string;
    /**
     * 应用（app）编号，系统生成，全局唯一
     * @example `2386789`
     */
    "AppId": number;
    /**
     * 环境名称，取值为：
     * - **RELEASE**: 线上
     * - **TEST**: 测试
     * @example `TEST`
     */
    "StageName": string;
    /**
     * 指定要操作的API编号，支持输入多个，“,”分隔，最多支持100个
     * @example `baacc592e63a4cb6a41920d9d3f91f38,jkscc489e63a4cb6a41920d9d3f92d78`
     */
    "ApiIds": string;
    /**
     * 授权说明
     * @example `根据地区名称查询天气情况`
     */
    "Description"?: string;
}
