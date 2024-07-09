export interface CreateSnapshotRequest {
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库文件系统ID。
     * @example `d-bp131n0q38u3a4zi*****`
     */
    "FsId": string;
    /**
     * 快照的显示名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * 为防止和自动快照的名称冲突，不能以auto开头和dbfs-auto开头。
     * @example `testSnapshotName`
     */
    "SnapshotName"?: string;
    /**
     * 快照的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * 默认值：空。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 设置快照的保留时间，单位为天。保留时间到期后快照会被自动释放，取值范围：1~65536
     * 默认值：空，表示快照不会被自动释放。
     * @example `30`
     */
    "RetentionDays"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](https://help.aliyun.com/document_detail/25693.html)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
