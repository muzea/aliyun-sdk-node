export interface DeleteImageComponentRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要删除的镜像组件ID。
     * @example `ic-bp67acfmxazb4p****`
     */
    "ImageComponentId": string;
}
