export interface DescribeImageCachesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像缓存ID。
     * @example `imc-bp195erqe9o2pb09****`
     */
    "ImageCacheId"?: string;
    /**
     * 镜像缓存名称。
     * @example `testcache`
     */
    "ImageCacheName"?: string;
    /**
     * 镜像缓存对应的快照ID。
     * @example `s-2zec5oj8e1yhxijt****`
     */
    "SnapshotId"?: string;
    /**
     * 容器镜像。
     * @example `nginx`
     */
    "Image"?: string;
    /**
     * 所属资源组ID。
     * @example `rg-2df3isufhi38****`
     */
    "ResourceGroupId"?: string;
    /**
     * 镜像缓存绑定的标签信息。
     */
    "Tag"?: {
        /**
         * 镜像缓存标签键。
         * @example `imc`
         */
        Key: string;
        /**
         * 镜像缓存标签值。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 指定容器镜像，用于查询最佳匹配的镜像缓存，最多100个。
     * @example `registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:1.15.10-perl`
     */
    "MatchImage"?: string[];
    /**
     * 查询结果条数上限。
     * @example `20`
     */
    "Limit"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 是否完全匹配容器镜像。
     * 在配置了MatchImage取值的情况下，进一步过滤查询结果。
     * @example `true`
     */
    "ImageFullMatch"?: boolean;
    /**
     * 完全匹配容器镜像的镜像缓存个数。
     * 在配置了MatchImage取值的情况下，进一步过滤查询结果。
     * @example `3`
     */
    "ImageMatchCountRequest"?: number;
}
