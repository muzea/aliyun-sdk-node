export interface ModifyAclEntriesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 公网访问控制策略对应的粒度。
     * @example `desktop`
     */
    "SourceType": string;
    /**
     * 公网访问控制对应的实例ID列表，即办公网络ID列表或云电脑ID列表。
     */
    "SourceId": string[];
    /**
     * 公网访问控制策略。
     * @example `allow`
     */
    "Policy": string;
}
