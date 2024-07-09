export interface ModifySnapshotGroupRequest {
    /**
     * 实例快照所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 快照一致性组ID。您可以调用[DescribeSnapshotGroups](~~210940~~)查询快照一致性组ID。
     * @example `ssg-j6ciyh3k52qp7ovm****`
     */
    "SnapshotGroupId": string;
    /**
     * 修改后的实例快照名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头，可以包含数字、英文句号（.）、下划线（_）、短划线（-）或者半角冒号（:）。
     * @example `testName02`
     */
    "Name"?: string;
    /**
     * 修改后的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `This is new description`
     */
    "Description"?: string;
}
