export interface DescribeGroupRequest {
    /**
     * 空间ID。
     * @example `337639*****224964-cn-qingdao`
     */
    "Id": string;
    /**
     * 是否返回空间设备统计信息，默认值：false。
     * @example `false`
     */
    "IncludeStats"?: boolean;
}
