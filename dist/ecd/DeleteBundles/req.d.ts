export interface DeleteBundlesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑模板ID列表。可设置1\~100个。
     * @example `b-cezrnfgecbich****`
     */
    "BundleId": string[];
}
