export interface DeleteImagePipelineRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像模板ID。
     * @example `ip-2ze5tsl5bp6nf2b3****`
     */
    "ImagePipelineId": string;
}
