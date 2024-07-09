export interface CreateDiskReplicaGroupRequest {
    /**
     * 一致性复制组所属的地域ID，与生产站点所属的地域相同。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 生产站点所属的可用区ID。
     * @example `cn-beijing-f`
     */
    "SourceZoneId": string;
    /**
     * 灾备站点所属的地域ID。
     * @example `cn-shanghai`
     */
    "DestinationRegionId": string;
    /**
     * 灾备站点所属的可用区ID。
     * @example `cn-shanghai-e`
     */
    "DestinationZoneId": string;
    /**
     * 一致性复制组的名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `myreplicagrouptest`
     */
    "GroupName"?: string;
    /**
     * 一致性组的描述信息。长度为2~256个英文或中文字符，不能以`http:/`/或`https://`开头。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 一致性组设定的RPO值，单位：秒。当前仅支持900秒。
     * @example `900`
     */
    "RPO"?: number;
    /**
     * 带宽值，单位：Kbps。
     * >该参数暂未开放使用。
     * @example `5`
     */
    "Bandwidth"?: number;
    /**
     * 一致性复制组所在的企业资源组ID。
     * @example `rg-acfmvs*******`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 一致性复制组的标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 一致性复制组的标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
}
