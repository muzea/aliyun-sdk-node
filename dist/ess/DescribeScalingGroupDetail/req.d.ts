export interface DescribeScalingGroupDetailRequest {
    /**
     * 伸缩组所属的地域ID。更多信息，请参见[地域与可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 伸缩组的ID。
     * @example `asg-bp18p2yfxow2dloq****`
     */
    "ScalingGroupId": string;
    /**
     * Output输出格式，现仅支持YAML格式。
     * @example `YAML`
     */
    "OutputFormat"?: string;
}
