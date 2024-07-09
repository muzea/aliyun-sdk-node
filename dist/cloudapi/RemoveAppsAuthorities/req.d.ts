export interface RemoveAppsAuthoritiesRequest {
    /**
     * API分组ID，系统生成，全局唯一
     * @example `523e8dc7bbe04613b5b1d726c2a7889d`
     */
    "GroupId"?: string;
    /**
     * API编号，系统生成，全局唯一
     * @example `baacc592e63a4cb6a41920d9d3f91f38`
     */
    "ApiId": string;
    /**
     * 环境名称，取值为
     * - **RELEASE**
     * - **TEST**
     * @example `TEST`
     */
    "StageName": string;
    /**
     * 指定要操作的app编号，支持输入多个，“,”分隔，最多支持100个
     * @example `2386789,3286798`
     */
    "AppIds": string;
}
