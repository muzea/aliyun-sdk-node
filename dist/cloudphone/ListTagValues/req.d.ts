export interface ListTagValuesRequest {
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 下一个查询开始Token
     * @example `ADBAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 资源类型。取值范围：
     * - instance：弹性云手机实例
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 要查询的标签键
     * @example `TestKey`
     */
    "Key": string;
}
