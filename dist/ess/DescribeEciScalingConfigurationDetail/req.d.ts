export interface DescribeEciScalingConfigurationDetailRequest {
    /**
     * 伸缩规则所属伸缩组的地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 伸缩配置所属的伸缩组的ID。
     * @example `asg-bp1ffogfdauy0jw0****`
     */
    "ScalingGroupId"?: string;
    /**
     * ECI类型伸缩组的伸缩配置ID。
     * @example `asc-bp1ffogfdauy0nu5****`
     */
    "ScalingConfigurationId": string;
    /**
     * Output输出格式，现仅支持YAML。
     * @example `YAML`
     */
    "OutputFormat"?: string;
}
