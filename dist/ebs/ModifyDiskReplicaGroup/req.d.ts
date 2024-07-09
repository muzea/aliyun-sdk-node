export interface ModifyDiskReplicaGroupRequest {
    /**
     * 一致性复制组所属的地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 一致性复制组ID。您可以调用[DescribeDiskReplicaGroups](~~426614~~)查询一致性复制组ID。
     * @example `pg-myreplica****`
     */
    "ReplicaGroupId": string;
    /**
     * 一致性复制组名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `myreplicagrouptest`
     */
    "GroupName"?: string;
    /**
     * 一致性组的描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 一致性组设定的RPO值，单位：秒。当前仅支持900秒。
     * @example `900`
     */
    "RPO"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 带宽值，单位Kbps。
     * >该参数暂未开放使用。
     * @example `null`
     */
    "Bandwidth"?: number;
}
