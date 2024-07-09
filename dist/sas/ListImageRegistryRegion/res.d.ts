export interface ListImageRegistryRegionResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `291B49F9-1685-4005-9D34-606B6F78****`
     */
    RequestId: string;
    /**
     * 返回Region列表。
     */
    Regions: {
        /**
         * 地域名称。
         * @example `cn-hangzhou`
         */
        RegionName: string;
        /**
         * 镜像所在地域的id。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
