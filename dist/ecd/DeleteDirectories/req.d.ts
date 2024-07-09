export interface DeleteDirectoriesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目录ID。可设置一个或多个。
     * @example `cn-hangzhou+dir-gx2x1dhsmu52rd****`
     */
    "DirectoryId": string[];
}
